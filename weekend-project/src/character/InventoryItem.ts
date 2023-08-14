import { v4 as uuidv4 } from 'uuid';

export default abstract class InventoryItem{
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    if( value > 0) this._price = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  
  constructor(
    private _name: string ,
    private _price: number,
    private _description: string,
     readonly id: string = uuidv4(),
  ){}
}