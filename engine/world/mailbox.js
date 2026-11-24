// A mailbox wherever the world puts one (its MAILBOX: x, z, yaw): black steel
// on an oak post, blocky like the rest of the world. When a visitor's note goes
// out (ui/mailbox.js) the red flag swings up, and it stays up for the visit.
import * as THREE from 'three';
import * as L from '@world/layout.js';

export function createMailbox({ stage, world, at = L.MAILBOX }) {
  if (!at) return { root: null, raiseFlag() {} };
  const MAILBOX = at;
  const root = new THREE.Group();
  root.name = 'mailbox';
  const paint = color => new THREE.MeshLambertMaterial({ color });
  const steel = paint(0x1f2124), door = paint(0x2c3035), oak = paint(0xb4875a), red = paint(0xd23c3c), metal = paint(0xb8bcc2);
  const box = (parent, w, h, d, material, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z);
    mesh.castShadow = mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };
  // Post, body, and a narrower step on top standing in for the rounded lid.
  box(root, 0.12, 1.0, 0.12, oak, 0, 0.5, 0);
  box(root, 0.36, 0.3, 0.56, steel, 0, 1.15, 0);
  box(root, 0.26, 0.06, 0.56, steel, 0, 1.33, 0);
  // The door faces the beach, with its catch.
  box(root, 0.3, 0.26, 0.02, door, 0, 1.16, 0.285);
  box(root, 0.08, 0.025, 0.03, metal, 0, 1.25, 0.3);
  // The flag hinges near the back of the right side: lying forward along the
  // box while it waits, upright once a note has gone.
  const flag = new THREE.Group();
  flag.position.set(0.195, 1.08, -0.2);
  box(flag, 0.02, 0.24, 0.04, red, 0, 0.12, 0);
  box(flag, 0.02, 0.07, 0.1, red, 0, 0.21, 0.07);
  const DOWN = Math.PI / 2;
  flag.rotation.x = DOWN;
  root.add(flag);
  root.position.set(MAILBOX.x, 0, MAILBOX.z);
  root.rotation.y = MAILBOX.yaw;
  stage.scene.add(root);
  // Walked round, not through.
  world.obstacles.push({ x0: MAILBOX.x - 0.25, x1: MAILBOX.x + 0.25, z0: MAILBOX.z - 0.35, z1: MAILBOX.z + 0.35, level: 0 });

  let raised = false;
  function raiseFlag() {
    if (raised) return;
    raised = true;
    const start = performance.now();
    const step = now => {
      const t = Math.min(1, (now - start) / 600);
      // Ease out past upright and back, like a sprung arm.
      const e = 1 + 2.2 * (t - 1) ** 3 + 1.2 * (t - 1) ** 2;
      flag.rotation.x = DOWN * (1 - e);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  return { root, raiseFlag };
}
