# Design

## Context

The world layer is currently our own 28x16 three-room house (house.js, layout.js, furnish-in-house.js pattern) plus the xiaoguai NPC. The upstream repo ships a complete show-home example (`examples/terry-home`) with 13 world modules (~180KB) that kidsseeghosts.art renders nearly as-is. Both are MIT and from the same project our engine came from, so the module interfaces (build/setup contracts, layout exports consumed by main.js) are already compatible with our engine.

## Goals / Non-Goals

- Goals: show-home villa + pool + mountain + pier as the world; xiaoguai NPC preserved and re-anchored; complete hair on both skins; our pages and content kept.
- Non-Goals: kidsseeghosts' engine-level features (TV YouTube playback, phone music app) — those require engine forks and are out of scope; real weather config; listening corner and robot figure.

## Decisions

- **Adopt the upstream files wholesale, not re-coordinated.** The example's world modules are internally consistent (furnish.js builds against house.js's block names and layout coordinates). Porting all 13 files verbatim and then adapting only the edges (STATIONS, pages, NPC anchors, dock ids) is far cheaper and less risky than cherry-picking rooms into our house. Our own house.js/layout.js/vertec.js are deleted.
- **Stations: example's set + xiaoguai.** The example's stations without pages (writing, court, lab, coffee, pool, mountain) work as dock teleport targets in our engine unchanged. Our page-backed ids (about, mailbox, portal, xiaoguai) map onto it; the works page gets a single listing (this site itself) using the example's markup shape; our gym page is retired (court + Vertec replace it).
- **NPC anchors come from the example's pet geometry.** The cat's home anchor `[1.85, -3.2]` sits on the lounge sofa; her anchors reuse walkable lounge/hall cells already proven by the cat/dog plans (which include detours around furniture). Her sofa-sit snap keeps working because the sofa seat is at that anchor.
- **Hair fix in the generator, not by hand-editing PNGs.** `tools/make-skins.py` is the source of truth for both skins; extend the head painter so short hair covers side/back faces down to a hairline (sides ~5 rows, back ~6 rows with a tapered nape), then regenerate both PNGs. 小乖's long hair (hat layer) already covers; her jacket-layer strands stay.
- **Upstream files land unmodified first, then adapt.** Task order: copy → build passes → adapt STATIONS/pages → re-anchor NPC → skins fix → visual verification.

## Risks / Trade-offs

- [Upstream example evolves; vendoring diverges] → Record the source commit in a header comment in world/build.js; note in README that world/ is vendored from the example.
- [NPC paths may collide with furniture the detours don't know] → Her anchors reuse the cat/dog walkable lanes; verify by walking every anchor in dev before finishing.
- [Skins still read imperfect at 8x8 faces] → The fix targets the recognizable defect (bald back); likeness remains silhouette-level, accepted.

## Migration Plan

World content swap behind no API changes; rollback = git revert of the world/ directory and pages. The NPC module changes are coordinate-only.

## Open Questions

(none)
