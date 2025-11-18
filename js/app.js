/**
 * APP.JS - Main Application Controller
 * Coordinates all systems and initializes the campaign
 */

// Application state
const app = {
    initialized: false,
    version: '1.0.0'
};

/**
 * Initialize the entire application
 */
function initializeApp() {
    console.log('🎲 Initializing The Shadowspire Campaign DM Guide...');

    // Check if encounters data is loaded
    if (!window.encounters || window.encounters.length === 0) {
        console.error('❌ Encounters data not loaded!');
        displayError('Could not load campaign data. Please refresh the page.');
        return;
    }

    console.log(`✅ Loaded ${window.encounters.length} encounters`);

    // Initialize all systems
    try {
        // Player tracking is initialized by tracker.js
        console.log('✅ Player tracking initialized');

        // Navigation is initialized by navigation.js
        console.log('✅ Navigation system initialized');

        app.initialized = true;
        console.log('🎉 Campaign ready to begin!');

        // Show welcome message in console
        console.log(`
╔════════════════════════════════════════════════╗
║     THE SHADOWSPIRE CAMPAIGN - DM GUIDE        ║
║                                                ║
║  A Family D&D Adventure                        ║
║  Created for: Nick, Christopher, and Lena      ║
║                                                ║
║  🎲 Use the sidebar to track player stats      ║
║  📖 Read narration boxes aloud to players      ║
║  📋 DM notes are for your eyes only            ║
║  ⚔️  Navigate with Previous/Next buttons       ║
║                                                ║
║  Good luck, Dungeon Master!                    ║
╚════════════════════════════════════════════════╝
        `);

    } catch (error) {
        console.error('❌ Initialization error:', error);
        displayError('An error occurred during initialization.');
    }
}

/**
 * Display an error message to the user
 * @param {string} message - Error message
 */
function displayError(message) {
    const contentElement = document.getElementById('encounterContent');
    if (contentElement) {
        contentElement.innerHTML = `
            <div style="background: var(--accent-crimson); color: var(--text-primary); padding: var(--spacing-md); border-radius: var(--radius-md);">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
                <p>Please check the browser console for more details.</p>
            </div>
        `;
    }
}

/**
 * Helper function to format HTML content safely
 * @param {string} html - HTML string
 * @returns {string} Formatted HTML
 */
function formatContent(html) {
    // This could be expanded to add additional formatting
    return html;
}

/**
 * Helper function to apply encounter-specific styling
 * @param {object} encounter - Encounter object
 */
function applyEncounterStyling(encounter) {
    const typeElement = document.getElementById('encounterType');
    if (!typeElement) return;

    // Remove any existing type classes
    typeElement.className = 'encounter-type';

    // Add type-specific class
    const typeClass = encounter.type.toLowerCase().replace(/\s+/g, '-');
    typeElement.classList.add(typeClass);

    // Set custom color based on encounter type
    const typeColors = {
        'introduction': 'var(--accent-gold)',
        'opening-scene': 'var(--accent-amber)',
        'story-event': 'var(--accent-silver)',
        'combat-encounter': 'var(--crimson-path)',
        'treasure-hunt': 'var(--golden-path)',
        'social-encounter': 'var(--silver-path)',
        'spending-encounter': 'var(--accent-gold)',
        'random-encounter': 'var(--accent-amber)',
        'meal-encounter': 'var(--accent-amber)',
        'midway-reunion': 'var(--accent-gold)',
        'boss-fight': 'var(--accent-crimson)',
        'victory': 'var(--accent-gold)'
    };

    const bgColor = typeColors[typeClass] || 'var(--accent-crimson)';
    typeElement.style.background = bgColor;
}

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Don't trigger if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    switch(e.key) {
        case 'ArrowLeft':
            previousEncounter();
            break;
        case 'ArrowRight':
            nextEncounter();
            break;
        case ' ':
            e.preventDefault();
            const checkbox = document.getElementById('completeCheckbox');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                markComplete();
            }
            break;
    }
});

/**
 * Print functionality
 */
function printEncounter() {
    window.print();
}

/**
 * Export campaign progress
 */
function exportProgress() {
    const data = {
        playerState: playerState,
        campaignProgress: campaignProgress,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shadowspire-campaign-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    alert('Campaign progress exported!');
}

/**
 * Import campaign progress
 */
function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);

                if (confirm('Import saved campaign progress? This will overwrite current progress.')) {
                    // Restore player state
                    if (data.playerState) {
                        Object.assign(playerState, data.playerState);
                        updateAllPlayerUI();
                        savePlayerState();
                    }

                    // Restore campaign progress
                    if (data.campaignProgress) {
                        Object.assign(campaignProgress, data.campaignProgress);
                        saveCampaignProgress();
                        displayEncounter(campaignProgress.currentEncounterIndex);
                    }

                    alert('Campaign progress imported successfully!');
                }
            } catch (error) {
                alert('Error importing file: ' + error.message);
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all scripts are loaded
    setTimeout(initializeApp, 100);
});

// Log any errors
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

console.log('📜 app.js loaded');
