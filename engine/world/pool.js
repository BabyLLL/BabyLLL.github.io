// The pool: water to swim in and dive under. One flat sheet draws both sides.
// From above it is clear water over the tiled floor, mirroring the sky more
// the lower the eye. From below it is Snell's window: overhead the sky, and
// towards its rim the house, the trees and the mountain, found by marching
// the weather's shelter map; outside the window the pool itself, mirrored.
// Rain rings, wakes and splashes are worked out per pixel from a handful of
// numbers, so a downpour costs no more than a still day.
//
// With the camera in the pool the scene's fog becomes the water, drawing
// stops at the walls, and bubbles and motes drift by. The pool's floor and
// walls take caustics and the lamps' glow in the block shader.
import * as THREE from 'three';
import * as L from '@world/layout.js';
import { rng } from './textures.js';

// Loaded only when the world has a POOL (main.js imports it on demand).
const POOL = L.POOL || { x0: 0, x1: 1, z0: 0, z1: 1, water: 0, bed: -1 };

const WATER = POOL.water, RIPPLES = 8;
const CENTRE = new THREE.Vector3((POOL.x0 + POOL.x1) / 2, WATER, (POOL.z0 + POOL.z1) / 2);

// A tileable field of smooth noise (two octaves of value noise). The block
// shader draws caustics as the bright, wandering lines where it crosses its
// middle: never the same width twice, never a regular net.
function causticsTexture(size = 128) {
  const random = rng(4242), data = new Uint8Array(size * size), fade = t => t * t * (3 - 2 * t);
  const octaves = [[6, 0.7], [13, 0.3]].map(([n, weight]) => ({ n, weight, grid: Float32Array.from({ length: n * n }, random) }));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let v = 0;
    for (const { n, weight, grid } of octaves) {
      const fx = x / size * n, fy = y / size * n, ix = Math.floor(fx), iy = Math.floor(fy), u = fade(fx - ix), w = fade(fy - iy);
      const at = (i, j) => grid[(i % n) + (j % n) * n];
      v += weight * ((at(ix, iy) * (1 - u) + at(ix + 1, iy) * u) * (1 - w) + (at(ix, iy + 1) * (1 - u) + at(ix + 1, iy + 1) * u) * w);
    }
    data[x + y * size] = Math.round(v * 255);
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RedFormat, THREE.UnsignedByteType);
  texture.name = 'caustics';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter; texture.minFilter = THREE.LinearMipmapLinearFilter; texture.generateMipmaps = true;
  texture.unpackAlignment = 1; texture.needsUpdate = true;
  return texture;
}

