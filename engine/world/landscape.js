// Woodland, grass and sea. Trees are layered box crowns that share one opaque
// instanced draw however many there are; grass and flowers are crossed cards
// that sway, one draw for any number; the sea is one flat sheet.
import * as THREE from 'three';
import { BoxBatch } from './blocks.js';
import { rng } from './textures.js';

// `spots` is a list of [x, z] block positions; a spot off the island slides inland.
export function buildForest(grid, layer, spots = []) {
  const batch = new BoxBatch(layer), r = rng(716), treeBounds = [], tops = [];
  for (let i = 0; i < spots.length; i++) {
    let [gx, gz] = spots[i];
    while (!grid.get(gx, -1, gz)) { gx += Math.sign(-gx); gz += Math.sign(-gz); }
    const x = gx + .5, z = gz + .5;
    const trunk = 4.2 + r() * 1.4, width = 4.9 + r() * 1.2;
    const green = { tex: 'hedge', tint: [0x8daa91, 0xa8bd98, 0x9eb79b][i % 3] };
    batch.box(x, 0, z, .8, trunk + .35, .8, { tex: 'log', top: 'log_top' });
    const crowns = [
      [x, trunk - .25, z, width, 1.85, width * .91],
      [x + .42, trunk + 1.25, z - .28, width * .78, 1.7, width * .83],
      [x - .24, trunk + 2.7, z + .25, width * .47, 1.1, width * .52],
      [x - width * .34, trunk + .65, z + .6, width * .42, 1.45, width * .58],
    ];
    for (const [cx, y, cz, w, h, d] of crowns) {
      batch.box(cx, y, cz, w, h, d, green);
      // Coarse, invisible voxel bounds keep cameras out of the crowns; they
      // also put the grove on the map, without drawing separate leaf voxels.
      grid.fill(Math.floor(cx-w/2), Math.floor(y), Math.floor(cz-d/2), Math.ceil(cx+w/2), Math.round(y+h), Math.ceil(cz+d/2), 'hedge', 'forestCollision');
      // Each crown's top is ground too, at the height of its collision bounds.
      tops.push({ x0: Math.floor(cx - w / 2), x1: Math.ceil(cx + w / 2), z0: Math.floor(cz - d / 2), z1: Math.ceil(cz + d / 2), y: Math.round(y + h), site: 'tree' });
    }
    for (let y = 0; y < Math.ceil(trunk); y++) grid.set(gx, y, gz, 'log', 'forestCollision');
    treeBounds.push({ x, z, height: trunk + 3.8 });
  }
  return { batch, treeBounds, tops };
}

// Grass and flowers: `tufts` is a list of { x, z, tile, y = 0, tint = white,
// s = 1 (size in metres), ry = random turn }, tile one of tall_grass,
// flower_red, flower_white, flower_violet. Returns one mesh for `planes`.
export function buildTufts(layer, materials, tufts, name = 'tufts') {
  const plane = new THREE.PlaneGeometry(1, 1).translate(0, .5, 0), other = plane.clone().rotateY(Math.PI / 2);
  const cross = new THREE.BufferGeometry();
  cross.setAttribute('position', new THREE.Float32BufferAttribute([...plane.attributes.position.array, ...other.attributes.position.array], 3));
  cross.setAttribute('uv', new THREE.Float32BufferAttribute([...plane.attributes.uv.array, ...other.attributes.uv.array], 2));
  cross.setAttribute('normal', new THREE.Float32BufferAttribute(Array.from({ length: 24 }, (_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  cross.setIndex([...plane.index.array, ...Array.from(other.index.array, k => k + 4)]);
  const layers = new Float32Array(tufts.length * 3);
  tufts.forEach((t, k) => layers.fill(layer[t.tile], k * 3, k * 3 + 3));
  cross.setAttribute('iLayers', new THREE.InstancedBufferAttribute(layers, 3));
  const mesh = new THREE.InstancedMesh(cross, materials.cross, tufts.length), r = rng(311);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), colour = new THREE.Color();
  tufts.forEach((t, k) => {
    q.setFromAxisAngle(up, t.ry ?? r() * Math.PI);
    mesh.setMatrixAt(k, m.compose(new THREE.Vector3(t.x, t.y || 0, t.z), q, new THREE.Vector3(t.s ?? 1, t.s ?? 1, t.s ?? 1)));
    mesh.setColorAt(k, colour.set(t.tint ?? 0xffffff));
  });
  mesh.name = name; mesh.receiveShadow = true; mesh.computeBoundingSphere();
  mesh.onBeforeRender = () => { materials.uniforms.uTime.value = performance.now() / 1000; };
  return mesh;
}

export function createSea(scene, hole = null) {
  // One broad sheet reaching far past the fog, with an optional hole (a pool
  // whose floor lies below sea level must not show the sea through its
  // water). No reflections, ripples or particles. Only after a very long
  // flight out does a plain sheet without the hole travel with the camera.
  const R = 4000, quads = hole ? [[-R, R, -R, hole.z0], [-R, R, hole.z1, R], [-R, hole.x0, hole.z0, hole.z1], [hole.x1, R, hole.z0, hole.z1]] : [[-R, R, -R, R]];
  const position = [], index = [];
  quads.forEach(([ax, bx, az, bz], i) => {
    position.push(ax, 0, az, bx, 0, az, bx, 0, bz, ax, 0, bz);
    index.push(i * 4, i * 4 + 2, i * 4 + 1, i * 4, i * 4 + 3, i * 4 + 2);
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  geometry.setIndex(index);
  const material = new THREE.MeshBasicMaterial({ color: 0x3a8991, fog: true });
  const sea = new THREE.Mesh(geometry, material), open = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), material);
  sea.name = 'coastal-sea'; sea.position.y = -1.08;
  open.name = 'open-sea'; open.rotation.x = -Math.PI / 2; open.position.y = -1.08; open.visible = false;
  scene.add(sea, open);
  let mood = 'day', overcast = 0;
  const tones = { dawn: 0x526f70, morning: 0x538f94, day: 0x3a8991, dusk: 0x5c7071, night: 0x123b3e };
  const cloudTone = new THREE.Color(0x526f72);
  const update = () => { sea.material.color.setHex(tones[mood]); if (mood !== 'night') sea.material.color.lerp(cloudTone, .65 * overcast); };
  return {
    sea, setMood(name) { mood = name; update(); },
    // How much of the sky is overcast, 0 to 1.
    setWeather(cloud) { overcast = Math.max(0, Math.min(1, Number(cloud) || 0)); update(); },
    follow(camera) {
      const far = Math.max(Math.abs(camera.position.x), Math.abs(camera.position.z)) > R - 900;
      sea.visible = !far; open.visible = far;
      if (far) { open.position.x = camera.position.x; open.position.z = camera.position.z; }
    },
  };
}
