// One set of portal controls for template worlds and ordinary-site adapters.
// The style travels with the controls when a native dialog becomes modal,
// keeping them usable at the same viewport coordinates inside the top layer.
// The fixed control in the top-left corner is how visitors find the portal:
// it takes the top-right buttons' look and size (44×44, 40×40 on compact
// screens) and shows the pixel gate with no text, only an accessible label.
// It and Return keep one place on computers, phones and inside dialogs;
// Return is an arrow and the site's name, never an avatar.
export function drawDoor(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 16, 16);
  // The same upright light gate for the fixed control, scene prompt and title.
  const colors = { k: '#1d1d1f', u: '#bcdfff', c: '#4fb3e0', C: '#2b6c9e', w: '#ffffff' };
  const pixels = [
    '......kkkk......',
    '.....kuuuuk.....',
    '....kuuCCuuk....',
    '...kuCccCCCuk...',
    '...kuccccCCuk...',
    '..kuccCCCcCcuk..',
    '..kucCCuuuCcuk..',
    '..kucCuwwuCcuk..',
    '..kucCuwwuCcuk..',
    '..kucCuuuCCcuk..',
    '..kucCcCCCccuk..',
    '...kuCCccccuk...',
    '...kuCCCccCuk...',
    '....kuuCCuuk....',
    '.....kuuuuk.....',
    '......kkkk......',
  ];
  pixels.forEach((row, y) => [...row].forEach((key, x) => {
    if (colors[key]) { ctx.fillStyle = colors[key]; ctx.fillRect(x, y, 1, 1); }
  }));
}
const STYLE = `
.hc-controls { position: fixed; z-index: 2147483000; left: max(16px, env(safe-area-inset-left)); top: max(16px, env(safe-area-inset-top)); display: flex; flex-direction: column; align-items: flex-start; gap: 10px; pointer-events: auto; }
.hc-controls .hc-control { box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 44px; max-width: min(380px, calc(100vw - 32px)); margin: 0; padding: 0 12px; border: 0; border-radius: 0; background: var(--btn, #7d7a73); color: #fff; font: 600 13px/1.2 var(--text, -apple-system, BlinkMacSystemFont, "PingFang SC", system-ui, sans-serif); text-shadow: 2px 2px 0 rgba(0,0,0,.35); box-shadow: 0 0 0 2px var(--line, #111), inset 2px 2px 0 rgba(255,255,255,.32), inset -2px -3px 0 rgba(0,0,0,.38); cursor: pointer; }
.hc-controls .hc-control:hover { background: var(--btn-hover, #8e8b84); }
.hc-controls .hc-control.open { width: 44px; padding: 0; }
.hc-controls .hc-control.open canvas { width: 32px; height: 32px; }
.hc-controls .hc-control:focus-visible { outline: 3px solid #f2c94c; outline-offset: 3px; }
.hc-controls .hc-control span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.hc-controls canvas { display: block; width: 20px; height: 20px; flex: none; image-rendering: pixelated; }
.hc-controls svg { display: block; width: 18px; height: 18px; flex: none; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: square; stroke-linejoin: miter; }
@media (max-width: 720px), (max-height: 520px) {
  .hc-controls .hc-control.open { width: 40px; height: 40px; }
  .hc-controls .hc-control.open canvas { width: 28px; height: 28px; }
}
`;
export function createDoorControls({ parent, onOpen, onReturn, openId, backId }) {
  const root = Object.assign(document.createElement('div'), { className: 'hc-controls' });
  const style = document.createElement('style'); style.textContent = STYLE; root.append(style);
  const button = (className, part, handler, id) => {
    const el = Object.assign(document.createElement('button'), { type: 'button', className: `hc-control ${className}` });
    el.setAttribute('part', part); if (id) el.id = id;
    el.addEventListener('click', handler);
    el.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') event.stopPropagation(); });
    root.append(el); return el;
  };
  const open = button('open', 'open', onOpen, openId);
  const canvas = Object.assign(document.createElement('canvas'), { width: 16, height: 16 });
  canvas.setAttribute('aria-hidden', 'true'); drawDoor(canvas);
  const openText = document.createElement('span'); openText.hidden = true; open.append(canvas, openText);
  let back = null;
  if (onReturn) {
    back = button('back', 'return', onReturn, backId);
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('viewBox', '0 0 24 24'); arrow.setAttribute('aria-hidden', 'true');
    arrow.innerHTML = '<path d="m10 5-7 7 7 7M3 12h18"/>';
    back.append(arrow, document.createElement('span'));
  }
  let animated = null, oldAnimation = '';
  function mount(target) {
    if (!target || root.parentNode === target) return;
    if (animated) { animated.style.animation = oldAnimation; animated = null; }
    if (target.tagName === 'DIALOG') {
      // A transformed dialog would otherwise become the fixed-position
      // containing block during its opening animation.
      animated = target; oldAnimation = target.style.animation; target.style.animation = 'none';
    }
    target.append(root);
  }
  mount(parent);
  return {
    root, open, back, mount,
    label(openText, backText, backURL = '') {
      open.querySelector('span').textContent = openText; open.setAttribute('aria-label', openText); open.title = openText;
      if (back) { back.querySelector('span').textContent = backText; back.title = backURL; }
    },
  };
}