const WATER_VERTEX = /* glsl */`
  varying vec3 vWorld;
  #include <common>
  #include <fog_pars_vertex>
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vec4 mvPosition = viewMatrix * world;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

const WATER_FRAGMENT = /* glsl */`
  #include <common>
  #include <fog_pars_fragment>
  uniform float uTime, uRain, uWind, uSun, uLight, uGlow, uFlash, uCover, uVeil;
  uniform vec3 uTop, uHorizon, uAir, uSunDir, uSunColor, uDeep, uShallow, uMirror, uLand, uGlowColor, uCloudLit, uCloudShade;
  uniform vec2 uCloudShift;
  uniform sampler2D uClouds;
  uniform vec2 uAirFog;
  uniform vec4 uRipples[RIPPLES];
  uniform sampler2D uShelter;
  uniform vec4 uShelterBox;
  varying vec3 vWorld;

  vec2 hash22(vec2 p) {
    vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    q += dot(q, q.yzx + 33.33);
    return fract((q.xx + q.yz) * q.zy);
  }

  float hash12(vec2 p) {
    vec3 q = fract(vec3(p.xyx) * 0.1031);
    q += dot(q, q.yzx + 33.33);
    return fract((q.x + q.y) * q.z);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  // One layer of raindrops over cells \`size\` metres across. Now and then a
  // cell takes a drop, somewhere new each time; its ring runs out with a
  // crest or two and dies away within half a second. Where a ring would be
  // finer than the screen can show, \`detail\` stretches it. Adds to the
  // surface's slope (xy) and height (z); a big drop also brightens the water
  // where it lands (w).
  void rainRings(vec2 p, float size, float density, float detail, inout vec4 wave) {
    vec2 q = p / size, cell = floor(q);
    float k = mix(40.0, 70.0, detail), width = 0.0032;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j)), h = hash22(c);
      float period = 0.5 + 0.5 * h.x;
      float cycle = uTime / period + h.y, n = floor(cycle), age = fract(cycle) * period;
      vec2 at = hash22(c + vec2(n * 0.618, n * 1.414));
      if (fract(at.x * 7.13 + at.y * 3.71) > density) continue;
      vec2 d = (q - c - 0.15 - 0.7 * at) * size;
      float dist = length(d), x = dist - 0.02 - age * 0.3;
      float big = 0.5 + fract(at.x * 3.7 + at.y * 1.9);
      float life = exp(-age * 3.5), g = exp(-x * x / width) * life * 0.0016 * big;
      wave.xy += g * (k * cos(k * x) - 2.0 * x / width * sin(k * x)) * d / max(dist, 1e-4);
      wave.z += g * sin(k * x);
      wave.w += exp(-dist * dist * 900.0) * max(0.0, 1.0 - age * 8.0) * max(0.0, big - 1.0) * 0.6;
    }
  }

  // Slow swells and a little chop: the slope of a few travelling waves.
  vec2 swell(vec2 p, float detail) {
    const vec2 a = vec2(0.80, 0.60), b = vec2(-0.45, 0.89), c = vec2(0.96, -0.28), d = vec2(-0.70, -0.71);
    vec2 s = a * 0.025 * cos(dot(p, a) * 2.1 + uTime * 1.05) + b * 0.026 * cos(dot(p, b) * 3.3 + uTime * 1.45);
    s += (c * 0.026 * cos(dot(p, c) * 7.4 + uTime * 2.3) + d * 0.024 * cos(dot(p, d) * 11.0 + uTime * 2.9)) * detail;
    return s * (0.35 + 1.3 * uWind);
  }

  // Rings spreading from the swimmer: strokes, a dive, climbing out.
  vec2 wakes(vec2 p) {
    vec2 s = vec2(0.0);
    for (int i = 0; i < RIPPLES; i++) {
      vec4 r = uRipples[i];
      float age = uTime - r.z;
      if (r.w <= 0.0 || age < 0.0 || age > 3.2) continue;
      vec2 d = p - r.xy;
      float dist = length(d), x = dist - 0.12 - age * 0.62;
      float life = 1.0 - age / 3.2, g = exp(-x * x / 0.03);
      s += r.w * life * life * g * (16.0 * cos(16.0 * x) - x / 0.015 * sin(16.0 * x)) * 0.011 * d / max(dist, 1e-4);
    }
    return s;
  }

  vec3 skyAlong(vec3 d) {
    vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.55, d.y));
    return mix(col, uAir, smoothstep(0.1, -0.02, d.y));
  }

  void main() {
    vec2 p = vWorld.xz;
    float detail = 1.0 - smoothstep(0.004, 0.012, length(fwidth(p)));
    vec4 wave = vec4(swell(p, detail) + wakes(p), 0.0, 0.0);
    float glitter = 0.0;
    if (uRain > 0.0) {
      rainRings(p, 0.42, clamp(0.12 + uRain * 0.6, 0.0, 0.8), detail, wave);
      #if LAYERS > 1
      if (uRain > 0.8) rainRings(p + 17.3, 0.3, (uRain - 0.8) * 2.5, detail, wave);
      #endif
      // Under all the drops too small to make a ring, the surface glitters:
      // a faint dapple that never holds still.
      glitter = (vnoise(p * 6.0 + uTime * vec2(1.3, 0.7)) * vnoise(p * 8.5 - uTime * vec2(0.6, 1.5)) - 0.25) * 0.3 * uRain;
    }
    vec3 N = normalize(vec3(-wave.x, 1.0, -wave.y));
    // A ring's crest gathers light like a lens and its trough spreads it.
    float lens = 1.0 + clamp(wave.z * 220.0, -0.3, 0.3) + glitter;
    vec3 col;
    float alpha = 1.0;
    if (cameraPosition.y >= vWorld.y) {
      // From above: clear water over the floor, mirroring more of the sky the lower the eye.
      vec3 V = normalize(cameraPosition - vWorld), R = reflect(-V, N);
      R.y = abs(R.y);
      float fresnel = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0), slant = 1.0 - V.y;
      vec3 mirrored = skyAlong(R) + uSunColor * uSun * pow(max(dot(R, uSunDir), 0.0), 600.0) * 5.0 + uFlash * vec3(0.4);
      vec3 body = mix(uShallow, uDeep, slant) * uLight + uGlowColor * uGlow * 0.7;
      float a = mix(0.36, 0.84, smoothstep(0.05, 0.9, slant));
      alpha = a + (1.0 - a) * fresnel;
      col = (body * a * (1.0 - fresnel) + mirrored * fresnel * mix(1.0, lens, 0.5)) / alpha + wave.w * 0.6 * uLight;
    } else {
      // From below: Snell's window. The whole sky is squeezed into a cone
      // overhead; outside it the surface mirrors the pool. Each colour leaves
      // the water up to its own critical angle, so the rim carries a faint
      // rainbow, softened as an eye open under water sees it.
      vec3 I = normalize(vWorld - cameraPosition);
      float cosI = max(dot(I, N), 0.0), sinI = sqrt(1.0 - cosI * cosI), rim = sinI * 1.336;
      vec3 leave = 1.0 - smoothstep(vec3(0.95), vec3(1.0), sinI * vec3(1.331, 1.336, 1.343));
      // A cloud deck is brightest overhead and dimmer towards the horizon.
      vec3 overhead = mix(uHorizon, uTop, 0.5) * 2.8;
      vec3 through = overhead, T = refract(I, -N, 1.331);
      if (dot(T, T) > 0.0) {
        float sun = max(dot(T, uSunDir), 0.0);
        vec3 deck = overhead * (0.35 + 0.65 * max(T.y, 0.0));
        through = mix(skyAlong(T) * 1.35, deck, uVeil);
        // The sky's square clouds, as the sky draws them, wavering through the water.
        if (T.y > 0.015 && uCover > 0.0) {
          float lift = max(0.0, 96.0 - vWorld.y), t = lift / T.y;
          float v = texture2D(uClouds, (vWorld.xz + T.xz * t + uCloudShift) / 768.0).r;
          float puff = step(1.0 - uCover, v) * smoothstep(0.015, 0.16, T.y) * exp(-t * 0.0011) * (1.0 - uVeil);
          through = mix(through, mix(uCloudLit, uCloudShade, smoothstep(1.0 - uCover, 1.0, v) * 0.7) * 1.3, puff * 0.93);
        }
        through += uSunColor * uSun * (pow(sun, 900.0) * 9.0 + pow(sun, 30.0) * 0.5);
        // The deck, the house, the trees and the mountain stand darker against
        // the sky towards the rim: grey shapes in the haze, never solid black.
        // Nothing on the island stands steeper than T.y = 0.9.
        float shade = 0.0;
        if (T.y < 0.9) for (int k = 0; k < STEPS; k++) {
          float t = 0.45 * pow(1.62, float(k));
          vec3 q = vWorld + T * t;
          float top = texture2D(uShelter, (q.xz - uShelterBox.xy) * uShelterBox.zw).r * 63.75 - 2.0;
          shade = max(shade, smoothstep(top + 0.05, top - 0.25, q.y) * (1.0 - smoothstep(uAirFog.x * 0.4, uAirFog.y, t)));
          if (shade > 0.99) break;
        }
        through = mix(through, mix(uLand * uLight, overhead * 0.45, 0.2), shade);
        through = (through * mix(1.0, lens, 0.7) + uFlash * vec3(0.55, 0.6, 0.66)) * (1.0 - 0.5 * smoothstep(0.7, 1.0, rim));
      }
      // Outside the window: the pool, mirrored, dim; just beyond the rim it
      // glows with the window's light scattered in the water.
      vec3 mirror = (uMirror * uLight + uGlowColor * uGlow * 0.5) * mix(1.0, lens, 0.5);
      mirror += overhead * 0.16 * exp(-max(rim - 1.0, 0.0) * 4.0);
      col = mix(mirror, through, leave) + wave.w * 0.9 * (uLight + 0.15);
    }
    gl_FragColor = vec4(col, alpha);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

