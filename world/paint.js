// Pixel art painted onto canvases: the court, the screens, the frames on the
// honours wall, the mural. Everything is drawn at 16 or 32 px per metre so it
// sits at the same resolution as the blocks around it.
import { rng } from '@engine/world/textures.js';
import { pixelText, textWidth } from '@engine/world/pixel-text.js';

// Shared, still forest wallpaper for the two home workstations.
export function paintForestScreen(ctx, w, h) {
  const r = rng(491);
  ctx.fillStyle = '#a0b3ad'; ctx.fillRect(0, 0, w, h);
  for (let layer = 0; layer < 4; layer++) {
    ctx.fillStyle = ['#829c93', '#55796a', '#315449', '#182f2a'][layer];
    let x = -4;
    while (x < w) {
      const width = 4 + r() * 8, height = h * (0.15 + r() * 0.46) + layer * 3;
      const base = h * (0.67 + layer * 0.09), top = base - height;
      for (let y = top; y < base; y++) {
        const spread = (y - top) / height * width;
        ctx.fillRect(Math.round(x - spread / 2), Math.round(y), Math.max(1, Math.round(spread)), 1);
      }
      ctx.fillRect(Math.round(x), Math.round(base - 3), 1, h - base + 3); x += 3 + r() * 7;
    }
  }
  ctx.fillStyle = '#c5cabc'; ctx.fillRect(w * 0.35, h - 3, w * 0.3, 1);
}

