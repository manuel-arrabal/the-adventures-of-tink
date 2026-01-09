import { showNarrative, clearActionButtons, createActionButton, updatePlayerStats } from '../systems/ui.js';
import { player, gameState, weapons } from '../game.js';
import { goToVillage } from './village.js';
import { exploreBeach, findFood } from './exploration.js';

export function showIntro() {
    gameState.currentScene = 'intro';
    
    showNarrative(`
        Te despiertas en una playa extraña. No recuerdas cómo llegaste aquí.
        <br><br>
        Lo último que recuerdas es una tormenta terrible... tu barco se hundió
        y luego... nada. Solo oscuridad.
        <br><br>
        Una lechuza de aspecto sospechoso te observa desde un árbol cercano.
        <br><br>
        "¡Ey tú! ¡Sí, tú! ¡El del gorro verde! Bienvenido a la Isla del Despertar... 
        o como sea que se llame este sitio. Soy el Búho Sabio, pero mis amigos me llaman 
        simplemente 'El Búho'. ¿Sabes? Por lo de sabio..."
        <br><br>
        Te levantas y te das cuenta de que llevas un ${player.inventory[0].name} en la mano. 
        Qué conveniente.
    `);
    
    gameState.flags.hasMetOwl = true;
    
    clearActionButtons();
    createActionButton('Hablar con el Búho', () => talkToOwl());
    createActionButton('Explorar la playa Toronbo', () => exploreBeach());
    createActionButton('Buscar comida (tienes hambre)', () => findFood());
}

function talkToOwl() {
    showNarrative(`
        "¡Ah! ¡Hablas! Eso es bueno. Mira, la cosa es así: esta isla está maldita, 
        encantada, o algo por el estilo. Para salir, necesitas despertar al Pez Viento. 
        Sí, un pez. Que duerme. Y hay que despertarlo. No me mires así."
        <br><br>
        "Pero antes, necesitarás reunir los 8 Instrumentos Musicales. Ya sabes: 
        Violonchelo, Cuerno de Caracola, Campana, Arpa, Marimba, Triángulo, Órgano y Tambor. 
        Como una orquesta, pero más épica."
        <br><br>
        "Y para conseguirlos tendrás que explorar 8 mazmorras. Y luchar contra jefes. 
        Y resolver puzzles. Ya sabes, lo típico."
        <br><br>
        El Búho te mira expectante.
    `);
    
    clearActionButtons();
    createActionButton('Preguntar por las mazmorras', () => askAboutDungeons());
    createActionButton('¿Y si no quiero despertar al pez?', () => askAboutAlternative());
    createActionButton('Ir al pueblo Mabe', () => goToVillage());
}

function askAboutDungeons() {
    showNarrative(`
        "¡Ah, las mazmorras! Déjame ver..." El búho saca unas gafas de lectura.
        <br><br>
        "1. Cueva Tail (con T) - Donde conseguirás el Violonchelo<br>
        2. Gruta del Cántaro - Hogar del Cuerno de Caracola<br>
        3. Caverna de la Llave - Allí está la Campana del Mar<br>
        4. Túnel Abisal - Contiene el Arpa de las Olas WiFi<br>
        5. Fauces del Siluro - Guarda la Marimba del Viento<br>
        6. Templo del Rostro - Hogar del Triángulo de Coral<br>
        7. Torre del Águila - Donde está el Órgano de la Calma<br>
        8. Roca de la Tortuga - El Tambor del Trueno te espera"
        <br><br>
        "Cada una tiene su llave especial. Y monstruos. Muchos monstruos."
    `);
    
    clearActionButtons();
    createActionButton('Suena peligroso pero emocionante', () => goToVillage());
    createActionButton('¿Hay algún atajo?', () => askAboutShortcut());
}

function askAboutAlternative() {
    showNarrative(`
        "¿Qué si puedes quedarte en la isla?" El búho te mira confundido.
        <br><br>
        "Bueno, técnicamente sí. Podrías dedicarte a pescar, cultivar el huerto, 
        coleccionar caracolas, jugar al minijuego de la garra..."
        <br><br>
        "Pero seamos sinceros: estás en un RPG de acción y aventura. 
        La pesca está bien, pero derrotar jefes épicos está mejor."
        <br><br>
        El búho tiene un punto.
    `);
    
    clearActionButtons();
    createActionButton('Tienes razón, ¡a la aventura!', () => goToVillage());
    createActionButton('Pero primero, explorar la playa', () => exploreBeach());
}

function askAboutShortcut() {
    showNarrative(`
        El búho se ríe. "¿Un atajo? ¡Jajaja! Esto es un Zelda, chaval. 
        Aquí no hay atajos."
        <br><br>
        "Bueno, técnicamente puedes usar el Mambo de Manbo para teletransportarte, 
        pero primero tienes que aprenderlo de Manbo. Y Manbo vive en una cueva. 
        Y la cueva está... ya sabes, lejos."
        <br><br>
        "Así que no, no hay atajos. ¡Pero piensa en la EXPERIENCIA!"
    `);
    
    clearActionButtons();
    createActionButton('Está bien, lo haré de la forma difícil', () => goToVillage());
}

export function gameOver() {
    showNarrative(`
        💀 GAME OVER 💀
        <br><br>
        Te has desmayado. El Búho aparece volando.
        <br><br>
        "No pasa nada, esto es parte del aprendizaje. En un juego real, 
        perderías algunas rupias y volverías desde tu último punto de guardado. 
        Pero hey, ¡lo intentaste!"
        <br><br>
        "Recuerda: el éxito está en levantarse una vez más de las que caes. 
        O algo así decía el refranero de la isla."
        <br><br>
        ¿Quieres volver a jugar?
    `);
    
    // Restaurar vida del jugador
    player.hp = player.maxHp;
    updatePlayerStats(player);
    
    clearActionButtons();
    createActionButton('Reiniciar aventura', () => {
        player.hp = player.maxHp;
        updatePlayerStats(player);
        showIntro();
    });
    createActionButton('Volver al pueblo (vida restaurada)', () => {
        player.hp = player.maxHp;
        updatePlayerStats(player);
        goToVillage();
    });
}
