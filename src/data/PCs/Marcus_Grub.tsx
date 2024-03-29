import { Classes, Entity, Status } from "../../types/GlobalTypes";

export const Marcus_Grub: Entity = {
	name: "Marcus Grub",
	type: "PC",
	size: "Medium",
	ac: 16,
	image: "",
	class: Classes.PALADIN,
	currentHealth: 10,
	maxHealth: 10,
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
	species: "Human",
	speed: 30,
	statBlock: [
		{ name: "Str", value: 16 },
		{ name: "Dex", value: 16 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 8 },
		{ name: "Wis", value: 12 },
		{ name: "Cha", value: 12 },
	],
	description: "",
	initiative: 0,
	status: [Status.NONE],
};
