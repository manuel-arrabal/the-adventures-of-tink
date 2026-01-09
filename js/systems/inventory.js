// Sistema de gestión de inventario

import { updateInventory } from './ui.js';

export function addWeapon(player, weapon) {
    const hasWeapon = player.inventory.some(w => w.name === weapon.name);
    if (!hasWeapon) {
        player.inventory.push(weapon);
        updateInventory(player);
        return true;
    }
    return false;
}

export function addItem(player, item) {
    const hasItem = player.items.some(i => i.name === item.name);
    if (!hasItem) {
        player.items.push(item);
        return true;
    }
    return false;
}

export function removeItem(player, itemName) {
    const index = player.items.findIndex(i => i.name === itemName);
    if (index !== -1) {
        player.items.splice(index, 1);
        return true;
    }
    return false;
}

export function hasItem(player, itemName) {
    return player.items.some(i => i.name === itemName);
}

export function addRupias(player, amount) {
    player.rupias += amount;
    updateInventory(player);
}

export function removeRupias(player, amount) {
    if (player.rupias >= amount) {
        player.rupias -= amount;
        updateInventory(player);
        return true;
    }
    return false;
}

export function addMusicInstrument(player, instrument) {
    const hasInstrument = player.musicInstruments.some(i => i.name === instrument.name);
    if (!hasInstrument) {
        player.musicInstruments.push(instrument);
        updateInventory(player);
        return true;
    }
    return false;
}

export function hasAllInstruments(player) {
    return player.musicInstruments.length === 8;
}

export function getInstrumentCount(player) {
    return player.musicInstruments.length;
}