// A private thinking wall: dense, small, half-erased chalk. Formulas, symbols,
// English asides and odd diagrams pile into each other, so it reads as someone's
// working mind rather than a presentation; visitors are not meant to follow it.
export function paintIdeasBoard(ctx, w, h) {
  const r = rng(2026), W = 768, H = 512;
  const pick = list => list[Math.floor(r() * list.length)];
  ctx.fillStyle = '#12201c'; ctx.fillRect(0, 0, w, h);
  ctx.save(); ctx.scale(w / W, h / H);
  ctx.lineCap = ctx.lineJoin = 'round';
  // Old erasures: wide, faint chalk sweeps and dust under everything.
  for (let i = 0; i < 26; i++) {
    ctx.strokeStyle = `rgba(200,214,196,${.025 + r() * .045})`; ctx.lineWidth = 14 + r() * 30;
    const x = r() * W, y = r() * H, len = 60 + r() * 160, a = (r() - .5) * .5;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 1; k <= 4; k++) ctx.lineTo(x + Math.cos(a) * len * k / 4, y + Math.sin(a) * len * k / 4 + (k % 2 ? 6 : -6));
    ctx.stroke();
  }
  for (let i = 0; i < 2600; i++) { ctx.fillStyle = `rgba(220,229,213,${r() * .07})`; ctx.fillRect(r() * W, r() * H, 1 + r() * 2, 1); }
  const chalk = () => r() < .82 ? `rgba(222,230,214,${.72 + r() * .26})` : pick(['#e8d98c', '#e6a9a4', '#a9cbe0', '#b8dcae']);
  const stroke = (color, width) => { ctx.strokeStyle = color; ctx.lineWidth = width; };
  const path = (pts, close) => { ctx.beginPath(); ctx.moveTo(...pts[0]); for (const p of pts.slice(1)) ctx.lineTo(...p); if (close) ctx.closePath(); ctx.stroke(); };
  const arrow = (x0, y0, x1, y1) => {
    path([[x0, y0], [x1, y1]]);
    const a = Math.atan2(y1 - y0, x1 - x0);
    path([[x1 - 6 * Math.cos(a - .45), y1 - 6 * Math.sin(a - .45)], [x1, y1], [x1 - 6 * Math.cos(a + .45), y1 - 6 * Math.sin(a + .45)]]);
  };
  // Diagrams, each drawn around its own origin at a random place and tilt.
  const DIAGRAMS = [
    s => { arrow(0, 40 * s, 70 * s, 40 * s); arrow(0, 40 * s, 0, -20 * s); const p = []; for (let i = 0; i <= 40; i++) p.push([i * 1.7 * s, 40 * s - 55 * s * (1 - Math.exp(-i / 9)) + Math.sin(i) * 2]); path(p); },
    s => { const p = []; for (let i = 0; i <= 60; i++) p.push([i * 1.4 * s, Math.sin(i / 4) * 12 * s * Math.exp(-i / 50)]); path(p); },
    s => { const p = []; for (let i = 0; i < 90; i++) { const t = i / 6, q = 2 + t * 3.4 * s; p.push([Math.cos(t) * q, Math.sin(t) * q]); } path(p); },
    s => { const n = [[0, 0], [-22, 20], [22, 20], [-34, 40], [-10, 40], [12, 40], [34, 40]].map(([x, y]) => [x * s, y * s]);
      for (const [a, b] of [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]) path([n[a], n[b]]);
      for (const [x, y] of n) { ctx.beginPath(); ctx.arc(x, y, 3.5 * s, 0, 7); ctx.stroke(); } },
    s => { path([[0, 0], [60 * s, 0], [20 * s, -38 * s]], true); ctx.beginPath(); ctx.arc(0, 0, 10 * s, -1.08, 0); ctx.stroke(); },
    s => { for (const dx of [0, 22]) { ctx.beginPath(); ctx.arc(dx * s, 0, 18 * s, 0, 7); ctx.stroke(); } },
    s => { const d = 14 * s; path([[0, 0], [30 * s, 0], [30 * s, 30 * s], [0, 30 * s]], true); path([[d, -d], [30 * s + d, -d], [30 * s + d, 30 * s - d]]); for (const [x, y] of [[0, 0], [30 * s, 0], [30 * s, 30 * s]]) path([[x, y], [x + d, y - d]]); },
    s => { arrow(0, 0, 45 * s, 0); arrow(0, 0, 0, 30 * s); arrow(45 * s, 0, 45 * s, 30 * s); arrow(0, 30 * s, 45 * s, 30 * s); },
    s => { const p = []; for (let i = 0; i <= 50; i++) p.push([i * 1.2 * s, Math.sin(i * 1.3) * 4 * s]); path(p); path([[-8 * s, -14 * s], [0, 0], [-8 * s, 14 * s]]); path([[60 * s, 0], [70 * s, -14 * s]]); path([[60 * s, 0], [70 * s, 14 * s]]); },
    s => { for (let i = 0; i < 8; i++) { const v = 4 + Math.round(30 * Math.exp(-((i - 3.4) ** 2) / 4)); path([[i * 7 * s, 0], [i * 7 * s, -v * s], [i * 7 * s + 6 * s, -v * s], [i * 7 * s + 6 * s, 0]]); } },
    s => { for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) { const x = i * 12 * s, y = j * 12 * s; arrow(x, y, x - y * .3, y + x * .3); } },
    s => { ctx.beginPath(); ctx.ellipse(0, 0, 32 * s, 12 * s, 0, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(-10 * s, 0, 3 * s, 0, 7); ctx.stroke(); path([[-10 * s, 0], [32 * s, 0]]); },
    s => { path([[0, 0], [10 * s, -16 * s], [22 * s, 6 * s], [34 * s, -22 * s], [46 * s, -4 * s], [58 * s, -30 * s]]); },
  ];
  for (let i = 0; i < 18; i++) {
    ctx.save(); ctx.translate(20 + r() * (W - 80), 20 + r() * (H - 50)); ctx.rotate((r() - .5) * .35);
    stroke(chalk(), .8 + r() * .9); pick(DIAGRAMS)(.45 + r() * .7); ctx.restore();
  }
  const SNIPPETS = [
    '∇·E = ρ/ε₀', '∇×B − ∂E/∂t = μ₀J', 'iħ ∂ψ/∂t = Ĥψ', 'e^{iπ} + 1 = 0', 'ζ(s) = Σ n⁻ˢ', 'Γ(z) = ∫₀^∞ tᶻ⁻¹e⁻ᵗ dt',
    'Rμν − ½R gμν = 8πG Tμν', 'det(A − λI) = 0', 'H(X) = −Σ p log p', 'KL(P‖Q) ≥ 0', 'argmin_θ L(θ)', '∂L/∂w = δ aᵀ',
    'O(n log n)', 'P ≟ NP', 'λx. x x', 'π₁(S¹) ≅ ℤ', '∮ f dz = 2πi Σ Res', 'ε > 0  ∃δ', 'dS ≥ δQ/T', 'F = −∇V',
    'ẍ + ω²x = 0', 'softmax(QKᵀ/√d) V', 'xₜ₊₁ = r xₜ(1 − xₜ)', 'φ = (1+√5)/2', 'Σ 1/n² = π²/6', 'dX = μ dt + σ dW',
    'Δx Δp ≥ ħ/2', 'k_B T ln 2', 'V(s) = maxₐ[r + γV(s′)]', 'σ(x) = 1/(1+e⁻ˣ)', 'xᵀAx > 0 ?', 'ker φ ⊂ G',
    'SU(2) → SO(3)', 'ℵ₀ < 2^ℵ₀', '∀x ∃y  ¬(p ∧ q)', 'Hom(A, B)', 'f ∘ g ≠ g ∘ f', '2.71828…', '1.41421…', '0.618…',
    'n! ≈ √(2πn)(n/e)ⁿ', 'a ≡ b (mod p)', 'Var = E[X²] − μ²', 'P(H|D) ∝ P(D|H)P(H)', '∂ₜu = α ∇²u', 'z ↦ z² + c',
    'tr(AB) = tr(BA)', 'lim sup', '∫∫_D', 'L = T − V', 'q̇ = ∂H/∂p', '⟨ψ|φ⟩', 'U(1)', 'ℝⁿ → ℝᵐ', '|x| < 1', 'Ω(n²)',
    'why??', 'check sign!', 'wrong ↓', 'local max ≠ global', 'boundary cond.', 'n = 3 fails', 'converges?', 'Q.E.D.', '∎',
    'Lyapunov', 'attractor', 'entropy ↑', 'renormalize', 'priors!!', 'idempotent', 'monad', 'tensor', 'manifold', 'gauge',
    'invert it', 'see back', 'too slow', 'simpler?', '???', 'no — other way', 'symmetry', 'fixed point', 'eigen?', 'cf. Noether',
    '≈', '∞', '⊗', '∂', '∇', 'ℏ', 'Σ', '∮', '∴', '⇔', '≅', '∅', 'Ψ', 'λ', 'ω', 'ξ', 'π',
  ];
  const FONTS = ['italic {s}px Georgia, serif', '{s}px "Chalkboard SE", "Bradley Hand", "Segoe Print", cursive', 'italic {s}px "Times New Roman", serif'];
  // Text fills the gaps: each snippet tries a few spots and takes the least
  // crowded one, so the board is covered without becoming solid noise.
  const C = 16, cols = Math.ceil(W / C), rows = Math.ceil(H / C), used = new Float32Array(cols * rows);
  const cost = (x, y, tw, th) => { let c = 0; for (let j = Math.floor((y - th) / C); j <= Math.floor(y / C); j++) for (let i = Math.floor(x / C); i <= Math.floor((x + tw) / C); i++) c += (i < 0 || j < 0 || i >= cols || j >= rows) ? 9 : used[j * cols + i]; return c; };
  const mark = (x, y, tw, th) => { for (let j = Math.floor((y - th) / C); j <= Math.floor(y / C); j++) for (let i = Math.floor(x / C); i <= Math.floor((x + tw) / C); i++) if (i >= 0 && j >= 0 && i < cols && j < rows) used[j * cols + i]++; };
  for (let n = 0; n < 110; n++) {
    const s = pick(SNIPPETS), size = s.length < 3 ? 14 + r() * 14 : 8.5 + r() * r() * 10;
    ctx.font = pick(FONTS).replace('{s}', size.toFixed(1));
    const tw = ctx.measureText(s).width;
    let best = null;
    for (let t = 0; t < 14; t++) { const x = 4 + r() * (W - tw - 8), y = size + 4 + r() * (H - size - 8), c = cost(x, y, tw, size); if (!best || c < best.c) best = { x, y, c }; }
    mark(best.x, best.y, tw, size);
    ctx.save(); ctx.translate(best.x, best.y); ctx.rotate((r() - .5) * (r() < .15 ? .9 : .12));
    ctx.fillStyle = chalk(); ctx.fillText(s, 0, 0);
    const mark2 = r();
    stroke(chalk(), .7);
    if (mark2 < .07) { ctx.strokeRect(-3, -size - 1, tw + 6, size + 5); }
    else if (mark2 < .14) path([[0, 3], [tw, 2]]);
    else if (mark2 < .18) path([[-2, -size / 3], [tw + 2, -size / 2]]);
    else if (mark2 < .22) { ctx.beginPath(); ctx.ellipse(tw / 2, -size / 3, tw / 2 + 5, size * .8, 0, 0, 7); ctx.stroke(); }
    ctx.restore();
  }
  // Loose arrows tie unrelated corners together, then a few partial wipes.
  for (let i = 0; i < 11; i++) {
    stroke(chalk(), .7 + r() * .5);
    const x = r() * W, y = r() * H, a = r() * 6.28, d = 25 + r() * 90;
    arrow(x, y, x + Math.cos(a) * d, y + Math.sin(a) * d);
  }
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = `rgba(18,32,28,${.35 + r() * .35})`;
    ctx.save(); ctx.translate(r() * W, r() * H); ctx.rotate((r() - .5) * .6); ctx.fillRect(0, 0, 25 + r() * 60, 8 + r() * 14); ctx.restore();
  }
  ctx.restore();
}

