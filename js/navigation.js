/**
 * NAVIGATION.JS - Encounter Navigation & Progress Tracking
 * Handles moving between encounters and tracking campaign progress
 */

// Campaign progress state
let campaignProgress = {
    currentEncounterIndex: 0,
    completedEncounters: [],
    totalEncounters: 0
};

// This will be populated from encounters data
let encountersData = [];

/**
 * Initialize navigation system
 */
function initializeNavigation() {
    // Load saved progress
    loadCampaignProgress();

    // Load encounters data (this will be populated by app.js)
    if (window.encounters && window.encounters.length > 0) {
        encountersData = window.encounters;
        campaignProgress.totalEncounters = encountersData.length;
    }

    // Display current encounter
    displayEncounter(campaignProgress.currentEncounterIndex);

    // Update navigation buttons
    updateNavigationButtons();

    // Update progress bar
    updateProgressBar();
}

/**
 * Display an encounter
 * @param {number} index - Encounter index
 */
function displayEncounter(index) {
    if (!encountersData || encountersData.length === 0) {
        console.error('No encounters data loaded');
        return;
    }

    if (index < 0 || index >= encountersData.length) {
        console.error('Invalid encounter index:', index);
        return;
    }

    const encounter = encountersData[index];
    campaignProgress.currentEncounterIndex = index;

    // Update encounter type badge
    const typeElement = document.getElementById('encounterType');
    if (typeElement) {
        typeElement.textContent = encounter.type || 'Encounter';
        typeElement.className = 'encounter-type';

        // Add specific class based on type
        if (encounter.type) {
            typeElement.classList.add(encounter.type.toLowerCase().replace(/\s+/g, '-'));
        }
    }

    // Update encounter title
    const titleElement = document.getElementById('encounterTitle');
    if (titleElement) {
        titleElement.textContent = encounter.title || 'Untitled Encounter';
    }

    // Update encounter meta information
    const metaElement = document.getElementById('encounterMeta');
    if (metaElement) {
        let metaHTML = '';

        if (encounter.characterPath && encounter.characterPath !== 'all') {
            metaHTML += `<span class="meta-tag">Character: ${encounter.characterPath}</span>`;
        }

        if (encounter.location) {
            metaHTML += `<span class="meta-tag">Location: ${encounter.location}</span>`;
        }

        metaElement.innerHTML = metaHTML;
    }

    // Update encounter content
    const contentElement = document.getElementById('encounterContent');
    if (contentElement) {
        contentElement.innerHTML = encounter.content || '<p>No content available for this encounter.</p>';
    }

    // Update complete checkbox
    const checkbox = document.getElementById('completeCheckbox');
    if (checkbox) {
        checkbox.checked = campaignProgress.completedEncounters.includes(index);
    }

    // Update navigation buttons
    updateNavigationButtons();

    // Update progress bar
    updateProgressBar();

    // Save progress
    saveCampaignProgress();

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Go to next encounter
 */
function nextEncounter() {
    const nextIndex = campaignProgress.currentEncounterIndex + 1;
    if (nextIndex < encountersData.length) {
        displayEncounter(nextIndex);
    }
}

/**
 * Go to previous encounter
 */
function previousEncounter() {
    const prevIndex = campaignProgress.currentEncounterIndex - 1;
    if (prevIndex >= 0) {
        displayEncounter(prevIndex);
    }
}

/**
 * Mark current encounter as complete
 */
function markComplete() {
    const checkbox = document.getElementById('completeCheckbox');
    const currentIndex = campaignProgress.currentEncounterIndex;

    if (checkbox.checked) {
        // Add to completed if not already there
        if (!campaignProgress.completedEncounters.includes(currentIndex)) {
            campaignProgress.completedEncounters.push(currentIndex);
        }
    } else {
        // Remove from completed
        const index = campaignProgress.completedEncounters.indexOf(currentIndex);
        if (index > -1) {
            campaignProgress.completedEncounters.splice(index, 1);
        }
    }

    // Update progress bar
    updateProgressBar();

    // Save progress
    saveCampaignProgress();
}

/**
 * Jump to a specific section
 */
function jumpToSection() {
    const select = document.getElementById('sectionJump');
    const selectedIndex = parseInt(select.value);

    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < encountersData.length) {
        displayEncounter(selectedIndex);
    }
}

/**
 * Update navigation button states
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.disabled = campaignProgress.currentEncounterIndex === 0;
    }

    if (nextBtn) {
        nextBtn.disabled = campaignProgress.currentEncounterIndex >= encountersData.length - 1;
    }
}

/**
 * Update progress bar
 */
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (!encountersData || encountersData.length === 0) return;

    const completed = campaignProgress.completedEncounters.length;
    const total = encountersData.length;
    const percentage = (completed / total) * 100;

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    if (progressText) {
        const currentNum = campaignProgress.currentEncounterIndex + 1;
        progressText.textContent = `Encounter ${currentNum} of ${total} | ${completed} Completed (${Math.round(percentage)}%)`;
    }
}

/**
 * Save campaign progress to localStorage
 */
function saveCampaignProgress() {
    try {
        localStorage.setItem('shadowspire_campaign_progress', JSON.stringify(campaignProgress));
    } catch (error) {
        console.error('Error saving campaign progress:', error);
    }
}

/**
 * Load campaign progress from localStorage
 */
function loadCampaignProgress() {
    try {
        const saved = localStorage.getItem('shadowspire_campaign_progress');
        if (saved) {
            const loadedProgress = JSON.parse(saved);
            Object.assign(campaignProgress, loadedProgress);
        }
    } catch (error) {
        console.error('Error loading campaign progress:', error);
    }
}

/**
 * Reset campaign progress (called from tracker.js)
 */
function resetCampaignProgress() {
    campaignProgress = {
        currentEncounterIndex: 0,
        completedEncounters: [],
        totalEncounters: encountersData.length
    };

    saveCampaignProgress();
    displayEncounter(0);
    updateProgressBar();
}

// Initialize navigation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait for encounters data to be loaded
    setTimeout(initializeNavigation, 100);
});
