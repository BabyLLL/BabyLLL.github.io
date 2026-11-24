# Spec Delta

## Purpose
The built house on the island: a walkable, furnished home whose interior the engine treats as indoor space (ambience, shelter, lamps), with a gym visitors can play with.

## ADDED Requirements

### Requirement: House shell and rooms
The island contains one house with a south-facing entrance visible from the spawn point. It has three interior rooms — living room, bedroom, gym — separated by interior walls with doorways, and the engine's house bounds cover its interior.

#### Scenario: Visitor walks in from spawn
- **WHEN** a visitor walks north from the spawn point to the front doors
- **THEN** the doors open into the living room and all three rooms are reachable on foot through interior doorways

#### Scenario: Engine recognizes the interior
- **WHEN** the player is inside the house footprint
- **THEN** indoor ambience and rain shelter apply (engine house-bounds behavior)

### Requirement: Gym equipment is playable
The gym contains a Vertec-style jump trainer. Jumping beside it knocks the vanes, giving visible feedback.

#### Scenario: Player jumps at the trainer
- **WHEN** the player jumps next to the Vertec
- **THEN** the vanes swing and a sound plays

### Requirement: Stations for the rooms
The house registers stations so the prompt and dock can open its pages, keeping the existing mailbox and portal stations unchanged.

#### Scenario: Prompt near a station
- **WHEN** the player stands within the interaction distance of a room station
- **THEN** the bottom-right prompt offers that room's page