// The black pegboard behind the desks: how Terry takes the world apart, one
// visualisation per sheet. Geography on the left, markets on the right, the
// middle left open for what comes next. Shapes only, no text or figures.
export function paintPegboard(ctx, w, h) {
  const r = rng(77), W = 720, H = 440;
  ctx.save(); ctx.scale(w / W, h / H);
  ctx.fillStyle = '#1f2224'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#121415';
  for (let y = 9; y < H; y += 12) for (let x = 9; x < W; x += 12) ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
  const scribble = (x, y, width, lines, gap = 7, color = '#5b5f62') => {
    ctx.strokeStyle = color; ctx.lineWidth = 1.1;
    for (let i = 0; i < lines; i++) { const l = width * (.45 + r() * .55); ctx.beginPath(); ctx.moveTo(x, y + i * gap); for (let t = 6; t < l; t += 6) ctx.lineTo(x + t, y + i * gap + (r() - .5) * 1.4); ctx.stroke(); }
  };
  const sheet = (x, y, sw, sh, tilt, color, draw) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(tilt);
    ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.fillRect(3, 4, sw, sh);
    ctx.fillStyle = color; ctx.fillRect(0, 0, sw, sh);
    draw(sw, sh);
    ctx.fillStyle = '#0d0e0f'; ctx.fillRect(sw / 2 - 9, -5, 18, 10);
    ctx.fillStyle = '#7d8285'; ctx.fillRect(sw / 2 - 6, -9, 12, 3);
    ctx.restore();
  };
  // Flight arcs over a rough world map: generic hubs, not anyone's travels.
  sheet(32, 54, 238, 134, -.02, '#f1eee6', (sw, sh) => {
    const x0 = 7, y0 = 8, mw = sw - 14, mh = sh - 18;
    const at = (lon, lat) => [x0 + (lon + 180) / 360 * mw, y0 + (90 - lat) / 180 * mh];
    ctx.fillStyle = '#25384b'; ctx.fillRect(x0, y0, mw, mh);
    ctx.fillStyle = '#8fa9a0';
    for (const land of [
      [[-165, 65], [-140, 70], [-95, 72], [-80, 62], [-60, 55], [-65, 45], [-80, 30], [-82, 25], [-97, 20], [-90, 15], [-83, 9], [-105, 20], [-118, 32], [-125, 48], [-140, 58], [-165, 60]],
      [[-55, 82], [-25, 80], [-20, 70], [-45, 60], [-55, 70]],
      [[-80, 10], [-60, 10], [-35, -7], [-40, -22], [-58, -38], [-68, -55], [-75, -45], [-72, -20], [-81, -5]],
      [[-10, 36], [-9, 44], [-2, 48], [5, 52], [10, 55], [5, 60], [15, 70], [30, 71], [40, 65], [40, 45], [28, 41], [20, 40], [12, 38], [5, 43], [-5, 36]],
      [[-17, 21], [-10, 32], [10, 37], [32, 31], [43, 12], [51, 12], [40, -5], [40, -15], [32, -28], [20, -35], [13, -18], [9, 0], [-8, 5], [-17, 14]],
      [[40, 45], [40, 65], [60, 70], [90, 76], [130, 72], [170, 68], [180, 65], [160, 58], [140, 52], [140, 40], [122, 30], [120, 22], [108, 18], [105, 8], [100, 13], [92, 22], [80, 8], [72, 20], [60, 25], [50, 28], [45, 40]],
      [[95, 5], [105, -6], [120, -8], [130, -3], [120, 2]],
      [[114, -22], [122, -18], [132, -12], [142, -11], [146, -19], [153, -27], [148, -38], [138, -35], [129, -32], [115, -34]],
    ]) { ctx.beginPath(); for (const p of land) ctx.lineTo(...at(...p)); ctx.closePath(); ctx.fill(); }
    const HUBS = { ny: [-74, 41], sf: [-122, 38], sao: [-46, -23], lon: [0, 51], dxb: [55, 25], sin: [104, 1], bj: [116, 40], tyo: [139, 36], syd: [151, -34] };
    ctx.strokeStyle = '#f2b53a'; ctx.lineWidth = 1.3; ctx.lineCap = 'round';
    for (const [a, b] of [['sf', 'ny'], ['ny', 'lon'], ['ny', 'sao'], ['lon', 'dxb'], ['lon', 'bj'], ['dxb', 'sin'], ['sin', 'syd'], ['tyo', 'sin'], ['bj', 'tyo']]) {
      const [ax, ay] = at(...HUBS[a]), [bx, by] = at(...HUBS[b]);
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.quadraticCurveTo((ax + bx) / 2, (ay + by) / 2 - Math.hypot(bx - ax, by - ay) * .32, bx, by); ctx.stroke();
    }
    ctx.fillStyle = '#fff4d6';
    for (const hub of Object.values(HUBS)) { const [x, y] = at(...hub); ctx.beginPath(); ctx.arc(x, y, 2.1, 0, Math.PI * 2); ctx.fill(); }
  });
  // A map printout with a hand-drawn red route between two pins: what
  // BetterMapIt does. The streets are invented, not any real place.
  sheet(180, 226, 118, 160, .04, '#f1eee6', (sw, sh) => {
    const x0 = 8, y0 = 10, mw = sw - 16, mh = sh - 20;
    ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, mw, mh); ctx.clip();
    ctx.fillStyle = '#e4e0d4'; ctx.fillRect(x0, y0, mw, mh);
    ctx.fillStyle = '#b9d3a2'; ctx.fillRect(x0 + 62, y0 + 14, 30, 26);
    ctx.strokeStyle = '#9cc3dc'; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x0 - 4, y0 + 96); ctx.bezierCurveTo(x0 + 30, y0 + 84, x0 + 58, y0 + 118, x0 + mw + 4, y0 + 104); ctx.stroke();
    ctx.strokeStyle = '#fbfaf6';
    for (const [w, lines] of [[4.5, [[0, 50, mw, 46], [34, 0, 38, mh], [0, 128, mw, 132]]], [2.2, [[0, 22, mw, 20], [0, 74, mw, 70], [12, 0, 10, mh], [62, 0, 64, mh], [86, 0, 84, mh]]]]) {
      ctx.lineWidth = w;
      for (const [ax, ay, bx, by] of lines) { ctx.beginPath(); ctx.moveTo(x0 + ax, y0 + ay); ctx.lineTo(x0 + bx, y0 + by); ctx.stroke(); }
    }
    // The route wobbles like a finger drawing, along the streets.
    const route = [[24, 18], [36, 30], [37, 48], [56, 49], [64, 72], [74, 96], [85, 112], [84, 128], [92, 132]];
    ctx.strokeStyle = '#d6322b'; ctx.lineWidth = 3.4; ctx.lineJoin = 'round'; ctx.beginPath();
    route.forEach(([x, y], i) => { const j = i && i < route.length - 1 ? (r() - .5) * 2.4 : 0; ctx.lineTo(x0 + x + j, y0 + y + j); });
    ctx.stroke();
    ctx.restore();
    for (const [x, y] of [route[0], route.at(-1)]) {
      const px = x0 + x, py = y0 + y;
      ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(px + 1, py + 1, 4, 1.6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#c4231d'; ctx.beginPath(); ctx.moveTo(px, py); ctx.arc(px, py - 11, 6.5, Math.PI * .78, Math.PI * .22); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px, py - 11, 2.4, 0, Math.PI * 2); ctx.fill();
    }
  });
  // A printed photo of mountains, like the hill behind the house.
  sheet(36, 244, 128, 92, -.05, '#f4f2ee', (sw, sh) => {
    ctx.fillStyle = '#a9c2cf'; ctx.fillRect(6, 6, sw - 12, sh - 12);
    ctx.fillStyle = '#56656c'; ctx.beginPath(); ctx.moveTo(6, sh - 6); ctx.lineTo(40, 30); ctx.lineTo(62, 52); ctx.lineTo(88, 22); ctx.lineTo(sw - 6, sh - 26); ctx.lineTo(sw - 6, sh - 6); ctx.fill();
    ctx.fillStyle = '#eef3f4'; ctx.beginPath(); ctx.moveTo(88, 22); ctx.lineTo(78, 34); ctx.lineTo(97, 32); ctx.fill();
  });
  // Markets use the international colours: green closes up, red down.
  const RISE = '#2f9a5c', FALL = '#d2453a';
  // Candles with a moving average, then MACD and RSI panes, as a trading
  // screen lays them out.
  sheet(398, 40, 192, 188, .02, '#f3f1ec', (sw, sh) => {
    ctx.strokeStyle = '#dcdcd6'; ctx.lineWidth = .7;
    for (const y of [14, 32, 50, 68, 86, 114, 156]) { ctx.beginPath(); ctx.moveTo(8, y); ctx.lineTo(sw - 8, y); ctx.stroke(); }
    // A walk fitted to the price pane, so the trend reads from across the room.
    // A cup and handle, the classic bullish shape: a run-up, a gentle rounded
    // pullback and recovery, a small handle dip, then a breakout to new highs.
    const walk = [.25, .33, .45, .56, .63, .57, .52, .48, .46, .48, .53, .59, .64, .60, .58, .62, .71, .80, .89, .96, 1]
      .map((v, i, all) => i && i < all.length - 1 ? v + (r() - .5) * .03 : v);
    const lo = Math.min(...walk), hi = Math.max(...walk), fit = v => 84 - (v - lo) / (hi - lo) * 64;
    const closes = [], ma = [];
    for (let i = 0; i < 20; i++) {
      const open = fit(walk[i]), close = fit(walk[i + 1]);
      const top = Math.min(open, close) - 2 - r() * 5, bottom = Math.max(open, close) + 2 + r() * 5, x = 12 + i * 8.6;
      ctx.fillStyle = ctx.strokeStyle = close < open ? RISE : FALL; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x + 2.8, top); ctx.lineTo(x + 2.8, bottom); ctx.stroke();
      ctx.fillRect(x, Math.min(open, close), 5.6, Math.max(1.2, Math.abs(close - open)));
      closes.push(close); ma.push([x + 2.8, (open + close) / 2]);
    }
    ctx.strokeStyle = '#d99a2b'; ctx.lineWidth = 1.2; ctx.beginPath();
    ma.forEach(([x], i) => { const w = ma.slice(Math.max(0, i - 4), i + 1); ctx.lineTo(x, w.reduce((t, p) => t + p[1], 0) / w.length); });
    ctx.stroke();
    // MACD: bars around a zero line; up means price rising, so lower y wins.
    const zero = 114;
    closes.forEach((c, i) => {
      const v = Math.max(-12, Math.min(12, (closes[Math.max(0, i - 3)] - c) * .45)), x = 12 + i * 8.6;
      ctx.fillStyle = v > 0 ? RISE : FALL; ctx.fillRect(x, v > 0 ? zero - v : zero, 5.6, Math.max(1, Math.abs(v)));
    });
    // RSI between dashed 30 / 70 bounds.
    ctx.strokeStyle = '#b7b9b4'; ctx.setLineDash([3, 3]);
    for (const y of [140, 172]) { ctx.beginPath(); ctx.moveTo(8, y); ctx.lineTo(sw - 8, y); ctx.stroke(); }
    ctx.setLineDash([]); ctx.strokeStyle = '#7a5ab0'; ctx.lineWidth = 1.3; ctx.beginPath();
    closes.forEach((c, i) => ctx.lineTo(14.8 + i * 8.6, 156 + (c - 52) * .4 + (r() - .5) * 5));
    ctx.stroke();
  });
  // An order-book depth chart: bids pile up green on the left, asks red on the right.
  sheet(606, 46, 100, 84, -.04, '#f3f1ec', (sw, sh) => {
    const mid = sw / 2, base = sh - 10;
    for (const [side, color] of [[-1, RISE], [1, FALL]]) {
      let y = base - 4; const pts = [[mid + side * 3, base], [mid + side * 3, y]];
      for (let x = 3; x < mid - 8; x += 5) { y -= (1 + r() * 2) * 7 * (x / mid); pts.push([mid + side * x, y], [mid + side * (x + 5), y]); }
      const climb = (base - 14) / (base - y);
      for (const p of pts) p[1] = base - (base - p[1]) * climb;
      y = pts.at(-1)[1];
      pts.push([mid + side * (mid - 8), y], [mid + side * (mid - 8), base]);
      ctx.beginPath(); pts.forEach(p => ctx.lineTo(...p)); ctx.closePath();
      ctx.globalAlpha = .28; ctx.fillStyle = color; ctx.fill(); ctx.globalAlpha = 1;
      ctx.strokeStyle = color; ctx.lineWidth = 1.4; ctx.beginPath(); pts.slice(1, -1).forEach(p => ctx.lineTo(...p)); ctx.stroke();
    }
    ctx.strokeStyle = '#4f5559'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(8, base); ctx.lineTo(sw - 8, base); ctx.stroke();
  });
  // A correlation matrix in blue and orange, so it never reads as up or down.
  sheet(612, 156, 92, 94, .04, '#f3f1ec', (sw, sh) => {
    // Two clusters of assets that move together and against each other.
    const n = 6, cell = 12.4, ox = (sw - n * cell) / 2, oy = 12, m = [];
    for (let i = 0; i < n; i++) { m[i] = []; for (let j = 0; j < i; j++) m[i][j] = (i < 3) === (j < 3) ? .45 + r() * .35 : -.2 - r() * .55; }
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = i === j ? 1 : m[Math.max(i, j)][Math.min(i, j)];
      ctx.fillStyle = v >= 0 ? `rgba(226,128,40,${.15 + v * .85})` : `rgba(48,104,168,${.15 - v * .85})`;
      ctx.fillRect(ox + j * cell + .6, oy + i * cell + .6, cell - 1.2, cell - 1.2);
    }
  });
  // A long-run log chart over rainbow bands, as crypto cycles are often drawn.
  sheet(402, 262, 198, 124, -.02, '#f3f1ec', (sw, sh) => {
    const x0 = 10, x1 = sw - 10, y0 = 10, y1 = sh - 14, band = t => y1 - (y1 - y0 - 58) * Math.log1p(t * 9) / Math.log(10);
    ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, x1 - x0, y1 - y0); ctx.clip();
    const COLORS = ['#3b62b0', '#3f9fc0', '#5fb46a', '#c9cf4a', '#f0b43c', '#ec7b37', '#d2453a'];
    COLORS.forEach((color, k) => {
      ctx.fillStyle = color; ctx.globalAlpha = .55; ctx.beginPath();
      for (let x = x0; x <= x1; x += 4) ctx.lineTo(x, band((x - x0) / (x1 - x0)) - k * 8);
      for (let x = x1; x >= x0; x -= 4) ctx.lineTo(x, band((x - x0) / (x1 - x0)) - (k + 1) * 8);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#1d1f21'; ctx.lineWidth = 1.4; ctx.beginPath();
    for (let x = x0; x <= x1; x += 2) {
      const t = (x - x0) / (x1 - x0), cycle = Math.sin(t * Math.PI * 7.2 - .6);
      ctx.lineTo(x, band(t) - 28 - cycle * 16 + (r() - .5) * 3);
    }
    ctx.stroke(); ctx.restore();
    ctx.strokeStyle = '#4f5559'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
  });
  // Sticky notes between and around the two groups.
  for (const [x, y, t, c] of [[316, 58, .08, '#efd86a'], [328, 128, -.05, '#bfe0b0'], [632, 300, .06, '#efd86a']]) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(t);
    ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(2, 3, 52, 52); ctx.fillStyle = c; ctx.fillRect(0, 0, 52, 52);
    scribble(7, 13, 38, 4, 9, '#4d4a3c'); ctx.restore();
  }
  ctx.restore();
}