// Bubbles and motes under the water, droplets over it: camera-facing quads.
const PARTICLE_VERTEX = /* glsl */`
  attribute vec4 aAt;
  attribute vec2 aLook;
  varying vec2 vUv;
  varying vec2 vLook;
  #include <common>
  #include <fog_pars_vertex>
  void main() {
    vUv = position.xy; vLook = aLook;
    vec4 mvPosition = viewMatrix * vec4(aAt.xyz, 1.0);
    mvPosition.xy += position.xy * aAt.w;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;
const PARTICLE_FRAGMENT = /* glsl */`
  uniform vec3 uTint;
  varying vec2 vUv;
  varying vec2 vLook;
  #include <common>
  #include <fog_pars_fragment>
  void main() {
    float d = length(vUv), a;
    if (vLook.y < 0.5) {
      // A bubble: a bright rim round a clear middle, and a glint.
      a = smoothstep(1.0, 0.8, d) * (0.15 + 0.85 * smoothstep(0.45, 0.9, d));
      a = max(a, smoothstep(0.3, 0.05, length(vUv - vec2(-0.3, 0.35))));
    } else if (vLook.y < 1.5) a = smoothstep(1.0, 0.45, d);
    else a = smoothstep(1.0, 0.0, d) * 0.7;
    a *= vLook.x;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uTint, a);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

