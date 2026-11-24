// A small straight metal ladder fixed to the east wall, like a game ladder.
// It has no stair flights, turning platform or freestanding support structure.
import * as THREE from 'three';
import { BoxBatch } from '@engine/world/blocks.js';
import { ROOF_LADDER as S } from './layout.js';

export function buildRoofAccess(layer, materials) {
  const group = new THREE.Group(); group.name = 'roof-access';
  const batch = new BoxBatch(layer), steel = { tex: 'steel', tint: 0xc1c6c3 };
  for (const z of [S.z - .65, S.z + .65]) batch.box(25.13, 0, z, .09, S.top + .7, .09, steel, { shadow: false });
  for (let y = .3; y < S.top + .3; y += .34) batch.box(25.23, y, S.z, .13, .085, 1.3, steel, { shadow: false });
  for (const y of [.6, 4, 7.5, 10.4]) for (const z of [S.z - .65, S.z + .65]) batch.box(25.07, y, z, .24, .08, .08, steel, { shadow: false });
  // A short flush lip meets the roof edge without drawing over its top face.
  batch.box(25.3, S.top - .14, S.z, .6, .14, 1.5, { tex: 'travertine' }, { shadow: false });
  for (const mesh of batch.build(materials)) group.add(mesh);
  const foot = { x: S.x, y: 0, z: S.z }, exit = { x: 24.35, y: S.top, z: S.z, site: 'roof' };
  const ladder = { x: S.x, z: S.z, bottom: 0, top: S.top, foot, exit, site: 'roof-ladder' };
  const bounds = new THREE.Box3(new THREE.Vector3(25.04, 0, S.z - .75), new THREE.Vector3(25.6, S.top + .7, S.z + .75));
  const point = new THREE.Vector3();
  function ladderAt(x, y, z) {
    return x >= (y >= S.top - .7 ? 24.05 : 24.95) && x <= S.x + .7 && Math.abs(z - S.z) < .85 && y >= -.1 && y <= S.top + .2 ? ladder : null;
  }
  function route(ax, ay, az, bx, by, bz) {
    const up = by > ay;
    if (ay < .7 && by < .7) return [{ x: bx, y: by, z: bz }];
    if (ay >= S.top - .1 && by >= S.top - .1) return [{ x: bx, y: by, z: bz }];
    const out = up
      ? [{ ...foot }, { ...foot, y: S.top, ladder: true }, { ...exit }]
      : [{ ...exit }, { ...foot, y: 0, ladder: true }, { ...foot }];
    if (ay > .7 && ay < S.top - .1) out.shift();
    if (by >= .7) out.push({ x: bx, y: by, z: bz });
    return out;
  }
  return {
    group, foot, exit, ladder, ladderAt, route,
    levels(x, z, out) {
      if (x >= 25 && x <= 25.6 && Math.abs(z - S.z) <= .75) out.push({ y: S.top, site: 'roof', tread: true });
    },
    // The narrow rails do not block entry into the climbing volume.
    collides(x, feet, z) { return x + .3 > 25 && x - .3 < 25.6 && Math.abs(z - S.z) < 1.05 && feet < S.top - .02 && feet + 1.8 > S.top - .14; },
    pick(ray) {
      if (!ray.intersectBox(bounds, point)) return null;
      return { t: point.distanceTo(ray.origin), point: point.clone(), site: 'roof-ladder' };
    },
  };
}
