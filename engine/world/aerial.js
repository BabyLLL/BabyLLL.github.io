// The TV's aerial screensaver, in the manner of Apple TV's night flights over
// downtown Los Angeles: a drone circling a cluster of towers at night, every
// window lit, streets glowing sodium orange, the city's lights running out to
// a violet-blue haze on the horizon.
//
// It is a small 3D city drawn into a render target that the TV screen shows:
// one instanced batch of towers, one ground plane and one sky, three draws in
// all. Windows, streets, lamps, traffic and haze are computed in the shaders,
// so there are no textures. The picture is redrawn at a modest rate and only
// while the screen is on camera and near; otherwise it costs nothing.
import * as THREE from 'three';

// Colours here are linear: the screen's tone mapping and sRGB output lift the
// darks a long way, so night has to start very dark to stay night.
const HAZE = new THREE.Color(0.15, 0.15, 0.4);
const GRID = 0.6, BLOCK = 60;

const COMMON = /* glsl */`
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
`;

const SKY = {
  vertexShader: /* glsl */`
    varying vec3 vDir;
    void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform vec3 uHaze;
    varying vec3 vDir;
    void main() {
      float h = vDir.y;
      vec3 top = vec3(0.003, 0.005, 0.028), mid = vec3(0.022, 0.04, 0.2);
      vec3 col = mix(uHaze * 1.15, mid, smoothstep(0.0, 0.16, h));
      col = mix(col, top, smoothstep(0.16, 0.7, h));
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const GROUND = {
  vertexShader: /* glsl */`
    varying vec3 vWorld;
    void main() { vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
  `,
  fragmentShader: /* glsl */`
    uniform vec3 uHaze; uniform vec3 uCam; uniform float uTime;
    varying vec3 vWorld;
    ${COMMON}
    // Thin lines and dots fade to their average brightness once smaller than a
    // pixel, so the distant city reads as a glow instead of shimmering.
    float line(float d, float w, float px) { return 1.0 - smoothstep(w - px, w + px, d); }
    void main() {
      float c = cos(${GRID.toFixed(2)}), s = sin(${GRID.toFixed(2)});
      vec2 p = vec2(c * vWorld.x + s * vWorld.z, -s * vWorld.x + c * vWorld.z);
      vec3 col = vec3(0.0015, 0.002, 0.0045);
      // Streets every block, brighter avenues every third.
      vec2 f = fract(p / ${BLOCK.toFixed(1)}); vec2 e = min(f, 1.0 - f) * ${BLOCK.toFixed(1)};
      float d = min(e.x, e.y), px = fwidth(d) + 1e-3;
      float street = line(d, 3.0, px);
      vec2 fa = fract(p / ${(BLOCK * 3).toFixed(1)}); vec2 ea = min(fa, 1.0 - fa) * ${(BLOCK * 3).toFixed(1)};
      float avenue = line(min(ea.x, ea.y), 5.0, fwidth(min(ea.x, ea.y)) + 1e-3);
      vec3 sodium = vec3(1.0, 0.62, 0.3), led = vec3(0.75, 0.88, 1.0);
      col += street * sodium * 0.16 + avenue * mix(sodium, led, 0.35) * 0.6;
      // Lamps along every street, a dot every 9 m.
      vec2 lp = p / 9.0; vec2 lc = fract(lp) - 0.5; float lpx = fwidth(lp.x) + 1e-3;
      float lamp = (1.0 - smoothstep(0.12, 0.12 + lpx * 1.5, length(lc))) * step(d, 4.5);
      col += mix(lamp, 0.05, clamp(lpx * 2.0 - 0.4, 0.0, 1.0)) * step(d, 4.5) * vec3(1.0, 0.75, 0.45) * 1.6;
      // Lit windows and yards within the blocks, a 5 m lattice.
      vec2 q = p / 5.0, cell = floor(q), fq = fract(q) - 0.5; float qpx = fwidth(q.x) + 1e-3;
      // Thicker towards the horizon, as the city's lights pack together there.
      float far = smoothstep(500.0, 3200.0, length(vWorld.xz - uCam.xz));
      float hq = hash(cell), on = step(0.74 - 0.26 * far, hq) * (1.0 - street);
      float bulb = mix(1.0 - smoothstep(0.12, 0.12 + qpx * 1.5, length(fq)), 0.06, clamp(qpx * 2.0 - 0.5, 0.0, 1.0));
      col += on * bulb * mix(vec3(1.0, 0.82, 0.55), vec3(0.6, 0.85, 1.0), step(0.86, hq)) * 1.5;
      // A freeway sweeping past downtown, white headlights one way, red tail lights the other.
      float fx = vWorld.x - (210.0 + 70.0 * sin(vWorld.z / 260.0));
      float band = 1.0 - smoothstep(9.0, 12.0, abs(fx));
      col += band * vec3(1.0, 0.55, 0.2) * 0.35;
      float lane = step(abs(fx), 9.0);
      float go = fract((vWorld.z - uTime * 26.0) / 13.0), back = fract((vWorld.z + uTime * 24.0) / 11.0);
      col += lane * step(fx, 0.0) * step(go, 0.22) * vec3(1.0, 0.97, 0.9) * 1.6;
      col += lane * step(0.0, fx) * step(back, 0.22) * vec3(1.0, 0.18, 0.12) * 1.4;
      // Haze only far out, gathering into the glow along the horizon.
      float dist = length(vWorld.xz - uCam.xz);
      col = mix(col, uHaze, smoothstep(1100.0, 5200.0, dist) * 0.9);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

const TOWERS = {
  vertexShader: /* glsl */`
    attribute vec4 aInfo;
    varying vec3 vLocal; varying vec3 vSize; varying vec3 vNormalL; varying vec4 vInfo; varying float vDist;
    void main() {
      mat4 im = instanceMatrix;
      vSize = vec3(length(im[0].xyz), length(im[1].xyz), length(im[2].xyz));
      vLocal = (position + vec3(0.5, 0.0, 0.5)) * vSize;
      vNormalL = normal; vInfo = aInfo;
      vec4 view = viewMatrix * modelMatrix * im * vec4(position, 1.0);
      vDist = -view.z;
      gl_Position = projectionMatrix * view;
    }
  `,
  fragmentShader: /* glsl */`
    uniform vec3 uHaze;
    varying vec3 vLocal; varying vec3 vSize; varying vec3 vNormalL; varying vec4 vInfo; varying float vDist;
    ${COMMON}
    void main() {
      float seed = vInfo.x, litFrac = vInfo.y, tint = mod(vInfo.z, 4.0), pattern = floor(vInfo.z / 4.0), crown = vInfo.w;
      vec3 warm = vec3(1.0, 0.85, 0.6), cool = vec3(0.8, 0.9, 1.0), blue = vec3(0.32, 0.58, 1.0);
      vec3 wc = tint < 0.5 ? warm : tint < 1.5 ? cool : blue;
      vec3 col;
      if (vNormalL.y > 0.5) {
        // Roofs: dark, with a ring of light round the tallest crowns.
        col = vec3(0.003, 0.004, 0.01);
        vec2 e = min(vLocal.xz, vSize.xz - vLocal.xz);
        col += crown * (1.0 - smoothstep(0.8, 1.8, min(e.x, e.y))) * mix(vec3(0.95, 0.97, 1.0), blue, step(1.5, crown)) * 1.3;
      } else {
        // Glass going from near black at street level to the sky's blue up top,
        // a grid of windows over it, most of them lit.
        float u = abs(vNormalL.x) > 0.5 ? vLocal.z : vLocal.x, face = vNormalL.x * 3.0 + vNormalL.z * 7.0;
        float up = clamp(vLocal.y / max(vSize.y, 1.0), 0.0, 1.0);
        // Four facades: punched windows, ribbon windows, a glass curtain wall,
        // and tall narrow windows between fins.
        vec2 bay = vec2(4.5, 5.5), wx = vec2(0.28, 0.72), wy = vec2(0.3, 0.75);
        if (pattern > 0.5 && pattern < 1.5) { bay = vec2(3.0, 5.0); wx = vec2(0.06, 0.94); wy = vec2(0.38, 0.8); }
        else if (pattern > 1.5 && pattern < 2.5) { bay = vec2(2.6, 4.2); wx = vec2(0.1, 0.9); wy = vec2(0.12, 0.9); }
        else if (pattern > 2.5) { bay = vec2(2.2, 4.8); wx = vec2(0.36, 0.64); wy = vec2(0.08, 0.92); }
        vec3 glass = mix(vec3(0.0023, 0.0027, 0.006), pattern > 1.5 && pattern < 2.5 ? vec3(0.012, 0.022, 0.065) : vec3(0.008, 0.012, 0.04), up * up);
        vec2 g = vec2(u / bay.x, vLocal.y / bay.y), cell = floor(g), f = fract(g);
        float px = max(fwidth(g.x), fwidth(g.y));
        float win = smoothstep(wx.x - px, wx.x + px, f.x) * (1.0 - smoothstep(wx.y - px, wx.y + px, f.x))
                  * smoothstep(wy.x - px, wy.x + px, f.y) * (1.0 - smoothstep(wy.y - px, wy.y + px, f.y));
        float cover = (wx.y - wx.x) * (wy.y - wy.x);
        float h = hash(cell + vec2(seed * 31.0 + face, seed * 17.0));
        float on = step(1.0 - litFrac, h);
        vec3 bulb = mix(wc, cool, step(0.9, hash(cell * 1.3 + seed))) * (0.7 + 0.6 * hash(cell * 2.1 + seed));
        vec3 sharp = glass + win * on * bulb * 1.25;
        vec3 average = glass + litFrac * cover * 0.6 * wc * 1.25;
        col = mix(sharp, average, clamp((px - 0.25) * 2.0, 0.0, 1.0));
        // The crown band of the tallest towers, and the street glow on the lowest floors.
        col += crown * smoothstep(vSize.y - 7.0, vSize.y - 1.5, vLocal.y) * mix(vec3(0.95, 0.97, 1.0), blue, step(1.5, crown)) * 1.5;
        col += vec3(1.0, 0.45, 0.12) * 0.05 * (1.0 - smoothstep(0.0, 16.0, vLocal.y));
      }
      col = mix(col, uHaze, smoothstep(1100.0, 5200.0, vDist) * 0.9);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

function random(seed) {
  return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Towers scattered sparsely over the whole city, a little more frequent and
// more often tall towards the middle, never on neighbouring blocks, so each
// one reads at the screen's low resolution and the frame fills out to its
// corners. Heights come in tiers and each building takes a shape: a plain
// tower, a slab, a stepped tower, a tower on a podium, twin towers or a tower
// with a spire, and one of four facades. Low blocks are scattered in between.
function layOut() {
  const r = random(1964), list = [], c = Math.cos(GRID), s = Math.sin(GRID);
  // One box from the ground up; info is [seed, lit share, tint + 4 × facade, crown].
  // Footprints are drawn about twice as wide so the towers read as solid at the
  // TV's resolution, but each building gets its own factor so it isn't uniform.
  // It has its own random stream, so the layout itself stays as it was.
  const fat = random(2077); let k = 2;
  const part = (gu, gv, w, d, h, info) => list.push({ x: c * gu - s * gv, z: s * gu + c * gv, w: w * k, d: d * k * (0.9 + fat() * 0.2), h, info });
  const SHAPES = ['plain', 'slab', 'stepped', 'podium', 'twin', 'spire'];
  for (let i = -20; i <= 20; i++) for (let j = -20; j <= 20; j++) {
    const gu = (i + 0.5) * BLOCK, gv = (j + 0.5) * BLOCK, dist = Math.hypot(gu, gv);
    const core = Math.exp(-((dist / 300) ** 2));
    k = 1.5 + fat() * 0.9;
    if (!(Math.abs(i + j) % 2) && r() < 0.1 + 0.3 * core) {
      const tier = r() + core * 0.25;
      const h = tier > 1 ? 240 + r() * 90 : tier > 0.8 ? 150 + r() * 70 : tier > 0.45 ? 75 + r() * 60 : 32 + r() * 35;
      const facade = Math.floor(r() * 4), glassy = facade === 2;
      const tint = glassy ? (r() < 0.5 ? 1 : 2) : r() < 0.72 ? 0 : r() < 0.6 ? 1 : 2;
      const look = () => [r(), glassy ? 0.3 + r() * 0.2 : 0.5 + r() * 0.4, tint + 4 * facade, 0];
      const shape = SHAPES[Math.floor(r() * SHAPES.length)];
      const ou = (r() - 0.5) * 8, ov = (r() - 0.5) * 8, x = gu + ou, z = gv + ov;
      if (shape === 'slab') part(x, z, 40 + r() * 12, 16 + r() * 8, h * (0.55 + r() * 0.3), look());
      else if (shape === 'stepped') {
        const b = 34 + r() * 16;
        part(x, z, b, b * (0.8 + r() * 0.2), h * 0.5, look()); part(x, z, b * 0.74, b * 0.7, h * 0.78, look()); part(x, z, b * 0.48, b * 0.46, h, look());
      } else if (shape === 'podium') {
        const b = 22 + r() * 10;
        part(x, z, b * 1.75, b * 1.5, 10 + r() * 12, look()); part(x, z, b, b * (0.85 + r() * 0.3), h, look());
      } else if (shape === 'twin') {
        const b = 18 + r() * 8;
        part(x - b * 0.62, z, b, b, h, look()); part(x + b * 0.62, z, b, b, h * (0.62 + r() * 0.25), look());
      } else if (shape === 'spire') {
        const b = 24 + r() * 14;
        part(x, z, b, b, h, look()); part(x, z, 2.2, 2.2, h + 22 + r() * 26, [r(), 1, 1, 1]);
      } else {
        const b = 24 + r() * 22;
        part(x, z, b, b * (0.7 + r() * 0.5), h, look());
      }
    } else if (r() < 0.16) {
      const w = 14 + r() * 22, d = 14 + r() * 22;
      part(gu + (r() - 0.5) * 10, gv + (r() - 0.5) * 10, w, d, 6 + r() * 20, [r(), 0.35 + r() * 0.35, (r() < 0.8 ? 0 : 1) + 4 * Math.floor(r() * 4), 0]);
    }
  }
  // The tallest few parts get lit crowns.
  [...list].sort((a, b) => b.h - a.h).slice(0, 6).forEach(t => { t.info[3] = t.info[2] % 4 === 2 ? 2 : 1; });
  return list;
}

export function createAerial(renderer, { mobile = false } = {}) {
  const width = mobile ? 512 : 768, height = Math.round(width / 1.8);
  const target = new THREE.WebGLRenderTarget(width, height, { samples: mobile ? 0 : 4 });
  target.texture.generateMipmaps = false;
  target.texture.minFilter = THREE.LinearFilter;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1.8, 2, 12000);
  const uniforms = { uHaze: { value: HAZE }, uCam: { value: camera.position }, uTime: { value: 0 } };

  const sky = new THREE.Mesh(new THREE.SphereGeometry(9000, 24, 12), new THREE.ShaderMaterial({ ...SKY, uniforms, side: THREE.BackSide, depthWrite: false }));
  sky.renderOrder = -1;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(16000, 16000), new THREE.ShaderMaterial({ ...GROUND, uniforms }));
  ground.rotation.x = -Math.PI / 2;

  const plan = layOut();
  const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, 0.5, 0);
  const towers = new THREE.InstancedMesh(box, new THREE.ShaderMaterial({ ...TOWERS, uniforms }), plan.length);
  const info = new Float32Array(plan.length * 4), m = new THREE.Matrix4(), q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -GRID);
  plan.forEach((t, i) => {
    towers.setMatrixAt(i, m.compose(new THREE.Vector3(t.x, 0, t.z), q, new THREE.Vector3(t.w, t.h, t.d)));
    info.set(t.info, i * 4);
  });
  towers.geometry.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 4));
  towers.frustumCulled = false;
  scene.add(sky, ground, towers);

  // The drone circles downtown slowly, rising and dipping a little.
  function place(t) {
    const a = t * 0.01 + 0.9, radius = 540 + 30 * Math.sin(t * 0.021);
    camera.position.set(Math.sin(a) * radius, 255 + 16 * Math.sin(t * 0.017), Math.cos(a) * radius);
    camera.lookAt(0, 85, 0);
    sky.position.copy(camera.position);
    uniforms.uTime.value = t;
  }
  // Draw into the target without touching the house's baked shadow map.
  function render() {
    const shadows = renderer.shadowMap, auto = shadows.autoUpdate, need = shadows.needsUpdate, previous = renderer.getRenderTarget();
    shadows.autoUpdate = false; shadows.needsUpdate = false;
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    renderer.setRenderTarget(previous);
    shadows.autoUpdate = auto; shadows.needsUpdate = need;
  }

  const frustum = new THREE.Frustum(), viewProjection = new THREE.Matrix4(), sphere = new THREE.Sphere();
  const reduced = matchMedia('(prefers-reduced-motion: reduce)'), step = 1 / (mobile ? 20 : 30);
  let t = 0, since = Infinity;
  place(0);
  return {
    texture: target.texture, scene, camera,
    render() { place(t); render(); },
    // Redraw only while the screen is on camera and within 45 m.
    update(dt, view, screen) {
      if (!reduced.matches) t += dt;
      since += dt;
      if (since < step || (reduced.matches && since !== Infinity && t > 0)) return;
      viewProjection.multiplyMatrices(view.projectionMatrix, view.matrixWorldInverse);
      frustum.setFromProjectionMatrix(viewProjection);
      screen.getWorldPosition(sphere.center); sphere.radius = 2.2;
      if (!frustum.intersectsSphere(sphere) || sphere.center.distanceTo(view.position) > 45) return;
      since = 0; place(t); render();
    },
  };
}
