// Shared diffuse shaders for block-built surfaces; stainless has one PBR batch.
// The voxel shell supplies tile UVs,
// a texture layer and a baked ambient-occlusion tint per vertex; furniture boxes
// are instanced and derive their UVs from their own size, so a 3 m desk shows
// three planks-worth of texture and a 0.3 m leg shows a sliver, like Minecraft.
import * as THREE from 'three';
import * as L from '@world/layout.js';

const POOL = L.POOL, POOL_LAMPS = L.POOL_LAMPS || { xs: [], y: 0 };

const SHARED_VERTEX = /* glsl */`
  varying vec3 vTex;
  varying float vEmissive;
  varying vec3 vSurfacePosition;
`;

const BOX_VERTEX = /* glsl */`
  attribute vec3 iLayers;
  attribute float iEmissive;
`;

const BOX_UV = /* glsl */`
  #include <begin_vertex>
  {
    mat4 im = instanceMatrix;
    vec3 scaleXYZ = vec3(length(im[0].xyz), length(im[1].xyz), length(im[2].xyz));
    vec3 lp = (position + 0.5) * scaleXYZ;
    vec3 an = abs(normal);
    if (an.y > 0.5) vTex = vec3(lp.x, lp.z, normal.y > 0.0 ? iLayers.x : iLayers.z);
    else if (an.x > 0.5) vTex = vec3(normal.x > 0.0 ? scaleXYZ.z - lp.z : lp.z, lp.y, iLayers.y);
    else vTex = vec3(normal.z > 0.0 ? lp.x : scaleXYZ.x - lp.x, lp.y, iLayers.y);
    vEmissive = iEmissive;
  }
`;

const VOXEL_VERTEX = /* glsl */`
  attribute vec2 tileUv;
  attribute float tileLayer;
`;

const VOXEL_UV = /* glsl */`
  #include <begin_vertex>
  vTex = vec3(tileUv, tileLayer);
  vEmissive = 0.0;
`;

// Crossed quads for flowers and grass tufts; the tops sway in the wind.
const CROSS_VERTEX = /* glsl */`
  attribute vec3 iLayers;
  uniform float uTime;
`;

const CROSS_UV = /* glsl */`
  #include <begin_vertex>
  {
    vec3 base = instanceMatrix[3].xyz;
    float sway = sin(uTime * 1.7 + base.x * 0.7 + base.z * 0.5) * 0.06 + sin(uTime * 3.1 + base.z) * 0.02;
    transformed.x += sway * uv.y;
    transformed.z += sway * 0.6 * uv.y;
    vTex = vec3(uv, iLayers.x);
    vEmissive = 0.0;
  }
`;

const FRAGMENT_HEAD = /* glsl */`
  uniform highp sampler2DArray uTiles;
  uniform float uEmissiveBoost;
  uniform sampler2D uMarble;
  uniform float uMarbleLayer;
  uniform sampler2D uShelter;
  uniform vec4 uShelterBox;
  uniform float uWet;
  uniform float uSnow;
  uniform vec3 uSkyTint;
  uniform sampler2D uCaustics;
  uniform vec4 uPoolLight;
  uniform float uPoolTime;
  varying vec3 vTex;
  varying float vEmissive;
  varying vec3 vSurfacePosition;
`;

