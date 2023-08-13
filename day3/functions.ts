import { v4 as uuidv4 } from 'uuid';
import { Armor, InventoryItem, RPGCharacter, Weapon } from './types';

function createCharacter(
  name: string,
  archtype: string,
  weapon: Weapon
): RPGCharacter {
  return {
    id: uuidv4(),
    name: name,
    archtype: archtype,
    weapon: weapon,
    inventory: [weapon],
  };
}

function createInventoryItem(
  name: string,
  description: string,
  value: number
): InventoryItem {
  return { id: uuidv4(), name, description, value };
}

function addStats(item: InventoryItem, stats: Weapon | Armor): Weapon | Armor {
  return Object.assign(item, stats);
}
function addToInventory(character: RPGCharacter, item: Weapon | Armor): void {
  character.inventory.push(item);
}

function removeFromInventory(character: RPGCharacter, itemName: string): void {
  character.inventory.filter((item) => itemName != item.name);
}

function removeQuantityFromInventory(
  character: RPGCharacter,
  itemName: string,
  amount: number
): void {
  let count = 0;
  character.inventory.filter((item) => {
    if (itemName == item.name) return count++ >= amount;
    return itemName != item.name;
  });
}

function inventoryValue(character: RPGCharacter): number {
  let value = 0;
  for (const item of character.inventory) {
    value += item.value;
  }
  return value;
}

function printInventory(inventoryItems: Array<Weapon | Armor>): void {
  inventoryItems.map((item) => {
    console.log(`
    ID: ${item.id}
    Name: ${item.name}
    Desc: ${item.description}`);
    if ('range' in item) {
      console.log(`
    Range: ${item.range}
    Desc: ${item.damage}`);
    } else {
      console.log(`
    Defense: ${item.defense}`);
    }
  });
}

