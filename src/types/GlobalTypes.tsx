import { Encounter } from "./EncounterTypes";
import { Weapon } from "./ItemTypes";

export enum ViewModules {
	COMBAT = "Combat",
	NPCS = "Npcs",
	GENERATORS = "Generators",
	MAP = "Map",
}

export enum SavingThrows {
	CHA,
	CON,
	DEX,
	INT,
	STR,
	WIS,
}

export enum DamageTypes {
	ACID,
	BLUDGEONING,
	COLD,
	FIRE,
	FORCE,
	LIGHTNING,
	NECROTIC,
	PIERCING,
	POISON,
	PSYCHIC,
	RADIANT,
	SLASHING,
	THUNDER,
}

export enum Status {
	NONE = "NONE",
	BLINDED = "BLINDED",
	CHARMED = "CHARMED",
	DEAFENED = "DEAFENED",
	FRIGHTENED = "FRIGHTENED",
	GRAPPLED = "GRAPPLED",
	INCAPACITATED = "INCAPACITATED",
	INVISIBLE = "INVISIBLE",
	PARALYZED = "PARALYZED",
	PETRIFIED = "PETRIFIED",
	POISONED = "POISONED",
	PRONE = "PRONE",
	RESTRAINED = "RESTRAINED",
	STUNNED = "STUNNED",
	UNCONCIOUS = "UNCONCIOUS",
	EXHAUSTION_1 = "EXHAUSTION_1",
	EXHAUSTION_2 = "EXHAUSTION_2",
	EXHAUSTION_3 = "EXHAUSTION_3",
	EXHAUSTION_4 = "EXHAUSTION_4",
	EXHAUSTION_5 = "EXHAUSTION_5",
	EXHAUSTION_6 = "EXHAUSTION_6",
}

export const allStatuses = [
	Status.NONE,
	Status.BLINDED,
	Status.CHARMED,
	Status.DEAFENED,
	Status.FRIGHTENED,
	Status.GRAPPLED,
	Status.INCAPACITATED,
	Status.INVISIBLE,
	Status.PARALYZED,
	Status.PETRIFIED,
	Status.POISONED,
	Status.PRONE,
	Status.RESTRAINED,
	Status.STUNNED,
	Status.UNCONCIOUS,
	Status.EXHAUSTION_1,
	Status.EXHAUSTION_2,
	Status.EXHAUSTION_3,
	Status.EXHAUSTION_4,
	Status.EXHAUSTION_5,
	Status.EXHAUSTION_6,
];

export enum Action {
	ACTION,
	BONUSACTION,
	REACTION,
}

export enum Classes {
	ARTIFICER = "Artificer",
	BARBARIAN = "Barbarian",
	BARD = "Bard",
	CLERIC = "Cleric",
	DRUID = "Druid",
	FIGHTER = "Fighter",
	MONK = "Monk",
	PALADIN = "Paladin",
	RANGER = "Ranger",
	ROGUE = "Rogue",
	SORCERER = "Sorcerer",
	WARLOCK = "Warlock",
	WIZARD = "Wizard",
}

export interface Requirements {
	v?: boolean;
	s?: boolean;
	component?: string;
	classes?: Classes[];
	other?: any;
}

export interface Spell {
	name: string;
	castTime: Action;
	description: string;
	range: number;
	requirements: Requirements[];
	duration?: string;
	link?: string;
}

export interface Npc {
	name: string;
	image: string;
	species: string;
	age: string;
	alignmant: string;
	description: string;
	cr: number;
}

export interface PC {
	name: string;
	image?: string;
	species: string;
	class: string;
	statblock: Statblock;
	description?: string;
	skills: Skillblock;
	speed: number;
	maxHealth: number;
	currentHealth: number;
	tempHealth?: number;
	status: Status[];
	initiative: number;
	spellSlots?: number[];
}

export interface Monster {
	name: string;
	image?: string;
	species: string;
	statBlock: Statblock;
	skills?: string[];
	abilities?: string[];
	actions?: string[];
	exp: number;
	cr: number;
	ac: number;
	description?: string;
	speed: number;
	maxHealth: number;
	currentHealth: number;
	tempHealth?: number;
	status: Status[];
	initiative: number;
	spellSlots?: number[];
	weapon?: Weapon;
	damage?: Damage;
	onHit?: number;
}

export interface Statblock {
	cha: number;
	con: number;
	dex: number;
	int: number;
	str: number;
	wis: number;
}

export interface Skillblock {
	acrobatics: number;
	animalHandling: number;
	arcana: number;
	athletics: number;
	deception: number;
	history: number;
	insight: number;
	intimidation: number;
	investigation: number;
	medicine: number;
	nature: number;
	perception: number;
	performance: number;
	persuasion: number;
	religion: number;
	sleightOfHand: number;
	stealth: number;
	survival: number;
}

export interface Combat {
	encounter: Encounter;
	party: PC[];
}

export interface Damage {
	dice: number;
	amount: number;
	type: DamageTypes;
}
