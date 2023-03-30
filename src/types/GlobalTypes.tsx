import { Encounter, Encounter_Variant } from "./EncounterTypes";
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

export enum Factions {
	ALL = "All factions",
	RAVENLOFT = "Ravenloft",
	VISTANI = "Vistani",
	BAROVIA = "Barovia",
	KREZK = "Krezk",
	VALLAKI = "Vallaki",
	DARK_POWERS = "Dark Powers",
	MARTIKOVS = "Martikovs",
	ORDER_OF_THE_SILVER_DRAGON = "Order of the Silver Dragon",
	SOULLESS = "Soulless",
	WOR_GOL = "Wor'Gol",
	BEREZ = "Berez",
	OLD_BONEGRINDER = "Old Bonegrinder",
	BELVIEWS = "Belviews",
	KEEPERS_OF_THE_FEATHER = "Keepers of the feather",
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
	HOMEBREW_LYCANTHROPE = "Lycanthrope",
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
export interface Entity {
	name: string;
	type: "PC" | "Monster" | "Npc";
	image: string;
	species: string;
	size: "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";
	ac: number;
	maxHealth: number;
	currentHealth: number;
	speed: number;
	statBlock: AbilityScore[];
	savingThrows?: string[];
	skills: SkillScore[];
	resistances?: string[];
	immunities?: string[];
	senses?: string[];
	languages?: string[];
	cr?: number;
	abilities?: Abilities[];
	actions?: EntityAction[];
	legendaryActions?: EntityAction[];
	lairActions?: EntityAction[];
	status: Status[];
	initiative: number;
	tempHealth?: number;
	resources?: number[];
	alignment?: string;
	description?: string;
	age?: string;
	class?: Classes | string;
	exp?: number;
	weapon?: Weapon;
	damage?: Damage;
	onHit?: number;
	achievements?: [{ name: string; currentValue: number; targetValue: number; reward: string }];
}

export interface Npc {
	name: string;
	image: string;
	species: string;
	age: string;
	alignment: string;
	description: string;
	cr: number;
	tags: Factions[];
}

export interface AbilityScore {
	name: string;
	value: number;
}

export interface SkillScore {
	name: string;
	value: number;
}

export interface Abilities {
	name: string;
	description: JSX.Element[];
	amount?: number;
}

export interface EntityAction {
	name: string;
	description: JSX.Element[];
}

export interface Combat {
	encounter: Encounter;
	party: Entity[];
}

export interface Damage {
	dice: number;
	amount: number;
	type: DamageTypes;
}

export interface Maps {
	name: string;
	img: string;
	locations: PointOfIntrest[];
}

export interface PointOfIntrest {
	name: string;
	coordinates: {
		x: number;
		y: number;
	};
	type: string;
	note: string;
	events?: JSX.Element[];
	flavorText?: JSX.Element[];
}

export interface SessionData {
	combat: Entity[];
	combatTurn: number;
	currentModule: ViewModules;
	encounter: Encounter | Encounter_Variant | undefined;
	enemies: Entity[];
	enemyIndex: number;
	party: Entity[];
	partyLevel: number;
}

export interface SongType {
	tags: string[];
	name: string;
	url: string;
	boss?: string;
}

export interface SoundType {
	name: string;
	url: string[];
}
