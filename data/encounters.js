/**
 * ENCOUNTERS.JS - All Campaign Encounters
 * The Shadowspire Campaign - Complete encounter data
 */

window.encounters = [
    // ========================================
    // 0: CAMPAIGN START / INTRODUCTION
    // ========================================
    {
        id: 0,
        title: "Campaign Introduction",
        type: "Introduction",
        characterPath: "all",
        content: `
            <div class="narration-box">
                <p><strong>Welcome to The Shadowspire Campaign!</strong></p>
                <p>This is a family D&D adventure designed for maximum fun, engagement, and memorable moments.</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">📋 What Makes This Campaign Special</div>
                <ul>
                    <li><strong>No Death:</strong> Low rolls = funny/embarrassing outcomes, never death</li>
                    <li><strong>Everyone Succeeds Eventually:</strong> The story moves forward regardless of rolls</li>
                    <li><strong>Failures Are Fun:</strong> Bad rolls make the best stories and memories</li>
                    <li><strong>Character Growth:</strong> Skill point progression from 12 → 34-35 points</li>
                    <li><strong>Balanced Economy:</strong> 240 total coins circulating, strategic choices matter</li>
                    <li><strong>36 Unique Cameos:</strong> 12 encounters per character path</li>
                </ul>
            </div>

            <h3>The Story</h3>
            <p>The party's leader has been captured by the Void Tyrant and imprisoned in the Shadowspire Fortress. To free them, three heroes must each walk separate paths and forge three mystical keys:</p>

            <ul>
                <li><strong>⚔️ NICK (The Warrior)</strong> - Crimson Path through 12 battlefields → Key of Power</li>
                <li><strong>💰 CHRISTOPHER (The Treasure Hunter)</strong> - Golden Path through 12 locations → Key of Fortune</li>
                <li><strong>💎 LENA (The Diplomat)</strong> - Silver Path through 12 social encounters → Key of Knowledge</li>
            </ul>

            <h3>Campaign Structure</h3>
            <ul>
                <li>Opening Scene: The Howling Moon Tavern (all together)</li>
                <li>Separate Adventures: 12 cameo encounters each (36 total)</li>
                <li>Random & Spending Encounters throughout</li>
                <li>Midway Reunion: Max & Luna's Talent Show</li>
                <li>Final Reunion: Heroes unite with their keys</li>
                <li>Boss Fight: Confronting the Void Tyrant</li>
                <li>Victory: Saving the leader and celebrating</li>
            </ul>

            <div class="dm-notes">
                <div class="dm-notes-header">⏱️ Expected Play Time</div>
                <p>Approximately 4-6 hours (depending on pace)</p>
            </div>

            <div class="rewards-box">
                <h4>Starting Conditions</h4>
                <ul class="rewards-list">
                    <li>12 Skill Points (to distribute across six stats)</li>
                    <li>12 Coins</li>
                    <li>Character sheet</li>
                    <li>A sense of adventure and friendship!</li>
                </ul>
            </div>
        `
    },

    // ========================================
    // 1: ACT I - THE HOWLING MOON TAVERN
    // ========================================
    {
        id: 1,
        title: "The Howling Moon Tavern",
        type: "Opening Scene",
        characterPath: "all",
        location: "Sunhaven Village",
        content: `
            <div class="dm-notes">
                <div class="dm-notes-header">📋 DM Setup Notes</div>
                <ul>
                    <li>Make sure everyone is comfortable with snacks and drinks</li>
                    <li>Have character sheets ready to distribute during mirror scene</li>
                    <li>Read narration with energy and enthusiasm!</li>
                    <li>Show picture of Max and Luna if available</li>
                </ul>
            </div>

            <div class="narration-box">
                <p>"It is the height of summer, and warm evening breezes carry the scent of wildflowers and adventure through the village of Sunhaven. The most welcoming place for miles is The Howling Moon Tavern, where adventurers gather to share tales of glory, drink refreshing ale, and plan their next great quest under the long twilight of summer nights."</p>

                <p>"Tonight, four legendary heroes sit at a round wooden table near the crackling fireplace."</p>

                <p><em>[Pause, then gesture to yourself]</em></p>

                <p>"You—the charismatic and devilishly handsome leader of this renowned party—have called your three most trusted companions together for a celebration."</p>

                <p><em>[Gesture to each player as you introduce them]</em></p>

                <p>"At your side sits <strong>Christopher</strong>—a cunning ranger and treasure hunter, known across the land for collecting rare artifacts from the highest peaks, the deepest seas, and the endless skies. Tales speak of the time he recovered the Crown of Winds from a floating island, and the day he plunged into the Abyssal Trench to retrieve the Pearl of Depths."</p>

                <p>"Beside him is <strong>Lena</strong>—a brilliant diplomat and investigator whose silver tongue and sharp mind have uncovered secrets that toppled kingdoms and saved lives. Her network of contacts spans every tavern, castle, and guild hall in the realm. She once talked down a dragon, negotiated peace between warring clans, and exposed a conspiracy that reached the highest levels of power."</p>

                <p>"And completing your circle is <strong>Nick</strong>—a battle-hardened warrior whose name is whispered with respect on a hundred battlefields. A soldier who has never abandoned his brothers and sisters in arms. When the line needed to hold at the Battle of Crimson Valley, Nick held it. When the siege seemed impossible to break, Nick broke it."</p>

                <p>"Together, you four have faced dragons, outwitted tyrants, and saved the realm more times than the bards can count. Tonight, you celebrate another year of survival, friendship, and adventure."</p>
            </div>

            <h3>Introducing Max & Luna</h3>

            <div class="narration-box">
                <p>"The Howling Moon Tavern is run by two of the most beloved innkeepers in all the land—<strong>Max</strong>, the silver-and-white Husky with piercing blue eyes and boundless energy, and <strong>Luna</strong>, the clever Aussiedor whose brown and white coat seems to shimmer in the firelight."</p>

                <p>"Max bounds between tables, his tail wagging furiously, delivering tankards of ale with a friendly bark. Luna works behind the bar with remarkable intelligence, somehow managing to pull pints and organize the shelves despite her lack of opposable thumbs."</p>

                <p>"The two of them have welcomed you here countless times, and they greet you now with excited barks and wagging tails."</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">🎭 Interaction Point #1: Meeting the Dogs</div>
                <p>"Max runs up to the table, nearly knocking over a chair in his excitement. He puts his paws up on [pick someone—let's say Christopher]'s lap, tail wagging like crazy, those blue eyes looking up expectantly."</p>
                <p><em>[Give Christopher a moment to react - let him pet Max, say something to him, whatever feels natural]</em></p>
                <p>"Luna barks from behind the bar—a sharp, intelligent sound that somehow conveys actual communication. Through a series of head tilts and paw gestures that you've learned to interpret over your many visits here, you understand she's asking: 'The usual for everyone?'"</p>
                <p><em>[Let players respond - they might call back, nod, give thumbs up, whatever feels right]</em></p>
            </div>

            <h3>Character Creation: The Mirror Moment</h3>

            <div class="narration-box">
                <p>"The heroes are hungry and thirsty after their latest adventure. As each of you walks to the bar to order, you pass by an ornate mirror hanging on the tavern wall. It's an exquisite piece—ancient, with a frame carved from dark wood and inlaid with silver runes."</p>

                <p>"As you glance at your reflection, something magical happens. The mirror doesn't just show your face—it reveals your TRUE self, your ESSENCE as an adventurer. You see not just how you look, but WHO YOU ARE."</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">📋 Character Creation Instructions</div>
                <p><strong>For each player, one at a time:</strong></p>
                <ol>
                    <li>Hand them their character sheet</li>
                    <li>Read the appropriate mirror description (Nick/Christopher/Lena)</li>
                    <li>Have them allocate their 12 starting skill points across the six stats</li>
                    <li>Explain that they start with 12 coins</li>
                    <li>Let them personalize their character</li>
                </ol>
                <p><strong>The Six Stats:</strong> Strength (STR), Dexterity (DEX), Constitution (CON), Intelligence (INT), Wisdom (WIS), Charisma (CHA)</p>
                <p><strong>Modifier = (Stat Points - 8) ÷ 2</strong> (rounded down)</p>
            </div>

            <h4>Nick's Mirror Reflection</h4>
            <div class="narration-box">
                <p>"Nick, as you look into the mirror, you see yourself clad in battle-worn armor, scars telling stories of a hundred fights. Your stance is strong, grounded, ready. This is who you are: THE WARRIOR. Your path is one of strength, courage, and combat mastery."</p>
                <p>"You'll walk the CRIMSON PATH—twelve battlefields, each testing your martial prowess in different ways. At the end awaits the KEY OF POWER."</p>
            </div>

            <h4>Christopher's Mirror Reflection</h4>
            <div class="narration-box">
                <p>"Christopher, when you gaze into the mirror, you see yourself with a pack full of treasures, maps in hand, eyes gleaming with the thrill of discovery. Tools of the trade hang from your belt—lockpicks, compasses, grappling hooks. This is who you are: THE TREASURE HUNTER. Your path is one of exploration, puzzle-solving, and finding what others cannot."</p>
                <p>"You'll walk the GOLDEN PATH—twelve locations filled with riddles, traps, and hidden riches. At the end awaits the KEY OF FORTUNE."</p>
            </div>

            <h4>Lena's Mirror Reflection</h4>
            <div class="narration-box">
                <p>"Lena, as the mirror reveals your essence, you see yourself surrounded by people from all walks of life—nobles, merchants, scholars, warriors—all listening to your words with respect and trust. Scrolls and documents rest in your hands, symbols of agreements made and conflicts resolved. This is who you are: THE DIPLOMAT. Your path is one of words, wisdom, and understanding the hearts of others."</p>
                <p>"You'll walk the SILVER PATH—twelve social encounters where your ability to read people, negotiate, and inspire will be tested. At the end awaits the KEY OF KNOWLEDGE."</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">⏸️ Pause for Character Creation</div>
                <p>Take your time here! Let each player allocate their 12 skill points thoughtfully. Answer questions about stats and modifiers. Make sure everyone understands their character before continuing.</p>
            </div>
        `
    },

    // Continue with more encounters...
    // I'll add a few more key encounters to demonstrate the structure

    // ========================================
    // 2: THE TAKING
    // ========================================
    {
        id: 2,
        title: "The Taking",
        type: "Story Event",
        characterPath: "all",
        content: `
            <div class="narration-box">
                <p>"The celebration is interrupted by a sudden chill that fills the tavern. The fire dims. The laughter dies. Max and Luna both start growling—a deep, warning sound you've never heard from them before."</p>

                <p>"The doors of the tavern SLAM open, though no wind blows. A figure stands in the doorway, cloaked in shadow so thick it seems to absorb the light around it. This is the <strong>VOID TYRANT</strong>—an ancient evil thought long defeated."</p>

                <p>"The Void Tyrant speaks, its voice like grinding stone: 'I have come for your leader. The one who defeated me long ago. They will pay for that insult... trapped forever in my Shadowspire Fortress.'"</p>

                <p>"Before anyone can react, tendrils of shadow reach out, wrapping around your leader. They struggle, but the magic is too strong. In moments, both the Void Tyrant and your leader vanish in a swirl of darkness, leaving only the echo of sinister laughter."</p>

                <p>"Silence fills the tavern. Then Max and Luna approach your table, somehow conveying urgency and determination. They know what must be done."</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">📋 DM Notes</div>
                <ul>
                    <li>Make this moment dramatic! Lower your voice for the Void Tyrant</li>
                    <li>The leader's capture should feel sudden and shocking</li>
                    <li>Players should understand: This is their quest. They MUST rescue their leader</li>
                </ul>
            </div>

            <div class="narration-box">
                <p>"Max and Luna lead you outside, where three paths diverge from the tavern—each glowing with a different colored light. Red. Gold. Silver. Somehow, you all understand: These are the paths to the Shadowspire Fortress. But they cannot be walked together. Each hero must take their own journey, face their own trials, and forge their own key."</p>

                <p>"Only when all three keys are brought together can the fortress be opened and your leader rescued."</p>
            </div>

            <h3>The Quest Begins</h3>
            <p>The three heroes exchange glances. Words aren't needed. You've fought together before. You trust each other with your lives. If the Void Tyrant thinks separating you will make you weaker, it's wrong.</p>
            
            <p>You will walk these paths. You will forge these keys. You will save your leader.</p>

            <p><strong>The adventure truly begins now.</strong></p>
        `
    },

    // ========================================
    // 3: PATH SELECTION
    // ========================================
    {
        id: 3,
        title: "Path Selection",
        type: "Story Event",
        characterPath: "all",
        content: `
            <div class="narration-box">
                <p>"You stand before the three glowing paths, each pulsing with magical energy:"</p>
                <ul>
                    <li><strong>The CRIMSON PATH</strong> - Glowing red, the air around it crackles with the energy of battle. This path calls to warriors, to those who solve problems with strength and steel.</li>
                    <li><strong>The GOLDEN PATH</strong> - Shimmering with the light of treasure and discovery. This path beckons to those who seek, who explore, who find what is hidden.</li>
                    <li><strong>The SILVER PATH</strong> - Gleaming with the light of knowledge and connection. This path speaks to those who value words, wisdom, and understanding.</li>
                </ul>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">📋 Path Assignment</div>
                <p><strong>Nick</strong> steps toward the Crimson Path</p>
                <p><strong>Christopher</strong> steps toward the Golden Path</p>
                <p><strong>Lena</strong> steps toward the Silver Path</p>
                <p>Each path resonates with their essence. This is meant to be.</p>
            </div>

            <div class="narration-box">
                <p>"As each of you approaches your chosen path, Max and Luna appear beside you one final time. They nuzzle against each hero in turn—a gesture of encouragement, of faith. Their eyes seem to say: 'We believe in you. Come back safely. Bring your leader home.'"</p>

                <p>"The three of you share one last look. Nick nods. Christopher grins. Lena smiles. No grand speeches are needed. You know what must be done."</p>

                <p>"You each step onto your path—and the world shifts around you. The tavern fades. Your companions fade. You are alone now, but not afraid."</p>

                <p>"<strong>Your journey begins.</strong>"</p>
            </div>

            <h3>What Happens Next</h3>
            <div class="dm-notes">
                <div class="dm-notes-header">🎭 Running Separate Paths</div>
                <p>From this point forward, you'll be running three separate storylines simultaneously. Here's how to manage it:</p>
                <ul>
                    <li><strong>Rotate between players</strong> - Do one encounter for Nick, then one for Christopher, then one for Lena, then repeat</li>
                    <li><strong>Keep it moving</strong> - Don't let any single encounter drag on too long</li>
                    <li><strong>Build anticipation</strong> - End each encounter on a small cliffhanger when switching to another player</li>
                    <li><strong>Track everything</strong> - Use the sidebar to track coins, skill points, and inventory for each player</li>
                </ul>
                <p>The separate paths continue until the Midway Reunion at Cameo #6!</p>
            </div>
        `
    },

    // ========================================
    // 4: NICK'S CAMEO #12 - THE DIVINE COMEDY ARENA
    // ========================================
    {
        id: 4,
        title: "Nick's Cameo #12: The Divine Comedy Arena",
        type: "Combat Encounter",
        characterPath: "Nick",
        cameoNumber: 12,
        content: `
            <div class="dm-notes">
                <div class="dm-notes-header">📋 Encounter Info</div>
                <p><strong>Theme:</strong> Jesus parody comedy vibe - Heavenly comedian who tests warriors through philosophy and humor</p>
                <p><strong>Starting Status:</strong> 12 coins, 12 skill points (allocated)</p>
                <p><strong>Rewards:</strong> 5 coins, 1 skill point</p>
            </div>

            <div class="narration-box">
                <p>"Nick, the Crimson Path leads you to an enormous colosseum made of gleaming white marble. At its center stands a figure in flowing robes, radiating golden light. He has long hair, a kind smile, and speaks with the energy of a stand-up comedian."</p>

                <p>"'WELCOME, warrior! I'm here to test not just your STRENGTH, but your WISDOM! Because what good is a sword arm if you don't know WHEN to swing it, am I right? Philosophy AND combat—it's gonna be GREAT!'"</p>

                <p>"'Before we begin, let me ask you this: If you could fight ONE battle, which would you choose?'"</p>
            </div>

            <h3>The Philosophical Challenge</h3>
            
            <div class="dm-notes">
                <div class="dm-notes-header">🎭 Interaction Moment - Player Choice</div>
                <p>Present Nick with three choices:</p>
                <ol>
                    <li><strong>Fight to defend someone weaker</strong> - Protecting the helpless from a bully</li>
                    <li><strong>Fight an honorable duel</strong> - Equal combat between warriors</li>
                    <li><strong>Fight an enemy who hurt you</strong> - Revenge against one who wronged you</li>
                </ol>
                <p>Let Nick explain his reasoning. The figure responds with philosophical commentary about Nick's choice, adding humor and wisdom.</p>
            </div>

            <h3>The Combat Challenge</h3>

            <div class="narration-box">
                <p>"'Excellent philosophy! Now let's see if you can BACK IT UP! Face my Champion!'"</p>
                <p>"A spectral warrior appears—an opponent worthy of your skills!"</p>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">⚔️ Combat: Best of 3</div>
                <p><strong>Format:</strong> Nick vs. Champion, best of 3 exchanges</p>
                <p><strong>Dice:</strong> d10 + Strength modifier</p>
                <p><strong>Champion Rolls:</strong> Use fixed values (10, 12, 11) or roll behind screen</p>
                <p><strong>Remember:</strong> Track Natural 20s (+1 coin) and Natural 1s (-1 coin, but NOT in combat!)</p>
            </div>

            <h4>Possible Outcomes:</h4>
            <ul>
                <li><strong>Victory (win 2/3):</strong> "OUTSTANDING! You've proven both wisdom AND strength! You're exactly the kind of warrior this world needs!"</li>
                <li><strong>Defeat (lose 2/3):</strong> "Hey, losing doesn't make you weak! It makes you HUMAN! Well, humanoid. The point is—you tried your best, and that's what matters! Plus, you still move forward. No one said you had to WIN every fight to be a hero!"</li>
            </ul>

            <h3>The Reveal</h3>

            <div class="narration-box">
                <p>"Before you go, let me properly introduce myself..."</p>
                <p><em>[This is where you would show the cameo video if you have one]</em></p>
                <p>"'Go forth, warrior! Eleven more battles await!'"</p>
            </div>

            <div class="rewards-box">
                <h4>🎁 Encounter Rewards</h4>
                <p><strong>Click buttons in the sidebar to apply rewards:</strong></p>
                <ul class="rewards-list">
                    <li>Base: +5 coins</li>
                    <li>Base: +1 skill point</li>
                    <li>Natural 20: +1 coin per occurrence</li>
                    <li>Natural 1 (non-combat): -1 coin per occurrence</li>
                </ul>
            </div>

            <div class="dm-notes">
                <div class="dm-notes-header">📊 Expected Status After</div>
                <p><strong>Nick should now have:</strong></p>
                <ul>
                    <li>Skill Points: 13</li>
                    <li>Coins: ~5 (base) ±1-2 from natural rolls</li>
                </ul>
            </div>
        `
    },

    // Add placeholder for more encounters
    {
        id: 5,
        title: "Christopher's Cameo #12: The Chaotic Challenge Isle",
        type: "Treasure Hunt",
        characterPath: "Christopher",
        cameoNumber: 12,
        content: `
            <div class="narration-box">
                <p>"Christopher, the Golden Path leads you to a floating island filled with impossible contraptions, treasure chests, and a chaotic British voice echoing from everywhere at once..."</p>
            </div>
            <div class="dm-notes">
                <div class="dm-notes-header">📋 Content Extraction In Progress</div>
                <p>This encounter's full content will be extracted from the Word document. For now, use the complete script as reference.</p>
                <p><strong>Theme:</strong> Isaac HP - British TikTok comedian, chaotic challenges</p>
                <p><strong>Rewards:</strong> 5 coins, 1 skill point</p>
            </div>
        `
    },

    {
        id: 6,
        title: "Lena's Cameo #12: The Awkward Lord's Summit",
        type: "Social Encounter",
        characterPath: "Lena",
        cameoNumber: 12,
        content: `
            <div class="narration-box">
                <p>"Lena, the Silver Path brings you to an elegant manor where a nervous lord needs your diplomatic expertise to navigate a crucial summit..."</p>
            </div>
            <div class="dm-notes">
                <div class="dm-notes-header">📋 Content Extraction In Progress</div>
                <p>This encounter's full content will be extracted from the Word document. For now, use the complete script as reference.</p>
                <p><strong>Theme:</strong> Bofem TikTok comedian - Awkward social anxiety humor</p>
                <p><strong>Rewards:</strong> 5 coins, 1 skill point</p>
            </div>
        `
    },

    // Spending Encounter
    {
        id: 7,
        title: "The Shrine - Sacred Crossroads",
        type: "Spending Encounter",
        characterPath: "all",
        content: `
            <div class="dm-notes">
                <div class="dm-notes-header">📋 Encounter Info</div>
                <p><strong>Type:</strong> High risk/high reward spending encounter</p>
                <p><strong>Player Status:</strong> ~5 coins, 13 skill points</p>
            </div>

            <div class="narration-box">
                <p>"As you continue down your path, you come upon a crossroads. At its center stands an ancient shrine—weathered stone carved with divine symbols. A wooden bowl sits at the base, filled with offerings: coins left by travelers seeking blessings."</p>
            </div>

            <h3>Options at the Shrine</h3>

            <div class="dm-notes">
                <div class="dm-notes-header">💰 Player Choices</div>
                <p>Present these options to the player:</p>
            </div>

            <h4>Option 1: Give an Offering (Spend Coins)</h4>
            <ul>
                <li><strong>1 coin:</strong> Small blessing - +1 to next roll</li>
                <li><strong>3 coins:</strong> Medium blessing - +2 to next TWO rolls</li>
                <li><strong>5 coins:</strong> Major blessing - +3 to next THREE rolls</li>
            </ul>

            <h4>Option 2: Pray (Free, No Cost)</h4>
            <p>Roll Wisdom check. DC 10 = Gain minor blessing (reroll one failed roll in next encounter)</p>

            <h4>Option 3: Take Coins from the Shrine (Risky!)</h4>
            <p><strong>Dexterity Check DC 12:</strong></p>
            <ul>
                <li><strong>Success:</strong> Steal 5 coins, but gain "Shrine Thief's Curse" (-2 to all non-combat rolls for next TWO encounters)</li>
                <li><strong>Failure:</strong> Caught! Shrine magic slams you back, lose 2 coins, gain no benefit</li>
            </ul>

            <h4>Option 4: Walk Past (No cost, no benefit)</h4>
            <p>Continue on your journey unchanged.</p>

            <div class="dm-notes">
                <div class="dm-notes-header">🎭 Roleplay This Moment</div>
                <p>Make the shrine feel sacred and meaningful. Let players feel the weight of their choice. There's no "wrong" answer—each choice reveals something about their character.</p>
            </div>

            <div class="rewards-box">
                <h4>After This Encounter</h4>
                <p>Players gain +1 skill point for the moral contemplation, regardless of choice made.</p>
            </div>
        `
    },

    // Add more placeholder encounters for the campaign structure
    {
        id: 8,
        title: "Nick's Cameo #11",
        type: "Combat Encounter",
        characterPath: "Nick",
        cameoNumber: 11,
        content: `<div class="dm-notes"><p>Full content from Word document - refer to complete script.</p></div>`
    },

    {
        id: 9,
        title: "Christopher's Cameo #11",
        type: "Treasure Hunt",
        characterPath: "Christopher",
        cameoNumber: 11,
        content: `<div class="dm-notes"><p>Full content from Word document - refer to complete script.</p></div>`
    },

    {
        id: 10,
        title: "Lena's Cameo #11",
        type: "Social Encounter",
        characterPath: "Lena",
        cameoNumber: 11,
        content: `<div class="dm-notes"><p>Full content from Word document - refer to complete script.</p></div>`
    }
];

// Total encounters will be populated as content is extracted
console.log(`Loaded ${window.encounters.length} encounters`);
