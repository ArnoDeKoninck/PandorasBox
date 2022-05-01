import { treasureLootTable } from "../../lootTables/lootTables";
import { Item, Weapon } from "../../types/ItemTypes";

export function getLevelRangeIndex(input: number) {
	let index = 0;
	input < 4 ? (index = 0) : input < 7 ? (index = 1) : input < 10 ? (index = 2) : input < 13 ? (index = 3) : input < 16 ? (index = 4) : input < 19 ? (index = 5) : (index = 6);
	return index;
}
export function generateRandomItem(lootTable: (Item | Weapon)[]) {
	const keys = Object.keys(lootTable);
	const randomIndex = (keys.length * Math.random()) << 0;
	const randomItem = lootTable[randomIndex];
	return randomItem;
}

export function generateRandomTreasure(levelIndex: number) {
	let treasure = generateRandomItem(treasureLootTable[levelIndex].table);
	let treasureList = [];
	treasureList.push(treasure);
	return treasureList;
}

export function generateRandomWeapon(list: Weapon[]) {
	const randomWeapon = generateRandomItem(list);
	return randomWeapon;
}
