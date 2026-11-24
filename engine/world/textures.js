// Procedural 16×16 pixel tiles in the spirit of Minecraft block textures.
// Every tile becomes one layer of a single texture array, so the island,
// buildings and furniture share one shader.
import * as THREE from 'three';

export const TILE = 16;

export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const rgb = c => [(c >> 16) & 255, (c >> 8) & 255, c & 255];
const pick = (r, list) => list[Math.floor(r() * list.length) % list.length];
const shade = (c, k) => {
  const [r, g, b] = rgb(c);
  const f = v => Math.max(0, Math.min(255, Math.round(v * k)));
  return (f(r) << 16) | (f(g) << 8) | f(b);
};

// Each painter fills a 16×16 tile through set(x, y, color, alpha), with y = 0 at the top.
const PAINTERS = {
  grass_top(set, r) {
    const base = [0x6fa544, 0x78ae4b, 0x67993f, 0x80b653, 0x73a847];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      set(x, y, v < 0.08 ? 0x8cc15a : v < 0.16 ? 0x5d8f37 : pick(r, base));
    }
  },
  grass_side(set, r) {
    PAINTERS.dirt(set, r);
    for (let x = 0; x < 16; x++) {
      const depth = 2 + Math.floor(r() * 3);
      for (let y = 0; y < depth; y++) set(x, y, pick(r, [0x6fa544, 0x78ae4b, 0x67993f]));
      if (r() < 0.35) set(x, depth, 0x5d8f37);
    }
  },
  dirt(set, r) {
    const base = [0x8c6239, 0x7d5632, 0x966a40, 0x84603a];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      set(x, y, v < 0.07 ? 0x6b4629 : v < 0.12 ? 0xa57a4f : pick(r, base));
    }
  },
  stone(set, r) {
    const base = [0x8e8e8e, 0x868686, 0x969696, 0x8a8a8a];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, base));
    for (let i = 0; i < 7; i++) {
      const x = Math.floor(r() * 15), y = Math.floor(r() * 15), c = r() < 0.5 ? 0x747474 : 0xa3a3a3;
      set(x, y, c); set(x + 1, y, c); if (r() < 0.5) set(x, y + 1, c);
    }
  },
  deepslate(set, r) {
    const base = [0x55565c, 0x4d4e54, 0x5c5d63, 0x48494e];
    for (let y = 0; y < 16; y++) {
      const row = r() < 0.2 ? 0x3f4045 : null;
      for (let x = 0; x < 16; x++) set(x, y, row && r() < 0.7 ? row : pick(r, base));
    }
  },
  concrete(set, r) {
    const base = [0xcdc9c1, 0xc9c5bd, 0xd1cdc6, 0xc6c2ba];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      set(x, y, v < 0.04 ? 0xb7b3ab : v < 0.07 ? 0xdcd8d1 : pick(r, base));
    }
  },
  planks(set, r, { base = [0xbb8b5a, 0xb08253, 0xc39566, 0xa97d4f], seam = 0x7b5837, grain = 0.06 } = {}) {
    for (let board = 0; board < 4; board++) {
      const tone = base[board % base.length];
      const joint = 3 + Math.floor(r() * 10);
      for (let y = board * 4; y < board * 4 + 4; y++) for (let x = 0; x < 16; x++) {
        let c = tone;
        const v = r();
        if (v < grain) c = shade(tone, 0.88);
        else if (v < grain * 2) c = shade(tone, 1.07);
        if (y === board * 4 + 3) c = seam;
        else if (x === joint && board % 2 === 0) c = shade(seam, 1.15);
        else if (x === (joint + 8) % 16 && board % 2 === 1) c = shade(seam, 1.15);
        set(x, y, c);
      }
    }
  },
  oak(set, r) { PAINTERS.planks(set, r); },
  wood_floor(set, r, tones = [0xdfcfb1, 0xd9c8a9, 0xe3d4b7, 0xdbcbad]) {
    // Four boards per metre with soft seams and long grain streaks, without a
    // border around every metre. The default pale oak remains on shared wood.
    for (let board = 0; board < 4; board++) {
      const tone = tones[board];
      for (let y = board * 4; y < board * 4 + 4; y++) for (let x = 0; x < 16; x++) set(x, y, tone);
      for (let s = 0; s < 6; s++) {
        const y = board * 4 + Math.floor(r() * 3), x0 = Math.floor(r() * 16), length = 3 + Math.floor(r() * 7);
        const k = r() < 0.65 ? 0.955 : 1.03;
        for (let i = 0; i < length; i++) set((x0 + i) % 16, y, shade(tone, k));
      }
      for (let x = 0; x < 16; x++) set(x, board * 4 + 3, shade(tone, 0.935));
    }
  },
  wood_panel(set, r) {
    // H1379 reference: a slightly deeper, muted natural oak. Keep the floor
    // lighter and avoid orange/cocoa tints; Neutral tone mapping shows more of
    // the authored colour than ACES did, so the panels carry less saturation.
    for (let x = 0; x < 16; x++) {
      const tone = x % 6 === 0 ? 0x8b8172 : x % 6 === 1 ? 0x988e7f : 0x928878;
      for (let y = 0; y < 16; y++) set(x, y, r() < 0.08 ? shade(tone, 0.98) : tone);
    }
  },
  stainless(set) {
    // Keep this layer index stable. Kitchen silver uses the dedicated PBR
    // material in stainless.js; this is only its neutral fallback tile.
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, 0xc9cccf);
  },
  sand(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0xe0cfa2, 0xd9c799, 0xe6d6ab]));
  },
  prada_marble(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x10291f, 0x142f24, 0x19362a]));
  },
  chair_mesh(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, (x + y) % 2 ? 0x2a2e30 : 0x1d2022);
  },
  // Basket-weave oak parquet: half-metre squares of two staves, turning each time.
  parquet(set, r) {
    const tones = [0xc8a479, 0xbd986d, 0xd0ad82, 0xb89068];
    for (let qy = 0; qy < 2; qy++) for (let qx = 0; qx < 2; qx++) {
      const horizontal = (qx + qy) % 2 === 0;
      for (let ly = 0; ly < 8; ly++) for (let lx = 0; lx < 8; lx++) {
        const along = horizontal ? lx : ly, across = horizontal ? ly : lx;
        const stave = Math.floor(across / 4);
        let c = tones[(qx * 2 + qy * 3 + stave) % tones.length];
        if (across % 4 === 3) c = 0xa8825c;
        else if (along === 7) c = shade(c, 0.86);
        else if (r() < 0.07) c = shade(c, r() < 0.5 ? 0.93 : 1.05);
        set(qx * 8 + lx, qy * 8 + ly, c);
      }
    }
  },
  walnut(set, r) { PAINTERS.planks(set, r, { base: [0x5f412a, 0x573b26, 0x66472e, 0x5b3e28], seam: 0x36251a }); },
  maple(set, r) { PAINTERS.planks(set, r, { base: [0xdcb27c, 0xd4a972, 0xe2b985, 0xd8ae77], seam: 0xb48654, grain: 0.05 }); },
  deck(set, r) { PAINTERS.planks(set, r, { base: [0xa8744a, 0x9e6c43, 0xb07b50, 0xa47048], seam: 0x5e3f26 }); },
  black_metal(set, r) {
    const cols = [0x3a3d41, 0x2c2f33, 0x24272a, 0x1d1f22];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      let c = cols[x % 4];
      if (r() < 0.06) c = shade(c, 1.12);
      set(x, y, c);
    }
  },
  white_brick(set, r) {
    const mortar = 0xcfcbc3;
    for (let row = 0; row < 4; row++) {
      const offset = row % 2 ? 4 : 0;
      for (let y = row * 4; y < row * 4 + 4; y++) for (let x = 0; x < 16; x++) {
        const bx = (x + offset) % 8;
        if (y === row * 4 + 3 || bx === 7) { set(x, y, mortar); continue; }
        const brick = Math.floor((x + offset) / 8) + row * 3;
        const tone = [0xefece6, 0xe9e5de, 0xf3f0ea, 0xe5e1da][brick % 4];
        set(x, y, r() < 0.08 ? shade(tone, 0.97) : tone);
      }
    }
  },
  prada(set, r) {
    const base = [0x626d4d, 0x606b4b, 0x646f4f];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, base));
  },
  plaster(set, r) {
    const base = [0xeeece7, 0xebe9e4, 0xf0eee9];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, base));
  },
  glass(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      set(x, y, 0xbadce3, 46);
    }
  },
  roof(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const seam = x % 4 === 0;
      const c = seam ? 0x575b62 : pick(r, [0x3d4147, 0x3a3e44, 0x40444a]);
      set(x, y, c);
    }
  },
  bookshelf(set, r) {
    const wood = 0xa97d4f, dark = 0x3b2a1b;
    const books = [0x6e9e78, 0x2b2b2b, 0x8c302b, 0xe2d6b5, 0x30507c, 0xc28c3c, 0x6b4a2e, 0x4c7a8c, 0xa9a9a2];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, wood);
    for (const top of [1, 9]) {
      let x = 1;
      while (x < 15) {
        const w = 1 + Math.floor(r() * 2.4), c = pick(r, books), h = 6 - (r() < 0.3 ? 1 : 0);
        for (let i = 0; i < w && x + i < 15; i++) for (let y = top; y < top + 6; y++) {
          set(x + i, y, y < top + 6 - h ? dark : (y === top + 6 - h ? shade(c, 1.2) : c));
        }
        x += w;
        if (r() < 0.12 && x < 14) { for (let y = top; y < top + 6; y++) set(x, y, dark); x++; }
      }
    }
    for (let x = 0; x < 16; x++) { set(x, 0, 0xc39566); set(x, 7, 0x8a6440); set(x, 8, 0xc39566); set(x, 15, 0x8a6440); }
  },
  leaves(set, r) {
    const base = [0x4e8a36, 0x5a9a3e, 0x46802f, 0x62a646];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      if (v < 0.2) set(x, y, 0, 0);
      else set(x, y, v < 0.3 ? 0x3b6e28 : pick(r, base));
    }
  },
  leaves_olive(set, r) {
    const base = [0x7e9466, 0x8aa070, 0x70885c, 0x96aa7c];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      if (v < 0.24) set(x, y, 0, 0);
      else set(x, y, pick(r, base));
    }
  },
  leaves_osmanthus(set, r) {
    const base = [0x3f7a35, 0x4a8a3c, 0x356b2d, 0x55963f];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      if (v < 0.16) set(x, y, 0, 0);
      else if (v < 0.24) set(x, y, v < 0.2 ? 0xf2c14e : 0xe8a93a);
      else set(x, y, pick(r, base));
    }
  },
  solar(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const line = x % 4 === 0 || y % 8 === 0;
      set(x, y, line ? 0x8ea3bd : pick(r, [0x1d2f4f, 0x203457, 0x1a2a47]));
    }
  },
  hedge(set, r) {
    const base = [0x3f7a2d, 0x4a8834, 0x376b27, 0x52913a];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, r() < 0.12 ? 0x2c5a20 : pick(r, base));
  },
  log(set, r) {
    const cols = [];
    for (let x = 0; x < 16; x++) cols.push(pick(r, [0x6e5434, 0x5f482d, 0x7b5f3b, 0x56412a]));
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, r() < 0.1 ? shade(cols[x], 0.85) : cols[x]);
  },
  log_top(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5));
      const c = d > 6.5 ? 0x5f482d : (Math.floor(d) % 2 ? 0xb08a5a : 0x9c7849);
      set(x, y, c);
    }
  },
  palm(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const band = y % 4 === 3;
      set(x, y, band ? 0x6f5b3f : pick(r, [0x9c8460, 0x937c58, 0xa38b66]));
    }
  },
  pool_tile(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const grout = x % 4 === 0 || y % 4 === 0;
      set(x, y, grout ? 0x9fcfd5 : pick(r, [0xe6f5f5, 0xdcf0f1, 0xe2f3f3]));
    }
  },
  pool_deep(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const grout = x % 4 === 0 || y % 4 === 0;
      set(x, y, grout ? 0x5ca4ad : pick(r, [0x7cc2cb, 0x73bbc4, 0x85c9d1]));
    }
  },
  travertine(set, r) {
    const base = [0xdcd3c2, 0xd5ccba, 0xe1d9c9];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const v = r();
      set(x, y, v < 0.05 ? 0xc3b9a6 : pick(r, base));
    }
    for (let x = 0; x < 16; x++) set(x, 15, 0xc9bfac);
    for (let y = 0; y < 16; y++) set(15, y, 0xc9bfac);
  },
  pavers(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const joint = x % 8 === 7 || y % 8 === 7;
      const tone = ((x >> 3) + (y >> 3)) % 2 ? 0xaeaaa1 : 0xb7b3aa;
      set(x, y, joint ? 0x8d8981 : (r() < 0.08 ? shade(tone, 0.94) : tone));
    }
  },
  steel(set, r) {
    // Blackened steel, lifted just enough that furniture keeps its form indoors.
    const base = [0x303337, 0x34373b, 0x2d3034];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, base));
  },
  white(set, r) {
    const base = [0xf2f0ec, 0xeeece8, 0xf4f2ee];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, base));
  },
  velvet(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const sheen = (x + y) % 5 === 0;
      set(x, y, sheen ? 0x3a6a53 : pick(r, [0x2f5b46, 0x2c5642, 0x325f49]));
    }
  },
  linen(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      set(x, y, (x + y) % 2 ? 0xe6e0d4 : pick(r, [0xded7ca, 0xe2dccf]));
    }
  },
  leather(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x8e522b, 0x874d28, 0x965a30]));
  },
  terracotta(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0xb8643f, 0xae5d3a, 0xbf6c46]));
  },
  rubber(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x2c2c2e, 0x28282a, 0x303032]));
  },
  paint(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0xffffff, 0xfbfbfb, 0xf7f7f7]));
  },
  chrome(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, [0xd4d8dc, 0xb9bec4, 0xe3e6e9, 0xc6cacf][(x + (y >> 2)) % 4]);
  },
  glow(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0xffe7b2, 0xffe1a3, 0xffecc2]));
  },
  screen(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x1a1f24, 0x1c2126]));
  },
  water(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x3aa9c6, 0x41b1cd, 0x35a0bd]), 200);
  },
  cloud(set) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, 0xffffff, 255);
  },
  gravel(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0x8f8a83, 0x9c968e, 0x7f7a73, 0xa8a39b]));
  },
  flower_red(set, r) { crossPlant(set, r, 0xd94141, 0xf2c94c); },
  flower_white(set, r) { crossPlant(set, r, 0xf4f1ea, 0xf2c94c); },
  flower_violet(set, r) { crossPlant(set, r, 0x8a6fd1, 0xf2e3a1); },
  tall_grass(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, 0, 0);
    for (let blade = 0; blade < 7; blade++) {
      const x = 1 + Math.floor(r() * 14), h = 6 + Math.floor(r() * 9);
      for (let y = 15; y > 15 - h; y--) set(x + (y < 15 - h / 2 && r() < 0.3 ? 1 : 0), y, pick(r, [0x6aa142, 0x7bb34f, 0x5b8f38]));
    }
  },
  // Append this layer to preserve all existing tile indices and grain seeds.
  // Indoor floors and stair treads retain the accepted warm greige palette.
  greige_floor(set, r) {
    PAINTERS.wood_floor(set, r, [0xb5ada3, 0xafa79d, 0xb9b1a7, 0xb2aaa0]);
  },
  // Neutral grey leaf clusters, appended after every existing layer. Each
  // crown's tint supplies its colour: greens, blossom, maple or gold.
  foliage(set, r) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, pick(r, [0xe2e2e2, 0xd8d8d8, 0xeaeaea, 0xdedede]));
    for (let i = 0; i < 26; i++) {
      const x = Math.floor(r() * 15), y = Math.floor(r() * 15), c = r() < 0.55 ? 0xaeaeae : 0xf7f7f7;
      set(x, y, c); set(x + 1, y, c); if (r() < 0.6) set(x, y + 1, c);
    }
    for (let i = 0; i < 12; i++) set(Math.floor(r() * 16), Math.floor(r() * 16), 0x8f8f8f);
  },
};

