// Floor-grown indoor plants. Stepped, solid leaf silhouettes join the furniture
// batch: no pots, alpha layers, new textures, lights or per-frame plant work.
import * as THREE from 'three';
import { BoxBatch } from '@engine/world/blocks.js';
import { LOFT } from './layout.js';

export const FLOOR_PLANTS = [
  // At the sofa's south arm, balancing the floor lamp at its north end.
  { id: 'lounge', kind: 'money', x: 3.15, z: -.6, height: 2.7, width: 1.58, yaw: .35 },
  // Beyond the desks' working/chair area, below the framed keepsakes.
  { id: 'work', kind: 'monstera', x: 7.8, z: -9.45, height: 2.5, width: 1.62, yaw: -.6 },
  // The east glazing, clear of the island return, stools and dining chairs.
  { id: 'dining', kind: 'bird', x: 22.5, z: 10.2, height: 2.75, width: 1.52, yaw: .35 },
  // The sideboard's free end, not in front of the coffee machine or entry.
  { id: 'coffee', kind: 'money', x: 11.6, z: 14.5, height: 2.65, width: 1.45, yaw: .7 },
  // Beside the bed's west aisle; keep the glass entry and wardrobe clear.
  { id: 'bedroom', kind: 'fig', x: -17.35, z: -6.25, y: LOFT.y, level: 1, height: 2.65, width: 1.42, yaw: .8 },
  // Unequal terrace placements frame the seating, rather than guard the door.
  { id: 'terrace-east', kind: 'bird', x: 21.4, z: 18.8, height: 2.68, width: 1.48, yaw: -.3 },
  { id: 'terrace-west', kind: 'monstera', x: -17.2, z: 19.1, height: 2.5, width: 1.56, yaw: -.4 },
];

const bark = { tex: 'log', top: 'log_top', tint: 0xc3b29a };
const green = tint => ({ tex: 'paint', tint });
const stemLook = green(0x4a7141);
const up = new THREE.Vector3(0, 1, 0);

function stem(B, a, b, thickness = .035, look = stemLook) {
  const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
  const direction = end.clone().sub(start), length = direction.length();
  const middle = start.add(end).multiplyScalar(.5);
  const rotation = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(up, direction.normalize()));
  B.box(middle.x, middle.y - length / 2, middle.z, thickness, length, thickness, look,
    { rx: rotation.x, ry: rotation.y, rz: rotation.z });
}