// Wooden planks drawn as 2×2 "texels" on a 32 px/m canvas.
function planks(ctx, w, h, palette, seam, r) {
  for (let y = 0; y < h; y += 2) {
    const board = Math.floor(y / 8);
    const tone = palette[board % palette.length];
    for (let x = 0; x < w; x += 2) {
      const v = r();
      ctx.fillStyle = y % 8 === 6 ? seam : v < 0.06 ? shadeHex(tone, -10) : v < 0.12 ? shadeHex(tone, 8) : tone;
      ctx.fillRect(x, y, 2, 2);
    }
    if (y % 8 === 0) {
      const joint = Math.floor(r() * 30) * 2 + board * 26;
      for (let j = joint % 96; j < w; j += 96) { ctx.fillStyle = seam; ctx.fillRect(j, y, 2, 6); }
    }
  }
}

function shadeHex(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const c = v => Math.max(0, Math.min(255, v + amount));
  return '#' + ((c(n >> 16) << 16) | (c((n >> 8) & 255) << 8) | c(n & 255)).toString(16).padStart(6, '0');
}

// The half court, apron included. World extents: x ∈ [-20, -4], z ∈ [-7.5, 9.5].
export function paintCourt(ctx, w, h, { court, rim, origin }) {
  const S = 32;
  const X = x => Math.round((x - origin.x) * S), Z = z => Math.round((z - origin.z) * S);
  ctx.fillStyle = '#25282b';
  ctx.fillRect(0, 0, w, h);
  // One quiet wood surface; the court markings carry the detail.
  ctx.fillStyle = '#c6a071';
  ctx.fillRect(X(court.x0), Z(court.z0), (court.x1 - court.x0) * S, (court.z1 - court.z0) * S);
  // Grain is painted into this single surface, without separate plank meshes.
  const random = rng(5);
  ctx.save(); ctx.beginPath();
  ctx.rect(X(court.x0), Z(court.z0), (court.x1 - court.x0) * S, (court.z1 - court.z0) * S); ctx.clip();
  for (let i = 0; i < 360; i++) {
    const x = X(court.x0) + random() * (court.x1 - court.x0) * S;
    const z = Z(court.z0) + random() * (court.z1 - court.z0) * S;
    ctx.fillStyle = random() > .5 ? 'rgba(85,55,31,.06)' : 'rgba(248,230,184,.07)';
    ctx.fillRect(x, z, 1, 12 + random() * 80);
  }
  ctx.restore();

  const line = '#fbfaf6', paint = '#b92d28';
  const lw = 2;
  const cz = rim.z;
  // Red key, warm maple and a dark surround, matching the supplied court.
  ctx.fillStyle = paint;
  ctx.fillRect(X(court.x0), Z(cz - 2.45), Math.round(5.8 * S), Math.round(4.9 * S));
  const ring = (x, z, radius, from, to, filled = false) => {
    const steps = 720;
    for (let i = 0; i <= steps; i++) {
      const a = from + (to - from) * (i / steps);
      ctx.fillStyle = line;
      if (filled) continue;
      ctx.fillRect(Math.round(X(x + Math.cos(a) * radius) - lw / 2), Math.round(Z(z + Math.sin(a) * radius) - lw / 2), lw, lw);
    }
  };
  ctx.fillStyle = line;
  // Boundary and half-court line.
  ctx.fillRect(X(court.x0), Z(court.z0), (court.x1 - court.x0) * S, lw);
  ctx.fillRect(X(court.x0), Z(court.z1) - lw, (court.x1 - court.x0) * S, lw);
  ctx.fillRect(X(court.x0), Z(court.z0), lw, (court.z1 - court.z0) * S);
  ctx.fillRect(X(court.x1) - lw, Z(court.z0), lw, (court.z1 - court.z0) * S);
  // Key outline and free-throw circle.
  ctx.fillRect(X(court.x0), Z(cz - 2.45), Math.round(5.8 * S), lw);
  ctx.fillRect(X(court.x0), Z(cz + 2.45) - lw, Math.round(5.8 * S), lw);
  ctx.fillRect(X(court.x0 + 5.8) - lw, Z(cz - 2.45), lw, Math.round(4.9 * S));
  ring(court.x0 + 5.8, cz, 1.8, -Math.PI / 2, Math.PI / 2);
  for (let a = Math.PI / 2; a < Math.PI * 1.5; a += Math.PI / 10) ring(court.x0 + 5.8, cz, 1.8, a, a + Math.PI / 20);
  // Three-point line: 6.75 m arc joined to straight corner lines 0.9 m in from the sidelines.
  const r3 = 6.75, side = Math.min((court.z1 - court.z0) / 2 - 0.9, r3 - 0.05);
  const corner = Math.sqrt(r3 * r3 - side * side);
  ring(rim.x, cz, r3, -Math.asin(side / r3), Math.asin(side / r3));
  ctx.fillStyle = line;
  ctx.fillRect(X(court.x0), Z(cz - side) - 1, Math.round((rim.x + corner - court.x0) * S), lw);
  ctx.fillRect(X(court.x0), Z(cz + side) - 1, Math.round((rim.x + corner - court.x0) * S), lw);
  // Restricted area and centre circle.
  ring(rim.x, cz, 1.25, -Math.PI / 2, Math.PI / 2);
  ring(court.x1, cz, 1.8, Math.PI / 2, Math.PI * 1.5);
}

