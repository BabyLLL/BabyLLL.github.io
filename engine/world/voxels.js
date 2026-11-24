// A small voxel grid with Minecraft-style "smooth lighting": every face vertex
// is darkened by the blocks touching that corner. Faces between solid blocks are
// skipped, and each hideable group (a wall side, the roof) meshes on its own so
// the camera can cut it away without leaving holes in what stays.
import * as THREE from 'three';

// Face directions: normal n, in-plane axes u and v (u × v = n), corner origin.
const FACES = [
  { n: [1, 0, 0], u: [0, 0, -1], v: [0, 1, 0], o: [1, 0, 1], side: 'side' },
  { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0], o: [0, 0, 0], side: 'side' },
  { n: [0, 1, 0], u: [1, 0, 0], v: [0, 0, -1], o: [0, 1, 1], side: 'top' },
  { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1], o: [0, 0, 0], side: 'bottom' },
  { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0], o: [0, 0, 1], side: 'side' },
  { n: [0, 0, -1], u: [-1, 0, 0], v: [0, 1, 0], o: [1, 0, 0], side: 'side' },
];
const CORNERS = [[0, 0], [1, 0], [1, 1], [0, 1]];
const AO_CURVE = [0.5, 0.68, 0.84, 1];

export class VoxelGrid {
  constructor({ min, size }) {
    this.min = min;
    this.size = size;
    this.blocks = new Uint8Array(size[0] * size[1] * size[2]);
    this.groups = new Uint8Array(size[0] * size[1] * size[2]);
    this.types = [null];
    this.typeIndex = new Map();
    this.groupNames = ['static'];
  }

  define(name, def) {
    this.typeIndex.set(name, this.types.length);
    this.types.push({ name, kind: 'opaque', ...def });
  }

  group(name) {
    let i = this.groupNames.indexOf(name);
    if (i < 0) { i = this.groupNames.length; this.groupNames.push(name); }
    return i;
  }

  index(x, y, z) {
    const i = x - this.min[0], j = y - this.min[1], k = z - this.min[2];
    if (i < 0 || j < 0 || k < 0 || i >= this.size[0] || j >= this.size[1] || k >= this.size[2]) return -1;
    return i + this.size[0] * (j + this.size[1] * k);
  }

  set(x, y, z, name, group = 'static') {
    const i = this.index(x, y, z);
    if (i < 0) return;
    this.blocks[i] = name ? this.typeIndex.get(name) : 0;
    this.groups[i] = this.group(group);
  }

  get(x, y, z) {
    const i = this.index(x, y, z);
    return i < 0 ? 0 : this.blocks[i];
  }

  // Fill the half-open box [x0, x1) × [y0, y1) × [z0, z1).
  fill(x0, y0, z0, x1, y1, z1, name, group) {
    for (let x = x0; x < x1; x++) for (let y = y0; y < y1; y++) for (let z = z0; z < z1; z++) this.set(x, y, z, name, group);
  }

  type(x, y, z) { return this.types[this.get(x, y, z)]; }

  // Nothing anywhere in the column below this block: the bottom of the ground.
  emptyBelow(x, y, z) {
    for (let yy = y - 1; yy >= this.min[1]; yy--) if (this.get(x, yy, z)) return false;
    return true;
  }
  opaqueAt(x, y, z) {
    const t = this.type(x, y, z);
    return !!t && t.kind === 'opaque' && !t.noOcclude;
  }

