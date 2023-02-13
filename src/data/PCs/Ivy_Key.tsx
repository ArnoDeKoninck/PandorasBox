import { Classes, Entity, Status } from "../../types/GlobalTypes";

export const Ivy_Key: Entity = {
	name: "Ivy_Key",
	type: "PC",
	size: "Medium",
	image: "",
	class: Classes.SORCERER,
	currentHealth: 8,
	maxHealth: 8,
	ac: 12,
	skills: [
		{ name: "Acrobatics", value: 1 },
		{ name: "Animal Handling", value: 1 },
		{ name: "Arcana", value: 1 },
		{ name: "Athletics", value: 3 },
		{ name: "Deception", value: 3 },
		{ name: "History", value: -1 },
		{ name: "Insight", value: 1 },
		{ name: "Intimidation", value: 3 },
		{ name: "Investigation", value: -1 },
		{ name: "Medicine", value: 1 },
		{ name: "Nature", value: -1 },
		{ name: "Perception", value: 1 },
		{ name: "Performance", value: 3 },
		{ name: "Persuasion", value: 3 },
		{ name: "Religion", value: 1 },
		{ name: "SleightOfHand", value: 1 },
		{ name: "Stealth", value: 1 },
		{ name: "Survival", value: 1 },
	],
	species: "Variant Human",
	speed: 30,
	statBlock: [
		{ name: "Str", value: 8 },
		{ name: "Dex", value: 14 },
		{ name: "Con", value: 14 },
		{ name: "Int", value: 12 },
		{ name: "Wis", value: 10 },
		{ name: "Cha", value: 16 },
	],
	description: "",
	status: [Status.NONE],
	initiative: 0,
	resources: [2],
};