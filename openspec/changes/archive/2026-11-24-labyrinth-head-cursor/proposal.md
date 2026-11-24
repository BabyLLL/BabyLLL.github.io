# Proposal

## Why

Two polish items borrowed from the Labyrinth site (gdg.nith.ac.in/labyrinth, a homecraft portal site): its character head style reads cuter than our sunglasses design at Minecraft scale, and its site-wide diamond-sword cursor gives the whole visit a game feel our default arrow lacks. Also, after the recent skin regeneration both characters still wear sunglasses that look like a black band at 8x8 — adopting the reference head replaces that weak spot with a proven design.

## What Changes

- Replace both pixel characters wholesale with the Labyrinth character design: the head (full black hair with subtle shade variation and white sparkle pixels on top, a simple cute face — white block eyes with dark pupils, small soft-pink mouth, no sunglasses) AND the body (black tee, dark jeans, white shoes, taken from the reference skin). The two characters become matching outfits, distinguished by Xiaoguai's long hair and gold earring. (Updated mid-implementation on user request: bodies were originally kept from the photo outfits.)
- Xiaoguai keeps her long hair (hat layer down the back/sides) and gold earring so the two characters stay distinguishable.
- Adopt the reference site's diamond-sword cursor site-wide: a 32x32 pixel-sword PNG (copied from the reference site) as a CSS variable, applied to html/body/#world/canvas/dialog with an auto fallback, and with a pointer fallback on interactive elements (HUD/panel buttons, minimap, phone apps, mc-buttons).
- New stylesheet `src/cursor.css` imported by `src/main.js` (no engine file changes).

## Capabilities

### New Capabilities
- `site-cursor`: the site-wide custom cursor — resource, fallbacks, and where the pointer affordance survives.

### Modified Capabilities
- `xiaoguai-npc`: the appearance requirement's head design changes from sunglasses/red-lips to the adopted reference head; bodies and the "hair complete from every angle" scenario stay.

## Impact

- `tools/make-skins.py` — head painter rewrite + reference body as the generator base (`tools/labyrinth-base.png`); `public/assets/skins/*.png` regenerated.
- `public/assets/cursor/sword.png` — new static asset.
- `src/cursor.css` (new), `src/main.js` — one import line.
- `engine/` untouched; the engine's dynamic canvas cursors (hidden while web-aiming, pointer over the portal) keep working — inline styles win over the stylesheet, so only the pointer affordance differs from the reference site.
