import { v4 as uuidv4 } from 'uuid';
import { Characterable, FightingStyle } from './types';
import InventoryItem from './InventoryItem';

export default class RPGCharacter implements Characterable {
  public get fightingStyle(): FightingStyle {
    return this._fightingStyle;
  }
  public set fightingStyle(value: FightingStyle) {
    this._fightingStyle = value;
  }
  public get archetype(): string {
    return this._archetype;
  }
  public set archetype(value: string) {
    this._archetype = value;
  }
  public get inventory(): InventoryItem[] {
    return this._inventory;
  }
  public set inventory(value: InventoryItem[]) {
    this._inventory = value;
  }
 public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  constructor(
    private _name: string,
    private _archetype: string,
    private _fightingStyle: FightingStyle,
    private _inventory: InventoryItem[],
    readonly id: string
     = uuidv4(),
  ) {}

  addItem(item: InventoryItem) {
    this.inventory.push(item);
  }

  removeItem(item: InventoryItem, count: number = 0) {
    this.inventory = this.inventory.filter((currentItem) => {
      if (currentItem.name == item.name) return count++ >= 1;
      return currentItem.name != item.name;
    });
  }

  inventoryValue() {
    let value = 0;
    for (const item of this.inventory) {
      value += item.price;
    }
    return value;
  }
}
