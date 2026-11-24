// Kitchen-only PBR stainless. One 128px prefiltered room probe is baked at
// startup; its RGB channels hold daylight, lamplight and dim room fill.
// Reweighting those channels follows the sky without recapturing the scene.
import * as THREE from 'three';
import { HOUSE, ROOF_GLASS } from './layout.js';

function roomProbe(renderer) {
  const room = new THREE.Scene(), geometry = new THREE.BoxGeometry(1, 1, 1), materials = [];
  const surface = (day, lamp, fill, side = THREE.FrontSide) => {
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(day, lamp, fill), side });
    materials.push(material); return material;
  };
  const wall = surface(.22, .40, .04, THREE.BackSide);
  const floor = surface(.48, .65, .06), frame = surface(.025, .018, .008);
  const skylight = surface(.62, .20, .008);
  const lamp = surface(.02, 3.2, .015), stone = surface(.06, .045, .012);
  const box = (x, y, z, w, h, d, material) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z); mesh.scale.set(w, h, d); room.add(mesh);
  };
  const cx = (HOUSE.x0 + HOUSE.x1) / 2, cz = (HOUSE.z0 + HOUSE.z1) / 2;
  box(cx, HOUSE.height / 2, cz, HOUSE.x1 - HOUSE.x0, HOUSE.height, HOUSE.z1 - HOUSE.z0, wall);
  box(cx, -.015, cz, HOUSE.x1 - HOUSE.x0, .04, HOUSE.z1 - HOUSE.z0, floor);
  // Use the house's actual broad south/east glazing and roof fields. Frames
  // and the green island give the reflection dark structure between windows.
  // The lower panes see the darker horizon/sea; the upper panes see sky.
  // Prefiltering softens these small bands into a continuous reflected field.
  for (let i = 0; i < 24; i++) {
    const y = .65 + (i + .5) * 8.3 / 24;
    const sky = THREE.MathUtils.smoothstep(y, 1, 5);
    const pane = surface(.45 + 1.45 * sky, .025, .008);
    box(cx, y, HOUSE.z1 - .03, HOUSE.x1 - HOUSE.x0 - .2, 8.3 / 24, .025, pane);
    if (y >= 1) box(HOUSE.x1 - .03, y, 10, .025, 8.3 / 24, 12, pane);
  }
  for (let x = HOUSE.x0; x <= HOUSE.x1; x += 3.8) box(x, 4.8, HOUSE.z1 - .06, .09, 8.4, .08, frame);
  for (const z of [4, 8, 12, 16]) box(HOUSE.x1 - .06, 5, z, .08, 8, .09, frame);
  box(cx, 4.5, HOUSE.z1 - .07, HOUSE.x1 - HOUSE.x0, .1, .08, frame);
  box(HOUSE.x1 - .07, 4.5, 10, .08, .1, 12, frame);
  for (const p of ROOF_GLASS) box((p.x0 + p.x1) / 2, HOUSE.height - .03, (p.z0 + p.z1) / 2, p.x1 - p.x0, .025, p.z1 - p.z0, skylight);
  box(17.5, .48, 8.5, 3.9, .96, 1.35, stone);
  box(17.5, 3.2, 8.5, 3.32, .055, .18, lamp);
  box(16, 2.66, 12.8, 1.65, .055, .22, lamp);
  // Soft room bounce from the existing hanging fixtures, kept below the
  // window energy. It is reflected illumination, never surface emission.
  box(8, 7.5, 7, 5, .08, 3, surface(.12, .75, .025));
  const pmrem = new THREE.PMREMGenerator(renderer);
  let target;
  try {
    target = pmrem.fromScene(room, .035, .1, 80, { size: 128, position: new THREE.Vector3(16.6, 1.35, 6.4) });
    target.texture.name = 'kitchen-room-radiance';
  } finally {
    pmrem.dispose(); geometry.dispose(); materials.forEach(material => material.dispose());
  }
  return target;
}

const VERTEX = /* glsl */`
  #include <begin_vertex>
  vec3 brushScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
  vec3 brushPosition = (position + 0.5) * brushScale;
  vBrushUv = abs(normal.y) > 0.5 ? brushPosition.zx : abs(normal.x) > 0.5 ? brushPosition.zy : brushPosition.xy;
  // The anisotropic tangent frame uses the same physical grain direction.
  vUv = vBrushUv;
`;
const ROUGHNESS = /* glsl */`
  #include <roughnessmap_fragment>
  // Filter each frequency before it reaches Nyquist, not after the two
  // signals beat together into visible moire at normal walking distances.
  float phaseA = vBrushUv.x * 720.0, phaseB = vBrushUv.x * 1040.0;
  float brush = sin(phaseA) * (1.0 - smoothstep(1.0, 2.6, fwidth(phaseA)))
    + 0.35 * sin(phaseB) * (1.0 - smoothstep(1.0, 2.6, fwidth(phaseB)));
  roughnessFactor = clamp(roughnessFactor + brush * 0.018, 0.22, 0.48);
`;

export function createStainless(stage) {
  const target = roomProbe(stage.renderer);
  const uniforms = {
    uSteelDay: { value: new THREE.Vector3(1, 1, 1) },
    uSteelLamp: { value: new THREE.Vector3(.18, .17, .15) },
    uSteelFill: { value: new THREE.Vector3(.5, .49, .48) },
  };
  const material = new THREE.MeshPhysicalMaterial({
    name: 'brushed-stainless', color: 0xc9cccf, metalness: 1, roughness: .32,
    // Grooves run along V; microfacet spread is greater across them (U).
    anisotropy: .35, anisotropyRotation: 0,
    envMap: target.texture, envMapIntensity: 1,
  });
  const environment = THREE.ShaderChunk.envmap_physical_pars_fragment.replaceAll(
    'envMapColor.rgb * envMapIntensity',
    '(envMapColor.r * uSteelDay + envMapColor.g * uSteelLamp + envMapColor.b * uSteelFill) * envMapIntensity',
  );
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = 'varying vec2 vBrushUv;\n' + shader.vertexShader.replace('#include <begin_vertex>', VERTEX);
    shader.fragmentShader = 'varying vec2 vBrushUv;\nuniform vec3 uSteelDay;\nuniform vec3 uSteelLamp;\nuniform vec3 uSteelFill;\n' + shader.fragmentShader
      .replace('#include <envmap_physical_pars_fragment>', environment)
      .replace('#include <roughnessmap_fragment>', ROUGHNESS);
  };
  material.customProgramCacheKey = () => 'brushed-stainless-room-v1';
  material.onBeforeRender = () => {
    const night = stage.night, sky = stage.hemi.color;
    const day = ((1 - night) * (.72 + .28 * Math.min(1.3, stage.hemi.intensity / 1.25)) + night * .025) * (1 - .24 * stage.veil);
    uniforms.uSteelDay.value.set(day * (.88 + sky.r * .12), day * (.88 + sky.g * .12), day * (.88 + sky.b * .12));
    const lamp = .18 + .82 * night;
    uniforms.uSteelLamp.value.set(lamp, lamp * .97, lamp * .94);
  };
  material.addEventListener('dispose', () => target.dispose());
  material.userData.stainless = { uniforms, probeSize: 128, textureBytes: target.width * target.height * 8 };
  return material;
}
