import { Armor, Weapon } from './inventoryItems';
import { Shopable } from './types';

export default class Shop implements Shopable {
  public get items(): [Weapon, Armor, Weapon | Armor] {
    return this._items;
  }
  public set items(value: [Weapon, Armor, Weapon | Armor]) {
    this._items = value;
  }
  constructor(
    private _items: [Weapon, Armor, Weapon | Armor] = [
      new Weapon(
        'Aetherstrike',
        9980,
        'The Aetherstrike is a legendary sword forged by ancient blacksmiths',
        800,
        10
      ),
      new Armor(
        'Eclipse Embrace',
        8000,
        'e Eclipse Embrace is a legendary suit of armor that exudes an aura of both shadow and light.',
        80
      ),
      new Weapon(
        'Sylvan Whisper',
        10000,
        'he Sylvan Whisper is an enchanted longbow crafted from the heartwood of the oldest and wisest tree in the enchanted forest',
        650,
        85
      ),
    ]
  ) {}

  addArmor(armor: Armor):void {
    this._items.push(armor);
  }

  addWeapon(weapon: Weapon):void {
    this._items.push(weapon);
  }

}
