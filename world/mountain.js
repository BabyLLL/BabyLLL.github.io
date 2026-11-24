// The mountain behind the house: one forested peak with two lower shoulders,
// rising from the island's north point. Stone stairs climb the face that
// looks at the house in switchbacks, then wind once round the top to a round
// platform on the summit. Every flight runs straight; every change of
// direction is a level landing cut to meet both flights.
//
// The stairs begin with one long slab barely above the grass, and the first
// risers grow to full height over a few steps. Woods give way to open meadow
// and bare rock on the way up; a stream falls into a pool on the middle
// slopes. On top a glass-floored walkway reaches out north over the cliff.
// Water, grass and a few birds move.
import * as THREE from 'three';
import { BoxBatch } from '@engine/world/blocks.js';
import { rng } from '@engine/world/textures.js';
import { valueNoise } from '@engine/world/terrain.js';
import { buildTufts } from '@engine/world/landscape.js';

// x, z: centre; r: radius at the foot; h: height of the summit plateau.
export const MOUNTAIN = { x: 5, z: -54, r: 29, h: 27 };
const PLATEAU = 4, POW = 1.25;
const SHOULDERS = [{ x: 23, z: -61.5, r: 15, h: 13 }, { x: -13, z: -62.5, r: 14, h: 11 }];
const BASE = -3, WIDTH = 2.2, RISER = .17, RADIUS = .3, BODY = 1.8, SUMMIT = 3.3, SKIRT = 1.1;
const TRAILHEAD = { x: 5, z: -22.6 };
// Where the stairs turn: degrees from south towards east, metres from the
// centre. Close pairs make the switchbacks; the rest wind round the peak.
const TURNS = [[0, 26.8], [33, 24.6], [36, 21.8], [-2, 20.3], [-38, 18.8], [-42, 16], [4, 14.6], [36, 12.6],
  [72, 11.3], [112, 10.3], [152, 9.3], [-168, 8.3], [-128, 7.3], [-88, 6.4], [-48, 5.6], [-12, 5]];
// A stream down the west flank: degrees as above, metres from the centre to
// its spring and to the pool below the fall.
const STREAM = { a: -60, spring: 11.2, pool: 17.6, radius: 2.3 };
// The walkway: how far it reaches past the platform's north edge.
const REACH = 7;

const clamp = THREE.MathUtils.clamp;
const polar = (a, d) => { const t = a * Math.PI / 180; return { x: MOUNTAIN.x + d * Math.sin(t), z: MOUNTAIN.z + d * Math.cos(t) }; };
const relief = valueNoise(23), lumps = valueNoise(57);
const UP = [0, 1, 0];

// The ground before the stairs are cut in.
function natural(x, z) {
  const M = MOUNTAIN, d = Math.hypot(x - M.x, z - M.z);
  let y = -Infinity;
  if (d < M.r) {
    const t = Math.max(0, (d - PLATEAU) / (M.r - PLATEAU)), a = Math.atan2(x - M.x, z - M.z);
    // Spurs and hollows on the slopes; the plateau and the foot stay smooth.
    const rough = 1.2 * (relief(x * .15, z * .15) - .5) + .8 * Math.cos(a * 3 + 1.7) * relief(x * .05 + 7, z * .05);
    y = M.h * Math.pow(1 - t, POW) + 4 * t * (1 - t) * rough;
  }
  for (const s of SHOULDERS) {
    const e = Math.hypot(x - s.x, z - s.z);
    if (e < s.r) y = Math.max(y, s.h * Math.pow(1 - e / s.r, 1.2) + 3 * (e / s.r) * (1 - e / s.r) * (lumps(x * .2, z * .2) - .5));
  }
  return y;
}

// Flights between the turning points and a landing at each turn. A landing is
// a disc clipped by the end lines of its two flights, so the incoming top step
// meets it flush and the outgoing first step rises from its edge.
function layStairs() {
  const M = MOUNTAIN, half = WIDTH / 2;
  const V = [{ ...TRAILHEAD }, ...TURNS.map(([a, d]) => polar(a, d)), { x: M.x, z: M.z }], last = V.length - 1;
  const towards = (a, b) => { const l = Math.hypot(b.x - a.x, b.z - a.z); return { x: (b.x - a.x) / l, z: (b.z - a.z) / l }; };
  V.forEach((v, i) => {
    v.kind = 'landing'; v.T = natural(v.x, v.z); v.e = 0;
    v.in = i > 0 ? towards(V[i - 1], v) : null;
    v.out = i < last ? towards(v, V[i + 1]) : null;
  });
  for (let i = 1; i < last; i++) {
    const v = V[i];
    v.turn = Math.acos(clamp(v.in.x * v.out.x + v.in.z * v.out.z, -1, 1));
    v.e = Math.max(half * Math.tan(v.turn / 2), .7); v.R = Math.hypot(v.e, half);
  }
  V[last].R = SUMMIT; V[last].e = Math.sqrt(SUMMIT ** 2 - half ** 2);
  const flights = V.slice(0, last).map((a, i) => {
    const b = V[i + 1], d = a.out;
    return { kind: 'flight', i, d, px: -d.z, pz: d.x, x: a.x + d.x * a.e, z: a.z + d.z * a.e, length: Math.hypot(b.x - a.x, b.z - a.z) - a.e - b.e };
  });
  // Heights close to the ground, never falling, and no flight steeper than 3:4.
  // The two ends are fixed; only the turns between them move.
  const H = V.map(v => v.T);
  H[0] = .02; H[last] = M.h;
  for (let k = 0; k < 600; k++) {
    for (let i = 1; i < last; i++) H[i] += .3 * (V[i].T - H[i]);
    for (let i = 1; i < last; i++) H[i] = clamp(H[i], H[i - 1], H[i - 1] + .75 * flights[i - 1].length);
    for (let i = last - 1; i > 0; i--) H[i] = clamp(H[i], H[i + 1] - .75 * flights[i].length, H[i + 1]);
  }
  V.forEach((v, i) => { v.y = H[i]; });
  // Each flight's steps: where each ends along the flight, and its top.
  for (const f of flights) {
    f.y0 = H[f.i]; f.y1 = H[f.i + 1]; f.steps = [];
    let left = f.y1 - f.y0, run = f.length, s = 0, y = f.y0;
    const first = f.i === 0 && left > .3 && run > 2;
    if (first) {
      // The very first step: one long slab, barely above the grass.
      s = .9; y += .035; left -= .035; run -= .9;
      f.steps.push({ end: s, top: y });
    }
    // After it the risers grow to full height over the first few steps.
    const n = left < .06 ? 0 : Math.max(1, Math.round(left / RISER + (first ? 1.2 : 0)));
    const grow = k => first ? Math.min(1, .4 + .2 * k) : 1;
    let total = 0;
    for (let k = 0; k < n; k++) total += grow(k);
    for (let k = 0; k < n; k++) {
      s += run / n; y += left * grow(k) / total;
      f.steps.push({ end: k === n - 1 ? f.length : s, top: k === n - 1 ? f.y1 : y });
    }
    if (!n) f.steps.push({ end: f.length, top: f.y1 });
  }
  return { V, flights };
}
// The top of the step under a point `s` metres along a flight.
function treadAt(f, s) {
  for (const step of f.steps) if (s <= step.end) return step.top;
  return f.y1;
}

