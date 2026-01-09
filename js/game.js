// ==========================================
// JUEGO PRINCIPAL - Las Aventuras de Tink
// ==========================================

// Importar datos
import { weapons } from './data/weapons.js';
import { specialItems, musicInstruments, ocarinaSongs } from './data/items.js';
import { enemies } from './data/enemies.js';

// Importar sistemas
import { updatePlayerStats, updateInventory } from './systems/ui.js';
import { startCombat } from './systems/combat.js';
import * as inventory from './systems/inventory.js';

// Importar escenas
import { showIntro } from './scenes/intro.js';
import { goToVillage } from './scenes/village.js';
import { exploreWorld } from './scenes/exploration.js';
import { gameOver } from './scenes/intro.js';

// Estado del jugador
export const player = {
    name: "Tink",
    hp: 100,
    maxHp: 100,
    atk: 10,
    def: 5,
    inventory: [
        { name: "Palo Desgastado", bonus: 2, description: "Un palo que encontraste por ahí" }
    ],
    items: [],
    rupias: 50,
    musicInstruments: [],
    hasShield: false,
    hasOcarina: false
};

// Estado del juego
export const gameState = {
    currentScene: 'intro',
    inCombat: false,
    currentEnemy: null,
    combatLog: [],
    dungeonsCompleted: 0,
    flags: {
        hasMetMarin: false,
        hasMetTarin: false,
        hasMetOwl: false,
        rescuedBowWow: false,
        learnedBalada: false,
        learnedMambo: false,
        learnedVital: false
    }
};

// Exportar datos para que las escenas puedan acceder
export { weapons, specialItems, musicInstruments, ocarinaSongs, enemies };

// Exportar sistemas
export { startCombat, inventory };

// ==========================================
// INICIALIZACIÓN DEL JUEGO
// ==========================================

function initGame() {
    console.log("🎮 Iniciando Las Aventuras de Tink...");
    updatePlayerStats(player);
    updateInventory(player);
    showIntro();
}

// Iniciar el juego cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});
