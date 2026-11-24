# Spec Delta

## ADDED Requirements

(none)

## MODIFIED Requirements

### Requirement: NPC appearance from the shared photo
Both the NPC 小乖 and the player character wear skins pixel-painted from the couple's photo: she has long black hair, cat-eye sunglasses, a yellow sundress with a white plumeria on the chest, a gold earring and red lips; the player has short black hair, square sunglasses and a cream floral shirt. The skins SHALL render complete hair: the head's side and back faces carry hair down to a natural hairline, so neither character reads as bald from any angle.

#### Scenario: Skins load in the world
- **WHEN** the world boots
- **THEN** the player wears the BabyLLL skin and the NPC appears with her own skin, both rendered by the standard Minecraft-model pipeline

#### Scenario: Head is fully haired from every angle
- **WHEN** either character is viewed from the side or behind
- **THEN** the head shows hair down to the hairline, with no bare-skin band below it

### Requirement: Indoor wandering with sofa sitting
The NPC moves between anchor points inside the show-home's lounge on her own, occasionally sitting on the sofa.

#### Scenario: Wandering
- **WHEN** the world is running and the player is not nearby
- **THEN** the NPC walks between her anchor points in the lounge and hall, and at the sofa anchor she sometimes sits for a while before moving on

### Requirement: Approaching makes her interact
When the player comes close, she stops, turns to face the player, and waves on first approach. Her interaction prompt follows her live position.

#### Scenario: Player comes near
- **WHEN** the player enters interaction range of the NPC
- **THEN** she stops walking, turns to face the player (waving the first time), and the bottom-right prompt offers her page

#### Scenario: Opening her page
- **WHEN** the visitor presses the interact key at the prompt (or taps her prompt)
- **THEN** a page titled 小乖 opens with the message: 你好啊，我的爱人！
