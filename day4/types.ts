import InventoryItem from "./InventoryItem";
import { Armor, Weapon } from "./inventoryItems";

interface Shopable {
  items: [Weapon, Armor, Weapon | Armor]
}

interface Characterable{
  id: string
  name: string,
  archetype: string
  fightingStyle: FightingStyle
  inventory: InventoryItem[]
}

type FightingStyle = 'ranged' | 'melee'

export {
  Shopable,
  Characterable,
  FightingStyle
}