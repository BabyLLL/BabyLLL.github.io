// Static soft contact shadows under the display furniture.
import * as THREE from 'three';

// Soft contact shadows under furniture, so nothing floats on the floor.
// `upper` is the height of the upper floor that obstacles with level 1 stand on.
export function createContactShadows(obstacles, floorAt, upper = 4) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 6, 32, 32, 32);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(0.55, 'rgba(0,0,0,.55)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(c);
  const list = obstacles.filter(o => (o.x1 - o.x0) < 7 && (o.z1 - o.z0) < 7);
  const mesh = new THREE.InstancedMesh(
    new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: texture, color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    list.length,
  );
  const m = new THREE.Matrix4();
  list.forEach((o, i) => {
    const w = o.x1 - o.x0 + 0.7, d = o.z1 - o.z0 + 0.7;
    const cx = (o.x0 + o.x1) / 2, cz = (o.z0 + o.z1) / 2;
    const y = (o.level === 1 ? upper : Math.max(0, floorAt(cx, cz))) + 0.012;
    m.makeScale(w, 1, d).setPosition(cx, y, cz);
    mesh.setMatrixAt(i, m);
  });
  mesh.renderOrder = 1;
  mesh.matrixAutoUpdate = false;
  return mesh;
}
