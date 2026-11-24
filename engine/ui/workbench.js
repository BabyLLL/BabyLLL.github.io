// Project cards in a side-peeking carousel; only the front card exposes its
// content to keyboard and assistive technology. No animation loop or 3D pass.
import { t } from '../lang.js';

export function createWorkbench(panel) {
  const controls = panel.querySelector('.work-controls');
  const status = controls.querySelector('[role="status"]');
  const tabs = controls.querySelector('.work-tabs');
  const previous = controls.querySelector('[data-direction="-1"]');
  const next = controls.querySelector('[data-direction="1"]');
  const header = panel.querySelector('header');
  let works = [], deck = null, current = 0, swipe = null, suppressClick = false;

  // The header rides on the front card's top edge and the switcher on its
  // bottom edge. Cards sit at --top of the deck, shifted by --y of their own
  // height; neither changes mid-slide, so the settled box comes from layout
  // sizes alone.
  function fitToCard() {
    const card = works[current];
    if (!card || !deck.offsetHeight) return;
    const style = getComputedStyle(deck);
    const top = parseFloat(style.getPropertyValue('--top')) / 100 * deck.offsetHeight
      + parseFloat(style.getPropertyValue('--y')) / 100 * card.offsetHeight;
    panel.style.setProperty('--card-w', `${card.offsetWidth}px`);
    panel.style.setProperty('--card-y', `${Math.max(0, top)}px`);
    panel.style.setProperty('--card-b', `${Math.max(0, deck.offsetHeight - top - card.offsetHeight)}px`);
  }
  // On opening and on resize the header and switcher jump into place; only
  // switching cards animates them along with the cards.
  const resized = new ResizeObserver(() => {
    for (const el of [header, controls]) el.classList.add('is-settling');
    fitToCard();
    header.offsetWidth;
    for (const el of [header, controls]) el.classList.remove('is-settling');
  });

  function focus() {
    works[current]?.querySelector('.work-content').focus({ preventScroll: true });
  }
  function select(index, moveFocus = false) {
    current = (index + works.length) % works.length;
    works.forEach((work, i) => {
      const active = i === current;
      work.classList.toggle('is-front', active);
      work.classList.toggle('is-before', i < current);
      work.classList.toggle('is-after', i > current);
      tabs.children[i].setAttribute('aria-current', String(active));
      const content = work.querySelector('.work-content');
      content.inert = !active;
      content.setAttribute('aria-hidden', String(!active));
      work.querySelector('.work-peek').hidden = active;
    });
    const name = works[current].querySelector('h3').textContent;
    status.textContent = t(`${name}，${current + 1} / ${works.length}`, `${name}, ${current + 1} of ${works.length}`);
    fitToCard();
    if (moveFocus) focus();
  }
  previous.addEventListener('click', () => select(current - 1));
  next.addEventListener('click', () => select(current + 1));

  function endDrag() {
    swipe = null;
    deck?.classList.remove('is-dragging');
    deck?.style.removeProperty('--drag');
  }

  function mount(body) {
    works = [...body.querySelectorAll('.store > [data-work]')];
    controls.hidden = works.length < 2;
    resized.disconnect();
    panel.style.removeProperty('--card-w');
    panel.style.removeProperty('--card-y');
    panel.style.removeProperty('--card-b');
    if (!works.length) return;
    deck = body.querySelector('.store');
    resized.observe(deck);
    deck.classList.add('work-deck');
    deck.setAttribute('aria-label', t('作品卡片', 'Works'));
    swipe = null;
    suppressClick = false;
    tabs.replaceChildren();
    works.forEach((work, index) => {
      const name = work.querySelector('h3').textContent;
      // The card is as wide as its media at full height, so screenshots sit
      // side by side instead of floating in equal columns.
      const media = [...work.querySelectorAll('.shots img, .film img')];
      work.style.setProperty('--ratio', media.reduce((sum, m) => sum + m.getAttribute('width') / m.getAttribute('height'), 0));
      work.style.setProperty('--gaps', Math.max(0, media.length - 1));
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.setAttribute('aria-label', name);
      tab.append(work.querySelector('.listing > img').cloneNode());
      tab.addEventListener('click', () => select(index, true));
      tabs.append(tab);
      const content = document.createElement('div');
      content.className = 'work-content';
      content.tabIndex = -1;
      content.append(...work.childNodes);
      const peek = document.createElement('button');
      peek.type = 'button';
      peek.className = 'work-peek';
      peek.setAttribute('aria-label', t(`将 ${name} 置于最前`, `Bring ${name} to the front`));
      peek.addEventListener('click', () => select(index, true));
      work.append(content, peek);
      // All four images fit the card. Native links let visitors inspect one
      // at its own size without adding another overlay or scroll region.
      content.querySelectorAll('.shots img').forEach((image, i) => {
        const link = document.createElement('a');
        link.href = image.src;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', t(`查看 ${name} 第 ${i + 1} 张截图`, `${name} screenshot ${i + 1}`));
        image.draggable = false;
        image.replaceWith(link);
        link.append(image);
      });
    });
    deck.addEventListener('keydown', e => {
      if (e.target.closest('a')) return;
      let index;
      if (e.key === 'ArrowRight') index = current + 1;
      else if (e.key === 'ArrowLeft') index = current - 1;
      else if (e.key === 'Home') index = 0;
      else if (e.key === 'End') index = works.length - 1;
      else return;
      e.preventDefault();
      select(index, true);
    });
    deck.addEventListener('pointerdown', e => {
      suppressClick = false;
      if (!e.isPrimary || e.button !== 0 || e.target.closest('button, .get')) return;
      swipe = { id: e.pointerId, x: e.clientX, y: e.clientY };
    });
    deck.addEventListener('pointermove', e => {
      if (!swipe || e.pointerId !== swipe.id) return;
      const dx = e.clientX - swipe.x;
      if (!swipe.drag && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(e.clientY - swipe.y)) {
        deck.setPointerCapture(e.pointerId);
        swipe.drag = true;
        deck.classList.add('is-dragging');
      }
      // The cards trail the finger a little, then settle on release.
      if (swipe.drag) deck.style.setProperty('--drag', `${dx * .6}px`);
    });
    deck.addEventListener('pointerup', e => {
      if (!swipe || e.pointerId !== swipe.id) return;
      const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
      endDrag();
      if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      suppressClick = true;
      select(current + (dx < 0 ? 1 : -1), true);
    });
    deck.addEventListener('pointercancel', endDrag);
    deck.addEventListener('lostpointercapture', e => {
      // Touch starts with implicit capture on the original child. Its loss
      // bubbles here when capture transfers to the deck during a swipe.
      if (e.target === deck) endDrag();
    });
    deck.addEventListener('click', e => {
      if (!suppressClick) return;
      suppressClick = false;
      e.preventDefault();
      e.stopPropagation();
    }, true);
    select(0);
  }
  return { mount, focus };
}