// Leaves have visible stepped edges and a midrib instead of leafy cubes. Pitch
// rotates the whole leaf, keeping every band and vein connected to its petiole.
function leaf(B, base, length, width, yaw, pitch, shape, tint) {
  const pose = new THREE.Matrix4().compose(new THREE.Vector3(...base),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ')), new THREE.Vector3(1, 1, 1));
  B.stack.push(B.stack[B.stack.length - 1].clone().multiply(pose));
  const look = green(tint), vein = green(0x73915a);
  if (shape === 'split') {
    // Open notches between paired lobes read as a Monstera's split leaf edge.
    B.box(0, 0, length * .47, width * .24, .026, length * .94, look);
    for (let i = 0; i < 4; i++) {
      const t = .15 + i * .2, span = width * [.39, .5, .43, .26][i];
      for (const side of [-1, 1]) B.box(side * span * .5, 0, length * t,
        span, .026, length * .135, look, { ry: side * -.23 });
    }
  } else {
    const bands = shape === 'fig' ? [.5, .84, .68, 1, .9, .48] :
      shape === 'paddle' ? [.4, .82, 1, 1, .8, .35] : [.4, .83, 1, .78, .3];
    bands.forEach((fraction, i) => B.box(0, 0, length * (i + .5) / bands.length,
      width * fraction, .027, length / bands.length + .003, look));
  }
  B.box(0, .028, length * .45, .012, .008, length * .88, vein);
  B.stack.pop();
}

function money(B) {
  stem(B, [0, -.06, 0], [.025, .82, 0], .13, bark);
  stem(B, [.025, .7, 0], [-.025, 1.55, .03], .085, bark);
  // Distinct palmately arranged leaflets, in a few open, asymmetric clusters.
  for (const [x, y, z, turn] of [[-.27, 1.44, .05, .3], [.26, 1.64, -.08, 1.2], [-.04, 1.97, .03, -.2], [.12, 1.33, .3, 2.2], [-.15, 1.78, -.22, .8]]) {
    stem(B, [0, y - .38, 0], [x, y, z], .04, bark);
    for (let i = 0; i < 5; i++) {
      const a = turn + i * Math.PI * 2 / 5;
      leaf(B, [x, y, z], .38 + (i % 2) * .035, .19, a, .6 + (i % 3) * .16, 'oval',
        [0x477b43, 0x53864b, 0x3e7040][i % 3]);
    }
  }
}

function fig(B) {
  stem(B, [0, -.06, 0], [.02, 1.85, 0], .09, bark);
  for (let i = 0; i < 9; i++) {
    const a = i * 2.38, y = .72 + i * .15, r = .12;
    const point = [Math.sin(a) * r, y + .11, Math.cos(a) * r];
    stem(B, [0, y - .08, 0], point, .028);
    leaf(B, point, .44 + (i % 3) * .035, .32, a, -.48 + (i % 2) * .18, 'fig',
      [0x3d7044, 0x477b48, 0x53814c][i % 3]);
  }
}

function bird(B) {
  // Tall individual petioles and paddle leaves, arranged in an open fan.
  for (const [x, y, z, turn, pitch, length] of [
    [-.32, 1.13, .06, -1.1, -.85, .78], [.3, 1.18, -.04, 1.15, -.9, .8],
    [-.12, 1.55, -.08, -.4, -1.08, .76], [.12, 1.62, .06, .5, -1.13, .75],
    [0, 1.31, .22, .1, -.72, .8], [.12, .85, -.2, 2.7, -.65, .74],
  ]) {
    stem(B, [x * .18, -.045, z * .18], [x, y, z], .04);
    leaf(B, [x, y, z], length, .4, turn, pitch, 'paddle', y > 1.5 ? 0x4f8549 : 0x3b7545);
  }
}

function monstera(B) {
  stem(B, [0, -.05, 0], [.02, 1.02, -.03], .075);
  for (let i = 0; i < 7; i++) {
    const a = i * 2.4, y = .8 + (i % 4) * .24, r = .19;
    const point = [Math.sin(a) * r, y, Math.cos(a) * r];
    stem(B, [0, Math.max(.02, y - .8), 0], point, .035);
    leaf(B, point, .57 + (i % 2) * .08, .49, a, -.72 + (i % 3) * .14, 'split',
      [0x326a40, 0x3e7747, 0x477c46][i % 3]);
  }
}

const shapes = { money, fig, bird, monstera };
const unit = new THREE.Box3(new THREE.Vector3(-.5, -.5, -.5), new THREE.Vector3(.5, .5, .5));

export function buildFloorPlants(batch, foot) {
  for (const plant of FLOOR_PLANTS) {
    const local = new BoxBatch(batch.layer);
    shapes[plant.kind](local);
    const bounds = new THREE.Box3();
    for (const item of local.items.opaque) bounds.union(unit.clone().applyMatrix4(item.matrix));
    const spread = Math.max(Math.abs(bounds.min.x), Math.abs(bounds.max.x), Math.abs(bounds.min.z), Math.abs(bounds.max.z));
    const scale = new THREE.Vector3(plant.width / (spread * 2), plant.height / bounds.max.y, plant.width / (spread * 2));
    const placement = new THREE.Matrix4().compose(new THREE.Vector3(plant.x, plant.y || 0, plant.z),
      new THREE.Quaternion().setFromAxisAngle(up, plant.yaw), scale);
    for (const item of local.items.opaque) {
      item.matrix.premultiply(placement); item.tag = `plant:${plant.id}`;
      batch.items.opaque.push(item);
    }
    // Only the trunk/clump blocks feet, rather than an invisible planter box.
    const base = plant.kind === 'money' || plant.kind === 'fig' ? .38 : .56;
    foot(plant.x, plant.z, base, base, plant.level || 0);
  }
}
