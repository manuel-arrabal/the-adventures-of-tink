// ==========================================
// DATOS DEL JUEGO
// ==========================================

// Estado del jugador
const player = {
    name: "Tink",
    hp: 100,
    maxHp: 100,
    atk: 10,
    def: 5,
    inventory: [
        { name: "Palo Desgastado", bonus: 2, description: "Un palo que encontraste por ahí" },
        { name: "Espada de Madera", bonus: 5, description: "Hecha en el taller del pueblo" }
    ]
};

// Definición de enemigos
const enemies = {
    moblin: {
        name: "Moblin Despistado",
        hp: 40,
        maxHp: 40,
        atk: 8,
        def: 3,
        description: "Un Moblin que parece perdido"
    },
    octorok: {
        name: "Octorok Escupidor",
        hp: 30,
        maxHp: 30,
        atk: 6,
        def: 2,
        description: "Una especie de pulpo que escupe piedras"
    },
    stalfos: {
        name: "Stalfos Bailón",
        hp: 50,
        maxHp: 50,
        atk: 10,
        def: 5,
        description: "Un esqueleto con ritmo"
    }
};

// Estado actual del juego
let gameState = {
    currentScene: 'intro',
    inCombat: false,
    currentEnemy: null,
    combatLog: []
};

// ==========================================
// FUNCIONES DE INTERFAZ
// ==========================================

function updatePlayerStats() {
    document.getElementById('player-hp').textContent = `${player.hp}/${player.maxHp}`;
    document.getElementById('player-atk').textContent = player.atk;
    document.getElementById('player-def').textContent = player.def;
}

function updateInventory() {
    const weaponList = document.getElementById('weapon-list');
    weaponList.innerHTML = '';
    
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

function updateEnemyStats(enemy) {
    document.getElementById('enemy-name').textContent = `👹 ${enemy.name}`;
    document.getElementById('enemy-hp').textContent = `${enemy.hp}/${enemy.maxHp}`;
    document.getElementById('enemy-atk').textContent = enemy.atk;
    document.getElementById('enemy-def').textContent = enemy.def;
}

function showNarrative(text) {
    const narrativeBox = document.getElementById('narrative');
    narrativeBox.innerHTML = `<p class="narrative-text">${text}</p>`;
}

function addToNarrative(text) {
    const narrativeBox = document.getElementById('narrative');
    const newText = document.createElement('p');
    newText.className = 'narrative-text';
    newText.textContent = text;
    narrativeBox.appendChild(newText);
    narrativeBox.scrollTop = narrativeBox.scrollHeight;
}

function clearActionButtons() {
    document.getElementById('action-buttons').innerHTML = '';
}

function createActionButton(text, onClick) {
    const button = document.createElement('button');
    button.className = 'action-btn';
    button.textContent = text;
    button.onclick = onClick;
    document.getElementById('action-buttons').appendChild(button);
}

// ==========================================
// SISTEMA DE COMBATE
// ==========================================

function rollDice(sides = 20) {
    return Math.floor(Math.random() * sides) + 1;
}

function startCombat(enemyType) {
    gameState.inCombat = true;
    gameState.currentEnemy = JSON.parse(JSON.stringify(enemies[enemyType]));
    gameState.combatLog = [];
    
    document.getElementById('combat-panel').classList.remove('hidden');
    updateEnemyStats(gameState.currentEnemy);
    
    const combatLog = document.getElementById('combat-log');
    combatLog.innerHTML = `<p>¡Ha aparecido ${gameState.currentEnemy.name}!</p>`;
    combatLog.innerHTML += `<p>${gameState.currentEnemy.description}</p>`;
    
    showCombatOptions();
}

function showCombatOptions() {
    clearActionButtons();
    
    const weaponContainer = document.getElementById('combat-weapons');
    weaponContainer.innerHTML = '';
    
    player.inventory.forEach(weapon => {
        const weaponBtn = document.createElement('button');
        weaponBtn.className = 'action-btn';
        weaponBtn.textContent = `${weapon.name} (+${weapon.bonus})`;
        weaponBtn.onclick = () => playerAttack(weapon);
        weaponContainer.appendChild(weaponBtn);
    });
}

function addCombatLog(message) {
    const combatLog = document.getElementById('combat-log');
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    combatLog.appendChild(logEntry);
    combatLog.scrollTop = combatLog.scrollHeight;
}

function playerAttack(weapon) {
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
            endCombat(true);
            return;
        }
    } else {
        addCombatLog(`🛡️ ¡Fallas! El enemigo bloqueó tu ataque.`);
    }
    
    setTimeout(() => enemyAttack(), 1000);
}