function crossPlant(set, r, petal, centre) {
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) set(x, y, 0, 0);
  for (let y = 7; y < 16; y++) set(7 + (y % 3 === 0 ? 1 : 0), y, 0x4f8a35);
  set(6, 11, 0x5a9a3e); set(5, 10, 0x5a9a3e); set(9, 12, 0x5a9a3e); set(10, 11, 0x5a9a3e);
  for (const [x, y] of [[7, 3], [6, 4], [8, 4], [7, 5], [6, 5], [8, 5], [7, 6], [5, 5], [9, 5], [7, 4]]) set(x, y, petal);
  set(7, 5, centre);
}

export const TILE_NAMES = Object.keys(PAINTERS).filter(n => n !== 'planks');

// Paint every tile into one DataArrayTexture. Rows are stored bottom-up so that
// v grows upwards in world space, the way a wall is read.
export function createTileArray() {
  const n = TILE_NAMES.length;
  const data = new Uint8Array(TILE * TILE * 4 * n);
  const layer = {};
  TILE_NAMES.forEach((name, i) => {
    layer[name] = i;
    const r = rng(1000 + i * 7919);
    const set = (x, y, color, alpha = 255) => {
      if (x < 0 || y < 0 || x > 15 || y > 15) return;
      const o = (i * TILE * TILE + (15 - y) * TILE + x) * 4;
      data[o] = (color >> 16) & 255; data[o + 1] = (color >> 8) & 255; data[o + 2] = color & 255; data[o + 3] = alpha;
    };
    PAINTERS[name](set, r);
  });
  const texture = new THREE.DataArrayTexture(data, TILE, TILE, n);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return { texture, layer, data };
}

