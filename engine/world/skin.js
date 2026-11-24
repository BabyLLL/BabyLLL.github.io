// The default player as a standard 64×64 Minecraft skin: brown hair, a moss
// green hoodie with pale strings, blue jeans and white trainers. Any skin made
// in a Minecraft skin editor can replace it: set `skin` in home.config.js to a
// 64×64 PNG and the avatar wears that instead.

const C = {
  skin: '#e8b98f', skinShade: '#d6a47c', skinDeep: '#c79670',
  hair: '#3b2a20', hairHi: '#4f392b',
  eye: '#2a211d', mouth: '#b06f5c', white: '#f4efe9',
  hoodie: '#4f7a4a', hoodieHi: '#5e8b58', hoodieLo: '#3f6339',
  string: '#efe6d8',
  jeans: '#3f5b85', jeansHi: '#4a6895', jeansLo: '#36507a',
  shoe: '#e6e3dc', shoeHi: '#f4f2ec', sole: '#9a978f',
};

// The front of the head, row by row. Also drawn as the Dock's About icon.
// Eyes are white outside and dark inside, like Steve's; the mouth is closed.
export const FACE = [
  ['hair', 'hairHi', 'hair', 'hair', 'hair', 'hair', 'hairHi', 'hair'],
  ['hair', 'hair', 'hair', 'hairHi', 'hair', 'hair', 'hair', 'hair'],
  ['hair', 'hair', 'skin', 'skin', 'skin', 'skin', 'hair', 'hair'],
  ['skin', 'skin', 'skin', 'skin', 'skin', 'skin', 'skin', 'skin'],
  ['skin', 'white', 'eye', 'skin', 'skin', 'eye', 'white', 'skin'],
  ['skin', 'skin', 'skin', 'skinShade', 'skinShade', 'skin', 'skin', 'skin'],
  ['skin', 'skin', 'skin', 'mouth', 'mouth', 'skin', 'skin', 'skin'],
  ['skinShade', 'skin', 'skin', 'skin', 'skin', 'skin', 'skin', 'skinShade'],
].map(row => row.map(k => C[k]));

// The same colours for small sprites (the flight switch), keyed by part:
// hair, skin, skin shade, eye, top (and its light and dark), legs, shoes, soles.
export const SPRITE = {
  h: C.hair, s: C.skin, d: C.skinShade, e: C.eye, k: C.hoodie, K: C.hoodieHi, c: C.hoodieLo,
  p: C.jeans, P: C.jeansLo, o: C.shoe, w: C.sole,
};

function region(ctx, x, y, w, h, color) { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); }

// Fill a region with a function of local pixel coordinates.
function paint(ctx, x0, y0, w, h, fn) {
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { ctx.fillStyle = fn(x, y); ctx.fillRect(x0 + x, y0 + y, 1, 1); }
}

const knit = (x, y) => ((x * 3 + y * 5) % 11 === 0 ? C.hoodieHi : C.hoodie);
const denim = (x, y) => ((x + y) % 6 === 0 ? C.jeansHi : (x * 5 + y) % 9 === 0 ? C.jeansLo : C.jeans);

export function paintSkin(ctx) {
  ctx.clearRect(0, 0, 64, 64);
  // Head (u 0, v 0, 8×8×8).
  paint(ctx, 8, 0, 8, 8, (x, y) => ((x + y * 3) % 7 === 0 ? C.hairHi : C.hair)); // top
  region(ctx, 16, 0, 8, 8, C.skinDeep); // bottom (chin, neck)
  paint(ctx, 8, 8, 8, 8, (x, y) => FACE[y][x]); // front
  for (const x0 of [0, 16]) paint(ctx, x0, 8, 8, 8, (x, y) => (y < 3 || (y < 4 && (x0 === 0 ? x > 4 : x < 3)) ? C.hair : y === 7 ? C.skinShade : C.skin));
  paint(ctx, 24, 8, 8, 8, (x, y) => (y < 6 ? ((x + y) % 6 === 0 ? C.hairHi : C.hair) : y === 6 ? C.hair : C.skinShade)); // back

  // Body (u 16, v 16, 8×12×4): the hoodie, its strings and pocket; jeans at the waist.
  paint(ctx, 20, 16, 8, 4, (x, y) => (y === 3 && x > 1 && x < 6 ? C.hoodieLo : C.hoodie)); // top
  region(ctx, 28, 16, 8, 4, C.jeans); // bottom
  paint(ctx, 20, 20, 8, 12, (x, y) => {
    if (y >= 10) return denim(x, y);
    if ((x === 2 || x === 5) && y >= 1 && y <= 3) return C.string;
    if (y === 0 && x >= 2 && x <= 5) return C.hoodieLo;
    if (y >= 6 && y <= 8 && x >= 1 && x <= 6) return y === 6 ? C.hoodieLo : C.hoodieHi; // pocket
    return knit(x, y);
  }); // front
  paint(ctx, 32, 20, 8, 12, (x, y) => {
    if (y >= 10) return denim(x, y);
    if (y <= 2 && x >= 1 && x <= 6) return C.hoodieLo; // the hood, folded down
    return knit(x, y);
  }); // back
  for (const x0 of [16, 28]) paint(ctx, x0, 20, 4, 12, (x, y) => (y >= 10 ? denim(x, y) : knit(x, y)));

  // Arms: sleeves to the wrist (a darker cuff), then hands.
  const arm = (u, v) => {
    paint(ctx, u + 4, v, 4, 4, () => C.hoodie); // top
    region(ctx, u + 8, v, 4, 4, C.skinShade); // bottom
    for (let face = 0; face < 4; face++) {
      paint(ctx, u + face * 4, v + 4, 4, 12, (x, y) => {
        if (y >= 10) return y === 11 ? C.skinShade : C.skin;
        if (y === 9) return C.hoodieLo;
        return knit(x + face, y);
      });
    }
  };
  arm(40, 16); // right arm
  arm(32, 48); // left arm

  // Legs: jeans, white trainers with a grey sole line.
  const leg = (u, v) => {
    region(ctx, u + 4, v, 4, 4, C.jeans);
    region(ctx, u + 8, v, 4, 4, C.sole);
    for (let face = 0; face < 4; face++) {
      paint(ctx, u + face * 4, v + 4, 4, 12, (x, y) => {
        if (y === 11) return C.sole;
        if (y >= 9) return face === 1 && y === 9 ? C.shoeHi : C.shoe;
        return denim(x + face * 4, y);
      });
    }
  };
  leg(0, 16); // right leg
  leg(16, 48); // left leg
}

// UV rectangles for a Minecraft box at skin offset (u, v) with size (w, h, d),
// in three.js BoxGeometry face order: +x (left), -x (right), +y, -y, +z (front), -z (back).
export function boxRegions(u, v, w, h, d) {
  return [
    [u + d + w, v + d, d, h],
    [u, v + d, d, h],
    [u + d, v, w, d],
    [u + d + w, v, w, d],
    [u + d, v + d, w, h],
    [u + d + w + d, v + d, w, h],
  ];
}

// A ginger and white cat: ginger saddle, white bib, blaze and paws, hazel eyes.
export const CAT = {
  cream: '#cba47f', creamDark: '#ad8362', white: '#f3efe5', eye: '#a78e64', pupil: '#25231d',
  nose: '#e79a9a', collar: '#c8302c', bell: '#e7b53c', inner: '#f0b9a8',
};
