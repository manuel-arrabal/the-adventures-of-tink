import { weapons } from './weapons.js';

// Definición de enemigos
export const enemies = {
    // Enemigos básicos
    moblin: {
        name: "Moblin Despistado",
        hp: 40,
        maxHp: 40,
        atk: 8,
        def: 3,
        description: "Un Moblin que parece perdido",
        reward: { rupias: 20, item: null },
        quote: "¿Tú también estás perdido? Yo buscaba el baño..."
    },
    
    octorok: {
        name: "Octorok Escupidor",
        hp: 30,
        maxHp: 30,
        atk: 6,
        def: 2,
        description: "Una especie de pulpo que escupe piedras",
        reward: { rupias: 15, item: null },
        quote: "¡Pff pff pff!"
    },
    
    stalfos: {
        name: "Stalfos Bailón",
        hp: 50,
        maxHp: 50,
        atk: 10,
        def: 5,
        description: "Un esqueleto con ritmo",
        reward: { rupias: 30, item: null },
        quote: "¡Hora de bailar... digo, luchar!"
    },
    
    keese: {
        name: "Keese Vampiresco",
        hp: 25,
        maxHp: 25,
        atk: 5,
        def: 2,
        description: "Un murciélago que vuela erráticamente",
        reward: { rupias: 10, item: null },
        quote: "Chirp chirp chirp!"
    },
    
    zol: {
        name: "Zol Gelatinoso",
        hp: 20,
        maxHp: 20,
        atk: 4,
        def: 1,
        description: "Bola de gelatina que se divide al ser golpeada",
        reward: { rupias: 12, item: null },
        quote: "*sonidos de gelatina*"
    },
    
    tektite: {
        name: "Tektite Saltarín",
        hp: 35,
        maxHp: 35,
        atk: 7,
        def: 3,
        description: "Araña que salta sobre agua y tierra",
        reward: { rupias: 18, item: null },
        quote: "*boing boing boing*"
    },
    
    peahat: {
        name: "Peahat Helicóptero",
        hp: 35,
        maxHp: 35,
        atk: 7,
        def: 4,
        description: "Una flor voladora con mal genio",
        reward: { rupias: 18, item: null },
        quote: "¡Vuelo libre! ¡No me toques!"
    },
    
    shyGuy: {
        name: "Shy Guy Tímido",
        hp: 28,
        maxHp: 28,
        atk: 6,
        def: 3,
        description: "Figura encapuchada que se mueve extrañamente",
        reward: { rupias: 15, item: null },
        quote: "¡No me mires!"
    },
    
    wizzrobe: {
        name: "Wizzrobe Ilusionista",
        hp: 45,
        maxHp: 45,
        atk: 9,
        def: 4,
        description: "Mago que se teletransporta y lanza magia",
        reward: { rupias: 25, item: null },
        quote: "¡Abracadabra... o algo así!"
    },
    
    // Enemigos intermedios
    darknut: {
        name: "Darknut Culturista",
        hp: 60,
        maxHp: 60,
        atk: 12,
        def: 8,
        description: "Caballero oscuro que se salta el día de pierna",
        reward: { rupias: 40, item: weapons.espadaHierro },
        quote: "¿Entrenamiento? Nah, esto es solo mi calentamiento"
    },
    
    armos: {
        name: "Armos Estatua Viviente",
        hp: 55,
        maxHp: 55,
        atk: 11,
        def: 7,
        description: "Estatua que cobra vida al acercarte",
        reward: { rupias: 35, item: null },
        quote: "¡Sorpresa! ¡Soy una trampa!"
    },
    
    polsVoice: {
        name: "Pols Voice Orejón",
        hp: 30,
        maxHp: 30,
        atk: 5,
        def: 2,
        description: "Criatura peluda sensible al sonido",
        reward: { rupias: 20, item: null },
        quote: "¡Mis orejas! ¡Mis hermosas orejas!"
    },
    
    likelike: {
        name: "Like-Like Comeescudos",
        hp: 40,
        maxHp: 40,
        atk: 8,
        def: 4,
        description: "Criatura que se come tus objetos",
        reward: { rupias: 25, item: null },
        quote: "¡Ñam ñam ñam! ¡Qué rico escudo!"
    },
    
    // Subjefes
    hinox: {
        name: "Hinox Ciclópeo",
        hp: 80,
        maxHp: 80,
        atk: 14,
        def: 6,
        description: "Cíclope grande y torpe",
        reward: { rupias: 50, item: null },
        quote: "¡GRAAAAR! ¡Tú pequeño! ¡Yo grande!"
    },
    
    gohma: {
        name: "Gohma Ojón",
        hp: 70,
        maxHp: 70,
        atk: 13,
        def: 5,
        description: "Cangrejo gigante con un gran ojo",
        reward: { rupias: 60, item: null },
        quote: "¡Te veo! ¡No puedes esconderte!"
    },
    
    moldorm: {
        name: "Moldorm Gusanesco",
        hp: 65,
        maxHp: 65,
        atk: 12,
        def: 4,
        description: "Gusano gigante que se mueve erráticamente",
        reward: { rupias: 55, item: null },
        quote: "¡No puedes tocar mi cola! ¡Es mi punto débil!"
    },
    
    // Jefe final (versión demo)
    nightmare: {
        name: "Pesadilla Sombría",
        hp: 100,
        maxHp: 100,
        atk: 15,
        def: 10,
        description: "La pesadilla que amenaza la isla",
        reward: { rupias: 100, item: weapons.espadaKoholint },
        quote: "¡Nunca despertarás al Pez Viento mientras yo exista!"
    }
};