  // Walk a ray through the grid (Amanatides–Woo) to the first block that
  // `solid(type, groupName)` accepts. Returns the hit point and face normal.
  raycast(origin, dir, maxDist, solid) {
    let x = Math.floor(origin.x), y = Math.floor(origin.y), z = Math.floor(origin.z);
    const sx = Math.sign(dir.x), sy = Math.sign(dir.y), sz = Math.sign(dir.z);
    const inv = v => (v === 0 ? Infinity : Math.abs(1 / v));
    const tdx = inv(dir.x), tdy = inv(dir.y), tdz = inv(dir.z);
    const frac = (o, s) => (s > 0 ? Math.floor(o) + 1 - o : o - Math.floor(o));
    let tx = dir.x === 0 ? Infinity : frac(origin.x, sx) * tdx;
    let ty = dir.y === 0 ? Infinity : frac(origin.y, sy) * tdy;
    let tz = dir.z === 0 ? Infinity : frac(origin.z, sz) * tdz;
    let t = 0, normal = [0, 0, 0];
    for (let i = 0; i < 600 && t <= maxDist; i++) {
      const idx = this.index(x, y, z);
      if (idx >= 0 && this.blocks[idx]) {
        const type = this.types[this.blocks[idx]];
        if (solid(type, this.groupNames[this.groups[idx]])) {
          return { t, x: origin.x + dir.x * t, y: origin.y + dir.y * t, z: origin.z + dir.z * t, normal, type, cell: [x, y, z] };
        }
      }
      if (tx < ty && tx < tz) { t = tx; tx += tdx; x += sx; normal = [-sx, 0, 0]; }
      else if (ty < tz) { t = ty; ty += tdy; y += sy; normal = [0, -sy, 0]; }
      else { t = tz; tz += tdz; z += sz; normal = [0, 0, -sz]; }
    }
    return null;
  }

