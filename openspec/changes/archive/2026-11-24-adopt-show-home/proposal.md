# Proposal

## Why

The owner prefers the full show-home look of kidsseeghosts.art (404KSG) — the glass-roofed villa, pool, mountain, pier and dense forest from the upstream terry-home example — over the starter island's small house. Additionally, both pixel skins render with incomplete hair: the short-haired character's head shows bare skin on the sides and back (a bald look from behind), because the generated skin only painted two hair rows there.

## What Changes

- **BREAKING** (world content): replace the custom 28x16 house (`world/house.js`, current `world/layout.js` geometry, our furniture set) with the upstream terry-home show-home world files: `house.js` (shell + pool + glazing), `furnish.js` (full furniture: lounge, master suite/loft, court, garage, coffee bar, workbench), `paint.js`, `mountain.js`, `outer.js` (pier + sailboat), `roof-access.js`, `stainless.js`, `car.js`, `plants.js`, `vertec.js`, and the full `layout.js` (HOUSE/LOFT/COURT/POOL/MOUNTAIN/TERRACE/DOORWAY/EXIT/INTRO/LIGHT_VOLUME/SHELTER/PETS...). Engine stays untouched.
- Adopt the show-home STATIONS (works, writing/主卧, about, court, lab, coffee, pool, mountain, mailbox, portal) — most are teleport/showcase spots; keep pages for those that have them.
- Port the example's page structure where it differs (works page), and keep our pages: about (BabyLLL intro), 小乖 page, blog, contact, mailbox.
- Keep the 小乖 NPC, re-anchored to the show-home interior (sofa at the cat's home anchor, living-room wander set). Her station keeps tracking her live position.
- Keep the pets (cat + dog) that come with the example's PETS export.
- **Fix both skins' head hair**: paint full short-hair coverage on the head's side/back faces (hairline at the nape) so the character no longer looks bald from behind; regenerate both PNGs.
- Update `home.config.js` dock to the new station ids.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities
- `house-world`: the built world changes from the custom three-room house to the show-home villa with pool, mountain and pier; station set changes accordingly.
- `xiaoguai-npc`: her anchors move to the show-home interior, and the appearance requirement now demands complete hair rendering on head side/back faces.

## Impact

- `world/` — layout.js, build.js replaced; house.js, vertec.js replaced; new files furnish.js, paint.js, mountain.js, outer.js, roof-access.js, stainless.js, car.js, plants.js; npc.js re-anchored.
- `src/components/SitePages.vue` — works page added, gym page retired (court replaces it), station ids aligned.
- `tools/make-skins.py` — hair fix; `public/assets/skins/*.png` regenerated.
- `home.config.js` — dock ids.
- Upstream files are MIT-licensed from terryHu7/homecraft examples/terry-home.
