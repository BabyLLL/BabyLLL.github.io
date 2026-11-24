// Where the player can stand. A 25 cm grid over the island records the floor
// height (ground, a stair, an upper floor) and whether a block or a piece of
// furniture is in the way. Routes use A* over that grid, then pull the string
// straight. A world's floorAt gives the floor height under each point.
import * as L from '@world/layout.js';

const ISLAND = L.ISLAND, POOL = L.POOL || null, floorAt = L.floorAt || (() => 0);
const inPool = POOL ? (x, z) => x >= POOL.x0 && x < POOL.x1 && z >= POOL.z0 && z < POOL.z1 : () => false;

const RES = 4; // cells per metre
export const RADIUS = 0.28;
export const SWIM_FLOOR = -1.12;
// Floors are stored as float32, so the pool is told apart by sign, not equality.
export const isWet = h => h < -0.5;
const STEP = 0.6;

export function createNav(grid, obstacles) {
  const x0 = ISLAND.x0, z0 = ISLAND.z0;
  const cols = (ISLAND.x1 - ISLAND.x0) * RES, rows = (ISLAND.z1 - ISLAND.z0) * RES;
  const floor = new Float32Array(cols * rows);
  const blocked = new Uint8Array(cols * rows);
  const clearance = new Uint8Array(cols * rows);
  const solid = (x, y, z) => {
    const t = grid.type(x, y, z);
    return !!t;
  };

  function build() {
  blocked.fill(0);
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const k = i + j * cols;
    const x = x0 + (i + 0.5) / RES, z = z0 + (j + 0.5) / RES;
    const bx = Math.floor(x), bz = Math.floor(z);
    // The pool is water: swimming (player.js) takes over there, not the walk grid.
    if (inPool(x, z)) { floor[k] = 0; blocked[k] = 1; continue; }
    const f = floorAt(x, z);
    floor[k] = f;
    const by = Math.floor(f + 0.01);
    if (!solid(bx, by - 1, bz) && f === 0) { blocked[k] = 1; continue; }
    if (f % 1 === 0 && (solid(bx, by, bz) || solid(bx, by + 1, bz))) { blocked[k] = 1; continue; }
  }
  for (const o of obstacles) {
    const i0 = Math.max(0, Math.floor((o.x0 - x0) * RES)), i1 = Math.min(cols - 1, Math.ceil((o.x1 - x0) * RES) - 1);
    const j0 = Math.max(0, Math.floor((o.z0 - z0) * RES)), j1 = Math.min(rows - 1, Math.ceil((o.z1 - z0) * RES) - 1);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const k = i + j * cols;
      const upper = floor[k] >= 2;
      if ((o.level === 1) === upper) blocked[k] = 1;
    }
  }
  // Distance (in cells) to the nearest blocked cell, for route clearance.
  {
    const q = new Int32Array(cols * rows);
    let head = 0, tail = 0;
    clearance.fill(255);
    for (let k = 0; k < cols * rows; k++) if (blocked[k]) { clearance[k] = 0; q[tail++] = k; }
    while (head < tail) {
      const k = q[head++], i = k % cols, j = (k / cols) | 0, d = clearance[k] + 1;
      if (d > 8) continue;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj;
        if (ni < 0 || nj < 0 || ni >= cols || nj >= rows) continue;
        const nk = ni + nj * cols;
        if (clearance[nk] > d) { clearance[nk] = d; q[tail++] = nk; }
      }
    }
  }
  }
  build();

  const cellOf = (x, z) => {
    const i = Math.floor((x - x0) * RES), j = Math.floor((z - z0) * RES);
    if (i < 0 || j < 0 || i >= cols || j >= rows) return -1;
    return i + j * cols;
  };
  const centre = k => ({ x: x0 + ((k % cols) + 0.5) / RES, z: z0 + (((k / cols) | 0) + 0.5) / RES });
  const heightAt = (x, z) => { const k = cellOf(x, z); return k < 0 ? 0 : floor[k]; };
  const isBlocked = (x, z) => { const k = cellOf(x, z); return k < 0 || blocked[k] === 1; };

  // Can a body of RADIUS stand at (x, z), coming from floor height `from`?
  function canStand(x, z, from) {
    const k = cellOf(x, z);
    if (k < 0 || blocked[k]) return false;
    const h = floor[k];
    if (from !== undefined && Math.abs(h - from) > STEP && !(isWet(h) || isWet(from))) return false;
    for (let a = 0; a < 8; a++) {
      const px = x + Math.cos(a * Math.PI / 4) * RADIUS, pz = z + Math.sin(a * Math.PI / 4) * RADIUS;
      const pk = cellOf(px, pz);
      if (pk < 0 || blocked[pk]) return false;
      if (Math.abs(floor[pk] - h) > STEP && !isWet(floor[pk]) && !isWet(h)) return false;
    }
    return true;
  }

  // Slide along obstacles: try the full step, then each axis on its own.
  // Someone already overlapping an obstacle (say, just up from a sofa) may walk
  // anywhere their centre is free, so they can always step back out.
  function move(pos, dx, dz) {
    const n = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.1));
    for (let s = 0; s < n; s++) {
      const from = heightAt(pos.x, pos.z);
      const sx = dx / n, sz = dz / n;
      if (!canStand(pos.x, pos.z)) {
        if (!isBlocked(pos.x + sx, pos.z + sz)) { pos.x += sx; pos.z += sz; }
        continue;
      }
      if (canStand(pos.x + sx, pos.z + sz, from)) { pos.x += sx; pos.z += sz; }
      else if (canStand(pos.x + sx, pos.z, from)) pos.x += sx;
      else if (canStand(pos.x, pos.z + sz, from)) pos.z += sz;
    }
    return pos;
  }

  // The closest place to (x, z) where a body fits, searching outwards.
  function nearestStand(x, z) {
    if (canStand(x, z)) return { x, z };
    for (let r = 0.1; r <= 2.5; r += 0.1) {
      for (let a = 0; a < 16; a++) {
        const px = x + Math.cos((a / 16) * Math.PI * 2) * r, pz = z + Math.sin((a / 16) * Math.PI * 2) * r;
        if (canStand(px, pz)) return { x: px, z: pz };
      }
    }
    return { x, z };
  }

  const passable = (k, need = 2) => {
    if (k < 0 || blocked[k] || clearance[k] < need) return false;
    if (need < 2 || clearance[k] >= 3) return true;
    const p = centre(k);
    return canStand(p.x, p.z);
  };

  function lineClear(a, b, need = 2) {
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const n = Math.max(1, Math.ceil(len * RES * 1.5));
    let prev = heightAt(a.x, a.z);
    for (let s = 0; s <= n; s++) {
      const t = s / n, x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
      const k = cellOf(x, z);
      if (!passable(k, need)) return false;
      if (need >= 2 && !canStand(x, z)) return false;
      const h = floor[k];
      if (Math.abs(h - prev) > STEP && !isWet(h) && !isWet(prev)) return false;
      prev = h;
    }
    return true;
  }

  // Nearest cell with enough room around it, searching outwards.
  function nearestOpen(k, need = 2) {
    if (passable(k, need)) return k;
    const i0 = k % cols, j0 = (k / cols) | 0;
    for (let r = 1; r < 16; r++) {
      let best = -1, bestD = Infinity;
      for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
        if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue;
        const i = i0 + di, j = j0 + dj;
        if (i < 0 || j < 0 || i >= cols || j >= rows) continue;
        const nk = i + j * cols;
        if (passable(nk, need) && di * di + dj * dj < bestD) { best = nk; bestD = di * di + dj * dj; }
      }
      if (best >= 0) return best;
    }
    return -1;
  }

  function findPath(start, goal) {
    let sk = nearestOpen(cellOf(start.x, start.z), 1);
    let gk = nearestOpen(cellOf(goal.x, goal.z));
    if (sk < 0 || gk < 0) return null;
    const end = centre(gk);
    const target = passable(cellOf(goal.x, goal.z)) ? { x: goal.x, z: goal.z } : end;
    if (lineClear(start, target)) return [target];
    const g = new Float32Array(cols * rows).fill(Infinity);
    const parent = new Int32Array(cols * rows).fill(-1);
    const closed = new Uint8Array(cols * rows);
    const heap = new Heap();
    const gi = gk % cols, gj = (gk / cols) | 0;
    const h = k => {
      const dx = Math.abs((k % cols) - gi), dz = Math.abs(((k / cols) | 0) - gj);
      return (dx + dz) + (Math.SQRT2 - 2) * Math.min(dx, dz);
    };
    g[sk] = 0;
    heap.push(sk, h(sk));
    let found = false, iterations = 0;
    while (heap.size && iterations++ < 200000) {
      const k = heap.pop();
      if (k === gk) { found = true; break; }
      if (closed[k]) continue;
      closed[k] = 1;
      const i = k % cols, j = (k / cols) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue;
        const ni = i + di, nj = j + dj;
        if (ni < 0 || nj < 0 || ni >= cols || nj >= rows) continue;
        const nk = ni + nj * cols;
        if (closed[nk] || !passable(nk)) continue;
        if (di && dj && (!passable(i + di + j * cols) || !passable(i + nj * cols))) continue;
        const dh = Math.abs(floor[nk] - floor[k]);
        if (dh > STEP && !isWet(floor[nk]) && !isWet(floor[k])) continue;
        // Prefer staying dry: entering the pool costs extra.
        const wet = isWet(floor[nk]) ? 3 : 1;
        const cost = g[k] + (di && dj ? Math.SQRT2 : 1) * wet;
        if (cost < g[nk]) { g[nk] = cost; parent[nk] = k; heap.push(nk, cost + h(nk)); }
      }
    }
    if (!found) return null;
    const cells = [];
    for (let k = gk; k !== -1; k = parent[k]) cells.unshift(centre(k));
    cells[0] = { x: start.x, z: start.z };
    cells.push(target);
    // String-pull: skip ahead to the furthest point still in clear sight.
    const out = [];
    let a = 0;
    while (a < cells.length - 1) {
      let b = cells.length - 1;
      while (b > a + 1 && !lineClear(cells[a], cells[b])) b--;
      out.push(cells[b]);
      a = b;
    }
    return out;
  }

  return { cols, rows, x0, z0, RES, floor, blocked, clearance, heightAt, isBlocked, canStand, move, nearestStand, findPath, cellOf, rebuild: build, pool: POOL };
}

class Heap {
  constructor() { this.keys = []; this.pri = []; }
  get size() { return this.keys.length; }
  push(k, p) {
    const { keys, pri } = this;
    let i = keys.length;
    keys.push(k); pri.push(p);
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (pri[parent] <= p) break;
      keys[i] = keys[parent]; pri[i] = pri[parent];
      i = parent;
    }
    keys[i] = k; pri[i] = p;
  }
  pop() {
    const { keys, pri } = this;
    const top = keys[0];
    const k = keys.pop(), p = pri.pop();
    if (keys.length) {
      let i = 0;
      for (;;) {
        let c = 2 * i + 1;
        if (c >= keys.length) break;
        if (c + 1 < keys.length && pri[c + 1] < pri[c]) c++;
        if (pri[c] >= p) break;
        keys[i] = keys[c]; pri[i] = pri[c];
        i = c;
      }
      keys[i] = k; pri[i] = p;
    }
    return top;
  }
}