export function buildMountain(layer, materials) {
  const root = new THREE.Group(); root.name = 'mountain';
  const M = MOUNTAIN, half = WIDTH / 2, { V, flights } = layStairs(), landings = V.slice(1), top = V.at(-1), ty = top.y;

  // ---------- Stairs: route points and lookups ----------
  // Route points a quarter metre apart along the middle, for walking routes.
  const pts = [];
  const add = (x, y, z) => { const q = pts.at(-1); if (!q || Math.hypot(q.x - x, q.z - z) > .05) pts.push({ x, y, z }); };
  for (const f of flights) {
    const count = Math.max(1, Math.ceil(f.length / .25));
    f.p0 = pts.length;
    for (let k = 0; k <= count; k++) { const s = f.length * k / count; add(f.x + f.d.x * s, k ? treadAt(f, s - 1e-4) : f.y0, f.z + f.d.z * s); }
    f.p1 = pts.length - 1;
    const v = V[f.i + 1], enter = Math.max(1, Math.ceil(v.e / .25));
    for (let k = 1; k <= enter; k++) { const t = 1 - k / enter; add(v.x - v.in.x * v.e * t, v.y, v.z - v.in.z * v.e * t); }
    v.p = pts.length - 1;
    if (v.out) for (let k = 1; k < enter; k++) { const t = k / enter; add(v.x + v.out.x * v.e * t, v.y, v.z + v.out.z * v.e * t); }
  }
  // The walkway continues the route north from the middle of the platform.
  const walk = { kind: 'walk', x0: top.x - half, x1: top.x + half, z1: top.z - SUMMIT + .15, z0: top.z - SUMMIT - REACH, y: ty + .12 };
  for (let z = top.z - .25; z > walk.z0 + .3; z -= .25) {
    if (z <= walk.z1 && walk.p0 === undefined) walk.p0 = pts.length;
    add(top.x, z <= walk.z1 ? walk.y : ty, z);
  }
  walk.p1 = pts.length - 1;
  function inLanding(v, x, z, grow = 0) {
    const dx = x - v.x, dz = z - v.z;
    if (dx * dx + dz * dz > (v.R + grow) ** 2) return false;
    if (v.in && dx * v.in.x + dz * v.in.z < -v.e - 1e-3) return false;
    return !(v.out && dx * v.out.x + dz * v.out.z > v.e + 1e-3);
  }
  // Pieces by 2 m cell: a tight index for standing, a wide one for shaping.
  const slot = (i, j) => (i + 500) * 1000 + (j + 500);
  const tight = new Map(), wide = new Map();
  function file(map, p, pad) {
    let xs, zs;
    if (p.kind === 'flight') {
      xs = []; zs = [];
      for (const s of [0, p.length]) for (const a of [-half, half]) { xs.push(p.x + p.d.x * s + p.px * a); zs.push(p.z + p.d.z * s + p.pz * a); }
    } else if (p.kind === 'walk') { xs = [p.x0, p.x1]; zs = [p.z0, p.z1]; }
    else { xs = [p.x - p.R, p.x + p.R]; zs = [p.z - p.R, p.z + p.R]; }
    for (let j = Math.floor((Math.min(...zs) - pad) / 2); j <= Math.floor((Math.max(...zs) + pad) / 2); j++)
      for (let i = Math.floor((Math.min(...xs) - pad) / 2); i <= Math.floor((Math.max(...xs) + pad) / 2); i++) {
        const k = slot(i, j);
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(p);
      }
  }
  for (const p of [...flights, ...landings]) { file(tight, p, .05); file(wide, p, 4.6); }
  file(tight, walk, .05);
  // The steps, landing or walkway under a point: its top, how deep it is,
  // and its route index.
  function stairsAt(x, z, out) {
    const list = tight.get(slot(Math.floor(x / 2), Math.floor(z / 2)));
    if (!list) return;
    let found = false;
    for (const p of list) {
      if (p.kind === 'walk') {
        if (x >= p.x0 && x <= p.x1 && z >= p.z0 && z <= p.z1) out.push({ y: p.y, depth: .5, n: clamp(p.p0 + Math.round((p.z1 - z) / .25), p.p0, p.p1), distance: (x - top.x) ** 2 });
        continue;
      }
      if (p.kind !== 'flight') continue;
      const dx = x - p.x, dz = z - p.z, s = dx * p.d.x + dz * p.d.z, a = dx * p.px + dz * p.pz;
      if (s < 0 || s > p.length || Math.abs(a) > half) continue;
      out.push({ y: treadAt(p, s), depth: SKIRT, n: Math.min(p.p1, p.p0 + Math.round(s / .25)), distance: a * a });
      found = true;
    }
    if (!found) for (const p of list) if (p.kind === 'landing' && inLanding(p, x, z)) out.push({ y: p.y, depth: SKIRT, n: p.p, distance: 0 });
  }
  // Every piece within 4.6 m: how far its edge is, its height there, and the
  // lowest step over the metre around the point.
  function nearStairs(x, z, visit) {
    const list = wide.get(slot(Math.floor(x / 2), Math.floor(z / 2)));
    if (!list) return;
    for (const p of list) {
      if (p.kind === 'flight') {
        const dx = x - p.x, dz = z - p.z, s = dx * p.d.x + dz * p.d.z, a = dx * p.px + dz * p.pz;
        const sc = clamp(s, 0, p.length), dist = Math.hypot(s - sc, a - clamp(a, -half, half));
        const y = sc <= 0 ? p.y0 : treadAt(p, sc), low = s - .71 <= 0 ? p.y0 : treadAt(p, Math.min(s - .71, p.length));
        visit({ dist, y, low: Math.min(y, low) });
      } else visit({ dist: Math.max(0, Math.hypot(x - p.x, z - p.z) - p.R), y: p.y, low: p.y });
    }
  }

  // ---------- The ground ----------
  const parts = [M, ...SHOULDERS];
  const x0 = Math.floor(Math.min(...parts.map(p => p.x - p.r))), x1 = Math.ceil(Math.max(...parts.map(p => p.x + p.r)));
  const z0 = Math.floor(Math.min(...parts.map(p => p.z - p.r))), z1 = Math.ceil(Math.max(...parts.map(p => p.z + p.r)));
  const cols = x1 - x0, rows = z1 - z0, cells = cols * rows;
  const height = new Float32Array(cells).fill(-Infinity), kind = new Uint8Array(cells), clearance = new Float32Array(cells).fill(99);
  const BED = 1, BANK = 2, BROOK = 4, POOL = 8;
  const cellOf = (x, z) => { const i = Math.floor(x - x0), j = Math.floor(z - z0); return i < 0 || j < 0 || i >= cols || j >= rows ? -1 : i + j * cols; };
  const near = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const c = i + j * cols, x = x0 + i + .5, z = z0 + j + .5, ground = natural(x, z);
    near.length = 0;
    nearStairs(x, z, h => { if (h.dist < 4.6) near.push(h); });
    if (!near.length) { if (ground >= .25) height[c] = Math.round(ground * 2) / 2; continue; }
    near.sort((a, b) => b.dist - a.dist);
    clearance[c] = near.at(-1).dist;
    if (ground === -Infinity) continue;
    // Under the stairs, a bed just below the lowest step over the cell.
    const under = near.filter(h => h.dist <= .72);
    if (under.length) { height[c] = Math.floor((Math.min(...under.map(h => h.low)) - .32) * 2) / 2; kind[c] = BED; continue; }
    // Beside them, banks that rise or fall away at about 1:1, nearest last.
    let y = ground;
    for (const h of near) { const k = 1.15 * (h.dist - .72); y = clamp(y, h.y - .32 - k, h.y - .07 + k); }
    if (y < .25) continue;
    height[c] = Math.round(y * 2) / 2;
    if (Math.abs(y - ground) > .3) kind[c] = BANK;
  }
  const heightAt = (x, z) => { const c = cellOf(x, z); return c < 0 ? -Infinity : height[c]; };

  // ---------- The stream ----------
  // A 4-connected run of cells through a few points, so water never leaks at a corner.
  function course(points) {
    const list = [];
    let c = cellOf(points[0].x, points[0].z), i = c % cols, j = (c - i) / cols;
    list.push(c);
    for (const p of points.slice(1)) {
      const t = cellOf(p.x, p.z);
      if (t < 0) break;
      const ti = t % cols, tj = (t - ti) / cols;
      while (i !== ti || j !== tj) {
        if (Math.abs(ti - i) >= Math.abs(tj - j)) i += Math.sign(ti - i); else j += Math.sign(tj - j);
        list.push(i + j * cols);
      }
    }
    return list;
  }
  const wiggle = d => STREAM.a + 4 * Math.sin(d * 1.3);
  const poolAt = polar(STREAM.a, STREAM.pool), poolBed = Math.floor((natural(poolAt.x, poolAt.z) - 1.4) * 2) / 2, poolWater = poolBed + .38;
  const poolCells = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const c = i + j * cols;
    if (Math.hypot(x0 + i + .5 - poolAt.x, z0 + j + .5 - poolAt.z) > STREAM.radius || kind[c] === BED) continue;
    height[c] = poolBed; kind[c] = POOL; poolCells.push(c);
  }
  const brook = (from, to, steps) => course(Array.from({ length: steps + 1 }, (_, k) => { const d = from + (to - from) * k / steps; return polar(wiggle(d), d); }));
  // Down to the cell that spills into the pool, and out from the cell just past it.
  const toPool = brook(STREAM.spring, STREAM.pool, 6), fromPool = brook(STREAM.pool, M.r + 2, 10);
  const lip = toPool.findIndex(c => kind[c] === POOL), exit = fromPool.findIndex(c => kind[c] !== POOL);
  const above = toPool.slice(0, lip < 0 ? toPool.length : lip), spill = exit > 0 ? fromPool[exit - 1] : null;
  const below = exit > 0 ? fromPool.slice(exit) : [];
  for (const list of [above, below]) { const cut = list.findIndex(c => kind[c] & (BED | POOL)); if (cut >= 0) list.length = cut; }
  // Water steps down cell by cell; the run below the pool leaves it lower still.
  const levelOf = new Map();
  let bed = Infinity;
  for (const c of above) { bed = Math.min(bed, Math.floor((height[c] - .55) * 2) / 2); height[c] = bed; kind[c] = BROOK; levelOf.set(c, bed + .3); }
  bed = poolBed;
  const seaward = [];
  for (const c of below) {
    if (height[c] === -Infinity) break;
    bed = Math.min(bed, Math.floor((height[c] - .55) * 2) / 2);
    height[c] = bed; kind[c] = BROOK; levelOf.set(c, bed + .3); seaward.push(c);
  }

  // ---------- Ground and stairs: one mesh ----------
  const geo = { pos: [], nor: [], uv: [], lay: [], col: [], idx: [] };
  const ea = new THREE.Vector3(), eb = new THREE.Vector3();
  // Four corners in order round the quad; flipped if needed to face `n`.
  function quad(p, n, uv, lay, col, diagonal = false) {
    ea.set(p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]); eb.set(p[2][0] - p[0][0], p[2][1] - p[0][1], p[2][2] - p[0][2]);
    ea.cross(eb);
    const base = geo.pos.length / 3, flip = ea.x * n[0] + ea.y * n[1] + ea.z * n[2] < 0;
    for (let k = 0; k < 4; k++) { geo.pos.push(...p[k]); geo.nor.push(...n); geo.uv.push(...uv[k]); geo.lay.push(lay); geo.col.push(col[k].r, col[k].g, col[k].b); }
    const [a, b, c, d] = diagonal ? [1, 2, 3, 0] : [0, 1, 2, 3];
    if (flip) geo.idx.push(base + a, base + c, base + b, base + a, base + d, base + c);
    else geo.idx.push(base + a, base + b, base + c, base + a, base + c, base + d);
  }
  const tone = (hex, k = 1) => new THREE.Color(hex).multiplyScalar(k);
  const lerpHex = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), clamp(t, 0, 1));
  const L = layer, patch = valueNoise(31);
  // Grass deepens at the foot and turns to warm meadow towards the top.
  function grassTint(x, y, z) {
    const k = clamp(y / M.h, 0, 1), n = patch(x * .21, z * .21);
    const tint = k < .4 ? lerpHex(0x8fb79a, 0xb3cfa9, k / .4) : lerpHex(0xb3cfa9, 0xf1e9c0, (k - .4) / .6);
    return tint.multiplyScalar(.9 + .2 * n);
  }
  // The leafy faces of ledges: deep green low down, brighter and warmer higher up.
  function sideGreen(x, y, z) {
    const k = clamp(y / M.h, 0, 1), n = patch(x * .29 + 11, z * .29);
    const tint = k < .45 ? lerpHex(0x3f7a3d, 0x52904a, k / .45) : lerpHex(0x52904a, 0x8fa95a, (k - .45) / .55);
    return tint.multiplyScalar(.88 + .24 * n);
  }
  const AO = [.62, .76, .89, 1], vines = [];
  const above1 = (i, j, h) => i >= 0 && j >= 0 && i < cols && j < rows && height[i + j * cols] > h + .01 ? 1 : 0;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const c = i + j * cols, h = height[c];
    if (h === -Infinity) continue;
    // Bare rock shows through more and more towards the top.
    const x = x0 + i, z = z0 + j, wet = kind[c] & (BROOK | POOL), bare = patch(x * .37 + 40, z * .37);
    const rocky = !wet && (h > 22 ? bare > .5 : h > 16 && bare > .78);
    const grass = grassTint(x + .5, h, z + .5);
    const topLayer = wet ? L.gravel : rocky ? L.stone : L.grass_top;
    const topTint = wet ? tone(0x9a9488) : rocky ? tone(0xd9d3c4) : grass;
    // Corner shading where a higher neighbour stands over the top.
    const ao = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([cx, cz]) => {
      const di = cx ? 1 : -1, dj = cz ? 1 : -1, s1 = above1(i + di, j, h), s2 = above1(i, j + dj, h), cr = above1(i + di, j + dj, h);
      return s1 && s2 ? 0 : 3 - (s1 + s2 + cr);
    });
    quad([[x, h, z], [x + 1, h, z], [x + 1, h, z + 1], [x, h, z + 1]], UP, [[x, z], [x + 1, z], [x + 1, z + 1], [x, z + 1]],
      topLayer, ao.map(a => topTint.clone().multiplyScalar(AO[a])), ao[0] + ao[2] < ao[1] + ao[3]);
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj, inside = ni >= 0 && nj >= 0 && ni < cols && nj < rows;
      let low = inside ? height[ni + nj * cols] : -Infinity;
      if (low === -Infinity) low = -1.2;
      if (low >= h) continue;
      const n = [di, 0, dj], fx = di > 0 ? x + 1 : x, fz = dj > 0 ? z + 1 : z;
      const at = (t, y) => di ? [fx, y, z + t] : [x + t, y, fz];
      const u = t => (di ? z : x) + t;
      // Open slopes are leaf-covered all the way down, darker towards the
      // foot of each ledge; beside the stairs the faces are retaining stone.
      const wall = kind[c] & BED || (kind[c] & BANK && clearance[c] < 1.8), stony = wall || rocky;
      const band = Math.max(low, h - 1), green = sideGreen(x + .5, h, z + .5);
      const turf = wall ? tone(0xd6cebd) : rocky ? tone(0xdcd6c9) : green;
      quad([at(0, h), at(1, h), at(1, band), at(0, band)], n, [[u(0), 1], [u(1), 1], [u(1), 1 - (h - band)], [u(0), 1 - (h - band)]],
        stony ? L.stone : L.foliage, [turf, turf, turf.clone().multiplyScalar(.84), turf.clone().multiplyScalar(.84)]);
      if (!stony && h - low >= 1.5 && kind[c] !== BANK) vines.push({ x: fx + (di ? di * .06 : .5), z: fz + (dj ? dj * .06 : .5), y: h, di, dj, drop: h - low });
      if (band <= low) continue;
      const body = stony ? tone(wall ? 0xc6beae : 0xcfc9bc) : green.clone().multiplyScalar(.8);
      quad([at(0, band), at(1, band), at(1, low), at(0, low)], n, [[u(0), band], [u(1), band], [u(1), low], [u(0), low]],
        stony ? L.stone : L.foliage, [body.clone().multiplyScalar(.86), body.clone().multiplyScalar(.86), body.clone().multiplyScalar(.6), body.clone().multiplyScalar(.6)]);
    }
  }
  // The stairs: pale granite treads, darker risers and sides. The first slab
  // is a little wider than the stair.
  const stepRandom = rng(97);
  const TREAD = 0xece5d6, RISE = 0xb9b1a2, SIDE = 0xa69e90;
  for (const f of flights) {
    const at = (s, a, y) => [f.x + f.d.x * s + f.px * a, y, f.z + f.d.z * s + f.pz * a];
    const along = p => p[0] * f.d.x + p[2] * f.d.z, across = p => p[0] * f.px + p[2] * f.pz;
    let s0 = 0, yPrev = f.y0;
    f.steps.forEach((step, k) => {
      const s1 = step.end, y = step.top, w = f.i === 0 && k === 0 ? half + .25 : half;
      const shade = .94 + stepRandom() * .1, treadTint = tone(TREAD, shade);
      const topFace = [at(s0, w, y), at(s1, w, y), at(s1, -w, y), at(s0, -w, y)];
      quad(topFace, UP, topFace.map(p => [p[0], p[2]]), L.concrete, [treadTint, treadTint, treadTint, treadTint]);
      if (y > yPrev + .001) {
        const front = [at(s0, w, y), at(s0, -w, y), at(s0, -w, yPrev), at(s0, w, yPrev)], rise = tone(RISE, shade);
        quad(front, [-f.d.x, 0, -f.d.z], front.map(p => [across(p), p[1]]), L.stone, [rise, rise, rise.clone().multiplyScalar(.85), rise.clone().multiplyScalar(.85)]);
      }
      for (const a of [w, -w]) {
        const side = [at(s0, a, y), at(s1, a, y), at(s1, a, y - SKIRT), at(s0, a, y - SKIRT)], tint = tone(SIDE, shade);
        quad(side, [f.px * Math.sign(a), 0, f.pz * Math.sign(a)], side.map(p => [along(p), p[1]]), L.stone, [tint, tint, tint.clone().multiplyScalar(.7), tint.clone().multiplyScalar(.7)]);
      }
      s0 = s1; yPrev = y;
    });
  }
  // Landings: a fan over the clipped disc, with a skirt round the open edges.
  const LANDING = 0xe4ddcd;
  function ringOf(v, count = 28) {
    const ring = [];
    for (let k = 0; k < count; k++) {
      const t = k / count * Math.PI * 2, x = v.x + Math.cos(t) * v.R, z = v.z + Math.sin(t) * v.R;
      if (inLanding(v, x, z, 1e-3)) ring.push([x, z]);
    }
    for (const [dir, e] of [[v.in, -v.e], [v.out, v.e]]) if (dir) for (const a of [-half, half]) ring.push([v.x + dir.x * e - dir.z * a, v.z + dir.z * e + dir.x * a]);
    return ring.sort((p, q) => Math.atan2(p[1] - v.z, p[0] - v.x) - Math.atan2(q[1] - v.z, q[0] - v.x));
  }
  const onChord = (v, p) => (v.in && Math.abs((p[0] - v.x) * v.in.x + (p[1] - v.z) * v.in.z + v.e) < .01) ||
    (v.out && Math.abs((p[0] - v.x) * v.out.x + (p[1] - v.z) * v.out.z - v.e) < .01);
  for (const v of landings) {
    const ring = ringOf(v, v === top ? 48 : 28), y = v.y + .004, tint = tone(LANDING), side = tone(SIDE);
    v.ring = ring;
    for (let k = 0; k < ring.length; k++) {
      const p = ring[k], q = ring[(k + 1) % ring.length];
      quad([[v.x, y, v.z], [p[0], y, p[1]], [q[0], y, q[1]], [v.x, y, v.z]], UP, [[v.x, v.z], p, q, [v.x, v.z]], L.concrete, [tint, tint, tint, tint]);
      if (onChord(v, p) && onChord(v, q)) continue;
      const mx = (p[0] + q[0]) / 2 - v.x, mz = (p[1] + q[1]) / 2 - v.z, l = Math.hypot(mx, mz) || 1;
      quad([[p[0], y, p[1]], [q[0], y, q[1]], [q[0], y - SKIRT, q[1]], [p[0], y - SKIRT, p[1]]], [mx / l, 0, mz / l],
        [[p[0] + p[1], y], [q[0] + q[1], y], [q[0] + q[1], y - SKIRT], [p[0] + p[1], y - SKIRT]], L.stone, [side, side, side.clone().multiplyScalar(.7), side.clone().multiplyScalar(.7)]);
    }
  }
  const ground = new THREE.BufferGeometry();
  ground.setAttribute('position', new THREE.Float32BufferAttribute(geo.pos, 3));
  ground.setAttribute('normal', new THREE.Float32BufferAttribute(geo.nor, 3));
  ground.setAttribute('tileUv', new THREE.Float32BufferAttribute(geo.uv, 2));
  ground.setAttribute('tileLayer', new THREE.Float32BufferAttribute(geo.lay, 1));
  ground.setAttribute('color', new THREE.Float32BufferAttribute(geo.col, 3));
  ground.setIndex(geo.idx); ground.computeBoundingSphere();
  const groundMesh = new THREE.Mesh(ground, materials.voxel);
  groundMesh.name = 'mountain-ground'; groundMesh.receiveShadow = true; groundMesh.matrixAutoUpdate = false;
  root.add(groundMesh);

  // ---------- Water ----------
  function waterTexture(white) {
    const canvas = document.createElement('canvas'); canvas.width = 16; canvas.height = 32;
    const g = canvas.getContext('2d'), r = rng(white ? 911 : 577);
    g.fillStyle = white ? '#9fd6e3' : '#4e9db2'; g.fillRect(0, 0, 16, 32);
    for (let k = 0; k < (white ? 46 : 26); k++) {
      g.fillStyle = white ? (r() < .5 ? '#f1fbfd' : '#c4ebf2') : (r() < .5 ? '#9ad6e2' : '#6cb6c8');
      g.fillRect(Math.floor(r() * 16), Math.floor(r() * 32), 1, 2 + Math.floor(r() * (white ? 10 : 5)));
    }
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.magFilter = THREE.NearestFilter;
    return t;
  }
  const flowMap = waterTexture(true), stillMap = waterTexture(false);
  const flowing = new THREE.MeshLambertMaterial({ map: flowMap, emissive: 0x1d3d45 });
  const still = new THREE.MeshLambertMaterial({ map: stillMap, emissive: 0x123038 });
  const water = { flow: { pos: [], nor: [], uv: [], idx: [] }, still: { pos: [], nor: [], uv: [], idx: [] } };
  function waterQuad(g, p, n, uv) {
    const base = g.pos.length / 3;
    for (let k = 0; k < 4; k++) { g.pos.push(...p[k]); g.nor.push(...n); g.uv.push(...uv[k]); }
    ea.set(p[1][0] - p[0][0], p[1][1] - p[0][1], p[1][2] - p[0][2]); eb.set(p[2][0] - p[0][0], p[2][1] - p[0][1], p[2][2] - p[0][2]);
    ea.cross(eb);
    if (ea.x * n[0] + ea.y * n[1] + ea.z * n[2] < 0) g.idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
    else g.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  const centre = c => { const i = c % cols; return { x: x0 + i + .5, z: z0 + (c - i) / cols + .5 }; };
  // A run of cells: a surface on each, and a falling sheet wherever the next is lower.
  function run(list, endLevel, v = 0) {
    for (let k = 0; k < list.length; k++) {
      const c = list[k], p = centre(c), w = levelOf.get(c);
      const next = list[k + 1], q = next !== undefined ? centre(next) : null;
      const dir = q ? { x: q.x - p.x, z: q.z - p.z } : list[k - 1] !== undefined ? { x: p.x - centre(list[k - 1]).x, z: p.z - centre(list[k - 1]).z } : { x: 0, z: 1 };
      const corners = [[-.5, -.5], [.5, -.5], [.5, .5], [-.5, .5]].map(([a, b]) => [p.x + a, w, p.z + b]);
      waterQuad(water.flow, corners, UP, corners.map(r => [(r[0] - p.x) * dir.z - (r[2] - p.z) * dir.x, v + (r[0] - p.x) * dir.x + (r[2] - p.z) * dir.z]));
      v += 1;
      const nextLevel = q ? levelOf.get(next) : endLevel;
      if (nextLevel === undefined || nextLevel >= w - .02) continue;
      // The edge shared with the next cell, set a little downstream.
      const ex = p.x + dir.x * .53, ez = p.z + dir.z * .53, sx = -dir.z * .5, sz = dir.x * .5;
      const sheet = [[ex + sx, w, ez + sz], [ex - sx, w, ez - sz], [ex - sx, nextLevel, ez - sz], [ex + sx, nextLevel, ez + sz]];
      waterQuad(water.flow, sheet, [dir.x, 0, dir.z], [[0, v], [1, v], [1, v + w - nextLevel], [0, v + w - nextLevel]]);
      v += w - nextLevel;
    }
    return v;
  }
  if (above.length) run(above, poolWater);
  for (const c of poolCells) {
    const p = centre(c), corners = [[-.5, -.5], [.5, -.5], [.5, .5], [-.5, .5]].map(([a, b]) => [p.x + a, poolWater, p.z + b]);
    waterQuad(water.still, corners, UP, corners.map(r => [r[0] * .5, r[2] * .5]));
  }
  if (seaward.length) {
    // From the pool's rim into the first cell below it.
    const first = centre(seaward[0]), rim = centre(spill);
    const dir = { x: first.x - rim.x, z: first.z - rim.z }, l = Math.hypot(dir.x, dir.z) || 1, w = levelOf.get(seaward[0]);
    if (poolWater > w + .02) {
      const ex = first.x - dir.x / l * .47, ez = first.z - dir.z / l * .47, sx = -dir.z / l * .5, sz = dir.x / l * .5;
      waterQuad(water.flow, [[ex + sx, poolWater, ez + sz], [ex - sx, poolWater, ez - sz], [ex - sx, w, ez - sz], [ex + sx, w, ez + sz]], [dir.x / l, 0, dir.z / l], [[0, 0], [1, 0], [1, poolWater - w], [0, poolWater - w]]);
    }
    run(seaward, -1.1, 20);
  }
  for (const [g, material, name] of [[water.flow, flowing, 'mountain-stream'], [water.still, still, 'mountain-pool']]) {
    if (!g.idx.length) continue;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(g.pos, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(g.nor, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(g.uv, 2));
    geometry.setIndex(g.idx); geometry.computeBoundingSphere();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name; mesh.receiveShadow = true; mesh.matrixAutoUpdate = false;
    // The water runs only while it is on screen.
    mesh.onBeforeRender = () => {
      const t = performance.now() / 1000;
      if (material === flowing) flowMap.offset.y = -(t * 1.6) % 1; else stillMap.offset.set((t * .05) % 1, (t * .03) % 1);
    };
    root.add(mesh);
  }

  // ---------- Planting, stones and the built pieces ----------
  const B = new BoxBatch(layer);
  const box = (x, y, z, w, h, d, look, opts = {}) => B.box(x, y, z, w, h, d, look, { shadow: false, ...opts });
  const solids = [], solidIndex = new Map();
  function solid(x, z, w, d, y0, h) {
    const b = { x0: x - w / 2, x1: x + w / 2, z0: z - d / 2, z1: z + d / 2, y0, y1: y0 + h };
    solids.push(b);
    for (let j = Math.floor((b.z0 - RADIUS) / 2); j <= Math.floor((b.z1 + RADIUS) / 2); j++)
      for (let i = Math.floor((b.x0 - RADIUS) / 2); i <= Math.floor((b.x1 + RADIUS) / 2); i++) {
        const k = slot(i, j);
        if (!solidIndex.has(k)) solidIndex.set(k, []);
        solidIndex.get(k).push(b);
      }
  }
  const random = rng(4711), choose = list => list[Math.floor(random() * list.length) % list.length];
  const LOG = { tex: 'log', top: 'log_top' }, leaf = tint => ({ tex: 'foliage', tint });
  const lift = (hex, k) => new THREE.Color(hex).multiplyScalar(k).getHex();
  const STEEL = { tex: 'black_metal' }, GLASS = { tex: 'glass', glass: true }, LIGHT = { tex: 'glow', emissive: 1.4 };
  const GREENS = { foot: [0x3f7240, 0x356638, 0x4b7d44, 0x2f5c3a], mid: [0x5a9447, 0x67a04e, 0x4e8a46], high: [0x7f9f4c, 0x8daa55], fir: [0x2f5a45, 0x365f48, 0x2a5241] };
  function broadleaf(x, y, z, s, palette) {
    const tint = choose(palette), light = lift(tint, 1.14), trunk = (1.5 + random() * .8) * s;
    box(x, y - .2, z, .42 * s, trunk + .25, .42 * s, LOG);
    const w = (2.7 + random() * 1) * s, ox = (random() - .5) * .5 * s, oz = (random() - .5) * .5 * s;
    box(x + ox, y + trunk, z + oz, w, 1.5 * s, w * (.85 + random() * .25), leaf(tint));
    box(x + ox * .4 + (random() - .5) * .6 * s, y + trunk + 1.2 * s, z + oz * .4, w * .7, 1.15 * s, w * .68, leaf(light));
    box(x + ox - w * .38, y + trunk + .35 * s, z + oz + (random() - .5) * w * .4, w * .45, 1.05 * s, w * .5, leaf(tint));
    if (random() < .6) box(x + ox + w * .36, y + trunk + .5 * s, z + oz - w * .2, w * .4, .9 * s, w * .42, leaf(light));
    solid(x, z, .42 * s, .42 * s, y, trunk + 1.5 * s);
  }
  function conifer(x, y, z, s, palette) {
    const tint = choose(palette);
    box(x, y - .2, z, .32 * s, 1.5 * s, .32 * s, LOG);
    let level = y + .9 * s;
    [[2.3, 1], [1.8, 1], [1.3, .95], [.75, .9]].forEach(([w, h], k) => {
      box(x, level, z, w * s, h * s, w * s, leaf(k % 2 ? lift(tint, 1.12) : tint));
      level += h * s * .82;
    });
    solid(x, z, .32 * s, .32 * s, y, 4 * s);
  }
  function shrub(x, y, z, s, tint) {
    box(x, y - .1, z, s, .65 * s + .1, s * (.8 + random() * .3), leaf(tint));
  }
  function rock(x, y, z, s, tint) {
    box(x, y - .3, z, s, .45 * s + .3, s * .8, { tex: 'stone', tint }, { ry: random() * 1.5 });
    if (random() < .6) box(x + s * .45, y - .2, z + s * .3, s * .55, .3 * s + .2, s * .5, { tex: 'stone', tint: lift(tint, .94) }, { ry: random() * 1.5 });
    solid(x, z, s * .9, s * .8, y - .3, .45 * s + .3);
  }
  // Black steel path lights, as on the house.
  function bollard(x, y, z) {
    box(x, y - .2, z, .15, 1.02, .15, STEEL);
    box(x, y + .72, z, .19, .13, .19, LIGHT);
    box(x, y + .85, z, .23, .05, .23, STEEL);
    solid(x, z, .2, .2, y - .2, 1.1);
  }
  // An oak seat on two black steel frames, its length along `ry`.
  function bench(x, y, z, ry) {
    B.at(x, y, z, ry, () => {
      box(0, .38, 0, 1.6, .07, .46, { tex: 'wood_floor' });
      for (const a of [-.62, .62]) box(a, 0, 0, .06, .38, .42, STEEL);
    });
    solid(x, z, .9, .9, y, .45);
  }

  // Keep planting off the stairs, the water and the summit.
  const taken = new Uint8Array(cells);
  const mark = (c, r) => {
    const i = c % cols, j = (c - i) / cols;
    for (let b = -r; b <= r; b++) for (let a = -r; a <= r; a++) if (i + a >= 0 && j + b >= 0 && i + a < cols && j + b < rows) taken[i + a + (j + b) * cols] = 1;
  };
  const open = (c, r) => {
    const i = c % cols, j = (c - i) / cols;
    for (let b = -r; b <= r; b++) for (let a = -r; a <= r; a++) if (i + a >= 0 && j + b >= 0 && i + a < cols && j + b < rows && taken[i + a + (j + b) * cols]) return false;
    return true;
  };
  for (let c = 0; c < cells; c++) if (kind[c] & (BROOK | POOL)) mark(c, 1);

  // ---------- The trailhead ----------
  {
    const f = flights[0], at = (s, a) => ({ x: f.x + f.d.x * s + f.px * a, z: f.z + f.d.z * s + f.pz * a });
    for (const a of [half + .5, -half - .5]) { const p = at(1.25, a); bollard(p.x, Math.max(0, heightAt(p.x, p.z)), p.z); }
  }
  // A path light at the outer edge of each sharp turn.
  for (const v of landings.slice(0, -1)) {
    if (v.turn < 1.3) continue;
    const ox = v.in.x - v.out.x, oz = v.in.z - v.out.z, l = Math.hypot(ox, oz);
    bollard(v.x + ox / l * (v.R - .3), v.y, v.z + oz / l * (v.R - .3));
  }
  // Low kerbs where the ground falls away beside the stairs. Off the
  // mountain the island's own ground is level with the first steps.
  const KERB = { tex: 'stone', tint: 0xdcd4c4 }, groundAt = (x, z) => Math.max(heightAt(x, z), 0);
  for (const f of flights) {
    const ry = Math.atan2(f.d.x, f.d.z);
    let s0 = 0;
    for (const step of f.steps) {
      const s = (s0 + step.end) / 2, length = step.end - s0, y = step.top;
      s0 = step.end;
      for (const a of [half + .1, -half - .1]) {
        const ox = f.px * Math.sign(a) * .55, oz = f.pz * Math.sign(a) * .55;
        const x = f.x + f.d.x * s + f.px * a, z = f.z + f.d.z * s + f.pz * a;
        if (groundAt(x + ox, z + oz) > y - .6) continue;
        box(x, y - .55, z, .2, .77, length + .02, KERB, { ry });
        solid(x, z, .2, .2, y - .55, .77);
      }
    }
  }
  for (const v of landings) {
    const ring = v.ring;
    for (let k = 0; k < ring.length; k++) {
      const p = ring[k], q = ring[(k + 1) % ring.length];
      if (onChord(v, p) && onChord(v, q)) continue;
      const mx = (p[0] + q[0]) / 2, mz = (p[1] + q[1]) / 2, dx = mx - v.x, dz = mz - v.z, l = Math.hypot(dx, dz) || 1;
      if (groundAt(mx + dx / l * .55, mz + dz / l * .55) > v.y - .6) continue;
      const x = mx + dx / l * .1, z = mz + dz / l * .1;
      box(x, v.y - .55, z, .2, .77, Math.hypot(q[0] - p[0], q[1] - p[1]) + .06, KERB, { ry: Math.atan2(q[0] - p[0], q[1] - p[1]) });
      solid(x, z, .22, .22, v.y - .55, .77);
    }
  }

  // ---------- The summit ----------
  // A cantilevered walkway north over the cliff: continuous glass from the
  // platform to the tip, held in a steel frame with glass sides and a lit edge.
  {
    const sx = top.x, fy = walk.y, n0 = walk.z1, n1 = walk.z0, length = n0 - n1;
    box(sx, fy - .04, (n0 + n1) / 2, WIDTH - .2, .04, length, GLASS, { tag: 'summit-glass-floor' });
    box(sx, fy - .12, n0 - .06, WIDTH, .12, .12, STEEL);
    box(sx, fy - .12, n1 + .06, WIDTH, .12, .12, STEEL);
    const footZ = n0 - 2.5, footY = heightAt(sx, footZ), tipZ = n1 + 1, tipY = fy - .62;
    for (const a of [-1, 1]) {
      box(sx + a * (half - .05), fy - .12, (n0 + n1) / 2, .1, .12, length, STEEL);
      box(sx + a * (half - .15), fy - .48, (n0 + n1) / 2, .14, .36, length, STEEL);
      box(sx + a * (half - .02), fy, (n0 - .5 + n1) / 2, .03, .95, n0 - .5 - n1, GLASS);
      box(sx + a * (half - .02), fy + .95, (n0 - .5 + n1) / 2, .06, .05, n0 - .5 - n1, STEEL);
      box(sx + a * (half - .13), fy + .001, (n0 + n1) / 2, .04, .02, length, LIGHT);
      // A raking strut from under the tip back to the rock.
      const dz = footZ - tipZ, dy = footY - tipY, l = Math.hypot(dz, dy);
      box(sx + a * (half - .15), (tipY + footY) / 2 - .07, (tipZ + footZ) / 2, .12, .14, l, STEEL, { rx: Math.atan2(-dy, dz) });
      solid(sx + a * (half - .02), (n0 - .5 + n1) / 2, .1, n0 - .5 - n1, fy, 1);
    }
    for (let z = n0 - .5; z >= n1 - .01; z -= 1.65) for (const a of [-1, 1]) box(sx + a * (half - .02), fy - .1, z, .05, 1.1, .05, STEEL);
    box(sx, fy, n1 + .02, WIDTH, .95, .03, GLASS);
    box(sx, fy + .95, n1 + .02, WIDTH + .06, .05, .06, STEEL);
    solid(sx, n1 + .02, WIDTH, .1, fy, 1);
    // A coin viewer at the end, facing out to sea.
    const vz = n1 + .55;
    box(sx, fy, vz, .12, 1.02, .12, STEEL);
    box(sx, fy + 1.02, vz, .46, .28, .32, { tex: 'paint', tint: 0x3d6f9e });
    for (const a of [-.1, .1]) box(sx + a, fy + 1.09, vz + .18, .08, .08, .1, STEEL);
    for (const a of [-.1, .1]) box(sx + a, fy + 1.09, vz - .18, .11, .11, .05, { tex: 'chrome' });
    solid(sx, vz, .46, .36, fy, 1.3);
  }
  // A seat at the platform's west side and two lights where the stairs arrive.
  bench(top.x - 2.1, ty, top.z - .3, Math.PI / 2);
  for (const a of [-1, 1]) bollard(top.x + a * 1.95, ty, top.z + 2.35);
  // Nothing grows up through the walkway.
  for (let z = walk.z0 - 2; z <= walk.z1 + .5; z++) for (let x = walk.x0 - 2.5; x <= walk.x1 + 2.5; x++) { const c = cellOf(x, z); if (c >= 0) taken[c] = 1; }

  // ---------- Woods, meadow and rock ----------
  // Dense woods low down thin out to meadow, a few firs and bare stone.
  const order = Array.from({ length: cells }, (_, c) => c);
  for (let k = cells - 1; k > 0; k--) { const t = Math.floor(random() * (k + 1)); [order[k], order[t]] = [order[t], order[k]]; }
  const grove = valueNoise(91);
  for (const c of order) {
    const y = height[c];
    if (y === -Infinity || kind[c] & (BED | BROOK | POOL) || taken[c]) continue;
    const i = c % cols, j = (c - i) / cols, x = x0 + i + .5 + (random() - .5) * .4, z = z0 + j + .5 + (random() - .5) * .4;
    if (Math.hypot(x - M.x, z - M.z) < PLATEAU + .6) continue;
    const clear = clearance[c], dense = grove(x * .12, z * .12), roll = random();
    if (y < 10) {
      if (random() > .7 + .3 * dense) continue;
      if (clear < 1.6) { if (clear > .8 && roll < .5 && open(c, 0)) { shrub(x, y, z, .9 + random() * .5, choose(GREENS.foot)); mark(c, 0); } continue; }
      if (!open(c, 1)) continue;
      if (roll < .64) broadleaf(x, y, z, 1 + random() * .4, GREENS.foot); else conifer(x, y, z, 1 + random() * .35, GREENS.fir);
      mark(c, roll < .64 ? 2 : 1);
    } else if (y < 18) {
      if (random() > .58 + .35 * dense) continue;
      if (clear < 1.6 || roll > .9) { if (clear > .8 && open(c, 0)) { shrub(x, y, z, .8 + random() * .5, choose(GREENS.mid)); mark(c, 0); } continue; }
      if (!open(c, 1)) continue;
      if (roll < .5) broadleaf(x, y, z, .9 + random() * .3, GREENS.mid); else conifer(x, y, z, .9 + random() * .3, GREENS.fir);
      mark(c, roll < .5 ? 2 : 1);
    } else if (y < 23.5) {
      if (random() > .34 + .2 * dense) continue;
      if (clear < 1.5 || roll > .55) { if (clear > .7 && open(c, 0)) { if (random() < .5) rock(x, y, z, .6 + random() * .6, 0xcfc8bb); else shrub(x, y, z, .6 + random() * .3, choose(GREENS.high)); mark(c, 0); } continue; }
      if (!open(c, 1)) continue;
      conifer(x, y, z, .7 + random() * .3, GREENS.fir);
      mark(c, 1);
    } else {
      if (random() > .3 || clear < .8 || !open(c, 0)) continue;
      rock(x, y, z, .5 + random() * .5, 0xd6d0c4);
      mark(c, 0);
    }
  }
  // Creepers hanging over the taller ledges.
  for (const v of vines) {
    if (random() > .26) continue;
    const width = .45 + random() * .45, hang = Math.min(v.drop - .2, .7 + random() * 1.3), slide = (random() - .5) * (1 - width);
    const tint = v.y < 10 ? choose([0x3f6e3c, 0x4b7a42, 0x356338]) : v.y < 18 ? choose([0x4f8545, 0x5d9049]) : choose([0x6f9a4a, 0x7fa24f]);
    box(v.x + (v.di ? 0 : slide), v.y - hang, v.z + (v.dj ? 0 : slide), v.di ? .12 : width, hang + .06, v.di ? width : .12, leaf(tint));
  }
  // Mossy stones along the stream, and white water where it falls.
  for (const c of [...above, ...seaward]) {
    if (random() < .55) continue;
    const p = centre(c), side = random() < .5 ? -1 : 1, nx = p.x + side * (.9 + random() * .3), nz = p.z + (random() - .5) * .6, cc = cellOf(nx, nz);
    if (cc < 0 || kind[cc] & (BED | BROOK | POOL) || clearance[cc] < .8) continue;
    rock(nx, height[cc], nz, .55 + random() * .4, 0x9aa592);
  }
  if (above.length) {
    const last = centre(above.at(-1)), dx = poolAt.x - last.x, dz = poolAt.z - last.z, l = Math.hypot(dx, dz);
    for (let k = 0; k < 4; k++) box(last.x + dx / l * (1.1 + random() * .5) + (random() - .5) * .8, poolWater - .05, last.z + dz / l * (1.1 + random() * .5) + (random() - .5) * .8, .35 + random() * .35, .08, .35 + random() * .3, { tex: 'paint', tint: 0xf4fbfd, emissive: .15 });
  }
  // A seat just off the landing by the pool, looking at the fall.
  {
    const v = landings[5], dx = poolAt.x - v.x, dz = poolAt.z - v.z, l = Math.hypot(dx, dz);
    const bx = v.x + dx / l * (v.R + .7), bz = v.z + dz / l * (v.R + .7), c = cellOf(bx, bz);
    if (c >= 0 && !(kind[c] & (BROOK | POOL)) && Math.abs(height[c] - v.y) < .6) bench(bx, height[c], bz, Math.atan2(dx, dz) + Math.PI / 2);
  }

  // ---------- Grass and flowers that sway ----------
  const tufts = [];
  for (let c = 0; c < cells; c++) {
    const y = height[c];
    if (y === -Infinity || kind[c] & (BED | BROOK | POOL)) continue;
    const i = c % cols, j = (c - i) / cols;
    if (Math.hypot(x0 + i + .5 - M.x, z0 + j + .5 - M.z) < SUMMIT + .2) continue;
    const roll = random(), x = x0 + i + .15 + random() * .7, z = z0 + j + .15 + random() * .7;
    if (y < 10) { if (roll < .22) tufts.push({ x, y, z, tile: 'tall_grass', tint: choose([0x5f8f4a, 0x6f9c52, 0x557f45]), s: .9 + random() * .5 }); }
    else if (y < 18) {
      if (roll < .16) tufts.push({ x, y, z, tile: 'tall_grass', tint: 0x86b45a, s: .8 + random() * .4 });
      else if (roll < .21) tufts.push({ x, y, z, tile: 'flower_white', tint: 0xffffff, s: .7 + random() * .3 });
    } else if (roll < .26) tufts.push({ x, y, z, tile: choose(['flower_violet', 'flower_white', 'flower_violet']), tint: random() < .3 ? 0xf8e08a : 0xffffff, s: .65 + random() * .3 });
    else if (roll < .44) tufts.push({ x, y, z, tile: 'tall_grass', tint: choose([0xd6c46c, 0xc5c46a, 0xb8c066]), s: .7 + random() * .4 });
  }
  if (tufts.length) {
    for (const t of tufts) t.ry = random() * Math.PI;
    root.add(buildTufts(layer, materials, tufts, 'mountain-grass'));
  }

  const vegetation = new THREE.Group(); vegetation.name = 'mountain-planting';
  for (const mesh of B.build(materials)) vegetation.add(mesh);
  root.add(vegetation);

  // ---------- Birds over the summit ----------
  {
    const birds = Array.from({ length: 6 }, (_, k) => ({ r: 10 + k * 2, y: 40 + (k % 3) * 1.8, speed: (.22 + k * .02) * (k % 2 ? 1 : -1), phase: k * 1.1 }));
    const flock = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0x2c3034 }), birds.length * 3);
    const o = new THREE.Object3D(), part = new THREE.Object3D(); o.add(part);
    const fly = t => birds.forEach((b, k) => {
      const a = b.phase + t * b.speed, flap = Math.sin(t * 9 + k) * (Math.sin(t * .7 + k) > .2 ? .55 : .12);
      o.position.set(top.x + Math.sin(a) * b.r, b.y + Math.sin(t * .5 + k) * .6, top.z + Math.cos(a) * b.r);
      o.rotation.set(0, a + (b.speed > 0 ? Math.PI / 2 : -Math.PI / 2), 0); o.updateMatrix();
      part.position.set(0, 0, 0); part.rotation.set(0, 0, 0); part.scale.set(.16, .09, .4); part.updateMatrix();
      flock.setMatrixAt(k * 3, o.matrix.clone().multiply(part.matrix));
      for (const side of [-1, 1]) {
        part.rotation.set(0, 0, side * flap); part.position.set(side * .26 * Math.cos(flap), .26 * Math.sin(flap), 0); part.scale.set(.5, .03, .2); part.updateMatrix();
        flock.setMatrixAt(k * 3 + (side < 0 ? 1 : 2), o.matrix.clone().multiply(part.matrix));
      }
    });
    fly(0);
    flock.name = 'mountain-birds'; flock.frustumCulled = false;
    flock.onBeforeRender = () => { fly(performance.now() / 1000); flock.instanceMatrix.needsUpdate = true; };
    root.add(flock);
  }

  // ---------- Standing, collision, picking and routes ----------
  const found = [];
  // The highest top at a point: rock, stairs or walkway.
  function topAt(x, z) {
    let y = heightAt(x, z);
    found.length = 0; stairsAt(x, z, found);
    for (const h of found) if (h.y > y) y = h.y;
    return y;
  }
  // Is a point inside the rock, or inside the slab of a step, landing or the walkway?
  function inside(x, y, z, pad = 0) {
    if (y <= heightAt(x, z) + pad) return true;
    found.length = 0; stairsAt(x, z, found);
    return found.some(h => y <= h.y + pad && y >= h.y - h.depth - pad);
  }
  // The rock's top, and the stairs wherever they are underfoot.
  function levels(x, z, out) {
    const c = cellOf(x, z);
    if (c >= 0 && height[c] !== -Infinity) out.push({ y: height[c], site: 'mountain' });
    found.length = 0; stairsAt(x, z, found);
    for (const p of found) out.push({ y: p.y, site: 'mountain', tread: true, route: 'mountain-road', index: p.n, distance: p.distance });
  }
  const solidsNear = (x, z) => solidIndex.get(slot(Math.floor(x / 2), Math.floor(z / 2)));
  function obstructed(x, z, feet) {
    const list = solidsNear(x, z);
    return !!list && list.some(b => x >= b.x0 && x <= b.x1 && z >= b.z0 && z <= b.z1 && b.y0 < feet + BODY && b.y1 > feet + .05);
  }
  function collides(x, feet, z) {
    for (const [ox, oz] of [[0, 0], [RADIUS, RADIUS], [RADIUS, -RADIUS], [-RADIUS, RADIUS], [-RADIUS, -RADIUS]]) {
      if (heightAt(x + ox, z + oz) > feet + .02) return true;
      found.length = 0; stairsAt(x + ox, z + oz, found);
      if (found.some(h => h.y > feet + .02 && h.y - h.depth < feet + BODY)) return true;
    }
    const list = solidsNear(x, z);
    return !!list && list.some(b => x + RADIUS > b.x0 && x - RADIUS < b.x1 && z + RADIUS > b.z0 && z - RADIUS < b.z1 && feet + BODY > b.y0 && feet < b.y1);
  }
  // A ray marched across the mountain until it enters something solid.
  const bounds = new THREE.Box3(new THREE.Vector3(x0, BASE, z0), new THREE.Vector3(x1, M.h + 2, z1));
  const entry = new THREE.Vector3(), point = new THREE.Vector3();
  function march(ray, from, to, step, pad) {
    for (let t = from; t < to; t += step) {
      ray.at(t, point);
      if (point.y < BASE) return null;
      if (inside(point.x, point.y, point.z, pad)) {
        let lo = t - step, hi = t;
        for (let n = 0; n < 7; n++) { const mid = (lo + hi) / 2; ray.at(mid, point); if (inside(point.x, point.y, point.z, pad)) hi = mid; else lo = mid; }
        return hi;
      }
    }
    return null;
  }
  function pick(ray) {
    const start = bounds.containsPoint(ray.origin) ? 0 : ray.intersectBox(bounds, entry) ? ray.origin.distanceTo(entry) : -1;
    if (start < 0) return null;
    const t = march(ray, start, start + 160, .25, .02);
    return t === null ? null : { t, point: ray.at(t, new THREE.Vector3()), site: 'mountain' };
  }
  // How far the camera can sit from `origin` along `dir` before the slope is in the way.
  const sight = new THREE.Ray();
  function viewBlock(origin, dir, length) {
    sight.set(origin, dir);
    if (!bounds.containsPoint(origin) && !sight.intersectBox(bounds, entry)) return Infinity;
    const t = march(sight, 1.2, length, .35, -.15);
    return t === null ? Infinity : t;
  }
  // Route points a metre apart, from the pass nearest one point to the pass
  // nearest another (heights count, so the right pass is found).
  function nearest(x, y, z) {
    let best = 0, distance = Infinity;
    pts.forEach((q, n) => { const d = (q.x - x) ** 2 + (q.z - z) ** 2 + 4 * (q.y - y) ** 2; if (d < distance) { distance = d; best = n; } });
    return best;
  }
  function route(ax, ay, az, bx, by, bz) {
    const i = ay === null ? 0 : nearest(ax, ay, az), j = nearest(bx, by, bz), step = i <= j ? 4 : -4, out = [];
    for (let n = i; step > 0 ? n < j : n > j; n += step) out.push({ x: pts[n].x, z: pts[n].z, y: pts[n].y, route: 'mountain-road', index: n });
    out.push({ x: pts[j].x, z: pts[j].z, y: pts[j].y, route: 'mountain-road', index: j });
    return out;
  }

  return {
    group: root, levels, obstructed, collides, pick, viewBlock, heightAt: topAt, route,
    trailhead: { x: pts[0].x, z: pts[0].z },
    spots: () => [{ x: pts[0].x, z: pts[0].z }, { x: top.x, z: top.z + 1.5 }],
  };
}
