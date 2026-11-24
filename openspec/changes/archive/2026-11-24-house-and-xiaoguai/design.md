# Design

## Context

The world layer is two files today: `world/layout.js` (declarative positions) and `world/build.js` (calls `buildIsland` + `buildForest`). The engine reads `layout.js` exports by name (ISLAND, HOUSE, POOL, STATIONS, SPAWN, TREES, PETS…) and calls `build()` once at boot and `setup()` once the player exists. Terry's example (`examples/terry-home`) demonstrates the full pattern: `house.js` defines block types + shell, a furnish module builds furniture and returns batches/hotspots/lights, and `setup()` attaches moving parts.

## Goals / Non-Goals

- Goals: one medium single-floor house (living room / bedroom / gym), playable Vertec, NPC 小乖 with photo-derived skins, all in world-layer code.
- Non-Goals: second floor/roof access, pool, mountain, portal-world travel changes, engine modifications.

## Decisions

- **Adapt the example's house pattern, not its code wholesale.** Terry's `house.js`/`furnish.js` are coupled to his 44x28 coordinates. We copy the *patterns* (block-type registration, wall loops with door openings, furniture as grid writes) and write our own 28x16 house. Alternative — porting furnish.js whole — was rejected: re-coordinating 34KB of furniture costs more than writing the six furniture pieces we need.
- **Vertec is ported nearly as-is** (`world/vertec.js` from the example, 4KB), with its court-specific pose/wireframe bits trimmed; it hangs off `setup()`.
- **NPC is world-layer, zero engine changes.** `world/npc.js` builds a second `createAvatar` with her own skin URL, walks it with the same nav grid the player uses, and animates limbs directly (the avatar exposes pivots). No second full player entity; she ignores swimming/flying (indoor only).
- **Her interaction prompt follows her** by mutating her STATION entry's `at` each frame. `main.js` reads stations from the same array object we import, so distance checks track her live position without engine changes. The station has a fixed `at` fallback (the sofa) for the case the NPC module failed.
- **Skins are generated, not hand-drawn**: a Python script (tools not committed) writes both 64x64 PNGs into `public/assets/skins/`, committed as static assets. The engine's standard skin pipeline consumes them unchanged.
- **Station floor stays 0** (single floor house), so no loft/floor plumbing is needed.

## Risks / Trade-offs

- [Furniture blocks may break nav grid (NPC paths blocked)] → furniture registers obstacles deliberately; NPC anchors and detours chosen on verified-walkable lanes; test by walking every anchor.
- [Mutating station `at` is a bit clever] → fallback `at` keeps behavior sane if NPC setup fails; documented in npc.js comments.
- [Photo-to-pixel likeness is approximate] → 8x8 faces cannot hold a likeness; the recognizable elements are silhouette-level: sunglasses, hair length, yellow dress, flower. Accepted by the user.

## Migration Plan

Additive world-layer change; rollback = revert the `world/` files and remove the two pages. No data or API changes.
