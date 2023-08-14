/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/character/Character.ts":
/*!************************************!*\
  !*** ./src/character/Character.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPGCharacter)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nclass RPGCharacter {\n    get fightingStyle() {\n        return this._fightingStyle;\n    }\n    set fightingStyle(value) {\n        this._fightingStyle = value;\n    }\n    get archetype() {\n        return this._archetype;\n    }\n    set archetype(value) {\n        this._archetype = value;\n    }\n    get inventory() {\n        return this._inventory;\n    }\n    set inventory(value) {\n        this._inventory = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    constructor(_name, _archetype, _fightingStyle, _inventory = [], id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n        this._name = _name;\n        this._archetype = _archetype;\n        this._fightingStyle = _fightingStyle;\n        this._inventory = _inventory;\n        this.id = id;\n    }\n    addItem(item) {\n        this.inventory.push(item);\n    }\n    removeItem(item, count = 0) {\n        this.inventory = this.inventory.filter((currentItem) => {\n            if (currentItem.name == item.name)\n                return count++ >= 1;\n            return currentItem.name != item.name;\n        });\n    }\n    inventoryValue() {\n        let value = 0;\n        for (const item of this.inventory) {\n            value += item.price;\n        }\n        return value;\n    }\n}\n\n\n//# sourceURL=webpack://weekend-project/./src/character/Character.ts?");

/***/ }),

/***/ "./src/character/InventoryItem.ts":
/*!****************************************!*\
  !*** ./src/character/InventoryItem.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InventoryItem)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nclass InventoryItem {\n    get description() {\n        return this._description;\n    }\n    set description(value) {\n        this._description = value;\n    }\n    get price() {\n        return this._price;\n    }\n    set price(value) {\n        if (value > 0)\n            this._price = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    constructor(_name, _price, _description, id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n        this._name = _name;\n        this._price = _price;\n        this._description = _description;\n        this.id = id;\n    }\n}\n\n\n//# sourceURL=webpack://weekend-project/./src/character/InventoryItem.ts?");

/***/ }),

/***/ "./src/character/Shop.ts":
/*!*******************************!*\
  !*** ./src/character/Shop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shop)\n/* harmony export */ });\n/* harmony import */ var _inventoryItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventoryItems */ \"./src/character/inventoryItems.ts\");\n\nclass Shop {\n    get items() {\n        return this._items;\n    }\n    set items(value) {\n        this._items = value;\n    }\n    constructor(_items = [\n        new _inventoryItems__WEBPACK_IMPORTED_MODULE_0__.Weapon('Aetherstrike', 9980, 'The Aetherstrike is a legendary sword forged by ancient blacksmiths', 800, 10),\n        new _inventoryItems__WEBPACK_IMPORTED_MODULE_0__.Armor('Eclipse Embrace', 8000, 'e Eclipse Embrace is a legendary suit of armor that exudes an aura of both shadow and light.', 80),\n        new _inventoryItems__WEBPACK_IMPORTED_MODULE_0__.Weapon('Sylvan Whisper', 10000, 'he Sylvan Whisper is an enchanted longbow crafted from the heartwood of the oldest and wisest tree in the enchanted forest', 650, 85),\n    ]) {\n        this._items = _items;\n    }\n    addArmor(armor) {\n        this._items.push(armor);\n    }\n    addWeapon(weapon) {\n        this._items.push(weapon);\n    }\n}\n\n\n//# sourceURL=webpack://weekend-project/./src/character/Shop.ts?");

/***/ }),

