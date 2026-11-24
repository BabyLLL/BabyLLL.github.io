# Tasks

## 1. Head swap

- [x] 1.1 Rewrite the head painter in `tools/make-skins.py` to the reference style: full black hair with shade variation and crown sparkles, white block eyes with dark pupils, soft-pink mouth; keep Xiaoguai's long hair hat layer and gold earring, keep BabyLLL's short hat volume
- [x] 1.2 Regenerate both PNGs and verify head faces (front/side/back) pixel previews

## 1b. Body swap (added mid-implementation, user request)

- [x] 2.0 Vendor the reference skin body (`tools/labyrinth-base.png`); regenerate both skins with heads repainted on top; verify in-world

## 2. Sword cursor

- [x] 2.1 Add `public/assets/cursor/sword.png` (32x32, copied from the reference site)
- [x] 2.2 Add `src/cursor.css` (root variable, site-wide sword with auto fallback, pointer fallback on interactive elements) and import it in `src/main.js`

## 3. Verify

- [x] 3.1 `npm run build` passes
- [x] 3.2 In-world: both characters show the new head from every angle; cursor renders as the sword over page and canvas, pointer over interactive elements
