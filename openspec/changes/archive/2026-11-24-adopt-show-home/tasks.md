# Tasks

## 1. Vendor the show-home world

- [x] 1.1 Copy upstream `examples/terry-home/world/` modules (layout, house, furnish, paint, mountain, outer, roof-access, stainless, car, plants, vertec) into `world/`, replacing our house.js/layout.js/vertec.js; record the upstream commit in build.js header
- [x] 1.2 Rewrite `world/build.js` to the example's build/setup wiring, plus our Vertec (example's) and NPC setup; confirm `npm run build` passes

## 2. Pages, stations, config

- [x] 2.1 Align `src/components/SitePages.vue` with the show-home: works page added, gym page retired, about/blog/contact/mailbox/xiaoguai kept with our content
- [x] 2.2 Add the xiaoguai station to the show-home STATIONS; update `home.config.js` dock to the new station ids

## 3. NPC re-anchoring

- [x] 3.1 Re-anchor 小乖 to the show-home interior (sofa seat, lounge/hall anchors on the cat/dog lanes); verify wander/sit/greet still work

## 4. Skins

- [x] 4.1 Extend `tools/make-skins.py` head painter with complete short-hair side/back coverage (hairline at the nape); regenerate both PNGs; verify from behind in-world

## 5. Verify

- [x] 5.1 `npm run build` passes; no runtime exceptions
- [x] 5.2 Visual pass in dev: villa exterior from spawn, walk lounge → loft → court → garage → coffee bar, swim in the pool, jump the Vertec, roof ladder, approach 小乖 (greet + page), cat and dog visible
