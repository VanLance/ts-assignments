import InventoryItem from "./InventoryItem";
import { Armor, Weapon } from "./inventoryItems";

interface Shopable {
  items: [Weapon, Armor, Weapon | Armor]
}

interface Characterable{
  id: string
  name: string
  weapon: Weapon
  armor?: Armor 
  inventory: InventoryItem[]
}

export {
  Shopable,
  Characterable
}