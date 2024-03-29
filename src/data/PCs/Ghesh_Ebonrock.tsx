import { Entity, Status } from "../../types/GlobalTypes";

export const Ghesh_Ebonrock: Entity = {
	name: "Ghesh Ebonrock",
	type: "PC",
	size: "Medium",
	image: "ghesh_ebonrock.webp",
	class: "Death Knight",
	currentHealth: 75,
	maxHealth: 75,
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
	species: "Soulbound",
	speed: 25,
	statBlock: [
		{ name: "Str", value: 16 },
		{ name: "Dex", value: 16 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 8 },
		{ name: "Wis", value: 12 },
		{ name: "Cha", value: 12 },
	],
	description: "Ghesh Lore is epic",
	initiative: 5,
	ac: 16,
	status: [Status.NONE],
};
