import { v4 as uuidv4 } from 'uuid';
import { Armor, Weapon } from './inventoryItems';
import { Characterable } from './types';
import InventoryItem from './InventoryItem';

class RPGCharacter implements Characterable {
  public get inventory(): InventoryItem[] {
    return this._inventory;
  }
  public set inventory(value: InventoryItem[]) {
    this._inventory = value;
  }
  public get weapon(): Weapon {
    return this._weapon;
  }
  public set weapon(value: Weapon) {
    this._weapon = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  constructor(
    private _name: string,
    private _age: number,
    private _weapon: Weapon,
    private _inventory: InventoryItem[],
    readonly id: string
     = uuidv4()
  ) {}

  addItem(){}

  removeItem(){}

  removeItemQuanity(){}

  displayInventory(){}

  inventoryValue(){}
}
