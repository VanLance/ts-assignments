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
  addStarterInvertory(character);
  return character;
}

function addStarterInvertory(character: RPGCharacter) {
  character.inventory = [...starterIventory];
}

function updatePage(character: Character) {
  for (const el of Array.from(document.getElementsByClassName('hide'))) {
    // el.classList?.toggle('flexing');
    el.classList?.toggle('hide');
  }
  characterForm.classList?.toggle('hide');
  displayCharacter(character);
  addShopItems();
  displayInventory(character);
}

function displayCharacter(characterInfo: RPGCharacter) {
  document.getElementById('display-name')!.innerHTML +=
    characterInfo.name as string;
  document.getElementById('display-archetype')!.innerHTML +=
    characterInfo.archetype as string;
  
}

function displayInventory(character: RPGCharacter) {
  const inventoryList = document.getElementById('inventory-list');
  inventoryList!.innerHTML = '';
  const inventoryValue = document.getElementById('display-inventory-value');
  for (const item of character.inventory) {
    inventoryList?.appendChild(diplayItemCard(item));
    inventoryValue!.innerHTML += item.price.toString()
  }
  
}

function displayInventoryValue(){}
function addShopItems() {
  const shopList = document.getElementById('shop-list');
  for (const item of shop.items) {
    shopList?.appendChild(diplayItemCard(item));
  }
}

function diplayItemCard(item: InventoryItem): HTMLDivElement {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '18rem';
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const nameHeading = document.createElement('h5');
  nameHeading.className = 'card-title';
  nameHeading.innerText = item.name;
  const itemDescription = document.createElement('p');
  itemDescription.className = 'card-text';
  itemDescription.innerText = item.description;
  const itemValue = document.createElement('p');
  itemValue.className = 'card-text';
  itemValue.innerText = `Value: ${item.price.toString()} gold`;
  cardBody.append(nameHeading, itemDescription,itemValue);
  card.appendChild(cardBody);
  card.append(...addCardButtons(item));

  return card;
}

function addCardButtons(item: InventoryItem): HTMLButtonElement[] {
  const addButton = document.createElement('button');
  const removeButton = document.createElement('button');
  addButton.id = 'add-button';
  removeButton.id = 'remove-button';
  addButton.textContent = 'Add Item';
  removeButton.textContent = 'Remove Item';
  addButton.addEventListener('click', () => {
    character.addItem(item);
    displayInventory(character);
  });
  removeButton.addEventListener('click', () => {
    character.removeItem(item);
    displayInventory(character);
  });
  return [addButton, removeButton];
}
