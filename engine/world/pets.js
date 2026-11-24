// A small indoor life for the cat, without a physics engine or runtime A*.
// Prevalidated routes are built under the loading screen. Movement changes only
// the root transform; articulated coat/limb matrices upload at 12 Hz.
// The player nearby draws attention: heads follow them, a resting dog turns round to
// face them, and a sleeping dog wakes up when the player comes close.
import * as THREE from 'three';
import { rng } from './textures.js';

// `anchors` are [x, z] places to wander between; the first is the hub every
// route starts from. `within(x, z)` keeps a pet to an area (a cat indoors),
// and `detour(points, hub, x, z)` may reroute a path around a tight corner.
export function createPetLife(cat, nav, { seed = 1989, kind = 'cat', anchors, within = () => true, detour = null, home = null } = {}) {
  const random = rng(seed);
  const dog = kind === 'dog';
  const hub = { x: anchors[0][0], z: anchors[0][1] };
  const routes = [];
  const safe = (x, z) => within(x, z) && nav.heightAt(x, z) === 0 && nav.canStand(x, z)
    && (!dog || [[-.3, 0], [.3, 0], [0, -.3], [0, .3]].every(([dx, dz]) => nav.canStand(x + dx, z + dz)));
  const validRoute = points => {
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i], n = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / 0.12);
      for (let j = 0; j <= n; j++) {
        const t = n ? j / n : 0;
        if (!safe(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return false;
      }
    }
    return true;
  };
  for (const [x, z] of anchors.slice(1)) {
    if (!safe(x, z)) continue;
    const path = nav.findPath(hub, { x, z });
    if (!path?.length) continue;
    let points = [hub, ...path];
    // A world may route round a tight spot; the whole route is checked either way.
    if (detour) points = detour(points, hub, x, z, validRoute) || points;
    if (validRoute(points)) routes.push(points.filter((p, i) => !i || Math.hypot(p.x - points[i - 1].x, p.z - points[i - 1].z) > 0.01).map(p => ({ x: p.x, z: p.z })));
  }
  // A pet starts asleep at `home` (an anchor), or at the hub.
  const sofa = home ? routes.findIndex(p => Math.hypot(p.at(-1).x - home[0], p.at(-1).z - home[1]) < 0.1) : -1;
  let place = sofa >= 0 ? sofa : -1, path = null, point = 0, targetPlace = -1;
  let state = 'sleeping', wait = dog ? 5 : 3.5, poseClock = 0, visibilityClock = 0, visible = true;
  let reducedLast = false;
  // Cosmetic choices (how to rest, where to glance) use Math.random, so the
  // seeded route and state sequence stays exactly as it was.
  let rest = dog ? 'sphinx' : 'loaf', look = 0, glance = 0, near = false;
  // The dog only ever walks or lies down; the cat loafs or sits.
  const chooseRest = () => { rest = dog ? 'sphinx' : (Math.random() < 0.55 ? 'loaf' : 'sit'); };
  const start = place >= 0 ? routes[place].at(-1) : hub;
  cat.root.position.set(start.x, 0, start.z); cat.root.rotation.y = 0.6;
  cat.update(0, { sleeping: true });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const frustum = new THREE.Frustum(), vp = new THREE.Matrix4();
  const bounds = new THREE.Sphere(new THREE.Vector3(), dog ? 1.35 : 0.9);

  function chooseRoute() {
    if (!routes.length) { wait = 20; return; }
    if (place >= 0) { path = routes[place].slice().reverse(); targetPlace = -1; }
    else { targetPlace = Math.floor(random() * routes.length); path = routes[targetPlace]; }
    // Finish getting upright before gait or route movement starts.
    point = 1; state = 'rising'; wait = dog ? 1.2 : 0.8;
  }

  function update(dt, camera = null, player = null) {
    if (reduced.matches) {
      if (!reducedLast) { reducedLast = true; cat.update(0, { sleeping: true }); }
      return;
    }
    reducedLast = false;
    visibilityClock += dt;
    if (camera && visibilityClock >= 0.2) {
      visibilityClock = 0;
      camera.updateMatrixWorld(); vp.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(vp);
      bounds.center.copy(cat.root.position); bounds.center.y += 0.3;
      visible = frustum.intersectsSphere(bounds);
    }
    if (!visible) return;
    const p = cat.root.position, dx = player ? player.pos.x - p.x : 0, dz = player ? player.pos.z - p.z : 0;
    const dist = player && player.y < 1 ? Math.hypot(dx, dz) : Infinity;
    if (dog && state === 'sleeping' && dist < 2.4) { state = 'resting'; rest = 'sphinx'; wait = 8 + Math.random() * 8; }
    if (state === 'rising') {
      wait -= dt;
      if (wait <= 0) state = 'walking';
    } else if (state === 'walking' && path) {
      const next = path[point], dx = next.x - cat.root.position.x, dz = next.z - cat.root.position.z;
      const distance = Math.hypot(dx, dz), step = Math.min(distance, dt * (dog ? 1.15 : 0.7));
      if (distance > 0.001) {
        cat.root.position.x += dx / distance * step; cat.root.position.z += dz / distance * step;
        const goal = Math.atan2(dx, dz), angle = goal - cat.root.rotation.y;
        cat.root.rotation.y += Math.atan2(Math.sin(angle), Math.cos(angle)) * Math.min(1, dt * 6);
      }
      if (distance <= step + 0.001 && ++point >= path.length) {
        place = targetPlace; path = null;
        state = random() < (dog ? 0.5 : 0.7) ? 'sleeping' : 'resting'; wait = (dog ? 6 : 10) + random() * (dog ? 24 : 30);
        if (state === 'resting') chooseRest();
      }
    } else {
      wait -= dt;
      if (wait <= 0) chooseRoute();
    }
    if (state === 'resting') {
      const toward = Math.atan2(Math.sin(Math.atan2(dx, dz) - cat.root.rotation.y), Math.cos(Math.atan2(dx, dz) - cat.root.rotation.y));
      if (dist < (dog ? 7 : 4.5)) {
        look = Math.max(-1.1, Math.min(1.1, toward));
        if (dog && rest !== 'sphinx' && Math.abs(toward) > 1.1) cat.root.rotation.y += (toward - Math.sign(toward) * 1.1) * Math.min(1, dt * 2.5);
      } else if ((glance -= dt) <= 0) { glance = 2.5 + Math.random() * 3; look = (Math.random() - 0.5) * (dog ? 1.4 : 1); }
    } else look = 0;
    near = dist < (dog ? 3.5 : 3);
    poseClock += dt;
    if (poseClock >= 1 / 12) {
      cat.update(poseClock, { moving: state === 'walking', sleeping: state === 'sleeping', rest: state === 'rising' ? 'stand' : rest, look, near });
      poseClock = 0;
    }
  }

  return { update, routes, anchors, get state() { return reduced.matches ? 'sleeping' : state; }, get visible() { return visible; }, get position() { return cat.root.position; } };
}
