import InventoryItem from './InventoryItem';

class Weapon extends InventoryItem {
  public get range(): number {
    return this._range;
  }
  public set range(value: number) {
    if (value > 0) this._range = value;
  }
  public get damage(): number {
    return this._damage;
  }
  public set damage(value: number) {
    if (value > 0) this._damage = value;
  }
  constructor(
    _name: string,
    _price: number,
    _description: string,
    private _damage: number,
    private _range: number
  ) {
    super(_name, _price, _description);
  }
}

class Armor extends InventoryItem {
  public get defense(): number {
    return this._defense;
  }
  public set defense(value: number) {
    if (value > 0) this._defense = value;
  }
  constructor(
    _name: string,
    _price: number,
    _description: string,
    private _defense: number
  ) {
    super(_name, _price, _description);
  }
}


const starterIventory = [
  new Weapon('simple axe', 5, 'a plain axe', 10, 5),
  new Weapon('simple staff', 5, 'a plain staff', 10, 5),
  new Armor('leather armor', 10, 'armor of leather', 10),
];

export { Weapon, Armor, starterIventory };
