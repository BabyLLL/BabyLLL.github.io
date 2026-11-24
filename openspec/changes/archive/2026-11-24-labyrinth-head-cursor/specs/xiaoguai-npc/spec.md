# Spec Delta

## MODIFIED Requirements

### Requirement: NPC appearance from the shared photo
Both characters SHALL wear the reference design (the Labyrinth site's character) wholesale: the head — full black hair with subtle shade variation and white sparkle pixels on top, a simple cute face of white block eyes with dark pupils and a small soft-pink mouth — and the body — black tee, dark jeans and white shoes taken from the reference skin. Xiaoguai SHALL stay distinguishable by her long hair and gold earring. The skins SHALL render complete hair: the head's side and back faces carry hair down to a natural hairline, so neither character reads as bald from any angle.

#### Scenario: Skins load in the world
- **WHEN** the world boots
- **THEN** the player wears the BabyLLL skin and the NPC appears with her own skin, both rendered by the standard Minecraft-model pipeline

#### Scenario: Head is fully haired from every angle
- **WHEN** either character is viewed from the side or behind
- **THEN** the head shows the adopted hair style down to the hairline, with no bare-skin band below it
