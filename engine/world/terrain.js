// Ground from blocks: the base block types every world can use, a floating
// island shaped by noise, and Minecraft-style trees. A world adds its own
// block types and buildings on top (see a world's build.js).
import { rng } from './textures.js';

export function valueNoise(seed) {
  const hash = (x, z) => {
    let h = Math.imul(x, 374761393) + Math.imul(z, 668265263) + Math.imul(seed, 1442695041);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const smooth = t => t * t * (3 - 2 * t);
  return (x, z) => {
    const xi = Math.floor(x), zi = Math.floor(z), u = smooth(x - xi), v = smooth(z - zi);
    const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}

export const inRect = (r, x, z) => x >= r.x0 && x < r.x1 && z >= r.z0 && z < r.z1;

// Block types shared by every world. `tex` names tiles from textures.js;
// `merge` draws a flat run of them as one rectangle (walls, floors, glass).
export function defineBaseBlocks(grid) {
  grid.define('grass', { tex: { top: 'grass_top', side: 'grass_side', bottom: 'dirt' } });
  grid.define('sand', { tex: { all: 'sand' }, merge: true });
  grid.define('dirt', { tex: { all: 'dirt' } });
  grid.define('stone', { tex: { all: 'stone' } });
  grid.define('deepslate', { tex: { all: 'deepslate' } });
  grid.define('gravel', { tex: { all: 'gravel' } });
  grid.define('concrete', { tex: { all: 'concrete' } });
  grid.define('planks', { tex: { all: 'wood_floor' }, merge: true });
  grid.define('deck', { tex: { all: 'wood_floor' }, merge: true });
  grid.define('pavers', { tex: { all: 'pavers' } });
  grid.define('travertine', { tex: { all: 'travertine' } });
  grid.define('log', { tex: { top: 'log_top', bottom: 'log_top', side: 'log' } });
  grid.define('leaves', { kind: 'cutout', tex: { all: 'leaves' } });
  grid.define('hedge', { tex: { all: 'hedge' } });
  grid.define('glass', { kind: 'glass', tex: { all: 'glass' }, merge: true });
}

// A floating island over the sea: grass on top (or whatever `surfaceAt(x, z,
// edge)` picks; `edge` is roughly the distance in blocks from the coast), dirt
// under it, and an upturned mountain of stone hanging beneath. `bounds` is
// { x0, x1, z0, z1 } in blocks; the coast wobbles inside it.
// `round` makes the island an oval inside its bounds rather than a box with
// soft corners; `bays` (metres) adds bays and headlands that big. A round
// island keeps one coast: ponds left behind the beach fill with sand, and bits
// of land offshore go. `corner` (metres) rounds the box's corners that much;
// `wobble` scales how far the coast wanders (1 is the old ragged edge).
export function buildIsland(grid, bounds, { surfaceAt = () => 'grass', seed = 11, depth = 17, round = false, bays = 0, corner = 0, wobble = 1 } = {}) {
  const edgeNoise = valueNoise(seed), depthNoise = valueNoise(seed + 12), bayNoise = valueNoise(seed + 31);
  const W = bounds.x1 - bounds.x0, D = bounds.z1 - bounds.z0;
  const cx = (bounds.x0 + bounds.x1 - 1) / 2, cz = (bounds.z0 + bounds.z1 - 1) / 2;
  // The coast's small wobble reaches about 4 m either way: the oval leaves
  // room for it and the bays inside the bounds.
  const rx = W / 2 - bays - 5, rz = D / 2 - bays - 5;
  const edges = new Float32Array(W * D);
  for (let i = 0; i < W; i++) for (let j = 0; j < D; j++) {
    const x = bounds.x0 + i, z = bounds.z0 + j, box = Math.min(i, W - 1 - i, j, D - 1 - j);
    let d = box;
    if (corner) {
      // Distance in from a rounded box (only differs from `box` near the corners).
      const qx = Math.abs(x - cx) - ((W - 1) / 2 - corner), qz = Math.abs(z - cz) - ((D - 1) / 2 - corner);
      d = corner - Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) - Math.min(Math.max(qx, qz), 0);
    }
    if (round) {
      // Distance to the oval in metres, near enough: its value over its slope.
      const nx = (x - cx) / rx, nz = (z - cz) / rz, r = Math.hypot(nx, nz) || 1e-6;
      d = Math.min(box, (1 - r) * r / Math.hypot(nx / rx, nz / rz));
    }
    // A rounded island keeps its wobble inside the bounds, so the outermost
    // row isn't left in broken pieces.
    const inset = corner ? (3.5 + 0.75 * wobble) * wobble : 0;
    const edge = d - inset + ((edgeNoise(x * 0.13, z * 0.13) - 0.5) * 7 + (edgeNoise(x * 0.5 + 40, z * 0.5) - 0.5) * 1.5 * wobble) * wobble
      + (bays ? (bayNoise(x * 0.045, z * 0.045) - 0.5) * 2 * bays : 0);
    edges[i + j * W] = round ? Math.min(box, edge) : edge;
  }
  if (round) {
    const reach = (start, keep) => {
      const seen = new Uint8Array(W * D), queue = start.filter(k => keep(k));
      for (const k of queue) seen[k] = 1;
      while (queue.length) {
        const k = queue.pop(), i = k % W, j = (k - i) / W;
        for (const n of [i > 0 && k - 1, i < W - 1 && k + 1, j > 0 && k - W, j < D - 1 && k + W]) {
          if (n !== false && !seen[n] && keep(n)) { seen[n] = 1; queue.push(n); }
        }
      }
      return seen;
    };
    const land = k => edges[k] >= 0.5;
    const island = reach([Math.floor(W / 2) + Math.floor(D / 2) * W], land);
    for (let k = 0; k < edges.length; k++) if (land(k) && !island[k]) edges[k] = 0;
    const border = [];
    for (let i = 0; i < W; i++) border.push(i, i + (D - 1) * W);
    for (let j = 0; j < D; j++) border.push(j * W, W - 1 + j * W);
    const sea = reach(border, k => !land(k));
    for (let k = 0; k < edges.length; k++) if (!land(k) && !sea[k]) edges[k] = 1;
  }
  for (let i = 0; i < W; i++) for (let j = 0; j < D; j++) {
    const edge = edges[i + j * W];
    if (edge < 0.5) continue;
    const x = bounds.x0 + i, z = bounds.z0 + j;
    // Thicker towards the middle.
    const thickness = Math.min(depth, 2 + Math.pow(edge, 0.85) * 1.1 + depthNoise(x * 0.18, z * 0.18) * 4);
    const bottom = -Math.round(thickness) - 1;
    for (let y = bottom; y < 0; y++) {
      let block = 'stone';
      if (y === -1) block = surfaceAt(x, z, edge);
      else if (y >= -3 - Math.round(depthNoise(x * 0.3, z * 0.3) * 2)) block = 'dirt';
      else if (y <= bottom + 1 + Math.round(depthNoise(x * 0.4 + 9, z * 0.4) * 2)) block = 'deepslate';
      grid.set(x, y, z, block);
    }
  }
}

// Minecraft trees from log and leaf blocks: [x, z, trunk height, crown radius, leaf block].
// For many trees at a lower cost, landscape.js buildForest draws batched crowns instead.
export function buildTrees(grid, spots) {
  const r = rng(77);
  for (const [x, z, h = 5, size = 2, leaves = 'leaves'] of spots) {
    for (let y = 0; y < h; y++) grid.set(x, y, z, 'log');
    for (let dy = -1; dy <= size; dy++) {
      const rad = dy === size ? size - 1 : dy === -1 ? size - 0.5 : size;
      for (let dx = -size; dx <= size; dx++) for (let dz = -size; dz <= size; dz++) {
        const dist = Math.hypot(dx, dz);
        if (dist > rad + 0.35) continue;
        if (dist > rad - 0.6 && r() < 0.35) continue;
        const y = h - 1 + dy;
        if (dx === 0 && dz === 0 && y < h) continue;
        if (grid.get(x + dx, y, z + dz)) continue;
        grid.set(x + dx, y, z + dz, leaves);
      }
    }
  }
}
