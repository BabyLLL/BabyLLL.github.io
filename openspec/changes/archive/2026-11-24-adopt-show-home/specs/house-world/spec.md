# Spec Delta

## ADDED Requirements

### Requirement: Resident pets
A cat and a dog SHALL live on the grounds, following the movement plans the world declares.

#### Scenario: Pets wander
- **WHEN** the world is running
- **THEN** the cat roams the house interior (resting at its home spot) and the dog roams the terrace and lawn

## MODIFIED Requirements

### Requirement: House shell and rooms
The island carries the show-home villa: a glass-roofed modern house whose interior holds a lounge, a master suite on a loft reached by stairs, a half basketball court, a garage, a kitchen with a coffee bar, and a workbench; outside it, a swimming pool on the south shore, a mountain with a walkable trail to the north, and a pier with a sailboat. The house interior registers as indoor space, the roof is walkable with ladder access, and the engine's house bounds cover the interior.

#### Scenario: Visitor walks in from spawn
- **WHEN** a visitor walks to the entrance and through the front doors
- **THEN** the lounge, master suite, court, garage, kitchen and coffee bar are all reachable on foot, and the loft is reachable by its stair

#### Scenario: Engine recognizes the interior
- **WHEN** the player is inside the house footprint
- **THEN** indoor ambience and rain shelter apply (engine house-bounds behavior)

#### Scenario: Pool is swimmable
- **WHEN** the player enters the pool
- **THEN** the engine's swimming behavior takes over (dive, surface, climb out)

### Requirement: Gym equipment is playable
The gym equipment (a Vertec-style jump trainer beside the court) responds to play: jumping beside it knocks the vanes, giving visible feedback.

#### Scenario: Player jumps at the trainer
- **WHEN** the player jumps next to the Vertec
- **THEN** the vanes swing and a sound plays

### Requirement: Stations for the rooms
The show-home registers its stations: page-backed stations (about, works, mailbox, portal, 小乖) open pages, and the showcase stations (主卧, court, lab, coffee, pool, mountain) teleport the visitor to their viewpoint when picked from the dock.

#### Scenario: Prompt near a station
- **WHEN** the player stands within the interaction distance of a page-backed station (about, works, mailbox, portal, 小乖)
- **THEN** the bottom-right prompt offers that station's page

#### Scenario: Dock picks a showcase station
- **WHEN** the visitor picks a showcase station (主卧, court, lab, coffee, pool, mountain) from the dock
- **THEN** the player is carried to that station's viewpoint