// Basketball net: white cord diamonds on transparent, wrapped around a cone.
export function paintNet(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#f4f4f0';
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const a = (x + y) % 8 === 0, b = (x - y + 800) % 8 === 0;
    if (a || b || y < 2) ctx.fillRect(x, y, 1, 1);
  }
}

export function paintBall(ctx, w, h) {
  ctx.fillStyle = '#d9692a';
  ctx.fillRect(0, 0, w, h);
  const r = rng(8);
  for (let i = 0; i < 300; i++) { ctx.fillStyle = r() < 0.5 ? '#c95f24' : '#e3773a'; ctx.fillRect(Math.floor(r() * w), Math.floor(r() * h), 1, 1); }
  ctx.fillStyle = '#2a1a12';
  ctx.fillRect(0, h / 2 - 1, w, 2);
  ctx.fillRect(w / 4 - 1, 0, 2, h);
  ctx.fillRect((3 * w) / 4 - 1, 0, 2, h);
  for (let x = 0; x < w; x++) {
    const y = Math.round(h / 2 + Math.sin((x / w) * Math.PI * 2) * h * 0.3);
    ctx.fillRect(x, y, 1, 2);
  }
}

// LED scoreboard; redrawn when the score changes.
export function paintScoreboard(ctx, w, h, { made = 0, taken = 0, streak = 0 } = {}) {
  ctx.fillStyle = '#0d0f12';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#16191d';
  for (let y = 1; y < h; y += 3) for (let x = 1; x < w; x += 3) ctx.fillRect(x, y, 2, 2);
  const amber = '#ffb347', green = '#7fe0a4', white = '#f2f2ea';
  const title = 'TERRY';
  pixelText(ctx, title, Math.round((w - textWidth(title, 1)) / 2), 3, 1, white);
  const score = String(made).padStart(2, '0');
  pixelText(ctx, score, Math.round((w - textWidth(score, 3)) / 2), 13, 3, amber);
  const label = taken ? `${made}/${taken}` : '';
  if (label) pixelText(ctx, label, 4, h - 10, 1, green);
  const st = streak > 1 ? `X${streak}` : '';
  if (st) pixelText(ctx, st, w - 4 - textWidth(st, 1), h - 10, 1, amber);
}

