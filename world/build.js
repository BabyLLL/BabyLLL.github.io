// Build the show-home world. The world modules are vendored from upstream
// terryHu7/homecraft examples/terry-home at commit ff3a0cdf090e (MIT); our
// additions are the xiaoguai NPC (world/npc.js) and her station in layout.js.
// The engine calls build() once at boot, then setup() once the player exists.
import { buildIsland } from '@engine/world/terrain.js';
import { buildForest } from '@engine/world/landscape.js';
import { defineHouseBlocks, surfaceAt, buildPool, buildShell } from './house.js';
import { furnish } from './furnish.js';
import { buildOuter } from './outer.js';
import { buildMountain } from './mountain.js';
import { buildRoofAccess } from './roof-access.js';
import { createStainless } from './stainless.js';
import { createVertec } from './vertec.js';
import { createXiaoguai } from './npc.js';
import { ISLAND, FOREST, COURT, RIM } from './layout.js';

export function build({ grid, layer, materials, stage }) {
  // The kitchen's brushed steel is a real metal, with its own room reflection.
  materials.boxMetal = createStainless(stage);
  defineHouseBlocks(grid);
  buildIsland(grid, ISLAND, { surfaceAt });
  buildPool(grid);
  buildShell(grid);
  const forest = buildForest(grid, layer, FOREST);
  const furn = furnish({ layer });
  // The pier and sailboat, the mountain and the roof's outside stair are
  // ground of their own, outside the block grid.
  const outer = buildOuter(layer, materials), mountain = buildMountain(layer, materials), roofAccess = buildRoofAccess(layer, materials);
  stage.scene.add(outer.group, mountain.group, roofAccess.group);
  return {
    batches: furn.batches, planes: furn.planes, obstacles: furn.obstacles, lights: furn.lights, bakes: furn.lighting,
    hotspots: furn.hotspots, animated: furn.animated, surfaces: furn.surfaces, forest,
    sites: [outer, mountain], sitesAfter: [roofAccess],
    named: { outer, mountain, roofAccess, drawMap },
  };
}

// The half court painted on the radar as it is on the floor.
function drawMap(ctx, X, Z, PPM) {
  ctx.fillStyle = '#2b2e31';
  ctx.fillRect(X(COURT.x0 - 1), Z(COURT.z0 - 1), (COURT.x1 - COURT.x0 + 2) * PPM, (COURT.z1 - COURT.z0 + 2) * PPM);
  ctx.fillStyle = '#d9ae76';
  ctx.fillRect(X(COURT.x0), Z(COURT.z0), (COURT.x1 - COURT.x0) * PPM, (COURT.z1 - COURT.z0) * PPM);
  ctx.fillStyle = '#b92d28';
  ctx.fillRect(X(COURT.x0), Z(RIM.z - 2.45), 5.8 * PPM, 4.9 * PPM);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  const courtSide = Math.min((COURT.z1 - COURT.z0) / 2 - 0.9, 6.7);
  ctx.arc(X(RIM.x), Z(RIM.z), 6.75 * PPM, -Math.asin(courtSide / 6.75), Math.asin(courtSide / 6.75));
  ctx.stroke();
  ctx.strokeRect(X(COURT.x0), Z(COURT.z0), (COURT.x1 - COURT.x0) * PPM, (COURT.z1 - COURT.z0) * PPM);
}

// The moving parts the engine does not know about: the Vertec in the gym
// (jump beside it and the vanes swing), the sailboat rocking at the pier,
// and Xiaoguai wandering the lounge.
export function setup({ stage, world, nav, player, avatar, sound }) {
  const vertec = createVertec({ avatar, sound });
  stage.scene.add(vertec.mesh);
  const xiaoguai = createXiaoguai({ stage, nav, player, sound });
  return {
    update(dt, elapsed, now) {
      vertec.update(dt, player);
      xiaoguai.update(dt, player, now);
      world.outer.update(dt, stage.camera);
    },
    xiaoguai,
  };
}
