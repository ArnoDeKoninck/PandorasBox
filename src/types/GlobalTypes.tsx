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
export enum Action {
	ACTION,
	BONUSACTION,
	REACTION,
}
export enum Classes {
	ARTIFICER,
	BARBARIAN,
	BARD,
	CLERIC,
	DRUID,
	FIGHTER,
	MONK,
	PALADIN,
	RANGER,
	ROGUE,
	SORCERER,
	WARLOCK,
	WIZARD,
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
