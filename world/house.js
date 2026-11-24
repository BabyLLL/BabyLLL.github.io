// The house shell, the pool's basin and the island's surface, built from
// blocks. The island itself comes from the engine (terrain.js buildIsland).
import { HOUSE, LOFT, SECRET, GARAGE, POOL, TERRACE, DRIVEWAY, ENTRANCE, BACKDOOR, ROOF_GLASS, ROOF_LADDER } from './layout.js';
import { inRect } from '@engine/world/terrain.js';

const SHELL = { x0: HOUSE.x0 - 1, x1: HOUSE.x1 + 1, z0: HOUSE.z0 - 1, z1: HOUSE.z1 + 1 };
const POOL_DECK = { x0: POOL.x0 - 1, x1: POOL.x1 + 1, z0: POOL.z0 - 1, z1: POOL.z1 + 1 };

export function defineHouseBlocks(grid) {
  const interior = (x, y, z) => x >= HOUSE.x0 && x < HOUSE.x1 && z >= HOUSE.z0 && z < HOUSE.z1 && y >= 0 && y < HOUSE.height;
  // Blackened metal outside and continuous warm wood panelling inside.
  const wallTex = (face, x, y, z) => {
    if (face.n[1] === 1) return 'steel';
    if (face.n[1] === -1) return 'black_metal';
    const nx = x + face.n[0], nz = z + face.n[2];
    if (!interior(nx, y, nz)) return 'black_metal';
    return 'wood_panel';
  };
  grid.define('wood_floor', { tex: { all: 'greige_floor' }, merge: true });
  grid.define('epoxy', { tex: { all: 'concrete' }, tint: 0xc2c5c8 });
  grid.define('pool_tile', { tex: { all: 'pool_tile' } });
  grid.define('pool_deep', { tex: { all: 'pool_deep' } });
  // The pool's rim: travertine on top, tiled down its inner face to the water.
  grid.define('coping', { tex: { top: 'travertine', side: 'pool_tile', bottom: 'pool_tile' } });
  grid.define('wall', { tex: wallTex, merge: true });
  grid.define('roof', { tex: { top: 'roof', side: 'black_metal', bottom: 'wood_panel' }, merge: true });
  grid.define('parapet', { tex: { top: 'steel', side: 'black_metal', bottom: 'black_metal' } });
  // A glazed cell is a metre deep; drawing all its faces reads as two thick
  // sheets. Keep one face, on the inner wall line beside the steel frames
  // (the top for roof lights), so every window is a single pane.
  const paneFace = (x, y, z) => y >= HOUSE.height ? 2
    : x === HOUSE.x0 - 1 ? 0 : x === HOUSE.x1 ? 1 : z === HOUSE.z0 - 1 ? 4
    : z === GARAGE.z1 ? 5 : x === GARAGE.x0 - 1 ? 0 : -1;
  grid.define('glass', { kind: 'glass', tex: { all: 'glass' }, merge: true,
    skipFace: (f, x, y, z) => { const keep = paneFace(x, y, z); return keep >= 0 && f !== keep; } });
  // Keep the facade's collision cells; furnish draws thin panes at the inner
  // wall line so the metre-deep voxel shell cannot slice through open doors.
  grid.define('front_glass', { kind: 'glass', tex: { all: 'glass' }, skipFace: () => true });
  grid.define('brick', { tex: { all: 'wood_panel' }, merge: true });
  grid.define('loft', { tex: { top: 'greige_floor', side: 'wood_panel', bottom: 'wood_panel' }, merge: true });
  grid.define('osmanthus', { kind: 'cutout', tex: { all: 'leaves_osmanthus' } });
  grid.define('bookshelf', { tex: { all: 'wood_panel' }, merge: true });
}

// What tops each column of the island: floors, decks and paving, else grass.
export function surfaceAt(x, z) {
  if (inRect(SHELL, x, z)) {
    return 'wood_floor';
  }
  if (inRect(TERRACE, x, z)) return 'deck';

  if (inRect(POOL_DECK, x, z)) return 'travertine';
  if (inRect(DRIVEWAY, x, z)) return 'pavers';
  // Stepping stones from the terrace east to the drive and west to the garden.
  if (z >= TERRACE.z0 && z < TERRACE.z1 && (x === 22 || x === 24 || x === -23 || x === -25)) return 'travertine';
  return 'grass';
}

export function buildPool(grid) {
  for (let x = POOL.x0 - 1; x <= POOL.x1; x++) for (let z = POOL.z0 - 1; z <= POOL.z1; z++) {
    const inside = x >= POOL.x0 && x < POOL.x1 && z >= POOL.z0 && z < POOL.z1;
    const seaEdge = x >= POOL.x0 && x < POOL.x1 && z === POOL.z1;
    for (let y = POOL.bed - 2; y < 0; y++) {
      if (inside) grid.set(x, y, z, y < POOL.bed ? 'pool_deep' : null);
      // Every cell from the floor up must go: a y=-2 cell would leave a broad
      // ledge at y=-1, just above the sea, and any cell beside the floor would
      // share a face with the narrow waterline wall (batched furniture) and flicker.
      else if (seaEdge) grid.set(x, y, z, y < POOL.bed ? 'pool_tile' : null);
      else grid.set(x, y, z, y === -1 ? 'coping' : 'pool_tile');
    }
  }
}

