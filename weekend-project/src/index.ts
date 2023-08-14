import RPGCharacter from './character/Character';
import Character from './character/Character';
import InventoryItem from './character/InventoryItem';
import Shop from './character/Shop';
import { Armor, Weapon, starterIventory } from './character/inventoryItems';
import { Characterable, FightingStyle } from './character/types';

console.log('Typescript Webpack');

const characterForm = document.getElementById(
  'character-form'
) as HTMLFormElement;

const shop = new Shop();
let character: RPGCharacter;
const formData = new FormData(characterForm!);

characterForm.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault();
  const characterInfo: Partial<Characterable> = getFormData();
  character = createCharacter(characterInfo);
  updatePage(character);
});

function getFormData(): Partial<Characterable> {
  const name = formData.get('name') as string;
  const archetype = formData.get('archetype') as string;
  const fightingStyle = formData.get('fighting-style') as FightingStyle;
  return { name, archetype, fightingStyle };
}

function createCharacter(characterInfo: Partial<Characterable>): RPGCharacter {
  const { name, archetype, fightingStyle } = characterInfo;
  const character = new Character(name!, archetype!, fightingStyle!);
  addStarterInventory(character);
  return character;
}

function addStarterInventory(character: RPGCharacter) {
  character.inventory = [...starterIventory];
}

function updatePage(character: Character) {
  for (const el of Array.from(document.getElementsByClassName('hide'))) {
    el.classList?.toggle('hide');
  }
  characterForm.classList?.toggle('hide');
  document.body.classList.toggle('flexing');
  displayCharacter(character);
  addShopItems();
  displayInventory(character);
}

function displayCharacter(characterInfo: RPGCharacter) {
  displayValue('display-name', characterInfo.name);
  displayValue('display-archetype', characterInfo.archetype);
  displayValue('display-fighting-style', characterInfo.fightingStyle);
}

function displayValue(elementId: string, value: string | undefined) {
  const element = document.getElementById(elementId)!;
  element.innerHTML += value as string;
}

function displayInventory(character: RPGCharacter) {
  let inventoryValue = 0;
  const inventoryList = document.getElementById('inventory-list');
  inventoryList!.innerHTML = '';
  const displayInventoryValue = document.getElementById(
    'display-inventory-value'
  );
  displayInventoryValue!.innerHTML = 'Inventory value: ';
  for (const item of character.inventory) {
    inventoryList?.appendChild(displayItemCard(item, 'inventory'));
    inventoryValue += item.price;
  }
  displayInventoryValue!.innerHTML += inventoryValue.toString();
}

function addShopItems() {
  const shopList = document.getElementById('shop-list');
  for (const item of shop.items) {
    shopList?.appendChild(displayItemCard(item, 'shop'));
  }
}

function displayItemCard(item: InventoryItem, location: 'shop' | 'inventory'): HTMLDivElement {
  const card = createCard(item.name, item.description, `Value: ${item.price.toString()} gold`);
  const [addButton, removeButton] = createCardButtons(item);
  card.append(location === 'shop' ? addButton : removeButton);
  return card;
}

function createCard(name: string, description: string, value: string): HTMLDivElement {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '18rem';
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  cardBody.append(createCardElement('h5', 'card-title', name));
  cardBody.append(createCardElement('p', 'card-text', description));
  cardBody.append(createCardElement('p', 'card-text', value));

  card.appendChild(cardBody);
  return card;
}

function createCardElement(tagName: string, className: string, text: string): HTMLElement {
  const element = document.createElement(tagName);
  element.className = className;
  element.innerText = text;
  return element;
}

function createCardButtons(item: InventoryItem): HTMLButtonElement[] {
  const addButton = createButton('Add Item', () => {
    character.addItem(item);
    displayInventory(character);
  });
  const removeButton = createButton('Remove Item', () => {
    character.removeItem(item);
    displayInventory(character);
  });
  return [addButton, removeButton];
}

function createButton(text: string, clickHandler: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
}

const armorForm = document.getElementById('add-armor-form') as HTMLFormElement;
armorForm?.addEventListener('submit', handleArmorSubmit);

function handleArmorSubmit(e: SubmitEvent) {
  e.preventDefault();
  const armor = createArmorFromFormData();
  shop.addArmor(armor);
  addShopItems();
}

function createArmorFromFormData(): Armor {
  const armorData = new FormData(armorForm);
  return new Armor(
    armorData.get('name') as string,
    parseInt(armorData.get('price') as string),
    armorData.get('description') as string,
    parseInt(armorData.get('defense') as string)
  );
}

const weaponForm = document.getElementById('add-weapon-form') as HTMLFormElement;
weaponForm?.addEventListener('submit', handleWeaponSubmit);

function handleWeaponSubmit(e: SubmitEvent) {
  e.preventDefault();
  const weapon = createWeaponFromFormData();
  shop.addWeapon(weapon);
  weaponForm.reset();
  addShopItems();
}

function createWeaponFromFormData(): Weapon {
  const weaponData = new FormData(weaponForm);
  return new Weapon(
    weaponData.get('name')!.toString(),
    parseInt(weaponData.get('price')!.toString()),
    weaponData.get('description')!.toString(),
    parseInt(weaponData.get('damage')!.toString()),
    parseInt(weaponData.get('range')!.toString())
  );
}





