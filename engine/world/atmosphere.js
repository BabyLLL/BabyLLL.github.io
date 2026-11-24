// The destination ring, and two optional pieces a world can ask for through
// its surfaces: a scoreboard clock (surfaces.scoreboard) and fireplace flames
// (surfaces.fireplace). (Rain, snow and lightning live in weather-fx.js.) The
// scoreboard clock uploads one texture per second, only while on screen.
import * as THREE from 'three';
import { rng } from './textures.js';
import { pixelText, textWidth } from './pixel-text.js';

// An LED scoreboard over the backboard that keeps the house clock instead of a
// game: the month on the left; on the right the time, over three rings for
// elapsed day, month and year. Each fills clockwise from noon to a closed
// circle at 100%. Everything is drawn one LED per pixel and blown up into dots.
// It redraws once a second for the blinking colon, only while on screen.
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function calendarMonth(date) {
  const year = date.getFullYear(), month = date.getMonth();
  const start = (new Date(year, month, 1).getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  return { year, month: month + 1, today: date.getDate(), start, days,
    cells: Array.from({ length: 42 }, (_, i) => i >= start && i < start + days ? i - start + 1 : null) };
}

// How much of the day, the month and the year has gone, from 0 to 1.
export function elapsed(date) {
  const y = date.getFullYear(), m = date.getMonth(), d = date.getDate();
  const share = (from, to) => (date - from) / (to - from);
  return { day: share(new Date(y, m, d), new Date(y, m, d + 1)),
    month: share(new Date(y, m, 1), new Date(y, m + 1, 1)), year: share(new Date(y, 0, 1), new Date(y + 1, 0, 1)) };
}

// A 3×5 face for the calendar's figures and weekday initials.
const SMALL = {
  0: '111101101101111', 1: '010110010010111', 2: '111001111100111', 3: '111001111001111', 4: '101101111001001',
  5: '111100111001111', 6: '111100111101111', 7: '111001001001001', 8: '111101111101111', 9: '111101111001111',
  M: '101111111101101', T: '111010010010010', W: '101101111111101', F: '111100111100100', S: '111100111001111',
  A: '010101111101101', D: '110101101101110', O: '010101101101010', Y: '101101010010010',
  H: '101101111101101', N: '101111111111101', E: '111100110100111', R: '110101110101101',
};
function smallText(ctx, text, x, y, color) {
  ctx.fillStyle = color;
  [...text].forEach((ch, n) => { for (let i = 0; i < 15; i++) if (SMALL[ch][i] === '1') ctx.fillRect(x + n * 4 + i % 3, y + Math.floor(i / 3), 1, 1); });
}

function createScoreboard(surface) {
  const COLS = 165, ROWS = 77, DOT = 4, W = COLS * DOT, H = ROWS * DOT;
  const layer = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
  const [canvas, ctx] = layer(W, H); ctx.imageSmoothingEnabled = false;
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter; texture.anisotropy = 4;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(surface.width, surface.height), new THREE.MeshBasicMaterial({ map: texture }));
  mesh.position.fromArray(surface.position); mesh.rotation.y = surface.rotation;
  // The dark field with its unlit dots, and the gaps that split lit LEDs, are painted once.
  const [led, l] = layer(COLS, ROWS), [field, f] = layer(W, H), [gaps, g] = layer(W, H);
  f.fillStyle = '#07080a'; f.fillRect(0, 0, W, H); f.fillStyle = '#121419';
  g.fillStyle = 'rgba(7, 8, 10, 0.7)'; g.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += DOT) for (let x = 0; x < W; x += DOT) { f.fillRect(x, y, DOT - 1, DOT - 1); g.clearRect(x, y, DOT - 1, DOT - 1); }
  const amber = '#ffb347', dim = '#7a5a2c', green = '#7fe0a4', white = '#ece8dc';
  const rings = [['TODAY', '#ffb347', '#3a2912'], ['MONTH', '#7fe0a4', '#163520'], ['YEAR', '#ff6a52', '#3c1712']];
  const two = n => String(n).padStart(2, '0');
  let key = '', model, uploads = 0;
  function tick(date = new Date()) {
    const blink = date.getSeconds() % 2;
    const next = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()} ${blink}`;
    if (next === key) return false;
    key = next; model = calendarMonth(date); uploads++;
    l.clearRect(0, 0, COLS, ROWS);
    // The month, Monday first; its weeks spread to fill the panel.
    const title = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    pixelText(l, title, 5 + Math.round((67 - textWidth(title, 1)) / 2), 5, 1, white);
    [...'MTWTFSS'].forEach((d, i) => smallText(l, d, 7 + i * 10, 17, i > 4 ? amber : green));
    const weeks = Math.ceil((model.start + model.days) / 7), pitch = Math.min(10, Math.floor(40 / (weeks - 1)));
    model.cells.forEach((day, i) => {
      if (!day) return;
      const x = 5 + (i % 7) * 10, y = 27 + Math.floor(i / 7) * pitch;
      if (day === model.today) { l.fillStyle = amber; l.fillRect(x - 1, y - 1, 9, 7); }
      smallText(l, String(day), day < 10 ? x + 2 : x, y, day === model.today ? '#07080a' : day < model.today ? dim : amber);
    });
    l.fillStyle = '#252a30'; l.fillRect(78, 5, 1, 67);
    // Give the time a little more weight, with a narrow colon between pairs.
    pixelText(l, two(date.getHours()), 83, 4, 3.25, amber);
    pixelText(l, two(date.getMinutes()), 127, 4, 3.25, amber);
    if (!blink) { l.fillStyle = amber; l.fillRect(121, 10, 3, 3); l.fillRect(121, 17, 3, 3); }
    const gone = elapsed(date);
    [gone.day, gone.month, gone.year].forEach((share, i) => {
      const [label, lit, track] = rings[i], x = 97.5 + i * 26, y = 49.5;
      const progress = Math.max(0, Math.min(1, share)), start = -Math.PI / 2;
      l.lineWidth = 1.5; l.lineCap = 'round';
      l.strokeStyle = track; l.beginPath(); l.arc(x, y, 10.75, 0, Math.PI * 2); l.stroke();
      if (progress > 0) {
        l.strokeStyle = lit; l.beginPath(); l.arc(x, y, 10.75, start, start + progress * Math.PI * 2); l.stroke();
      }
      // The compact 3×5 face keeps five-letter labels inside each ring.
      smallText(l, label, Math.round(x - (label.length * 4 - 1) / 2), 47, white);
      const percent = `${Math.floor(progress * 100)}%`;
      pixelText(l, percent, Math.round(x - textWidth(percent, 1) / 2), 65, 1, lit);
    });
    ctx.drawImage(field, 0, 0); ctx.drawImage(led, 0, 0, W, H); ctx.drawImage(gaps, 0, 0);
    texture.needsUpdate = true;
    return true;
  }
  tick();
  return { mesh, tick, get model() { return model; }, get uploads() { return uploads; } };
}

function createFlames(surface) {
  const random = rng(381), positions = [], seeds = [], colors = [];
  for (let i = 0; i < 24; i++) {
    const x = (i / 23 - 0.5) * surface.width, w = 0.08 + random() * 0.08;
    const h = surface.height * (0.3 + random() * 0.7), seed = random() * 6.28;
    for (const [dx, y] of [[-w, 0], [w, 0], [random() * w - w / 2, h]]) {
      positions.push(x + dx, y, 0); seeds.push(seed);
      const c = new THREE.Color(y ? 0xffb144 : 0xe1671c); colors.push(c.r, c.g, c.b);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeBoundingSphere();
  const mesh = new THREE.Mesh(geometry, new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } }, vertexColors: true,
    vertexShader: `uniform float uTime; attribute float aSeed; varying vec3 vColor;
      void main(){vec3 p=position; p.x+=p.y*sin(uTime*2.8+aSeed)*0.12;
      p.y*=0.8+0.2*sin(uTime*3.4+aSeed);vColor=color;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`,
    fragmentShader: `varying vec3 vColor; void main(){gl_FragColor=vec4(vColor,1.0);
      #include <colorspace_fragment>
    }`, side: THREE.DoubleSide,
  }));
  mesh.position.fromArray(surface.position); mesh.rotation.y = surface.rotation;
  return mesh;
}

function createNavigationMarker() {
  const mesh = new THREE.Mesh(new THREE.RingGeometry(0.38, 0.47, 32), new THREE.MeshBasicMaterial({
    color: 0x85c9ff, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide,
  }));
  mesh.rotation.x = -Math.PI / 2; mesh.renderOrder = 5; mesh.visible = false;
  let born = 0;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  return { mesh,
    show(x, y, z, color = 0x85c9ff) { mesh.position.set(x, y + 0.04, z); mesh.material.color.setHex(color); mesh.scale.setScalar(1); mesh.visible = true; born = performance.now(); },
    hide() { mesh.visible = false; },
    update(now) {
      if (!mesh.visible) return;
      const age = (now - born) / 1000;
      if (age >= 1.6) { mesh.visible = false; return; }
      mesh.material.opacity = 0.9 * Math.min(1, (1.6 - age) / 0.4);
      if (!reduced.matches) mesh.scale.setScalar(1 + 0.08 * Math.sin(age * 6));
    },
  };
}

export function createAtmosphere(stage, surfaces) {
  const scoreboard = surfaces.scoreboard ? createScoreboard(surfaces.scoreboard) : null;
  // One sheet of flame per fireplace surface (a campfire crosses two).
  const fires = [].concat(surfaces.fireplace || []).map(createFlames), fire = fires[0] || null;
  const navigation = createNavigationMarker();
  stage.scene.add(navigation.mesh);
  if (scoreboard) stage.scene.add(scoreboard.mesh);
  for (const f of fires) stage.scene.add(f);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const frustum = new THREE.Frustum(), matrix = new THREE.Matrix4();
  let time = 0, clockSecond = -1;
  return { scoreboard, fire, navigation,
    warmup(on) {
      navigation.mesh.visible = on; navigation.mesh.position.set(0, -30, 0);
    },
    update(dt, now) {
      navigation.update(now);
      matrix.multiplyMatrices(stage.camera.projectionMatrix, stage.camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(matrix);
      const second = Math.floor(Date.now() / 1000);
      if (scoreboard && second !== clockSecond && frustum.intersectsObject(scoreboard.mesh)) { clockSecond = second; scoreboard.tick(); }
      if (reduced.matches) return;
      time = (time + dt) % 600;
      for (const f of fires) if (frustum.intersectsObject(f)) f.material.uniforms.uTime.value = time;
    },
  };
}