/***/ "./src/character/inventoryItems.ts":
/*!*****************************************!*\
  !*** ./src/character/inventoryItems.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Armor: () => (/* binding */ Armor),\n/* harmony export */   Weapon: () => (/* binding */ Weapon),\n/* harmony export */   starterIventory: () => (/* binding */ starterIventory)\n/* harmony export */ });\n/* harmony import */ var _InventoryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryItem */ \"./src/character/InventoryItem.ts\");\n\nclass Weapon extends _InventoryItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get range() {\n        return this._range;\n    }\n    set range(value) {\n        if (value > 0)\n            this._range = value;\n    }\n    get damage() {\n        return this._damage;\n    }\n    set damage(value) {\n        if (value > 0)\n            this._damage = value;\n    }\n    constructor(_name, _price, _description, _damage, _range) {\n        super(_name, _price, _description);\n        this._damage = _damage;\n        this._range = _range;\n    }\n}\nclass Armor extends _InventoryItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get defense() {\n        return this._defense;\n    }\n    set defense(value) {\n        if (value > 0)\n            this._defense = value;\n    }\n    constructor(_name, _price, _description, _defense) {\n        super(_name, _price, _description);\n        this._defense = _defense;\n    }\n}\nconst starterIventory = [\n    new Weapon('simple axe', 5, 'a plain axe', 10, 5),\n    new Weapon('simple staff', 5, 'a plain staff', 10, 5),\n    new Armor('leather armor', 10, 'armor of leather', 10),\n];\n\n\n\n//# sourceURL=webpack://weekend-project/./src/character/inventoryItems.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character_Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character/Character */ \"./src/character/Character.ts\");\n/* harmony import */ var _character_Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character/Shop */ \"./src/character/Shop.ts\");\n/* harmony import */ var _character_inventoryItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character/inventoryItems */ \"./src/character/inventoryItems.ts\");\n\n\n\nconsole.log('Typescript Webpack');\nconst characterForm = document.getElementById('character-form');\nconst shop = new _character_Shop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet character;\nconst formData = new FormData(characterForm);\ncharacterForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const characterInfo = getFormData();\n    character = createCharacter(characterInfo);\n    updatePage(character);\n});\nfunction getFormData() {\n    const name = formData.get('name');\n    const archetype = formData.get('archetype');\n    const fightingStyle = formData.get('fighting-style');\n    return { name, archetype, fightingStyle };\n}\nfunction createCharacter(characterInfo) {\n    const { name, archetype, fightingStyle } = characterInfo;\n    const character = new _character_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, archetype, fightingStyle);\n    addStarterInventory(character);\n    return character;\n}\nfunction addStarterInventory(character) {\n    character.inventory = [..._character_inventoryItems__WEBPACK_IMPORTED_MODULE_2__.starterIventory];\n}\nfunction updatePage(character) {\n    for (const el of Array.from(document.getElementsByClassName('hide'))) {\n        el.classList?.toggle('hide');\n    }\n    characterForm.classList?.toggle('hide');\n    document.body.classList.toggle('flexing');\n    displayCharacter(character);\n    addShopItems();\n    displayInventory(character);\n}\nfunction displayCharacter(characterInfo) {\n    displayValue('display-name', characterInfo.name);\n    displayValue('display-archetype', characterInfo.archetype);\n    displayValue('display-fighting-style', characterInfo.fightingStyle);\n}\nfunction displayValue(elementId, value) {\n    const element = document.getElementById(elementId);\n    element.innerHTML += value;\n}\nfunction displayInventory(character) {\n    let inventoryValue = 0;\n    const inventoryList = document.getElementById('inventory-list');\n    inventoryList.innerHTML = '';\n    const displayInventoryValue = document.getElementById('display-inventory-value');\n    displayInventoryValue.innerHTML = 'Inventory value: ';\n    for (const item of character.inventory) {\n        inventoryList?.appendChild(displayItemCard(item, 'inventory'));\n        inventoryValue += item.price;\n    }\n    displayInventoryValue.innerHTML += inventoryValue.toString();\n}\nfunction addShopItems() {\n    const shopList = document.getElementById('shop-list');\n    for (const item of shop.items) {\n        shopList?.appendChild(displayItemCard(item, 'shop'));\n    }\n}\nfunction displayItemCard(item, location) {\n    const card = createCard(item.name, item.description, `Value: ${item.price.toString()} gold`);\n    const [addButton, removeButton] = createCardButtons(item);\n    card.append(location === 'shop' ? addButton : removeButton);\n    return card;\n}\nfunction createCard(name, description, value) {\n    const card = document.createElement('div');\n    card.className = 'card';\n    card.style.width = '18rem';\n    const cardBody = document.createElement('div');\n    cardBody.className = 'card-body';\n    cardBody.append(createCardElement('h5', 'card-title', name));\n    cardBody.append(createCardElement('p', 'card-text', description));\n    cardBody.append(createCardElement('p', 'card-text', value));\n    card.appendChild(cardBody);\n    return card;\n}\nfunction createCardElement(tagName, className, text) {\n    const element = document.createElement(tagName);\n    element.className = className;\n    element.innerText = text;\n    return element;\n}\nfunction createCardButtons(item) {\n    const addButton = createButton('Add Item', () => {\n        character.addItem(item);\n        displayInventory(character);\n    });\n    const removeButton = createButton('Remove Item', () => {\n        character.removeItem(item);\n        displayInventory(character);\n    });\n    return [addButton, removeButton];\n}\nfunction createButton(text, clickHandler) {\n    const button = document.createElement('button');\n    button.textContent = text;\n    button.addEventListener('click', clickHandler);\n    return button;\n}\nconst armorForm = document.getElementById('add-armor-form');\narmorForm?.addEventListener('submit', handleArmorSubmit);\nfunction handleArmorSubmit(e) {\n    e.preventDefault();\n    const armor = createArmorFromFormData();\n    shop.addArmor(armor);\n    addShopItems();\n}\nfunction createArmorFromFormData() {\n    const armorData = new FormData(armorForm);\n    return new _character_inventoryItems__WEBPACK_IMPORTED_MODULE_2__.Armor(armorData.get('name'), parseInt(armorData.get('price')), armorData.get('description'), parseInt(armorData.get('defense')));\n}\nconst weaponForm = document.getElementById('add-weapon-form');\nweaponForm?.addEventListener('submit', handleWeaponSubmit);\nfunction handleWeaponSubmit(e) {\n    e.preventDefault();\n    const weapon = createWeaponFromFormData();\n    shop.addWeapon(weapon);\n    weaponForm.reset();\n    addShopItems();\n}\nfunction createWeaponFromFormData() {\n    const weaponData = new FormData(weaponForm);\n    return new _character_inventoryItems__WEBPACK_IMPORTED_MODULE_2__.Weapon(weaponData.get('name').toString(), parseInt(weaponData.get('price').toString()), weaponData.get('description').toString(), parseInt(weaponData.get('damage').toString()), parseInt(weaponData.get('range').toString()));\n}\n\n\n//# sourceURL=webpack://weekend-project/./src/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://weekend-project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://weekend-project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://weekend-project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://weekend-project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://weekend-project/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;