// Monitor showing a map with routes and pins, the way BetterMapIt draws them.
export function paintMapScreen(ctx, w, h) {
  ctx.fillStyle = '#ece6da';
  ctx.fillRect(0, 0, w, h);
  const r = rng(3);
  ctx.fillStyle = '#d8e8d0';
  for (let i = 0; i < 9; i++) ctx.fillRect(Math.floor(r() * w), Math.floor(r() * h), 6 + Math.floor(r() * 14), 4 + Math.floor(r() * 10));
  ctx.fillStyle = '#b9d7e6';
  for (let x = 0; x < w; x++) ctx.fillRect(x, Math.round(h * 0.68 + Math.sin(x * 0.12) * 3), 1, 4);
  ctx.fillStyle = '#ffffff';
  for (let y = 6; y < h; y += 11) ctx.fillRect(0, y, w, 1);
  for (let x = 9; x < w; x += 15) ctx.fillRect(x, 0, 1, h);
  ctx.fillStyle = '#e5383d';
  let x = 6, y = h - 8;
  for (let i = 0; i < 40; i++) { ctx.fillRect(x, y, 2, 2); x += 1 + Math.round(r()); y += Math.round((r() - 0.62) * 3); if (y < 4) y = 4; }
  for (const [px, py] of [[12, 10], [w - 14, 12], [w / 2, h / 2 - 4]]) {
    ctx.fillStyle = '#e5383d';
    ctx.fillRect(px - 2, py - 4, 5, 5);
    ctx.fillRect(px, py + 1, 1, 3);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px - 1, py - 3, 1, 1);
  }
  ctx.fillStyle = 'rgba(255,255,255,.9)';
  ctx.fillRect(3, 3, 26, 7);
  pixelText(ctx, 'MAP IT', 4, 3, 1, '#e5383d');
}

