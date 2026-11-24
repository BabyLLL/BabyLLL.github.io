# Tasks

## 1. Skins

- [x] 1.1 Generate `public/assets/skins/babylll.png` and `public/assets/skins/xiaoguai.png` (64x64, standard arms) pixel-painted from the photo design
- [x] 1.2 Point `home.config.js` `skin` at the BabyLLL skin

## 2. House

- [x] 2.1 `world/layout.js`: add HOUSE bounds, room STATIONS (living/bedroom/gym), xiaoguai station + anchors, keep mailbox/portal/spawn
- [x] 2.2 `world/house.js`: block types, floor/walls/roof shell with door openings, interior walls
- [x] 2.3 Furniture: living room (sofa/TV/rug/coffee table), bedroom (bed/wardrobe/lamp), gym (dumbbell rack, mats)
- [x] 2.4 Port `world/vertec.js` and place it in the gym

## 3. NPC

- [x] 3.1 `world/npc.js`: xiaoguai avatar with her skin, wander/sit/face-player/wave behavior on the nav grid
- [x] 3.2 Wire NPC + Vertec into `world/build.js` setup(); make her station track her position

## 4. Pages and config

- [x] 4.1 Add 小乖 page (你好啊，我的爱人！) to `src/components/SitePages.vue`; wire station ids

## 5. Verify

- [x] 5.1 `npm run build` passes; import check clean
- [x] 5.2 Walk the world in dev: enter all rooms, jump the Vertec, approach 小乖 (she turns/waves), open her page
