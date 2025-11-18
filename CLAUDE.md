# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DnD-Website** is a web application for running "The Shadowspire Campaign" - a family-friendly D&D adventure designed for Christmas 2024. The project is currently in the planning phase with a complete campaign script documented in the Word file.

### Campaign Details

- **Players**: 3 heroes (Nick - Warrior, Christopher - Treasure Hunter, Lena - Diplomat)
- **Duration**: 4-6 hours of gameplay
- **Structure**: 36 total cameo encounters (12 per character path) + shared encounters + boss fight
- **Playstyle**: Simplified D&D mechanics focused on fun over complexity

## Campaign Mechanics (From Planning Document)

### Simplified Rules System

The campaign uses custom mechanics that deviate from traditional D&D:

1. **No Character Death**: Low rolls result in funny/embarrassing outcomes, never death
2. **Skill Point Progression**: Players start with 12 points, gain 1 per cameo encounter (ending with ~34-35 points)
3. **Coin Economy**: 240 total coins circulating throughout campaign
   - Starting: 12 coins per player
   - Cameo rewards: 5 coins each (180 total)
   - Natural 20 bonus: +1 coin
   - Natural 1 penalty: -1 coin (except in combat)
   - Mandatory spending: 15 coins per player (3 paid meals at 5 coins each)

4. **Six Stats with Modifiers**:
   - Strength (STR), Dexterity (DEX), Constitution (CON)
   - Intelligence (INT), Wisdom (WIS), Charisma (CHA)
   - Modifier = (Stat Points - 8) ÷ 2 (rounded down)

5. **Dice System**: d4, d6, d8, d10, d12, d20 based on difficulty/drama
6. **Combat**: Opposed rolls, best-of-X format, no armor class tracking

### Three Separate Paths

- **Crimson Path** (Nick): 12 combat-focused encounters → Key of Power
- **Golden Path** (Christopher): 12 treasure hunting encounters → Key of Fortune
- **Silver Path** (Lena): 12 diplomatic/social encounters → Key of Knowledge

All three keys required to unlock final boss fight against the Void Tyrant.

### Shared Encounters

- Opening: Howling Moon Tavern (character creation via magic mirror)
- Midway: Max & Luna's Talent Show (reunion event)
- Random encounters throughout (vendor shops, meals, challenges)
- Final: The Reunion → Boss Fight → Victory celebration

## Development Guidance

### When Implementing the Web Application

**Technology Stack Considerations**:
- Frontend should support dynamic character sheets with live stat/coin tracking
- Need dice rolling simulation (d4, d6, d8, d10, d12, d20)
- State management for tracking player progress through encounters
- Support for DM screen (narration, encounter management)
- Potentially multiplayer/networked for remote play

**Core Features to Implement**:

1. **Character Management**
   - Character sheet with 6 stats and skill point allocation
   - Coin tracker with visual circles (fill/cross-out)
   - Inventory system for purchased items
   - Modifier calculations

2. **Encounter System**
   - 36 unique cameo encounters (content from Word doc)
   - Random encounter triggers
   - Vendor/shop interfaces
   - Meal event tracking

3. **Dice Rolling Engine**
   - Visual dice roller for each die type
   - Automatic modifier addition
   - Natural 20/Natural 1 detection with coin adjustments
   - Roll history log

4. **Campaign Progression**
   - Path selection (Crimson/Golden/Silver)
   - Encounter tracking (completed/remaining)
   - Key forging status
   - Boss fight unlocking when all 3 keys obtained

5. **DM Tools**
   - Narration scripts from Word document
   - Encounter instructions and DM notes
   - Player stats overview
   - Pacing suggestions

### File Organization (When Code Exists)

Expected structure for web application:
- `/src` - Source code
  - `/components` - React/Vue components (character sheets, dice roller, encounter cards)
  - `/encounters` - Encounter data/logic for all 36+ encounters
  - `/utils` - Dice mechanics, stat calculations, coin management
  - `/assets` - Images (Max & Luna photos, encounter artwork)
- `/data` - Campaign content (narration, encounters, items)
- `/public` - Static assets
- Configuration files (package.json, etc.)

### Important Campaign Content Notes

**Character References**:
- Max: Silver-and-white Husky with blue eyes (tavern keeper)
- Luna: Brown-and-white Aussiedor (tavern keeper)
- These characters appear multiple times including midway talent show

**Key Story Beats to Preserve**:
- Mirror scene for character creation (visual self-reflection)
- Void Tyrant capture of party leader
- Three separate path journeys
- Midway reunion at talent show
- Final convergence with all three keys
- Post-credits sequel hook (worm hand emerging from ruins)

**Tone and Style**:
- Family-friendly, no graphic violence
- Celebrate successes AND failures (both create memorable moments)
- High energy, fast-paced (no rule debates)
- Encourage roleplay and character immersion

### Testing Approach

When developing:
- Test full campaign flow from start to finish
- Verify coin economy balance (should end with 0-30 coins)
- Ensure skill point progression reaches 34-35 by end
- Test all dice types and modifier calculations
- Verify Natural 20/1 special effects and coin adjustments
- Check that all 3 paths can be completed independently
- Test boss fight requires all 3 keys

### Content Migration

The complete campaign script is in `THE ULTIMATE FINAL DND SCRIPT.docx`. When building the application:
- Extract all encounter descriptions, narration, and DM notes
- Preserve formatting for read-aloud text vs DM instructions
- Include all example scenarios and tip sections
- Maintain emoji indicators and visual elements where appropriate

## Current Repository State

**Status**: Planning phase - no code implementation yet
**Next Steps**:
1. Choose web framework (React, Vue, Svelte, etc.)
2. Set up project structure
3. Create data models for characters, encounters, items
4. Extract content from Word document into structured data
5. Build character creation flow
6. Implement dice rolling mechanics
7. Develop encounter system
8. Create DM interface

## Notes for Future Developers

- The campaign is designed for 3 specific players but should be adaptable for different groups
- The simplified mechanics are intentional - don't add traditional D&D complexity
- The coin economy is carefully balanced at 240 total coins - preserve this balance
- All failure states should be narratively interesting, never game-ending
- The sequel hook suggests potential for expansion/continuation
