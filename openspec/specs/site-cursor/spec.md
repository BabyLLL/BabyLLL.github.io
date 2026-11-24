# site-cursor Specification

## Purpose

TBD - created by archiving change labyrinth-head-cursor. Update Purpose after archive.

## Requirements

### Requirement: Site-wide sword cursor
The site shows a pixel-sword cursor (a 32x32 PNG) everywhere by default — page background, the 3D canvas, dialogs — with the system arrow as fallback when the image cannot load. Interactive controls (HUD buttons, panel buttons and links, minimap, phone apps) keep the sword cursor with a pointer fallback.

#### Scenario: Default browsing
- **WHEN** the visitor moves the mouse over the page, the world canvas or an open dialog
- **THEN** the cursor is the pixel sword, falling back to the arrow if the image is unavailable

#### Scenario: Interactive elements
- **WHEN** the cursor moves over a HUD button, a panel button or link, the minimap, a phone app or an mc-button
- **THEN** the sword cursor shows, with the pointer as fallback

#### Scenario: Aiming affordances survive
- **WHEN** the engine hides the canvas cursor (web-zip aiming) or marks the portal as clickable
- **THEN** the engine's own cursor takes precedence where it is set inline
