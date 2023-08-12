type InventoryItem = {
  id: string
  name: string
  description: string
  value: number
}

type Armor = InventoryItem & {
  defense: number
}

type RPGCharacter = {
  id: string
  name: string
  archtype: string
  weapon: InventoryItem
  inventory: Array<Weapon|Armor>
}

type Weapon = InventoryItem & {
  damage: number
  range: number
}

export {
  InventoryItem,
  Armor,
  RPGCharacter,
  Weapon
}