// Under the pool's water: sunlight focused by the moving surface into
// caustics, the lamps' glow at night, and a cooler cast the deeper it is.
// uPoolLight holds
// the sun's refracted slant per metre of depth (xy), the caustics' strength
// and the lamps'. Everything outside the pool skips it after one comparison.
const num = v => v.toFixed(3);
const FRAGMENT_POOL = !POOL ? '' : /* glsl */`
  #ifndef BLOCK_GLASS
  if (vSurfacePosition.y < ${num(POOL.water)} && vSurfacePosition.x > ${num(POOL.x0 - .05)} && vSurfacePosition.x < ${num(POOL.x1 + .05)}
    && vSurfacePosition.z > ${num(POOL.z0 - .05)} && vSurfacePosition.z < ${num(POOL.z1 + .05)}) {
    float poolDepth = ${num(POOL.water)} - vSurfacePosition.y;
    // Walls take the pattern on their own plane, stretched down from the surface.
    vec3 poolNormal = abs(inverseTransformDirection(normal, viewMatrix));
    vec2 litFrom = (poolNormal.y > 0.5 ? vSurfacePosition.xz : poolNormal.x > 0.5 ? vec2(vSurfacePosition.z, poolDepth * 1.6) : vec2(vSurfacePosition.x, poolDepth * 1.6)) + uPoolLight.xy * poolDepth;
    // Caustics: two slowly drifting fields of smooth noise, each drawing a
    // bright, wandering line where it crosses its middle. Their lines cross
    // into an uneven net, brightest where they meet; a broad, slower field
    // makes some stretches of the floor glow and others go quiet. The walls,
    // which the light only grazes, catch a little just under the surface.
    vec2 web = litFrom * 0.2;
    web += 0.07 * vec2(sin(web.y * 3.1 + uPoolTime * 0.5), cos(web.x * 2.7 - uPoolTime * 0.4));
    float lineA = 1.0 - abs(texture2D(uCaustics, web + uPoolTime * vec2(0.011, 0.006)).r * 2.0 - 1.0);
    float lineB = 1.0 - abs(texture2D(uCaustics, web * 1.37 + vec2(0.41, 0.17) - uPoolTime * vec2(0.008, 0.012)).r * 2.0 - 1.0);
    float swell = smoothstep(0.3, 0.72, texture2D(uCaustics, litFrom * 0.045 + uPoolTime * vec2(0.003, 0.002)).r);
    float caustic = min(1.2, (pow(lineA, 10.0) + pow(lineB, 10.0) * 0.7 + 0.8 * pow(lineA * lineB, 5.0)) * (0.2 + 0.9 * swell))
      * (poolNormal.y > 0.5 ? 1.0 : 0.4 * (1.0 - smoothstep(0.15, 1.3, poolDepth)));
    float lamps = 0.35 + 0.4 * exp((${num(POOL.z0)} - vSurfacePosition.z) * 0.4);
    ${POOL_LAMPS.xs.map(x => `{ vec3 toLamp = vSurfacePosition - vec3(${num(x)}, ${num(POOL_LAMPS.y)}, ${num(POOL.z0)}); lamps += 0.9 / (1.0 + dot(toLamp, toLamp) * 1.2); }`).join('\n    ')}
    diffuseColor.rgb *= mix(vec3(1.0), vec3(0.82, 0.93, 0.97), min(poolDepth / 2.8, 1.0));
    totalEmissiveRadiance += diffuseColor.rgb * (caustic * uPoolLight.z * 0.95 + lamps * uPoolLight.w * vec3(0.6, 0.9, 0.97));
  }
  #endif
`;

const FRAGMENT_MAP = /* glsl */`
  vec4 tileTexel = texture(uTiles, vTex);
  if (abs(vTex.z - uMarbleLayer) < 0.5) {
    vec3 stoneNormal = abs(inverseTransformDirection(normalize(vNormal), viewMatrix));
    vec2 slab = stoneNormal.y > 0.5 ? vSurfacePosition.xz :
      stoneNormal.x > 0.5 ? vSurfacePosition.zy : vSurfacePosition.xy;
    tileTexel = texture2D(uMarble, slab / 16.0);
  }
  diffuseColor *= tileTexel;
  #ifdef CUTOUT
    if (diffuseColor.a < 0.5) discard;
  #endif
`;

// Weather on surfaces under open sky. The shelter map holds the highest
// surface in each metre, so floors under the roof or a tree crown stay dry.
// Rain darkens surfaces and lends tops a sky sheen; snow settles block by
// block on tops, as in Minecraft. Clear weather skips all of it.
const FRAGMENT_EMISSIVE = /* glsl */`
  float weatherSheen = 0.0;
  #ifndef BLOCK_GLASS
  if (uWet + uSnow > 0.0 && vEmissive <= 0.0) {
    vec3 skyNormal = inverseTransformDirection(normal, viewMatrix);
    vec3 skyProbe = vSurfacePosition + skyNormal * 0.35;
    float shelterTop = texture2D(uShelter, (skyProbe.xz - uShelterBox.xy) * uShelterBox.zw).r * 63.75 - 2.0;
    float open = step(shelterTop - 0.6, skyProbe.y);
    float up = smoothstep(0.55, 0.85, skyNormal.y);
    float block = fract(sin(dot(floor(vSurfacePosition.xz), vec2(12.9898, 78.233))) * 43758.5453);
    float snowCover = open * up * step(block, uSnow);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.94, 0.96, 0.98), snowCover);
    float wetness = uWet * open * (1.0 - snowCover);
    diffuseColor.rgb *= 1.0 - wetness * mix(0.16, 0.34, up);
    weatherSheen = wetness * up;
  }
  #endif
  #include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * vEmissive * uEmissiveBoost;
` + FRAGMENT_POOL;