function enemyAttack() {
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
        updatePlayerStats();
        
        if (player.hp <= 0) {
            endCombat(false);
            return;
        }
    } else {
        addCombatLog(`🛡️ ¡Bloqueaste el ataque!`);
    }
    
    addCombatLog('---');
}

function endCombat(victory) {
    gameState.inCombat = false;
    
    if (victory) {
        addCombatLog(`🎉 ¡Has derrotado a ${gameState.currentEnemy.name}!`);
        
        setTimeout(() => {
            document.getElementById('combat-panel').classList.add('hidden');
            continueStory();
        }, 2000);
    } else {
        addCombatLog(`💀 Has sido derrotado...`);
        
        setTimeout(() => {
            document.getElementById('combat-panel').classList.add('hidden');
            gameOver();
        }, 2000);
    }
}

// ==========================================
// ESCENAS DEL JUEGO
// ==========================================

function startGame() {
    updatePlayerStats();
    updateInventory();
    showIntro();
}

function showIntro() {
    showNarrative(`
        Te despiertas en una playa extraña. No recuerdas cómo llegaste aquí.
        <br><br>
        Una lechuza de aspecto sospechoso te observa desde un árbol cercano.
        <br><br>
        "¡Ey tú! ¡Sí, tú! ¡El del gorro verde! Bienvenido a la Isla del Despertar... 
        o como sea que se llame este sitio. Soy el Búho Sabio, pero mis amigos me llaman 
        simplemente 'El Búho'. ¿Sabes? Por lo de sabio..."
        <br><br>
        Te levantas y te das cuenta de que llevas un palo desgastado en la mano. 
        Qué conveniente.
    `);
    
    clearActionButtons();
    createActionButton('Hablar con el Búho', () => talkToOwl());
    createActionButton('Explorar la playa', () => exploreBeach());
    createActionButton('Buscar comida (tienes hambre)', () => findFood());
}

function talkToOwl() {
    showNarrative(`
        "¡Ah! ¡Hablas! Eso es bueno. Mira, la cosa es así: esta isla está maldita, 
        encantada, o algo por el estilo. Para salir, necesitas despertar al Pez Viento. 
        Sí, un pez. Que duerme. Y hay que despertarlo. No me mires así."
        <br><br>
        "Pero antes, necesitarás una espada de verdad. Y probablemente algunas llaves. 
        Y definitivamente tendrás que luchar contra cosas raras. Ya sabes, lo típico."
        <br><br>
        El Búho te mira expectante.
    `);
    
    clearActionButtons();
    createActionButton('Preguntar por la espada', () => askAboutSword());
    createActionButton('¿Qué cosas raras?', () => askAboutEnemies());
    createActionButton('Ir al pueblo', () => goToVillage());
}

function exploreBeach() {
    showNarrative(`
        Caminas por la playa y encuentras algunos objetos interesantes:
        <br><br>
        - Una concha muy brillante (probablemente no sirva para nada)
        <br>
        - Algunas rupias verdes escondidas entre las rocas (¡20 rupias!)
        <br>
        - Un cartel que dice: "Playa Toronbo - ¡Gracias por visitarnos!"
        <br><br>
        A lo lejos ves humo. Parece que hay un pueblo cerca.
    `);
    
    clearActionButtons();
    createActionButton('Ir hacia el humo', () => goToVillage());
    createActionButton('Seguir explorando', () => encounterMoblin());
}

