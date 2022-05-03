import { MartialWeaponList, SimpleWeaponList } from "../../lootTables/weaponTables/WeaponTables";
import { generateRandomWeapon } from "../../services/loot-service/loot-service";
import { Monster } from "../../types/GlobalTypes";
import { Weapon } from "../../types/ItemTypes";

export const bandit: Monster = {
	name: "Bandit",
	statBlock: { str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 0 },
	exp: 25,
	cr: 0.125,
	maxHealth: 18,
	currentHealth: 18,
	speed: 30,
	initiative: 0,
	weapon: generateRandomWeapon(MartialWeaponList) as Weapon,
	species: "human",
	status: [],
	onHit: 3,
	ac: 12,
};

export const direWolf: Monster = {
	name: "Dire Wofl",
	statBlock: { str: 0, dex: 2, con: 1, int: 0, wis: 1, cha: 0 },
	skills: ["Nature +4", "Perception +5", "Stealth +6", "Survival +5"],
	abilities: ["Keen Hearing and Sight: Advantage on Perception checks with hearing or sight"],
	actions: ["Multiattack: Can attack twice", "Melee attack: Shortsword +4 to hit, 1D6+2 Piercing", "Ranged attack: Longbow +4 to hit, 1D8+2 piercing, 150/600ft"],
	exp: 100,
	cr: 0.5,
	maxHealth: 27,
	currentHealth: 27,
	speed: 30,
	initiative: 0,
	species: "Beast",
	status: [],
	onHit: 4,
	ac: 13,
};

export const peasant: Monster = {
	name: "Peasant",
	statBlock: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
	exp: 10,
	cr: 1,
	maxHealth: 10,
	currentHealth: 10,
	speed: 30,
	initiative: 0,
	species: "human",
	status: [],
	weapon: generateRandomWeapon(SimpleWeaponList) as Weapon,
	onHit: 2,
	ac: 10,
};

export const scout: Monster = {
	name: "Scout",
	statBlock: { str: 0, dex: 2, con: 1, int: 0, wis: 1, cha: 0 },
	skills: ["Nature +4", "Perception +5", "Stealth +6", "Survival +5"],
	abilities: ["Keen Hearing and Sight: Advantage on Perception checks with hearing or sight"],
	actions: ["Multiattack: Can attack twice", "Melee attack: Shortsword +4 to hit, 1D6+2 Piercing", "Ranged attack: Longbow +4 to hit, 1D8+2 piercing, 150/600ft"],
	exp: 100,
	cr: 0.5,
	maxHealth: 27,
	currentHealth: 27,
	speed: 30,
	initiative: 0,
	species: "human",
	status: [],
	onHit: 4,
	ac: 13,
};

export const EnemyList: Monster[] = [peasant, scout];