// Readable glazing without reflection render targets: a cool tint, stronger
// reflectance at grazing angles and one broad highlight across the whole pane.
// World coordinates keep it continuous across merged faces, with no tile grid.
const SURFACE_VERTEX = /* glsl */`
  #include <project_vertex>
  vec4 glassPosition = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    glassPosition = instanceMatrix * glassPosition;
  #endif
  vSurfacePosition = (modelMatrix * glassPosition).xyz;
`;
const GLASS_FRAGMENT = /* glsl */`
  float glassRim = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
  vec3 glassNormal = abs(inverseTransformDirection(normal, viewMatrix));
  vec2 pane = glassNormal.y > 0.5 ? vSurfacePosition.xz :
    glassNormal.x > 0.5 ? vSurfacePosition.zy : vSurfacePosition.xy;
  float diagonal = pane.x * 0.65 + pane.y;
  float glassHighlight = smoothstep(3.2, 3.8, diagonal) * (1.0 - smoothstep(5.2, 5.8, diagonal));
  float overheadGlass = step(0.5, glassNormal.y);
  outgoingLight = mix(outgoingLight, vec3(0.44, 0.63, 0.69), mix(0.6, 0.28, overheadGlass));
  outgoingLight += vec3(0.18, 0.23, 0.25) * glassRim + vec3(0.22) * glassHighlight;
  float glassNear = 1.0 - smoothstep(1.0, 7.0, length(vViewPosition));
  diffuseColor.a = min(0.48, diffuseColor.a * mix(1.0, 0.52, overheadGlass) + glassRim * 0.18 + glassHighlight * 0.08 + glassNear * mix(0.07, 0.025, overheadGlass));
  #include <opaque_fragment>
`;

const WEATHER_FRAGMENT = /* glsl */`
  if (weatherSheen > 0.0) {
    float sheenFresnel = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 5.0);
    outgoingLight = mix(outgoingLight, uSkyTint, weatherSheen * (0.05 + 0.5 * sheenFresnel));
  }
  #include <opaque_fragment>
`;

export function createBlockMaterials(tiles, marble, marbleLayer) {
  const uniforms = { uTiles: { value: tiles }, uMarble: { value: marble }, uMarbleLayer: { value: marbleLayer }, uEmissiveBoost: { value: 1 }, uTime: { value: 0 } };
  // Weather inputs; the weather sets the real shelter map once the world is built.
  const noShelter = new THREE.DataTexture(new Uint8Array([0]), 1, 1, THREE.RedFormat, THREE.UnsignedByteType);
  noShelter.needsUpdate = true;
  Object.assign(uniforms, { uShelter: { value: noShelter }, uShelterBox: { value: new THREE.Vector4(0, 0, 1, 1) },
    uWet: { value: 0 }, uSnow: { value: 0 }, uSkyTint: { value: new THREE.Color(0x9fb4b8) } });
  // The pool sets its caustics pattern and light once the world is built.
  Object.assign(uniforms, { uCaustics: { value: noShelter }, uPoolLight: { value: new THREE.Vector4() }, uPoolTime: { value: 0 } });
  const VERTEX = { box: [BOX_VERTEX, BOX_UV], voxel: [VOXEL_VERTEX, VOXEL_UV], cross: [CROSS_VERTEX, CROSS_UV] };

  function make(kind, { cutout = false, transparent = false, opacity = 1 } = {}) {
    const material = new THREE.MeshLambertMaterial({
      vertexColors: kind === 'voxel',
      transparent,
      opacity,
      depthWrite: !transparent,
      // Voxel glass keeps one face per pane; showing it from both sides makes
      // every window one sheet of the same glass, whichever side it is seen from.
      side: kind === 'cross' || (kind === 'voxel' && transparent) ? THREE.DoubleSide : THREE.FrontSide,
    });
    if (cutout) material.defines = { CUTOUT: '' };
    if (transparent) material.defines = { BLOCK_GLASS: '' };
    material.onBeforeCompile = shader => {
      for (const name of ['uShelter', 'uShelterBox', 'uWet', 'uSnow', 'uSkyTint', 'uCaustics', 'uPoolLight', 'uPoolTime']) shader.uniforms[name] = uniforms[name];
      shader.uniforms.uTiles = uniforms.uTiles;
      shader.uniforms.uEmissiveBoost = uniforms.uEmissiveBoost;
      shader.uniforms.uTime = uniforms.uTime;
      shader.uniforms.uMarble = uniforms.uMarble;
      shader.uniforms.uMarbleLayer = uniforms.uMarbleLayer;
      shader.vertexShader = SHARED_VERTEX + VERTEX[kind][0] + shader.vertexShader
        .replace('#include <begin_vertex>', VERTEX[kind][1])
        .replace('#include <project_vertex>', SURFACE_VERTEX);
      shader.fragmentShader = FRAGMENT_HEAD + shader.fragmentShader
        .replace('#include <map_fragment>', FRAGMENT_MAP)
        .replace('#include <emissivemap_fragment>', FRAGMENT_EMISSIVE);
      if (transparent) {
        shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', GLASS_FRAGMENT);
      } else shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', WEATHER_FRAGMENT);
    };
    material.customProgramCacheKey = () => `${kind}-${cutout}-${transparent}`;
    return material;
  }

  // Cutout leaves need a matching depth material so their shadows are dappled.
  function depth(kind) {
    const material = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    material.onBeforeCompile = shader => {
      shader.uniforms.uTiles = uniforms.uTiles;
      shader.uniforms.uTime = uniforms.uTime;
      shader.vertexShader = SHARED_VERTEX + VERTEX[kind][0] + shader.vertexShader
        .replace('#include <begin_vertex>', VERTEX[kind][1]);
      shader.fragmentShader = `uniform highp sampler2DArray uTiles;\nvarying vec3 vTex;\nvarying float vEmissive;\n` + shader.fragmentShader
        .replace('#include <alphatest_fragment>', 'if (texture(uTiles, vTex).a < 0.5) discard;');
    };
    material.customProgramCacheKey = () => `depth-${kind}`;
    return material;
  }

  return {
    uniforms,
    voxel: make('voxel'),
    voxelCutout: make('voxel', { cutout: true }),
    voxelGlass: make('voxel', { transparent: true }),
    box: make('box'),
    boxCutout: make('box', { cutout: true }),
    boxGlass: make('box', { transparent: true }),
    cross: make('cross', { cutout: true }),
    voxelDepth: depth('voxel'),
    boxDepth: depth('box'),
  };
}

