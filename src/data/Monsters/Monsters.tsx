import { MartialWeaponList, SimpleWeaponList } from "../../lootTables/weaponTables/WeaponTables";
import { generateRandomWeapon } from "../../services/loot-service/loot-service";
import { Entity } from "../../types/GlobalTypes";
import { Weapon } from "../../types/ItemTypes";

export const bandit: Entity = {
	name: "Bandit",
	type: "Monster",
	statBlock: { str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 0 },
	skills: {},
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
	image: "",
};

export const direWolf: Entity = {
	name: "Dire Wofl",
	type: "Monster",
	statBlock: { str: 0, dex: 2, con: 1, int: 0, wis: 1, cha: 0 },
	skills: { nature: 4, perception: 5, stealth: 6, survival: 5 },
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
	image: "",
};

export const peasant: Entity = {
	name: "Peasant",
	type: "Monster",
	statBlock: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
	skills: {},
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
	image: "",
};

export const scout: Entity = {
	name: "Scout",
	type: "Monster",
	statBlock: { str: 0, dex: 2, con: 1, int: 0, wis: 1, cha: 0 },
	skills: { nature: 4, perception: 5, stealth: 6, survival: 5 },
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
	image: "",
};

export const strahdVonZarovich: Entity = {
	name: "Strahd Von Zarovich",
	type: "Monster",
	statBlock: { str: 5, dex: 5, con: 4, int: 5, wis: 2, cha: 4 },
	skills: { athletics: 9, arcana: 15, perception: 12, religion: 10, stealth: 14 },
	savingThrows: ["Strength Saving throws +9", "Dex saving throw +11", "Wisdom Saving Throw +8", "Charisma Saving Throw +10"],
	resistances: ["Necrotic", "Non-magical attacks"],
	ac: 20,
	cr: 18,
	maxHealth: 800,
	currentHealth: 800,
	exp: 25000,
	initiative: 5,
	species: "Human Vampire",
	speed: 30,
	status: [],
	image: "strahd_von_zarovich.jpg",
};

export const EnemyList: Entity[] = [peasant, scout, strahdVonZarovich];