// A grid of symbol-like glyphs, for the Better SF Symbols monitor.
export function paintSymbolsScreen(ctx, w, h) {
  ctx.fillStyle = '#17171b';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#25252b';
  ctx.fillRect(0, 0, Math.round(w * 0.32), h);
  const r = rng(12);
  ctx.fillStyle = '#5a5a63';
  for (let y = 5; y < h - 4; y += 4) ctx.fillRect(3, y, 4 + Math.floor(r() * (w * 0.32 - 8)), 1);
  const glyphs = [
    ['0110', '1001', '1001', '0110'], ['0100', '1110', '0100', '0100'], ['1111', '1001', '1001', '1111'], ['0010', '0110', '1110', '0010'],
    ['1001', '0110', '0110', '1001'], ['0110', '1111', '1111', '0110'], ['1110', '0010', '0110', '0100'], ['0100', '0110', '0111', '0100'],
  ];
  let i = 0;
  for (let y = 4; y < h - 6; y += 9) for (let x = Math.round(w * 0.32) + 5; x < w - 6; x += 9) {
    const g = glyphs[i++ % glyphs.length];
    ctx.fillStyle = i % 7 === 3 ? '#f5a524' : '#e8e8ea';
    g.forEach((row, gy) => [...row].forEach((c, gx) => c === '1' && ctx.fillRect(x + gx, y + gy, 1, 1)));
  }
  ctx.strokeStyle = '#f5a524';
  ctx.lineWidth = 1;
  ctx.strokeRect(Math.round(w * 0.32) + 3.5, 2.5, 9, 9);
}

export function paintCodeScreen(ctx, w, h) {
  ctx.fillStyle = '#1e1f24';
  ctx.fillRect(0, 0, w, h);
  const r = rng(21);
  const colors = ['#c792ea', '#82aaff', '#c3e88d', '#f78c6c', '#89ddff', '#a6accd'];
  for (let y = 3; y < h - 2; y += 3) {
    let x = 3 + (Math.floor(r() * 4)) * 3;
    while (x < w - 6 && r() > 0.12) {
      const len = 2 + Math.floor(r() * 8);
      ctx.fillStyle = colors[Math.floor(r() * colors.length)];
      ctx.fillRect(x, y, Math.min(len, w - 4 - x), 1);
      x += len + 2;
    }
  }
}

// TV in the games corner: a blocky night game on a basketball court.
export function paintGameScreen(ctx, w, h) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#0b1830'); g.addColorStop(0.55, '#1b2f52'); g.addColorStop(0.56, '#c99257'); g.addColorStop(1, '#a8743f');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#f4f1e8';
  ctx.fillRect(0, Math.round(h * 0.56), w, 1);
  ctx.fillRect(Math.round(w * 0.5), Math.round(h * 0.56), 1, h);
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 6; i++) ctx.fillRect(4 + i * 10, 4 + (i % 3), 6, 2);
  ctx.fillStyle = '#e8ecef';
  ctx.fillRect(w - 18, 10, 2, 16);
  ctx.fillRect(w - 24, 9, 8, 6);
  ctx.fillStyle = '#e06030';
  ctx.fillRect(w - 26, 15, 5, 1);
  const player = (x, c) => {
    ctx.fillStyle = c; ctx.fillRect(x, h - 22, 4, 7);
    ctx.fillStyle = '#e9c39c'; ctx.fillRect(x, h - 26, 4, 4);
    ctx.fillStyle = '#2b2b2b'; ctx.fillRect(x, h - 15, 1, 5); ctx.fillRect(x + 3, h - 15, 1, 5);
  };
  player(Math.round(w * 0.3), '#2f5b46');
  player(Math.round(w * 0.42), '#f2f2ee');
  ctx.fillStyle = '#d9692a';
  ctx.fillRect(Math.round(w * 0.3) + 5, h - 30, 3, 3);
  ctx.fillStyle = 'rgba(0,0,0,.55)';
  ctx.fillRect(2, h - 9, 40, 7);
  pixelText(ctx, 'TH 21 18', 3, h - 8, 1, '#ffd166');
}