// Furniture and fittings are collected as boxes, then flushed into a few
// instanced meshes. Each box keeps a tag so clicks can find their station.
export class BoxBatch {
  constructor(layer) {
    this.layer = layer;
    this.items = { opaque: [], metal: [], cutout: [], glass: [] };
    this.stack = [new THREE.Matrix4()];
  }

  // Run fn with every box placed relative to (x, y, z), rotated by ry.
  at(x, y, z, ry, fn) {
    const m = new THREE.Matrix4().makeRotationY(ry || 0).setPosition(x, y, z);
    this.stack.push(this.stack[this.stack.length - 1].clone().multiply(m));
    fn();
    this.stack.pop();
  }

  // A box from its bottom-centre (cx, y, cz) with size (w, h, d).
  box(cx, y, cz, w, h, d, look, opts = {}) {
    const { top = look.top ?? look.tex, side = look.side ?? look.tex, bottom = look.bottom ?? look.top ?? look.tex } = look;
    const matrix = new THREE.Matrix4();
    const local = new THREE.Matrix4().compose(
      new THREE.Vector3(cx, y + h / 2, cz),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(opts.rx || 0, opts.ry || 0, opts.rz || 0, opts.order || 'XYZ')),
      new THREE.Vector3(Math.max(w, 0.001), Math.max(h, 0.001), Math.max(d, 0.001)),
    );
    matrix.multiplyMatrices(this.stack[this.stack.length - 1], local);
    const kind = look.glass ? 'glass' : look.cutout ? 'cutout' : look.metal ? 'metal' : 'opaque';
    this.items[kind].push({
      matrix,
      layers: [this.layer[top], this.layer[side], this.layer[bottom]],
      color: new THREE.Color(look.tint ?? 0xffffff),
      emissive: look.emissive || 0,
      tag: opts.tag || null,
      shadow: opts.shadow !== false && !look.emissive,
    });
    return matrix;
  }

  build(materials) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const meshes = [];
    for (const [kind, list] of Object.entries(this.items)) {
      // Lamps and glass do not cast shadows; everything else does.
      for (const castShadow of [true, false]) {
        const items = list.filter(i => i.shadow === castShadow);
        if (!items.length) continue;
        const material = kind === 'glass' ? materials.boxGlass : kind === 'cutout' ? materials.boxCutout : kind === 'metal' ? materials.boxMetal : materials.box;
        const mesh = new THREE.InstancedMesh(geometry, material, items.length);
        const layers = new Float32Array(items.length * 3);
        const emissive = new Float32Array(items.length);
        items.forEach((item, i) => {
          mesh.setMatrixAt(i, item.matrix);
          mesh.setColorAt(i, item.color);
          layers.set(item.layers, i * 3);
          emissive[i] = item.emissive;
        });
        mesh.geometry = geometry.clone();
        mesh.geometry.setAttribute('iLayers', new THREE.InstancedBufferAttribute(layers, 3));
        mesh.geometry.setAttribute('iEmissive', new THREE.InstancedBufferAttribute(emissive, 1));
        mesh.castShadow = castShadow && kind !== 'glass';
        mesh.receiveShadow = kind !== 'glass';
        if (kind === 'cutout') mesh.customDepthMaterial = materials.boxDepth;
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();
        mesh.userData.tags = items.map(i => i.tag);
        mesh.matrixAutoUpdate = false;
        if (kind === 'glass') mesh.renderOrder = 2;
        meshes.push(mesh);
      }
    }
    return meshes;
  }
}
