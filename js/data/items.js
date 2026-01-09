// Catálogo de objetos especiales
export const specialItems = {
    // Objetos de protección
    escudo: { 
        name: "Escudo de Cartón", 
        type: "defensa", 
        description: "Te lo dieron gratis, ¿qué esperabas?" 
    },
    escudoEspejo: { 
        name: "Escudo Espejo Retrovisor", 
        type: "defensa", 
        description: "Refleja rayos y te permite ver quién viene por detrás" 
    },
    
    // Objetos de movimiento
    botas: { 
        name: "Botas de Pegaso (Imitación)", 
        type: "movimiento", 
        description: "Te hacen correr rápido y saltar lejos. Made in China" 
    },
    aletas: { 
        name: "Aletas de Natación Sincronizada", 
        type: "movimiento", 
        description: "Para nadar rápido con estilo" 
    },
    pluma: { 
        name: "Pluma de Roc (o de paloma, no estamos seguros)", 
        type: "movimiento", 
        description: "Permite saltar sin esfuerzo" 
    },
    
    // Objetos de utilidad
    pala: { 
        name: "Pala de Jardinería", 
        type: "herramienta", 
        description: "Para desenterrar tesoros o plantar tomates",
        price: 200
    },
    bombas: { 
        name: "Bombas Artesanales", 
        type: "explosivo", 
        description: "Hechas con cariño por el herrero local" 
    },
    polvosMagicos: { 
        name: "Polvos Mágicos (No Ingerir)", 
        type: "magia", 
        description: "La bruja dice que son seguros" 
    },
    ocarina: { 
        name: "Ocarina Desafinada", 
        type: "musica", 
        description: "Instrumento musical que suena... interesante" 
    },
    
    // Brazaletes
    brazalete: { 
        name: "Brazalete de CrossFit", 
        type: "fuerza", 
        description: "Te permite levantar cosas pesadas. ¡Gains!" 
    },
    superbrazalete: { 
        name: "Súper-Brazalete Pro Max", 
        type: "fuerza", 
        description: "Versión mejorada. Ahora con Bluetooth" 
    },
    
    // Llaves especiales
    llaveTail: { 
        name: "Llave Tail (No es un animal)", 
        type: "llave", 
        description: "Abre la Cueva Tail" 
    },
    llaveViscosa: { 
        name: "Llave Viscosa (Está pegajosa)", 
        type: "llave", 
        description: "Abre la Caverna de la Llave" 
    },
    llaveRostro: { 
        name: "Llave de Rostro (Con Cara)", 
        type: "llave", 
        description: "Abre el Templo del Rostro" 
    },
    llaveAbisal: { 
        name: "Llave Abisal del Abismo", 
        type: "llave", 
        description: "Abre el Túnel Abisal" 
    },
    llaveRapaz: { 
        name: "Llave Rapaz (No Muerde)", 
        type: "llave", 
        description: "Abre la Torre del Águila" 
    },
    
    // Objetos de intercambio
    seta: { 
        name: "Seta Sospechosa", 
        type: "intercambio", 
        description: "Mejor no comérsela" 
    },
    yoshiDoll: {
        name: "Muñeco de Yoshi Pirata",
        type: "intercambio",
        description: "Parece de contrabando, pero es adorable"
    },
    lazo: {
        name: "Lazo con Brillantitos",
        type: "intercambio",
        description: "Muy fashion"
    },
    lataComida: {
        name: "Lata de Comida para Mascotas",
        type: "intercambio",
        description: "Mejor no leas los ingredientes"
    },
    bananas: {
        name: "Plátanos Tropicales",
        type: "intercambio",
        description: "Bananaaas!"
    },
    
    // Utilidades varias
    frascoFeerico: { 
        name: "Frasco Feérico (Tamaño Viaje)", 
        type: "contenedor", 
        description: "Para guardar hadas. No incluye hadas." 
    },
    detectorCaracolas: { 
        name: "Detector de Caracolas GPS", 
        type: "detector", 
        description: "Beep beep cuando hay caracolas cerca" 
    },
    lupa: {
        name: "Lupa Mágica de Aumento",
        type: "herramienta",
        description: "Revela secretos ocultos. O simplemente hace las cosas más grandes."
    }
};

// Instrumentos musicales para despertar al Pez Viento
export const musicInstruments = [
    { 
        name: "Violonchelo de la Luna Llena (Edición Nocturna)", 
        dungeon: 1, 
        description: "Suena cristalino y puro" 
    },
    { 
        name: "Cuerno de Caracola (Bocina Marina)", 
        dungeon: 2, 
        description: "Resuena hasta en lo más profundo" 
    },
    { 
        name: "Campana del Mar (Ding Dong)", 
        dungeon: 3, 
        description: "Revitaliza el alma con su ding-dong" 
    },
    { 
        name: "Arpa de las Olas WiFi", 
        dungeon: 4, 
        description: "Su sonido recuerda al murmullo del mar" 
    },
    { 
        name: "Marimba del Viento (Xilófono Gigante)", 
        dungeon: 5, 
        description: "Produce un sonido muy penetrante" 
    },
    { 
        name: "Triángulo de Coral (Ding)", 
        dungeon: 6, 
        description: "Alegra el ánimo con un repiqueteo" 
    },
    { 
        name: "Órgano de la Calma Vespertina", 
        dungeon: 7, 
        description: "Emite un sonido reconfortante" 
    },
    { 
        name: "Tambor del Trueno (Con Platillos)", 
        dungeon: 8, 
        description: "Retumba como un trueno en la distancia" 
    }
];

// Canciones de la ocarina
export const ocarinaSongs = {
    baladaPez: {
        name: "Balada del Pez Viento (Versión Acústica)",
        description: "La melodía que Marin tararea constantemente",
        effect: "Te hace sentir nostálgico"
    },
    cancionVital: {
        name: "Canción Vital de las Ranas (Croac Croac)",
        description: "Melodía que aprendiste de Wart",
        effect: "Insufla vida a objetos inertes (y anima fiestas)"
    },
    mamboManbo: {
        name: "Mambo de Manbo (Teletransporte Express)",
        description: "Alegre tonada de Manbo",
        effect: "Te teletransporta. ¡Muy práctico!"
    }
};