// The honours: framed certificates and a diploma, abstracted to their marks.
export function paintCertificate(ctx, w, h, { kind }) {
  const paper = kind === 'diploma' ? '#f2ecdf' : '#f6f2ea';
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = kind === 'diploma' ? '#a88a4a' : '#b8433c';
  ctx.lineWidth = 2;
  ctx.strokeRect(3, 3, w - 6, h - 6);
  ctx.fillStyle = '#4a4a4a';
  for (let y = Math.round(h * 0.42); y < h * 0.78; y += 4) ctx.fillRect(Math.round(w * 0.2), y, Math.round(w * 0.6 - (y % 8 ? 6 : 0)), 1);
  ctx.fillStyle = '#2e2e2e';
  ctx.fillRect(Math.round(w * 0.3), Math.round(h * 0.22), Math.round(w * 0.4), 3);
  if (kind === 'diploma') {
    ctx.fillStyle = '#ef7c00';
    ctx.fillRect(Math.round(w / 2) - 4, 7, 8, 8);
    ctx.fillStyle = '#003d7c';
    ctx.fillRect(Math.round(w / 2) - 2, 9, 4, 4);
  } else {
    ctx.fillStyle = '#c8352d';
    ctx.beginPath();
    ctx.arc(Math.round(w * 0.72), Math.round(h * 0.8), Math.max(4, w * 0.1), 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f6f2ea';
    ctx.fillRect(Math.round(w * 0.72) - 1, Math.round(h * 0.8) - 1, 2, 2);
  }
}

export function paintJersey(ctx, w, h, { edition = 'association' } = {}) {
  const retro = edition === 'retro', blue = '#1d428a', gold = '#ffc72c';
  const fabric = retro ? blue : '#e7e9eb', ink = retro ? gold : blue;
  ctx.save(); ctx.scale(w / 80, h / 104);
  ctx.fillStyle = '#1c2528'; ctx.fillRect(0, 0, 80, 104);
  // Follow the real Association jersey's back: a shallow high collar,
  // curved arm openings and straight sides below the underarms, with no waist.
  ctx.beginPath();
  ctx.moveTo(19, 16); ctx.lineTo(29, 10);
  ctx.quadraticCurveTo(40, 13, 51, 10); ctx.lineTo(61, 16);
  ctx.bezierCurveTo(57, 25, 58, 32, 65, 38);
  ctx.lineTo(65, 89); ctx.quadraticCurveTo(40, 92, 15, 89);
  ctx.lineTo(15, 38); ctx.bezierCurveTo(22, 32, 23, 25, 19, 16);
  ctx.closePath(); ctx.fillStyle = fabric; ctx.fill();
  ctx.save(); ctx.clip();
  // The back collar is a narrow band, not the deep front neckline. Modern
  // Warriors arm bindings are blue; gold runs vertically down the side panels.
  ctx.beginPath(); ctx.moveTo(28, 11); ctx.quadraticCurveTo(40, 16, 52, 11);
  ctx.strokeStyle = gold; ctx.lineWidth = 4; ctx.stroke();
  ctx.strokeStyle = retro ? '#eee9db' : blue; ctx.lineWidth = 2.5; ctx.stroke();
  ctx.lineWidth = 3.5; ctx.strokeStyle = retro ? gold : blue;
  ctx.beginPath(); ctx.moveTo(19, 16); ctx.bezierCurveTo(23, 25, 22, 32, 15, 38); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(61, 16); ctx.bezierCurveTo(57, 25, 58, 32, 65, 38); ctx.stroke();
  for (const x of [16, 61]) {
    ctx.fillStyle = gold; ctx.fillRect(x, 39, 3, 50);
    ctx.fillStyle = fabric; ctx.fillRect(x + 1, 39, 1, 50);
  }
  // A small league tab sits below the collar, above the player's own name.
  ctx.fillStyle = blue; ctx.fillRect(38, 17, 2, 4);
  ctx.fillStyle = '#c74b43'; ctx.fillRect(40, 17, 2, 4);
  ctx.fillStyle = '#f3f3ed'; ctx.fillRect(39, 18, 2, 2);
  // Keep the chosen home shirt's name on one straight line, with name and
  // number shifted down together and clear of the back collar.
  ctx.save(); ctx.translate(0, 4);
  [...'TERRY'].forEach((letter, i) => {
    ctx.save(); ctx.translate(26 + i * 6, 26); ctx.scale(1, 1.3);
    pixelText(ctx, letter, 0, 0, 1, ink); ctx.restore();
  });
  ctx.beginPath(); ctx.moveTo(30, 39); ctx.lineTo(50, 39); ctx.lineTo(50, 45);
  ctx.lineTo(39, 67); ctx.lineTo(32, 67); ctx.lineTo(42, 46); ctx.lineTo(30, 46); ctx.closePath();
  ctx.lineJoin = 'miter'; ctx.lineWidth = 1.6; ctx.strokeStyle = retro ? '#eee9db' : gold; ctx.stroke();
  ctx.fillStyle = ink; ctx.fill();
  ctx.restore();
  ctx.fillStyle = retro ? '#163670' : '#cbd0d4'; ctx.fillRect(19, 87, 42, 1);
  ctx.restore(); ctx.restore();
}

export function paintRack(ctx, w, h, t = 0) {
  ctx.fillStyle = '#111316';
  ctx.fillRect(0, 0, w, h);
  const r = rng(Math.floor(t * 4) + 1);
  for (let unit = 0; unit < 10; unit++) {
    const y = 2 + unit * 6;
    ctx.fillStyle = '#1c1f23';
    ctx.fillRect(2, y, w - 4, 5);
    for (let i = 0; i < 6; i++) {
      const on = r() < 0.6;
      ctx.fillStyle = on ? (i % 3 === 0 ? '#7fe0a4' : i % 3 === 1 ? '#5fb7ff' : '#ffb347') : '#24292e';
      ctx.fillRect(4 + i * 3, y + 2, 1, 1);
    }
    ctx.fillStyle = '#2b3036';
    ctx.fillRect(w - 10, y + 1, 7, 3);
  }
}

export function paintSign(ctx, w, h, text, color = '#f4f1ea') {
  ctx.clearRect(0, 0, w, h);
  const scale = Math.floor(Math.min((w - 4) / textWidth(text, 1), (h - 2) / 7));
  pixelText(ctx, text, Math.round((w - textWidth(text, scale)) / 2), Math.round((h - 7 * scale) / 2), scale, color);
}

export function paintPhone(ctx, w, h) {
  ctx.fillStyle = '#0d0d10';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#efe8db';
  ctx.fillRect(1, 2, w - 2, h - 4);
  ctx.fillStyle = '#e5383d';
  ctx.fillRect(3, Math.round(h * 0.55), w - 6, 1);
  ctx.fillRect(Math.round(w / 2) - 1, Math.round(h * 0.3), 3, 3);
}

export function paintPoster(ctx, w, h) {
  // A warm western sunset, the way an open-world game looks at golden hour.
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#f2b45f'); g.addColorStop(0.5, '#d9733f'); g.addColorStop(0.75, '#7a3b2e'); g.addColorStop(1, '#2b1b1b');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#fbe3a6';
  ctx.fillRect(Math.round(w * 0.6), Math.round(h * 0.36), 6, 6);
  ctx.fillStyle = '#2b1b1b';
  for (let x = 0; x < w; x++) ctx.fillRect(x, Math.round(h * 0.72 - Math.abs(Math.sin(x * 0.11)) * 6 - (x % 7 === 0 ? 2 : 0)), 1, h);
  ctx.fillRect(Math.round(w * 0.3), Math.round(h * 0.58), 2, 8);
  ctx.fillRect(Math.round(w * 0.3) - 2, Math.round(h * 0.62), 6, 2);
}

