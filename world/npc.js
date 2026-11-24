// Xiaoguai: the owner's girlfriend, in the world as a pixel character with
// her own skin. She wanders the house's open floor, often sits on the sofa
// for a while, and when the player comes close she stops, turns to face them
// (waving the first time), and the prompt that opens her page follows her.
// Her station lives in layout.js's STATIONS; this module moves its `at` so
// the engine's distance checks track her — no engine changes needed.
import { createAvatar } from '@engine/world/avatar.js';
import { XIAOGUAI, STATIONS } from './layout.js';

const SPEED = 1.35, NEAR = 2.6;
// Sitting: hips at the seat top means the root dips below the floor a touch,
// and both legs fold forward at the hip.
const SIT_DY = -0.05, SIT_LEG = -1.45;

export function createXiaoguai({ stage, nav, player, sound }) {
  const avatar = createAvatar(XIAOGUAI.skin);
  stage.scene.add(avatar.root, avatar.blob);

  const station = STATIONS.find(s => s.id === 'xiaoguai');
  const anchors = XIAOGUAI.anchors;
  const sofa = { x: XIAOGUAI.sofa[0], z: XIAOGUAI.sofa[1] };
  // She starts beside the sofa, facing the room.
  const pos = { x: sofa.x, z: sofa.z + 1.6 };
  let heading = Math.PI;
  let path = null, way = 0, goal = null, mode = 'idle', timer = 2, sitting = false;
  let waved = false, lastWave = -30;

  function go(target) {
    const p = nav.findPath(pos, target);
    if (p && p.length) { path = p; way = 0; goal = target; mode = 'walk'; }
    else timer = 1 + Math.random() * 2; // unreachable: try again later
  }

  function pickNext() {
    // About half the time she heads for the sofa; arriving, she often sits.
    const target = Math.random() < 0.45
      ? { x: sofa.x, z: sofa.z, sofa: true }
      : anchors[Math.floor(Math.random() * anchors.length)];
    go(target);
  }

  function update(dt, player, now) {
    const dx = player.pos.x - pos.x, dz = player.pos.z - pos.z;
    const near = Math.hypot(dx, dz) < NEAR;

    // Company first: whatever she was doing, she stops and turns.
    if (near) {
      if (sitting) { sitting = false; }
      if (mode !== 'greet') { path = null; mode = 'greet'; }
      heading = Math.atan2(dx, dz);
      if (!waved && now - lastWave > 12) {
        avatar.wave();
        if (sound) sound.play('click');
        waved = true; lastWave = now;
      }
    } else if (mode === 'greet') {
      mode = 'idle'; timer = 0.6; waved = false;
    }

    let speed = 0;
    if (mode === 'walk' && path) {
      const w = path[way];
      const dxw = w.x - pos.x, dzw = w.z - pos.z, d = Math.hypot(dxw, dzw);
      if (d < 0.15) {
        way++;
        if (way >= path.length) {
          path = null;
          if (goal?.sofa && Math.random() < 0.45) {
            // The seat itself sits inside an obstacle, so nav hands back the
            // nearest open cell; snap the last step onto the seat.
            pos.x = sofa.x; pos.z = sofa.z;
            sitting = true; mode = 'sit'; heading = Math.PI; timer = 5 + Math.random() * 7;
          } else {
            mode = 'idle'; timer = 1.5 + Math.random() * 3;
          }
          goal = null;
        }
      } else {
        const step = Math.min(SPEED * dt, d);
        pos.x += dxw / d * step; pos.z += dzw / d * step;
        heading = Math.atan2(dxw, dzw);
        speed = SPEED;
      }
    } else if (mode === 'idle') {
      timer -= dt;
      if (timer <= 0) pickNext();
    } else if (mode === 'sit') {
      timer -= dt;
      if (timer <= 0) { sitting = false; mode = 'idle'; timer = 0.6; }
    }

    const floor = nav.heightAt(pos.x, pos.z);
    avatar.root.position.set(pos.x, floor + (sitting ? SIT_DY : 0), pos.z);
    avatar.root.rotation.y = heading;
    avatar.blob.position.set(pos.x, floor + 0.015, pos.z);
    avatar.update(dt, { speed, run: false, fly: -1, air: false });
    // The pose machine walks the legs while walking; sitting overrides the
    // hips after the update, so the fold reads as a movement, not a cut.
    if (sitting) { avatar.legR.rotation.x = SIT_LEG; avatar.legL.rotation.x = SIT_LEG; }
    // Her page's prompt follows her live position.
    if (station) { station.at = [pos.x, pos.z]; station.look = [pos.x, pos.z]; }
  }

  return {
    update,
    get pos() { return pos; },
    get state() { return { mode, sitting, timer, path: path?.length ?? null, way }; },
  };
}
