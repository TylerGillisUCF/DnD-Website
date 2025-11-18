# The Shadowspire Campaign - DM Guide Website

A web-based Dungeon Master guide for running "The Shadowspire Campaign" - a family-friendly D&D adventure designed for Christmas 2024.

![The Shadowspire Campaign](https://img.shields.io/badge/Campaign-Shadowspire-gold)
![Players](https://img.shields.io/badge/Players-3-blue)
![Duration](https://img.shields.io/badge/Duration-4--6_hours-green)

## Overview

This website provides an interactive, easy-to-use guide for running the complete Shadowspire Campaign. It features:

- **Linear Encounter Navigation** - Step through the campaign in story order
- **Player Tracking** - Track coins, skill points, inventory, and key status for all 3 players
- **Dark Fantasy Theme** - Easy-on-the-eyes midnight blue design optimized for laptop screens
- **Progress Persistence** - Your campaign progress is automatically saved to your browser
- **Read-Aloud Narration** - Clearly formatted narration boxes for player interaction
- **DM Notes** - Helpful instructions and tips throughout

## Campaign Details

- **Players:** Nick (Warrior), Christopher (Treasure Hunter), Lena (Diplomat)
- **Structure:** 60+ encounters including opening, 36 cameo encounters, spending/random encounters, midway reunion, and boss fight
- **Mechanics:** Simplified D&D with skill point progression, coin economy, and no character death
- **Total Play Time:** 4-6 hours

## Getting Started

### Option 1: Open Locally (No Internet Required)

1. Download or clone this repository
2. Open `index.html` in your web browser (Chrome, Firefox, Safari, or Edge)
3. That's it! The campaign will load automatically

### Option 2: Use GitHub Pages (Access from Anywhere)

1. Fork or push this repository to GitHub
2. Go to repository Settings → Pages
3. Set Source to main branch, root folder
4. Your campaign will be available at `https://yourusername.github.io/DnD-Website/`

## How to Use

### Navigation

- **Next/Previous Buttons** - Move between encounters
- **Jump to Section Dropdown** - Quick access to major campaign sections
- **Arrow Keys** - Use left/right arrows for navigation (keyboard shortcuts)
- **Spacebar** - Mark encounter as complete

### Player Tracking

The left sidebar tracks all three players:

- **Skill Points** - Starts at 12, gains +1 per cameo encounter
- **Coins** - Starts at 12, varies based on encounters and rolls
- **Inventory** - Click "+ Add Item" to track purchased items
- **Key Status** - Shows when each player forges their key

Use the +/- buttons to adjust stats as encounters progress.

### Reading Encounters

Each encounter displays:

1. **Type Badge** - Encounter type (Combat, Social, Treasure Hunt, etc.)
2. **Title** - Encounter name
3. **Narration Boxes** - Gold-bordered text to read aloud to players
4. **DM Notes** - Blue-bordered instructions for you only
5. **Rewards** - What players earn from completing the encounter

### Progress Tracking

- Check the box "Mark Complete" after finishing each encounter
- The progress bar at the top shows overall campaign completion
- Progress is automatically saved to your browser's local storage

### Resetting the Campaign

Click "Reset Campaign" in the sidebar to:
- Reset all player stats to starting values (12 coins, 12 skill points)
- Clear all inventories and progress
- Return to the beginning of the campaign

**Warning:** This cannot be undone!

## File Structure

```
DnD-Website/
├── index.html              # Main page
├── README.md               # This file
├── CLAUDE.md              # Guide for future development
├── css/
│   └── style.css          # All styling (dark theme)
├── js/
│   ├── app.js             # Main application controller
│   ├── tracker.js         # Player stat tracking
│   └── navigation.js      # Encounter navigation
├── data/
│   └── encounters.js      # All campaign encounters
└── assets/
    └── icons/             # (Future: dice, coin icons)
```

## Browser Compatibility

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

**Note:** Requires JavaScript enabled and supports modern ES6+ features.

## Tips for Running the Campaign

### Preparation
1. Read through the Campaign Introduction (Encounter 0)
2. Review the Opening Scene (The Howling Moon Tavern) before starting
3. Have physical dice ready or use an online dice roller
4. Set up laptop where players cannot see DM Notes

### During Play
1. Read **Narration Boxes** aloud word-for-word - they're written for players
2. Keep **DM Notes** to yourself - they contain spoilers and instructions
3. Update player stats in real-time using the sidebar
4. Mark encounters complete as you finish them
5. Use the "Jump to Section" dropdown if you need to skip ahead or review

### Natural 20s and 1s
Remember to track these for coin adjustments:
- **Natural 20:** Player gains +1 coin (celebrate!)
- **Natural 1:** Player loses 1 coin, EXCEPT in combat (laugh together!)

### Encounter Rewards
Most cameo encounters reward:
- +5 coins
- +1 skill point

Apply these using the +/- buttons after each encounter.

## Customization

### Adding Encounters

To add or modify encounters, edit `data/encounters.js`:

```javascript
{
    id: X,
    title: "Encounter Title",
    type: "Encounter Type",
    characterPath: "nick|christopher|lena|all",
    content: `
        <div class="narration-box">
            <p>Read-aloud text here</p>
        </div>
        <div class="dm-notes">
            <div class="dm-notes-header">📋 DM Notes</div>
            <p>Your private notes here</p>
        </div>
    `
}
```

### Changing Theme

Edit `css/style.css` - the `:root` section contains all color variables for easy customization.

## Troubleshooting

### Progress Not Saving
- Check that your browser allows local storage
- Don't use incognito/private browsing mode

### Encounters Not Loading
- Make sure `data/encounters.js` is in the correct location
- Check browser console (F12) for errors

### Styling Issues
- Clear browser cache
- Make sure `css/style.css` loaded properly

## Technical Details

- **No Backend Required** - Pure client-side HTML/CSS/JavaScript
- **LocalStorage** - Campaign progress saved in browser (not cloud)
- **Responsive** - Optimized for laptop screens, works on tablets
- **Offline Ready** - No internet connection needed after initial load

## Future Enhancements

Potential additions:
- [ ] Export/Import campaign progress
- [ ] Built-in dice roller
- [ ] Sound effects and ambient music
- [ ] Printable encounter sheets
- [ ] Mobile-optimized layout
- [ ] Additional campaigns

## Credits

**Campaign Design:** Created for Nick, Christopher, and Lena - Christmas 2024

**Website Development:** Built with Claude Code

**Inspired By:** Classic D&D adventures with a modern, family-friendly twist

## License

This campaign is for personal use. Feel free to modify and adapt for your own games!

---

## Quick Reference

### The Six Stats
- **STR (Strength)** - Physical power, melee combat
- **DEX (Dexterity)** - Agility, stealth, ranged attacks
- **CON (Constitution)** - Endurance, toughness
- **INT (Intelligence)** - Logic, memory, puzzles
- **WIS (Wisdom)** - Perception, insight, intuition
- **CHA (Charisma)** - Persuasion, deception, leadership

### Modifier Formula
`(Stat Points - 8) ÷ 2` (rounded down)

### Dice Types
- d4, d6, d8, d10, d12, d20 - Used based on difficulty and drama

### Campaign Economy
- Total coins in circulation: 240
- Starting coins per player: 12
- Mandatory spending: ~15 coins (meals)
- Expected end coins: 0-50 (varies by choices)

---

**Ready to begin? Open index.html and start your adventure!** 🎲⚔️💰💎