// A crisp canvas texture for painted surfaces: the court, signs, frames and screens.
export function canvasTexture(width, height, paint, { pixelated = true } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = !pixelated;
  paint(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  if (pixelated) {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
  }
  texture.anisotropy = 8;
  return texture;
}

// One 16-metre slab map shared by all marble surfaces, after Verde Alpi
// ("Prada green"): a deep, near-black green with cloudy lighter fragments and a
// dense, brecciated web of muted green veins, so even a small top shows several.
// Every stroke is drawn on all wrap offsets, so the slab tiles without seams.
// Painted once at boot; no reflection pass or per-frame texture work.
export function createMarbleTexture() {
  const texture = canvasTexture(1024, 1024, (ctx, w, h) => {
    const r = rng(71359);
    // Cloudy base: a small tileable field, smoothed up to full size.
    const N = 128, base = document.createElement('canvas'); base.width = base.height = N;
    const bctx = base.getContext('2d'), data = bctx.createImageData(N, N);
    const waves = Array.from({ length: 7 }, () => [1 + Math.floor(r() * 5), Math.floor(r() * 5) - 2, r() * Math.PI * 2]);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let tone = 0;
      for (const [kx, ky, phase] of waves) tone += Math.sin((x * kx + y * ky) * Math.PI * 2 / N + phase);
      tone = tone * 1.4 + (r() - 0.5) * 2.5;
      const i = (y * N + x) * 4;
      data.data[i] = 12 + tone * .7; data.data[i + 1] = 27 + tone; data.data[i + 2] = 22 + tone * .8; data.data[i + 3] = 255;
    }
    bctx.putImageData(data, 0, 0);
    ctx.imageSmoothingEnabled = true; ctx.drawImage(base, 0, 0, w, h);
    const wrapped = draw => { for (const dx of [-w, 0, w]) for (const dy of [-h, 0, h]) { ctx.save(); ctx.translate(dx, dy); draw(); ctx.restore(); } };
    // Lighter brecciated fragments: soft, angular patches in the matrix.
    for (let i = 0; i < 70; i++) {
      const cx = r() * w, cy = r() * h, size = 10 + r() * 46, sides = 5 + Math.floor(r() * 3), pts = [];
      for (let k = 0; k < sides; k++) { const a = k / sides * 6.28 + r() * .6, d = size * (.55 + r() * .45); pts.push([cx + Math.cos(a) * d, cy + Math.sin(a) * d * .7]); }
      const fill = `rgba(${36 + r() * 14 | 0},${58 + r() * 16 | 0},${48 + r() * 12 | 0},${.12 + r() * .16})`;
      wrapped(() => { ctx.beginPath(); ctx.moveTo(...pts[0]); for (const p of pts.slice(1)) ctx.lineTo(...p); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); });
    }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const stroke = (points, width, color) => wrapped(() => {
      ctx.beginPath(); ctx.moveTo(...points[0]);
      for (let i = 1; i < points.length; i++) ctx.lineTo(...points[i]);
      ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke();
    });
    const VEINS = ['rgba(84,106,92,.8)', 'rgba(72,94,80,.75)', 'rgba(100,122,106,.75)', 'rgba(62,84,70,.7)'];
    // A crack wanders on a broad diagonal, kinking at short steps, and sheds
    // finer cracks; together they form the spiderweb network of the stone.
    const crack = (x, y, angle, length, width, depth) => {
      const points = [[x, y]];
      for (let d = 0; d < length; d += 5 + r() * 9) {
        angle += (r() - 0.5) * .7; x += Math.cos(angle) * 8; y += Math.sin(angle) * 8; points.push([x, y]);
        if (depth < 2 && r() < .06) crack(x, y, angle + (r() < .5 ? -1 : 1) * (.6 + r() * .9), length * (.25 + r() * .35), width * .6, depth + 1);
      }
      if (width > 1.4) stroke(points, width * 2.6, 'rgba(8,22,16,.55)');
      stroke(points, width, VEINS[Math.floor(r() * VEINS.length)]);
    };
    for (let i = 0; i < 16; i++) crack(r() * w, r() * h, .9 + (r() - .5) * .5, 500 + r() * 700, 1.6 + r() * 1.6, 0);
    for (let i = 0; i < 150; i++) crack(r() * w, r() * h, .9 + (r() - .5) * 1.8, 40 + r() * 220, .6 + r() * 1.1, 1);
    // A few rare, brighter mint threads give the polished highlight.
    for (let i = 0; i < 10; i++) {
      let x = r() * w, y = r() * h, angle = .9 + (r() - .5) * .6; const points = [[x, y]];
      for (let d = 0; d < 260; d += 8) { angle += (r() - .5) * .5; x += Math.cos(angle) * 8; y += Math.sin(angle) * 8; points.push([x, y]); }
      stroke(points, .8, 'rgba(128,150,132,.6)');
    }
  });
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.name = 'shared-prada-slab';
  return texture;
}
