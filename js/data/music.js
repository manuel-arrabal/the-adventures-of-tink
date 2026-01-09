// Instrumentos musicales para despertar al Pez Viento
export const musicInstruments = [
    { 
        name: "Violonchelo de la Luna Llena (Edición Nocturna)", 
        dungeon: 1, 
        location: "Cueva Tail",
        description: "Suena cristalino y puro como la luz de la luna" 
    },
    { 
        name: "Cuerno de Caracola (Bocina Marina)", 
        dungeon: 2, 
        location: "Gruta del Cántaro",
        description: "Resuena hasta en lo más profundo del océano" 
    },
    { 
        name: "Campana del Mar (Ding Dong)", 
        dungeon: 3, 
        location: "Caverna de la Llave",
        description: "Revitaliza el alma con su ding-dong melodioso" 
    },
    { 
        name: "Arpa de las Olas WiFi", 
        dungeon: 4, 
        location: "Túnel Abisal",
        description: "Su sonido recuerda al murmullo del mar. Con conexión 5G" 
    },
    { 
        name: "Marimba del Viento (Xilófono Gigante)", 
        dungeon: 5, 
        location: "Fauces del Siluro",
        description: "Produce un sonido muy penetrante que atraviesa el viento" 
    },
    { 
        name: "Triángulo de Coral (Ding)", 
        dungeon: 6, 
        location: "Templo del Rostro",
        description: "Alegra el ánimo con un repiqueteo de coral" 
    },
    { 
        name: "Órgano de la Calma Vespertina", 
        dungeon: 7, 
        location: "Torre del Águila",
        description: "Emite un sonido reconfortante que calma el alma" 
    },
    { 
        name: "Tambor del Trueno (Con Platillos)", 
        dungeon: 8, 
        location: "Roca de la Tortuga",
        description: "Retumba como un trueno en la distancia. Incluye platillos de regalo" 
    }
];

// Canciones de la ocarina
export const ocarinaSongs = {
    baladaPez: {
        name: "Balada del Pez Viento (Versión Acústica)",
        description: "La melodía que Marin tararea constantemente",
        effect: "Te hace sentir nostálgico",
        learnFrom: "Marin en la plaza del pueblo",
        lyrics: "🎵 La-la-laaa... la-la-laaa... 🎵"
    },
    cancionVital: {
        name: "Canción Vital de las Ranas (Croac Croac)",
        description: "Melodía que aprendiste de Wart",
        effect: "Insufla vida a objetos inertes (y anima fiestas)",
        learnFrom: "Wart el sapo en su cueva",
        lyrics: "🎵 Croac croac, ribit ribit 🎵"
    },
    mamboManbo: {
        name: "Mambo de Manbo (Teletransporte Express)",
        description: "Alegre tonada de Manbo",
        effect: "Te teletransporta a puntos activados",
        learnFrom: "Manbo el pez en su cueva",
        lyrics: "🎵 Mambo número cinco... digo, Manbo 🎵"
    }
};

// Secuencia de notas para tocar con la ocarina (simulado)
export const songSequences = {
    baladaPez: ["Do", "Re", "Mi", "Fa", "Sol"],
    cancionVital: ["Sol", "Fa", "Mi", "Re", "Do"],
    mamboManbo: ["Do", "Mi", "Sol", "Mi", "Do"]
};