function particles(max, name, material) {
  const geometry = new THREE.InstancedBufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  const at = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
  const look = new THREE.InstancedBufferAttribute(new Float32Array(max * 2), 2).setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('aAt', at); geometry.setAttribute('aLook', look);
  geometry.instanceCount = 0;
  geometry.boundingSphere = new THREE.Sphere(CENTRE, 40);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name; mesh.frustumCulled = false; mesh.visible = false;
  let n = 0;
  return {
    mesh, max,
    begin() { n = 0; },
    add(x, y, z, r, alpha, kind) {
      if (n >= max) return;
      at.setXYZW(n, x, y, z, r); look.setXY(n, alpha, kind); n++;
    },
    end() {
      geometry.instanceCount = n; mesh.visible = n > 0;
      if (n) { at.needsUpdate = true; look.needsUpdate = true; }
    },
  };
}

export function createPool({ stage, world, shelter, quality }) {
  const blocks = world.materials.uniforms, sky = stage.sky.material.uniforms;
  const caustics = causticsTexture();
  blocks.uCaustics.value = caustics;

  const uniforms = {
    ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog),
    uTime: { value: 0 }, uRain: { value: 0 }, uWind: { value: 0 }, uSun: { value: 0 }, uLight: { value: 1 }, uGlow: { value: 0 }, uFlash: { value: 0 },
    uDeep: { value: new THREE.Color(0x227483) }, uShallow: { value: new THREE.Color(0x5dbcc7) }, uMirror: { value: new THREE.Color(0x174f5a) },
    uLand: { value: new THREE.Color(0x3a4642) }, uGlowColor: { value: new THREE.Color(0x42afba) },
    uAirFog: { value: new THREE.Vector2(80, 220) },
    uRipples: { value: Array.from({ length: RIPPLES }, () => new THREE.Vector4()) },
    uShelter: { value: shelter.texture }, uShelterBox: { value: shelter.box },
    // The sky's own colours, shared, so the water follows every change of hour and weather.
    uTop: sky.uTop, uHorizon: sky.uHorizon, uSunDir: sky.uSunDir, uSunColor: sky.uSunColor, uAir: { value: stage.airFog },
    uClouds: sky.uClouds, uCover: sky.uCover, uCloudShift: sky.uCloudShift, uCloudLit: sky.uCloudLit, uCloudShade: sky.uCloudShade, uVeil: sky.uCloud,
  };
  const material = new THREE.ShaderMaterial({
    name: 'pool-water', uniforms, vertexShader: WATER_VERTEX, fragmentShader: WATER_FRAGMENT,
    defines: { RIPPLES, STEPS: quality.mobile ? 9 : 11, LAYERS: quality.mobile ? 1 : 2 },
    transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(POOL.x1 - POOL.x0, POOL.z1 - POOL.z0), material);
  water.name = 'pool-water'; water.rotation.x = -Math.PI / 2; water.position.copy(CENTRE);
  // After the glass, before the rain, which a surface seen from below hides.
  water.renderOrder = 3;

  const particleMaterial = new THREE.ShaderMaterial({
    name: 'pool-particles', uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uTint: { value: new THREE.Color(0xeefcff) } }]),
    vertexShader: PARTICLE_VERTEX, fragmentShader: PARTICLE_FRAGMENT, transparent: true, depthWrite: false, fog: true,
  });
  // Bubbles under the surface are drawn before it from above and after it
  // from below; droplets over it always after it.
  const under = particles(quality.mobile ? 90 : 160, 'pool-bubbles', particleMaterial);
  const over = particles(48, 'pool-droplets', particleMaterial);
  over.mesh.renderOrder = 5;
  stage.scene.add(water, under.mesh, over.mesh);

  const random = rng(31337), reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const bubbles = [], droplets = [], queued = [];
  const motes = Array.from({ length: quality.mobile ? 40 : 70 }, () => [random(), random(), random(), random()]);
  const waterFog = new THREE.Color(), deep = new THREE.Color(0x326d77), glowWater = new THREE.Color(0x2f939e), overhead = new THREE.Color();
  const submerged = { color: waterFog, near: -9, far: 26 };
  let time = 0, slot = 0, wakeIn = 0, rainIn = 0, inside = false;

  function ripple(x, z, power) {
    uniforms.uRipples.value[slot].set(x, z, time, power);
    slot = (slot + 1) % RIPPLES;
  }
  function burst(x, y, z, count, spread = .35) {
    for (let i = 0; i < count; i++) {
      bubbles.push({ x: x + (random() - .5) * spread, y: Math.min(WATER - .05, y + (random() - .5) * spread), z: z + (random() - .5) * spread,
        r: .008 + random() * random() * .03, phase: random() * 6.3, drift: (random() - .5) * .1 });
    }
  }
  // A body hitting the water: a crown of droplets, a ring, a cloud of bubbles.
  function splash(x, z, power = 1) {
    if (reduced.matches) return;
    for (let i = 0, n = Math.round(8 + 18 * power); i < n; i++) {
      const a = random() * Math.PI * 2, out = .4 + random() * 1.4 * power;
      droplets.push({ x: x + Math.cos(a) * .25, y: WATER + .05, z: z + Math.sin(a) * .25, vx: Math.cos(a) * out, vy: 1.2 + random() * 2.8 * power, vz: Math.sin(a) * out, r: .02 + random() * .03 });
    }
    ripple(x, z, Math.min(1.2, power));
    burst(x, WATER - .35, z, Math.round(10 * power), .6);
  }
  // A breath let out under water: a short stream of bubbles from the mouth.
  function exhale(x, y, z) {
    if (reduced.matches) return;
    for (let i = 0; i < 7; i++) queued.push({ t: i * .09 + random() * .05, x, y, z });
  }

  function update(dt, camera, player, weather) {
    const still = reduced.matches;
    if (!still) time += dt;
    if (time > 3600) { time -= 3600; for (const r of uniforms.uRipples.value) r.z -= 3600; }
    uniforms.uTime.value = time; blocks.uPoolTime.value = time;

    // Light and weather, read from the stage and the weather.
    const night = stage.night, hemi = stage.hemi.intensity;
    const light = THREE.MathUtils.clamp(hemi / 1.25, .2, 1.2) * (1 - .72 * night);
    const glow = THREE.MathUtils.clamp((blocks.uEmissiveBoost.value - .4) / .5, 0, 1);
    const sun = stage.sun.visible ? stage.sun.intensity / 2.7 : 0;
    uniforms.uRain.value = still ? 0 : weather.rain; uniforms.uWind.value = weather.wind;
    uniforms.uSun.value = sun; uniforms.uLight.value = light; uniforms.uGlow.value = glow;
    uniforms.uFlash.value = sky.uFlash.value;
    uniforms.uAirFog.value.set(stage.airNear, stage.airFar);
    // Is the camera in the water?
    const c = camera.position;
    inside = c.y < WATER && c.x > POOL.x0 && c.x < POOL.x1 && c.z > POOL.z0 && c.z < POOL.z1;
    // Caustics follow the sun's slant through the surface. Seen from the deck
    // they are the sunny glitter on the floor; close up under water, gentler.
    const s = sky.uSunDir.value, eta = 1 / 1.336, k = Math.sqrt(1 - eta * eta * (1 - s.y * s.y));
    blocks.uPoolLight.value.set(eta * s.x / k, eta * s.z / k, sun * (inside ? .5 : 1), glow);
    // Seen from below the surface hides everything over it, rain included.
    material.depthWrite = inside;
    under.mesh.renderOrder = inside ? 5 : 2;
    if (inside) {
      overhead.copy(sky.uHorizon.value).lerp(sky.uTop.value, .5);
      waterFog.copy(deep).lerp(overhead, .35).multiplyScalar(.3 + .9 * light).lerp(glowWater, glow * .6);
      stage.setSubmerged(submerged);
    } else stage.setSubmerged(null);
    particleMaterial.uniforms.uTint.value.setScalar(.4 + .6 * Math.min(1, light)).lerp(glowWater, glow * .35);

    // Rings from the player swimming at the surface; the bigger moments call splash().
    const swim = player.swim;
    if (swim && !still) {
      wakeIn -= dt;
      if (swim.surface && wakeIn <= 0) {
        const moving = swim.speed > .3;
        ripple(swim.x, swim.z, moving ? Math.min(.75, .25 + swim.speed / 4) : .16);
        wakeIn = moving ? .36 : 1.3;
      }
    }

    // Each raindrop carries a little air down with it: from below, tiny
    // bubbles wink just under the surface around the camera.
    if (inside && !still && weather.rain > 0.05) {
      for (rainIn -= dt; rainIn <= 0; rainIn += 1 / (18 * weather.rain)) {
        const a = random() * Math.PI * 2, r = Math.sqrt(random()) * 3.5, x = c.x + Math.cos(a) * r, z = c.z + Math.sin(a) * r;
        if (x > POOL.x0 && x < POOL.x1 && z > POOL.z0 && z < POOL.z1) bubbles.push({ x, y: WATER - .03 - random() * .12, z, r: .004 + random() * .007, phase: random() * 6.3, drift: 0 });
      }
    }
    // Bubbles rise, wobbling, and burst at the surface.
    for (let i = queued.length - 1; i >= 0; i--) {
      const q = queued[i];
      if ((q.t -= dt) > 0) continue;
      bubbles.push({ x: q.x + (random() - .5) * .04, y: q.y, z: q.z + (random() - .5) * .04, r: .006 + random() * .016, phase: random() * 6.3, drift: (random() - .5) * .06 });
      queued.splice(i, 1);
    }
    under.begin();
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.phase += dt * 9;
      b.y += (.2 + b.r * 9) * dt;
      b.x += (Math.sin(b.phase) * .05 + b.drift) * dt; b.z += Math.cos(b.phase * .8) * .05 * dt;
      if (b.y > WATER - b.r * .5 || bubbles.length > under.max) { bubbles.splice(i, 1); continue; }
      under.add(b.x, b.y, b.z, b.r, .85, 0);
    }
    // Specks hanging in the water near the camera, only seen from inside it.
    // Each keeps its place in the water; the box around the camera wraps.
    if (inside && !still) {
      const around = (at, size, middle) => middle - size / 2 + (((at - middle + size / 2) % size) + size) % size;
      for (const [a, b, d, e] of motes) {
        const x = around(a * 9 + time * .05 * (e - .5), 9, c.x), y = around(b * 4 + time * .02, 4, c.y), z = around(d * 9, 9, c.z);
        if (x < POOL.x0 || x > POOL.x1 || z < POOL.z0 || z > POOL.z1 || y > WATER - .05 || y < POOL.bed) continue;
        under.add(x, y, z, .006 + e * .01, .18 + .25 * e, 2);
      }
    }
    under.end();
    over.begin();
    for (let i = droplets.length - 1; i >= 0; i--) {
      const d = droplets[i];
      d.vy -= 9.8 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
      if (d.y < WATER) { droplets.splice(i, 1); continue; }
      over.add(d.x, d.y, d.z, d.r, .8, 1);
    }
    over.end();
  }

  return {
    water, caustics, update, splash, exhale, burst, ripple,
    get submerged() { return inside; }, fogColor: waterFog,
    // Draw every piece once under the loading screen so no swim compiles a shader.
    warmup(on) {
      for (const p of [under, over]) {
        p.begin(); if (on) p.add(CENTRE.x, -30, CENTRE.z, .1, 1, 0); p.end();
      }
    },
  };
}
