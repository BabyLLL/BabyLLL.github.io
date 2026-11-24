// A Vertec in the gym: a stack of swivelling vanes on a pole. Jump beside it
// and the raised hand knocks aside every vane it passes on the way up, so the
// top vane that swung marks how high he reached. A few seconds after he lands
// they swing back into line, top first. One instanced draw; matrices upload
// only while a vane moves.
import * as THREE from 'three';
import { VERTEC } from './layout.js';

// Vanes every 4 cm, only the upper half of the usual stack: he jumps well past
// the lower ones. The first sits 77 cm above his standing reach. HAND is his hand above
// his feet with the arm straight up (shoulder 22 px + 11.5 px of arm).
const COUNT = 17, LOW = 2.64, GAP = 0.04, LENGTH = 0.55, HAND = 1.87;

export function createVertec({ avatar, sound }) {
  const geometry = new THREE.BoxGeometry(LENGTH, 0.016, 0.04).translate(LENGTH / 2, 0, 0);
  const mesh = new THREE.InstancedMesh(geometry, new THREE.MeshLambertMaterial(), COUNT);
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(VERTEC.x, LOW + COUNT * GAP / 2, VERTEC.z), Math.hypot(LENGTH, COUNT * GAP / 2) + 0.05);
  // Red every sixth vane and blue halfway between, as on the real thing.
  const red = new THREE.Color(0xd23a2e), blue = new THREE.Color(0x2c5cb4), white = new THREE.Color(0xf0eee6);
  const vanes = Array.from({ length: COUNT }, (_, i) => {
    mesh.setColorAt(i, i % 6 === 0 ? red : i % 3 === 0 ? blue : white);
    return { y: LOW + i * GAP, angle: 0, speed: 0, goal: 0 };
  });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), at = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1);
  function draw() {
    vanes.forEach((v, i) => mesh.setMatrixAt(i, m.compose(at.set(VERTEC.x, v.y, VERTEC.z), q.setFromAxisAngle(up, VERTEC.yaw + v.angle), one)));
    mesh.instanceMatrix.needsUpdate = true;
  }
  draw();

  // Where the vanes' tips rest, and which way a positive swing moves them.
  const tip = { x: VERTEC.x + Math.cos(VERTEC.yaw) * LENGTH, z: VERTEC.z - Math.sin(VERTEC.yaw) * LENGTH };
  const swing = { x: -Math.sin(VERTEC.yaw), z: -Math.cos(VERTEC.yaw) };
  let jump = null, grounded = true, settled = 0;

  function update(dt, player) {
    const air = player.mode === 'air', { x, z } = player.pos;
    // A jump from the floor right under the vanes: he reaches with the arm on
    // their side, and knocks them away from himself.
    if (air && grounded && Math.hypot(x - tip.x, z - tip.z) < 0.9) {
      const h = player.heading, right = (tip.x - x) * -Math.cos(h) + (tip.z - z) * Math.sin(h);
      avatar.reach(right >= 0 ? 'R' : 'L');
      const side = (x - VERTEC.x) * swing.x + (z - VERTEC.z) * swing.z;
      jump = { spin: side > 0 ? -1 : 1, top: player.y, extra: Math.random() * 0.05 };
    }
    grounded = player.mode === 'ground';
    if (jump && !air) jump = null;
    else if (jump && player.y >= jump.top) {
      jump.top = player.y;
      const hand = player.y + HAND + jump.extra;
      let hits = 0;
      for (const v of vanes) {
        if (v.goal || v.y > hand) continue;
        v.goal = jump.spin * (1.2 + Math.random() * 0.6); v.speed = jump.spin * 12; hits++;
      }
      if (hits) sound.play('vane');
    } else if (jump) jump.top = Infinity; // Past the peak, the hand reaches no further.

    if (!jump && vanes.some(v => v.goal)) {
      settled += dt;
      const from = COUNT - Math.floor((settled - 3.5) * 30);
      if (settled > 3.5) vanes.forEach((v, i) => { if (i >= from) v.goal = 0; });
    } else settled = 0;

    // A loose spring: each vane flicks past its stop and wobbles to rest.
    let moving = false;
    for (const v of vanes) {
      if (v.angle === v.goal && !v.speed) continue;
      v.speed += (90 * (v.goal - v.angle) - 9 * v.speed) * dt;
      v.angle += v.speed * dt;
      if (Math.abs(v.goal - v.angle) < 1e-3 && Math.abs(v.speed) < 1e-2) { v.angle = v.goal; v.speed = 0; }
      moving = true;
    }
    if (moving) draw();
  }

  return { mesh, update, get reached() { return vanes.filter(v => v.goal).length; } };
}