function findFood() {
    showNarrative(`
        Buscas algo comestible en la playa. Encuentras algunos champiñones sospechosos 
        y decides que quizás no sea buena idea comérselos.
        <br><br>
        De repente, escuchas ruidos extraños detrás de unos arbustos...
    `);
    
    clearActionButtons();
    createActionButton('Investigar los ruidos', () => encounterMoblin());
    createActionButton('Huir al pueblo', () => goToVillage());
}

function askAboutSword() {
    showNarrative(`
        "¡Ah, la espada! Sí, necesitas una espada de verdad. Ese palo que llevas 
        no va a servirte contra los Moblins."
        <br><br>
        "En el pueblo hay un herrero, Malon... o era Marin... o Marina... bueno, 
        alguien con 'M'. Ella podría ayudarte. Pero primero tendrás que demostrar 
        que eres digno. Ya sabes, venciendo enemigos y esas cosas."
    `);
    
    clearActionButtons();
    createActionButton('Ir al pueblo', () => goToVillage());
    createActionButton('Buscar enemigos', () => encounterMoblin());
}

function askAboutEnemies() {
    showNarrative(`
        "¿Cosas raras? Oh, montones. Moblins despistados, Octoroks escupidores, 
        Stalfos bailones... Este sitio es como un zoo, pero más peligroso y menos educativo."
        <br><br>
        "Lo mejor es que te vayas haciendo al combate. ¡Ah! Y recuerda: en el combate, 
        todo se decide con dados. Dados de 20 caras, para ser exactos. Muy épico."
    `);
    
    clearActionButtons();
    createActionButton('Ir al pueblo', () => goToVillage());
    createActionButton('Quiero probar el combate', () => encounterMoblin());
}

function goToVillage() {
    showNarrative(`
        Llegas al Pueblo Mabe. Es pintoresco, con casitas de colores y gente amable.
        <br><br>
        Una chica pelirroja se acerca corriendo. "¡Hola! ¡Eres nuevo en la isla! 
        Soy Marin, ¡encantada! He oído que necesitas ayuda para escapar de aquí."
        <br><br>
        "Mi padre es herrero. Si me ayudas con un problemilla que tenemos con unos 
        Moblins en el bosque, te forjaré una espada de verdad. ¿Qué dices?"
    `);
    
    clearActionButtons();
    createActionButton('Aceptar la misión', () => encounterMoblin());
    createActionButton('Preguntar más sobre la isla', () => learnAboutIsland());
    createActionButton('Visitar la tienda', () => visitShop());
}

function learnAboutIsland() {
    showNarrative(`
        Marin te cuenta la leyenda de la isla:
        <br><br>
        "Dicen que esta isla existe dentro del sueño del Pez Viento. Si el Pez despierta, 
        la isla desaparecerá. Pero también dicen que es la única forma de que quienes 
        estamos aquí podamos... bueno, despertar nosotros también."
        <br><br>
        "Es todo muy confuso y existencial. Por eso preferimos no pensar mucho en ello 
        y dedicarnos a hacer pan y criar cuccos."
    `);
    
    clearActionButtons();
    createActionButton('Aceptar la misión de los Moblins', () => encounterMoblin());
    createActionButton('Visitar la tienda', () => visitShop());
}

function visitShop() {
    showNarrative(`
        Entras en la tienda del pueblo. El tendero te saluda efusivamente.
        <br><br>
        "¡Bienvenido! Tenemos de todo: escudos, pociones, bombas... ¡Ah! Y también 
        vendemos pinceles. No sé por qué, pero la gente los compra."
        <br><br>
        "Por ahora solo puedo ofrecerte una Espada de Madera de repuesto. 
        Ya la tienes, así que... ¿quieres algo más?"
    `);
    
    clearActionButtons();
    createActionButton('Salir de la tienda', () => goToVillage());
    createActionButton('Ir a buscar Moblins', () => encounterMoblin());
}

function encounterMoblin() {
    showNarrative(`
        Te adentras en el Bosque del Dodo y no tardas en encontrar problemas.
        <br><br>
        ¡Un Moblin Despistado aparece de entre los arbustos! Parece confundido, 
        pero eso no lo hace menos peligroso.
        <br><br>
        "¿Tú también estás perdido?" - pregunta el Moblin.
        <br><br>
        Antes de que puedas responder, levanta su lanza. ¡Es hora de luchar!
    `);
    
    clearActionButtons();
    createActionButton('¡Comenzar combate!', () => startCombat('moblin'));
}

