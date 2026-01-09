// Sistema de actualización de la interfaz de usuario

export function updatePlayerStats(player) {
    document.getElementById('player-hp').textContent = `${player.hp}/${player.maxHp}`;
    document.getElementById('player-atk').textContent = player.atk;
    document.getElementById('player-def').textContent = player.def;
}

export function updateInventory(player) {
    const weaponList = document.getElementById('weapon-list');
    weaponList.innerHTML = '';
    
    // Mostrar armas
    if (player.inventory.length > 0) {
        const weaponHeader = document.createElement('div');
        weaponHeader.style.fontWeight = 'bold';
        weaponHeader.style.marginBottom = '8px';
        weaponHeader.textContent = '⚔️ Armas:';
        weaponList.appendChild(weaponHeader);
        
        player.inventory.forEach(weapon => {
            const weaponItem = document.createElement('div');
            weaponItem.className = 'weapon-item';
            weaponItem.innerHTML = `
                <strong>${weapon.name}</strong> (+${weapon.bonus} ATK)
                <br><small>${weapon.description}</small>
            `;
            weaponList.appendChild(weaponItem);
        });
    }
    
    // Mostrar rupias
    const rupiasItem = document.createElement('div');
    rupiasItem.className = 'weapon-item';
    rupiasItem.style.backgroundColor = '#9bbc0f';
    rupiasItem.style.fontWeight = 'bold';
    rupiasItem.innerHTML = `💰 Rupias: ${player.rupias}`;
    weaponList.appendChild(rupiasItem);
    
    // Mostrar instrumentos musicales
    if (player.musicInstruments.length > 0) {
        const musicHeader = document.createElement('div');
        musicHeader.style.fontWeight = 'bold';
        musicHeader.style.marginTop = '8px';
        musicHeader.style.marginBottom = '8px';
        musicHeader.textContent = `🎵 Instrumentos (${player.musicInstruments.length}/8):`;
        weaponList.appendChild(musicHeader);
        
        player.musicInstruments.forEach(instrument => {
            const musicItem = document.createElement('div');
            musicItem.className = 'weapon-item';
            musicItem.style.fontSize = '11px';
            musicItem.innerHTML = `<small>${instrument.name}</small>`;
            weaponList.appendChild(musicItem);
        });
    }
}

export function updateEnemyStats(enemy) {
    document.getElementById('enemy-name').textContent = `👹 ${enemy.name}`;
    document.getElementById('enemy-hp').textContent = `${enemy.hp}/${enemy.maxHp}`;
    document.getElementById('enemy-atk').textContent = enemy.atk;
    document.getElementById('enemy-def').textContent = enemy.def;
}

export function showNarrative(text) {
    const narrativeBox = document.getElementById('narrative');
    narrativeBox.innerHTML = `<p class="narrative-text">${text}</p>`;
}

export function addToNarrative(text) {
    const narrativeBox = document.getElementById('narrative');
    const newText = document.createElement('p');
    newText.className = 'narrative-text';
    newText.textContent = text;
    narrativeBox.appendChild(newText);
    narrativeBox.scrollTop = narrativeBox.scrollHeight;
}

export function clearActionButtons() {
    document.getElementById('action-buttons').innerHTML = '';
}

export function createActionButton(text, onClick) {
    const button = document.createElement('button');
    button.className = 'action-btn';
    button.textContent = text;
    button.onclick = onClick;
    document.getElementById('action-buttons').appendChild(button);
}

export function showCombatPanel() {
    document.getElementById('combat-panel').classList.remove('hidden');
}

export function hideCombatPanel() {
    document.getElementById('combat-panel').classList.add('hidden');
}

export function addCombatLog(message) {
    const combatLog = document.getElementById('combat-log');
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    combatLog.appendChild(logEntry);
    combatLog.scrollTop = combatLog.scrollHeight;
}