export function buildShell(grid) {
  const { x0, x1, z0, z1, height } = HOUSE;
  // Four walls, each its own group so the camera can lower whichever is in the way.
  for (let y = 0; y < height; y++) {
    for (let x = x0 - 1; x <= x1; x++) {
      const back = x >= BACKDOOR.x0 && x < BACKDOOR.x1 && y < 3;
      grid.set(x, y, z0 - 1, back ? null : northWall(x, y) ? 'wall' : 'glass', 'wallN');
      const south = southWall(x, y);
      grid.set(x, y, z1, south, 'wallS');
    }
    for (let z = z0; z < z1; z++) {
      grid.set(x0 - 1, y, z, westWall(z, y) ? 'wall' : 'glass', 'wallW');
      grid.set(x1, y, z, eastWall(z, y), 'wallE');
    }
  }
  // Broad walkable glazing; the solid perimeter and 3 m cross remain flush.
  for (let x = x0 - 1; x <= x1; x++) for (let z = z0 - 1; z <= z1; z++) {
    const sky = ROOF_GLASS.some(s => inRect(s, x, z));
    grid.set(x, height, z, sky ? 'glass' : 'roof', 'roof');
    const rim = x === x0 - 1 || x === x1 || z === z0 - 1 || z === z1;
    const gate = x === x1 && z >= ROOF_LADDER.gate0 && z < ROOF_LADDER.gate1;
    if (rim && !gate) grid.set(x, height + 1, z, 'parapet', 'roof');
  }
  // Back rooms under the loft, and the loft deck on top of them.
  grid.fill(LOFT.x0, 0, LOFT.z0, LOFT.x1, LOFT.y - 1, LOFT.z1, 'brick');
  grid.fill(LOFT.x0, LOFT.y - 1, LOFT.z0, LOFT.x1, LOFT.y, LOFT.z1, 'loft');
  // The save room keeps its existing collision/door identity, with quiet wood
  // panels. A single curated bookcase is built as furniture beside the desk.
  grid.fill(SECRET.x1, LOFT.y, LOFT.z0, SECRET.x1 + 1, LOFT.y + 3, SECRET.z1 + 1, 'bookshelf');
  grid.fill(SECRET.x0, LOFT.y, SECRET.z1, SECRET.x1, LOFT.y + 3, SECRET.z1 + 1, 'bookshelf');
  grid.fill(SECRET.x0, LOFT.y + 3, LOFT.z0, SECRET.x1 + 1, LOFT.y + 4, SECRET.z1 + 1, 'loft', 'secretTop');
  for (let y = LOFT.y; y < LOFT.y + 2; y++) grid.set(SECRET.x1, y, SECRET.door, 'bookshelf', 'secretDoor');
  // The garage: a steel-framed glass wall to the west with a door in it, and a
  // low brick wall to the south that carries the TV of the games corner.
  for (let y = 0; y < height; y++) {
    for (let z = GARAGE.z0; z < GARAGE.z1; z++) {
      const door = z >= GARAGE.glassDoor.z0 && z < GARAGE.glassDoor.z1 && y < 3;
      grid.set(GARAGE.x0 - 1, y, z, door ? null : 'glass');
    }
    for (let x = GARAGE.x0 - 1; x < GARAGE.x1; x++) grid.set(x, y, GARAGE.z1, y < 3 ? 'brick' : 'glass');
  }
}

// Clerestory windows run high along the back and sides.
const clerestory = (i, y) => y >= 6 && y < 9;

function northWall(x, y) {
  if (x >= -2 && x < GARAGE.x0) return true; // the workbench wall stays solid
  return !clerestory(x, y);
}

function westWall(z, y) {
  if (z >= -3 && z < 7) return true; // behind the hoop and scoreboard
  return !clerestory(z, y);
}

function eastWall(z, y) {
  const { z0, z1 } = GARAGE.door;
  if (z >= z0 && z < z1 && y < 4) return null; // garage door, rolled up
  if (z >= GARAGE.z1 + 1 && y >= 1 && y < HOUSE.height - 1) return 'glass';
  return clerestory(z, y) ? 'glass' : 'wall';
}

function southWall(x, y) {
  // One broad window on either side of the entrance, with perimeter framing.
  if (y === HOUSE.height - 1 || x === HOUSE.x0 - 1 || x === HOUSE.x1) return 'wall';
  if (x >= ENTRANCE.x0 && x < ENTRANCE.x1 && y < 3) return null;
  return 'front_glass';
}