function continueStory() {
    const randomReward = Math.random();
    
    if (randomReward > 0.7) {
        player.inventory.push({ 
            name: "Espada de Hierro", 
            bonus: 8, 
            description: "Una espada real, por fin" 
        });
        updateInventory();
        
        showNarrative(`
            ¡Victoria! El Moblin desaparece en una nube de humo.
            <br><br>
            Entre sus pertenencias encuentras una Espada de Hierro. 
            ¡Mucho mejor que tu palo!
            <br><br>
            Marin aparece corriendo. "¡Lo conseguiste! Eres increíble. 
            Creo que realmente podrías despertar al Pez Viento..."
        `);
    } else {
        showNarrative(`
            ¡Victoria! El Moblin huye asustado.
            <br><br>
            Marin aparece. "¡Buen trabajo! Aunque... esperaba que encontraras 
            algo útil. Bueno, al menos ganaste experiencia, ¿no?"
        `);
    }
    
    clearActionButtons();
    createActionButton('Explorar más el bosque', () => encounterOctorok());
    createActionButton('Volver al pueblo', () => returnToVillage());
    createActionButton('Buscar el Templo', () => findTemple());
}

function encounterOctorok() {
    showNarrative(`
        Sigues explorando y llegas a un estanque. De repente, un Octorok 
        salta del agua y te escupe una piedra.
        <br><br>
        "¡Pff pff pff!" - hace sonidos extraños.
        <br><br>
        No parece muy amistoso...
    `);
    
    clearActionButtons();
    createActionButton('¡Luchar!', () => startCombat('octorok'));
}

function returnToVillage() {
    showNarrative(`
        Vuelves al pueblo. Marin te está esperando con una sonrisa.
        <br><br>
        "¡Has demostrado ser un verdadero héroe! Ahora deberías buscar 
        el Templo de la Cola. Allí encontrarás el primer instrumento para 
        despertar al Pez Viento."
        <br><br>
        "Pero ten cuidado... el guardián del templo no es fácil de vencer."
    `);
    
    clearActionButtons();
    createActionButton('Ir al Templo', () => findTemple());
    createActionButton('Entrenar más', () => encounterOctorok());
}

function findTemple() {
    showNarrative(`
        Encuentras el Templo de la Cola. Es una construcción antigua y misteriosa.
        <br><br>
        En la entrada hay una inscripción: "Solo los valientes pueden entrar".
        <br><br>
        Dentro escuchas ruidos inquietantes... ¿Estarás preparado?
        <br><br>
        (Aquí continuaría la aventura con más mazmorras, enemigos y desafíos...)
    `);
    
    clearActionButtons();
    createActionButton('Enfrentar al jefe final (demo)', () => finalBoss());
    createActionButton('Volver al pueblo', () => returnToVillage());
}

function finalBoss() {
    showNarrative(`
        Te adentras en las profundidades del templo y encuentras... 
        ¡un Stalfos Bailón! Está haciendo moonwalk.
        <br><br>
        "¡Por fin alguien con quien bailar... digo, luchar!" - dice mientras 
        hace un giro dramático.
        <br><br>
        Este será tu mayor desafío...
    `);
    
    clearActionButtons();
    createActionButton('¡Batalla final!', () => startCombat('stalfos'));
}

function gameOver() {
    showNarrative(`
        💀 GAME OVER 💀
        <br><br>
        Te has desmayado. El Búho aparece volando.
        <br><br>
        "No pasa nada, esto es solo una demo. En un juego real, perderías 
        algunas rupias y volverías a intentarlo. Pero hey, ¡lo intentaste!"
        <br><br>
        ¿Quieres volver a jugar?
    `);
    
    // Restaurar vida del jugador
    player.hp = player.maxHp;
    updatePlayerStats();
    
    clearActionButtons();
    createActionButton('Reiniciar aventura', () => startGame());
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    startGame();
});
