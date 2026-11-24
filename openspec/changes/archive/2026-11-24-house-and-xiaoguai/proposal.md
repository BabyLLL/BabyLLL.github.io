# Proposal

## Why

The starter world is an empty island with a mailbox and a portal. The owner wants the site to feel like visiting a home: a house to walk into, a gym to play with, and 小乖 (the owner's girlfriend, as a pixel character from their shared photo) living in it. This is the first real content expansion of the world.

## What Changes

- Build the owner's own house on the island (medium scale, single floor, height ~6): living room (sofa/TV/rug), bedroom (bed/wardrobe), gym (Vertec jump trainer ported from the example, dumbbell rack), front doors facing the spawn point.
- Register `HOUSE` bounds so the engine handles indoor ambience, rain shelter and night lamps.
- Add a humanoid NPC 小乖: her own 64x64 Minecraft skin pixel-painted from the couple's photo (long black hair, cat-eye sunglasses, yellow sundress, plumeria flower, gold earring, red lips), wandering indoors, randomly sitting on the sofa, turning to face the player within ~2.5m, waving on first approach.
- Make 小乖 approachable: the F-prompt tracks her live position, and pressing E opens her page, which reads: 你好啊，我的爱人！
- Give the player (BabyLLL) a matching skin from the same photo (short black hair, square sunglasses, cream floral shirt).
- Add a "小乖" page to `SitePages.vue`.

## Capabilities

### New Capabilities
- `house-world`: the built house — block definitions, shell, room layout, furniture, gym equipment, and how it registers with the engine (HOUSE bounds, stations, hotspots).
- `xiaoguai-npc`: the humanoid NPC — skin source, indoor wandering, sofa sitting, player-facing interaction, and how her page opens.

### Modified Capabilities

(none — no OpenSpec specs exist yet)

## Impact

- `world/layout.js`, `world/build.js` — house geometry, stations, NPC anchors.
- New files: `world/house.js`, `world/vertec.js`, `world/npc.js`.
- New files: `public/assets/skins/babylll.png`, `public/assets/skins/xiaoguai.png` (generated).
- `home.config.js` — player skin URL.
- `src/components/SitePages.vue` — 小乖 page.
- Engine (`engine/`) stays untouched; everything is world-layer.
