/**
 * TRACKER.JS - Player Stat Management
 * Handles player stats, inventory, and LocalStorage persistence
 */

// Player state object
const playerState = {
    nick: {
        skillPoints: 12,
        coins: 12,
        inventory: [],
        keyForged: false
    },
    christopher: {
        skillPoints: 12,
        coins: 12,
        inventory: [],
        keyForged: false
    },
    lena: {
        skillPoints: 12,
        coins: 12,
        inventory: [],
        keyForged: false
    }
};

/**
 * Initialize player tracking
 */
function initializeTracking() {
    // Load saved state from localStorage
    loadPlayerState();

    // Update UI with current state
    updateAllPlayerUI();
}

/**
 * Adjust a player's stat (skill points or coins)
 * @param {string} player - Player name (nick, christopher, lena)
 * @param {string} stat - Stat to adjust (skillPoints, coins)
 * @param {number} amount - Amount to adjust by
 */
function adjustStat(player, stat, amount) {
    if (!playerState[player]) {
        console.error('Invalid player:', player);
        return;
    }

    playerState[player][stat] += amount;

    // Ensure stats don't go below 0
    if (playerState[player][stat] < 0) {
        playerState[player][stat] = 0;
    }

    // Update UI
    updatePlayerStat(player, stat);

    // Save state
    savePlayerState();

    // Add visual feedback
    animateStatChange(player, stat);
}

/**
 * Update a specific player's stat display
 * @param {string} player - Player name
 * @param {string} stat - Stat to update
 */
function updatePlayerStat(player, stat) {
    const element = document.getElementById(`${player}-${stat}`);
    if (element) {
        element.textContent = playerState[player][stat];
    }
}

/**
 * Update all player UIs
 */
function updateAllPlayerUI() {
    Object.keys(playerState).forEach(player => {
        updatePlayerStat(player, 'skillPoints');
        updatePlayerStat(player, 'coins');
        updateInventoryUI(player);
        updateKeyStatus(player);
    });
}

/**
 * Add an item to a player's inventory
 * @param {string} player - Player name
 */
function addItem(player) {
    const itemName = prompt('Enter item name:');
    if (!itemName || itemName.trim() === '') {
        return;
    }

    playerState[player].inventory.push(itemName.trim());
    updateInventoryUI(player);
    savePlayerState();
}

/**
 * Remove an item from a player's inventory
 * @param {string} player - Player name
 * @param {number} index - Index of item to remove
 */
function removeItem(player, index) {
    if (confirm('Remove this item?')) {
        playerState[player].inventory.splice(index, 1);
        updateInventoryUI(player);
        savePlayerState();
    }
}

/**
 * Update a player's inventory display
 * @param {string} player - Player name
 */
function updateInventoryUI(player) {
    const inventoryList = document.getElementById(`${player}-inventory`);
    if (!inventoryList) return;

    inventoryList.innerHTML = '';

    if (playerState[player].inventory.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = 'No items';
        emptyItem.style.opacity = '0.5';
        emptyItem.style.fontStyle = 'italic';
        inventoryList.appendChild(emptyItem);
        return;
    }

    playerState[player].inventory.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item}</span>
            <span class="remove-item" onclick="removeItem('${player}', ${index})">✕</span>
        `;
        inventoryList.appendChild(li);
    });
}

/**
 * Update a player's key status
 * @param {string} player - Player name
 */
function updateKeyStatus(player) {
    const keyElement = document.getElementById(`${player}-key`);
    if (!keyElement) return;

    if (playerState[player].keyForged) {
        keyElement.textContent = '✓ Key Forged';
        keyElement.style.color = 'var(--accent-gold)';
        keyElement.style.fontWeight = '600';
    } else {
        keyElement.textContent = 'Not Forged';
        keyElement.style.color = 'var(--text-muted)';
        keyElement.style.fontStyle = 'italic';
    }
}

/**
 * Forge a player's key (called from encounter)
 * @param {string} player - Player name
 */
function forgeKey(player) {
    playerState[player].keyForged = true;
    updateKeyStatus(player);
    savePlayerState();
}

/**
 * Animate stat change for visual feedback
 * @param {string} player - Player name
 * @param {string} stat - Stat that changed
 */
function animateStatChange(player, stat) {
    const element = document.getElementById(`${player}-${stat}`);
    if (!element) return;

    element.style.transform = 'scale(1.2)';
    element.style.transition = 'transform 0.2s ease';

    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Apply rewards to a player (used from encounters)
 * @param {string} player - Player name
 * @param {object} rewards - Rewards object {coins, skillPoints, items[]}
 */
function applyRewards(player, rewards) {
    if (rewards.coins) {
        adjustStat(player, 'coins', rewards.coins);
    }

    if (rewards.skillPoints) {
        adjustStat(player, 'skillPoints', rewards.skillPoints);
    }

    if (rewards.items && Array.isArray(rewards.items)) {
        rewards.items.forEach(item => {
            playerState[player].inventory.push(item);
        });
        updateInventoryUI(player);
    }

    savePlayerState();
}

/**
 * Apply rewards to all players
 * @param {object} rewards - Rewards object
 */
function applyRewardsAll(rewards) {
    applyRewards('nick', rewards);
    applyRewards('christopher', rewards);
    applyRewards('lena', rewards);
}

/**
 * Save player state to localStorage
 */
function savePlayerState() {
    try {
        localStorage.setItem('shadowspire_player_state', JSON.stringify(playerState));
    } catch (error) {
        console.error('Error saving player state:', error);
    }
}

/**
 * Load player state from localStorage
 */
function loadPlayerState() {
    try {
        const saved = localStorage.getItem('shadowspire_player_state');
        if (saved) {
            const loadedState = JSON.parse(saved);
            Object.assign(playerState, loadedState);
        }
    } catch (error) {
        console.error('Error loading player state:', error);
    }
}

/**
 * Reset the entire campaign
 */
function resetCampaign() {
    const confirmReset = confirm(
        'Are you sure you want to reset the entire campaign?\n\n' +
        'This will:\n' +
        '- Reset all player stats to starting values\n' +
        '- Clear all inventories\n' +
        '- Reset key status\n' +
        '- Reset campaign progress\n\n' +
        'This action cannot be undone!'
    );

    if (!confirmReset) {
        return;
    }

    // Reset player state
    Object.keys(playerState).forEach(player => {
        playerState[player] = {
            skillPoints: 12,
            coins: 12,
            inventory: [],
            keyForged: false
        };
    });

    // Reset encounter progress (from navigation.js)
    if (typeof resetCampaignProgress === 'function') {
        resetCampaignProgress();
    }

    // Update UI
    updateAllPlayerUI();

    // Clear localStorage
    localStorage.removeItem('shadowspire_player_state');
    localStorage.removeItem('shadowspire_campaign_progress');

    alert('Campaign has been reset to the beginning!');
}

/**
 * Toggle sidebar visibility
 */
function toggleSidebar() {
    const sidebar = document.getElementById('playerSidebar');
    const toggleBtn = document.getElementById('toggleSidebar');

    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.textContent = '▶';
    } else {
        toggleBtn.textContent = '◀';
    }
}

// Initialize tracking when page loads
document.addEventListener('DOMContentLoaded', initializeTracking);