  // Build one mesh per (group, render kind). Returns { groupName: [meshes] }.
  build(materials, layer) {
    const buckets = new Map();
    const bucket = (g, kind) => {
      const key = g + ':' + kind;
      if (!buckets.has(key)) buckets.set(key, { g, kind, pos: [], nor: [], uv: [], lay: [], col: [], idx: [], surfaces: new Map() });
      return buckets.get(key);
    };
    const [sx, sy, sz] = this.size;
    const tint = new THREE.Color();
    for (let k = 0; k < sz; k++) for (let j = 0; j < sy; j++) for (let i = 0; i < sx; i++) {
      const cell = i + sx * (j + sy * k);
      const id = this.blocks[cell];
      if (!id) continue;
      const t = this.types[id];
      const g = this.groups[cell];
      const x = i + this.min[0], y = j + this.min[1], z = k + this.min[2];
      for (let f = 0; f < 6; f++) {
        const face = FACES[f];
        const nx = x + face.n[0], ny = y + face.n[1], nz = z + face.n[2];
        const ni = this.index(nx, ny, nz);
        const nid = ni < 0 ? 0 : this.blocks[ni];
        if (nid) {
          const nt = this.types[nid];
          const ng = this.groups[ni];
          // An opaque neighbour hides this face, unless it belongs to a group the
          // camera may cut away; then the face stays so no hole is left behind.
          if (nt.kind === 'opaque' && (ng === g || ng === 0)) continue;
          if (nt.kind !== 'opaque' && nid === id && t.kind !== 'cutout') continue;
        }
        if (t.skipFace && t.skipFace(f, x, y, z, this)) continue;
        // The underside of the ground lies in the sea, which hides it.
        if (f === 3 && y < -1 && this.emptyBelow(x, y, z)) continue;
        const b = bucket(g, t.kind);
        const base = b.pos.length / 3;
        const texName = typeof t.tex === 'function' ? t.tex(face, x, y, z, f) : (t.tex[face.side] ?? t.tex.all);
        const lay = layer[texName];
        tint.set(t.tint ?? 0xffffff);
        // Draw a run of faces as rectangles instead of separate cube faces.
        const merge = () => {
          const p = [x + face.o[0], y + face.o[1], z + face.o[2]];
          const dot = a => p[0] * a[0] + p[1] * a[1] + p[2] * a[2];
          const depth = dot(face.n), u = dot(face.u), v = dot(face.v);
          const key = `${f}:${depth}:${lay}:${t.tint ?? 0xffffff}`;
          if (!b.surfaces.has(key)) b.surfaces.set(key, { face, depth, lay, color: [tint.r, tint.g, tint.b], cells: new Map() });
          b.surfaces.get(key).cells.set(`${u},${v}`, [u, v]);
        };
        // Keep the collision grid, but draw a continuous wall/floor/window as rectangles.
        if (t.merge) { merge(); continue; }
        const ao = [];
        for (let c = 0; c < 4; c++) {
          const [cu, cv] = CORNERS[c];
          let level = 3;
          if (t.kind !== 'glass') {
            const du = cu ? 1 : -1, dv = cv ? 1 : -1;
            const fx = nx, fy = ny, fz = nz;
            const s1 = this.opaqueAt(fx + face.u[0] * du, fy + face.u[1] * du, fz + face.u[2] * du);
            const s2 = this.opaqueAt(fx + face.v[0] * dv, fy + face.v[1] * dv, fz + face.v[2] * dv);
            const cr = this.opaqueAt(fx + face.u[0] * du + face.v[0] * dv, fy + face.u[1] * du + face.v[1] * dv, fz + face.u[2] * du + face.v[2] * dv);
            level = s1 && s2 ? 0 : 3 - (s1 + s2 + cr);
          }
          ao.push(level);
        }
        // An opaque face in open air (no corner shading) looks the same merged:
        // open ground becomes a few large rectangles instead of one per block.
        if (t.kind === 'opaque' && ao[0] === 3 && ao[1] === 3 && ao[2] === 3 && ao[3] === 3) { merge(); continue; }
        for (let c = 0; c < 4; c++) {
          const [cu, cv] = CORNERS[c];
          b.pos.push(x + face.o[0] + face.u[0] * cu + face.v[0] * cv, y + face.o[1] + face.u[1] * cu + face.v[1] * cv, z + face.o[2] + face.u[2] * cu + face.v[2] * cv);
          b.nor.push(...face.n);
          b.uv.push(cu, cv);
          b.lay.push(lay);
          const a = AO_CURVE[ao[c]];
          b.col.push(tint.r * a, tint.g * a, tint.b * a);
        }
        // Flip the diagonal where it would otherwise streak the occlusion.
        if (ao[0] + ao[2] < ao[1] + ao[3]) b.idx.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
        else b.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
      }
    }
    const out = {};
    for (const b of buckets.values()) {
      for (const { face, depth, lay, color, cells } of b.surfaces.values()) {
        const starts = [...cells.values()].sort((a, c) => a[1] - c[1] || a[0] - c[0]);
        for (const [u, v] of starts) {
          if (!cells.has(`${u},${v}`)) continue;
          let w = 1, h = 1;
          while (cells.has(`${u + w},${v}`)) w++;
          rows: while (true) {
            for (let a = 0; a < w; a++) if (!cells.has(`${u + a},${v + h}`)) break rows;
            h++;
          }
          for (let a = 0; a < w; a++) for (let c = 0; c < h; c++) cells.delete(`${u + a},${v + c}`);
          const base = b.pos.length / 3;
          for (const [cu, cv] of CORNERS) {
            for (let axis = 0; axis < 3; axis++) b.pos.push(face.n[axis] * depth + face.u[axis] * (u + cu * w) + face.v[axis] * (v + cv * h));
            b.nor.push(...face.n);
            b.uv.push(cu * w, cv * h);
            b.lay.push(lay);
            b.col.push(...color);
          }
          b.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
        }
      }
      if (!b.idx.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
      geo.setAttribute('tileUv', new THREE.Float32BufferAttribute(b.uv, 2));
      geo.setAttribute('tileLayer', new THREE.Float32BufferAttribute(b.lay, 1));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(b.col, 3));
      geo.setIndex(b.idx);
      geo.computeBoundingSphere();
      const material = b.kind === 'glass' ? materials.voxelGlass : b.kind === 'cutout' ? materials.voxelCutout : materials.voxel;
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = b.kind !== 'glass';
      mesh.receiveShadow = b.kind !== 'glass';
      if (b.kind === 'cutout') mesh.customDepthMaterial = materials.voxelDepth;
      if (b.kind === 'glass') mesh.renderOrder = 2;
      mesh.matrixAutoUpdate = false;
      const name = this.groupNames[b.g];
      mesh.userData.group = name;
      (out[name] ||= []).push(mesh);
    }
    return out;
  }
}
