import { updateEnemyStats, showCombatPanel, hideCombatPanel, addCombatLog, clearActionButtons, updatePlayerStats } from './ui.js';

// Sistema de combate por turnos

export function rollDice(sides = 20) {
    return Math.floor(Math.random() * sides) + 1;
}

export function startCombat(enemyType, enemies, player, gameState, onVictory, onDefeat) {
    gameState.inCombat = true;
    gameState.currentEnemy = JSON.parse(JSON.stringify(enemies[enemyType]));
    gameState.combatLog = [];
    
    showCombatPanel();
    updateEnemyStats(gameState.currentEnemy);
    
    const combatLog = document.getElementById('combat-log');
    combatLog.innerHTML = `<p>¡Ha aparecido ${gameState.currentEnemy.name}!</p>`;
    combatLog.innerHTML += `<p>${gameState.currentEnemy.description}</p>`;
    
    if (gameState.currentEnemy.quote) {
        combatLog.innerHTML += `<p><em>"${gameState.currentEnemy.quote}"</em></p>`;
    }
    
    showCombatOptions(player, gameState, onVictory, onDefeat);
}

export function showCombatOptions(player, gameState, onVictory, onDefeat) {
    clearActionButtons();
    
    const weaponContainer = document.getElementById('combat-weapons');
    weaponContainer.innerHTML = '';
    
    player.inventory.forEach(weapon => {
        const weaponBtn = document.createElement('button');
        weaponBtn.className = 'action-btn';
        weaponBtn.textContent = `${weapon.name} (+${weapon.bonus})`;
        weaponBtn.onclick = () => playerAttack(weapon, player, gameState, onVictory, onDefeat);
        weaponContainer.appendChild(weaponBtn);
    });
}

export function playerAttack(weapon, player, gameState, onVictory, onDefeat) {
    const enemy = gameState.currentEnemy;
    
    const roll = rollDice(20);
    const totalAttack = roll + player.atk + weapon.bonus;
    
    addCombatLog(`🎲 Tink lanza el dado: ${roll}`);
    addCombatLog(`⚔️ Ataque total: ${totalAttack} (${roll} + ${player.atk} + ${weapon.bonus})`);
    
    if (totalAttack > enemy.def) {
        const damage = totalAttack - enemy.def;
        enemy.hp = Math.max(0, enemy.hp - damage);
        addCombatLog(`💥 ¡Impacto! Causas ${damage} de daño a ${enemy.name}`);
        updateEnemyStats(enemy);
        
        if (enemy.hp <= 0) {
            endCombat(true, player, gameState, onVictory, onDefeat);
            return;
        }
    } else {
        addCombatLog(`🛡️ ¡Fallas! El enemigo bloqueó tu ataque.`);
    }
    
    setTimeout(() => enemyAttack(player, gameState, onVictory, onDefeat), 1000);
}

export function enemyAttack(player, gameState, onVictory, onDefeat) {
    const enemy = gameState.currentEnemy;
    
    const roll = rollDice(20);
    const totalAttack = roll + enemy.atk;
    
    addCombatLog(`👹 ${enemy.name} contraataca...`);
    addCombatLog(`🎲 Enemigo lanza el dado: ${roll}`);
    addCombatLog(`⚔️ Ataque total: ${totalAttack} (${roll} + ${enemy.atk})`);
    
    if (totalAttack > player.def) {
        const damage = totalAttack - player.def;
        player.hp = Math.max(0, player.hp - damage);
        addCombatLog(`💔 ¡Recibes ${damage} de daño!`);
        updatePlayerStats(player);
        
        if (player.hp <= 0) {
            endCombat(false, player, gameState, onVictory, onDefeat);
            return;
        }
    } else {
        addCombatLog(`🛡️ ¡Bloqueaste el ataque!`);
    }
    
    addCombatLog('---');
}

export function endCombat(victory, player, gameState, onVictory, onDefeat) {
    gameState.inCombat = false;
    
    if (victory) {
        const enemy = gameState.currentEnemy;
        addCombatLog(`🎉 ¡Has derrotado a ${enemy.name}!`);
        
        // Dar recompensas
        player.rupias += enemy.reward.rupias;
        addCombatLog(`💰 Has ganado ${enemy.reward.rupias} rupias!`);
        
        if (enemy.reward.item) {
            player.inventory.push(enemy.reward.item);
            addCombatLog(`🎁 ¡Has obtenido: ${enemy.reward.item.name}!`);
        }
        
        setTimeout(() => {
            hideCombatPanel();
            if (onVictory) onVictory();
        }, 2000);
    } else {
        addCombatLog(`💀 Has sido derrotado...`);
        
        setTimeout(() => {
            hideCombatPanel();
            if (onDefeat) onDefeat();
        }, 2000);
    }
}
