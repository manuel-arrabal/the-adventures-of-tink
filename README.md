# 🗡️ Las Aventuras de Tink

*Un homenaje paródico a **The Legend of Zelda: Link's Awakening***  

Un pequeño juego narrativo con combate por turnos, estética retro Game Boy y mucho humor autoconsciente.

---

## 📁 Estructura del Proyecto

```
las-aventuras-de-tink/
├── index.html
│   └─ Estructura HTML principal del juego
├── styles.css
│   └─ Estilos con estética Game Boy retro
├── game.js
│   └─ Lógica principal del juego, combate y decisiones
└── README.md
    └─ Documentación del proyecto
```

---

## ✨ Características Principales

- Sistema de combate por turnos con dados (d20)
- Inventario de armas con bonificaciones únicas
- Estadísticas de jugador (vida, ataque, defensa)
- Múltiples enemigos con diferentes características
- Sistema de decisiones ramificadas
- Estética retro Game Boy (verde monocromático)
- Sistema de eventos y narrativa paródica
- Guardado de progreso en memoria

---

## 🎮 Mecánicas del Juego

### Sistema de Combate

El combate funciona por turnos.  
En cada turno puedes elegir un arma de tu inventario.

1. Se lanza un dado de 20 caras (**d20**)
2. Se suma tu ataque base y el bonus del arma
3. Si el resultado supera la defensa del enemigo, causas daño

**Fórmulas:**

```
Tirada de Ataque = d20 + ATK + Bonus_Arma
Daño = Tirada - DEF_Enemigo (si es positivo)
```

---

## ℹ️ Nota

Los archivos están listos para funcionar directamente.  

---

¡Diviértete explorando las aventuras de **Tink**! 🎮
