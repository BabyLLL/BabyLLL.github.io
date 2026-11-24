// Flying on a touch screen, where there are no keys: Minecraft's pocket
// controls. The D-pad in the bottom-left corner steers forward, back and
// sideways as the camera looks (a thumb between two arrows goes diagonally,
// and it can slide from one arrow to the next), and the rocker on the right
// climbs and descends; holding descend down onto the ground lands, as Ctrl
// does. A drag elsewhere still turns the camera, so both thumbs can work.
// `state` is read with the keys each frame (input.js).
export function createFlightPad(root) {
  const state = { x: 0, z: 0, up: false, down: false };
  const dpad = root.querySelector('.dpad');
  const arrow = dir => dpad.querySelector(`[data-dir="${dir}"]`);
  const arrows = { up: arrow('up'), down: arrow('down'), left: arrow('left'), right: arrow('right') };
  let steering = null;
  const lifting = new Map();

  function steer(x, z) {
    state.x = x; state.z = z;
    arrows.left.classList.toggle('on', x < 0); arrows.right.classList.toggle('on', x > 0);
    arrows.up.classList.toggle('on', z < 0); arrows.down.classList.toggle('on', z > 0);
  }
  // The whole pad is one target: the thumb's direction from its centre,
  // snapped to eight ways, so it need not land exactly on an arrow.
  function aim(e) {
    const r = dpad.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width * 2 - 1, dy = (e.clientY - r.top) / r.height * 2 - 1;
    if (Math.hypot(dx, dy) < 0.22) return steer(0, 0);
    const a = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4);
    steer(Math.round(Math.cos(a)), Math.round(Math.sin(a)));
  }
  dpad.addEventListener('pointerdown', e => {
    if (steering !== null) return;
    e.preventDefault();
    steering = e.pointerId; dpad.setPointerCapture(e.pointerId); aim(e);
  });
  dpad.addEventListener('pointermove', e => { if (e.pointerId === steering) aim(e); });
  const letGo = e => { if (e.pointerId === steering) { steering = null; steer(0, 0); } };
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) dpad.addEventListener(type, letGo);

  for (const b of root.querySelectorAll('[data-lift]')) {
    const press = on => { state[b.dataset.lift] = on; b.classList.toggle('on', on); };
    b.addEventListener('pointerdown', e => {
      e.preventDefault();
      lifting.set(e.pointerId, b); b.setPointerCapture(e.pointerId); press(true);
    });
    const release = e => { if (lifting.get(e.pointerId) === b) { lifting.delete(e.pointerId); press(false); } };
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(type, release);
  }
  root.addEventListener('contextmenu', e => e.preventDefault());

  // Hidden, it lets go of everything, so a thumb still resting on descend
  // after landing does not carry over into the next flight.
  function show(on) {
    if (root.hidden === !on) return;
    root.hidden = !on;
    document.body.classList.toggle('flight-pad', on);
    if (on) return;
    if (steering !== null && dpad.hasPointerCapture(steering)) dpad.releasePointerCapture(steering);
    for (const [id, b] of lifting) if (b.hasPointerCapture(id)) b.releasePointerCapture(id);
    steering = null; lifting.clear(); steer(0, 0);
    state.up = state.down = false;
    for (const b of root.querySelectorAll('[data-lift]')) b.classList.remove('on');
  }

  return { state, show };
}
