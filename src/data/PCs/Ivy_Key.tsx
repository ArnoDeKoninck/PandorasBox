import { Classes, Entity, Status } from "../../types/GlobalTypes";

export const Ivy_Key: Entity = {
	name: "Ivy_Key",
	type: "PC",
	image: "",
	class: Classes.SORCERER,
	currentHealth: 8,
	maxHealth: 8,
	ac: 12,
	skills: { acrobatics: 2, animalHandling: 0, arcana: 3, athletics: -1, deception: 3, history: 3, insight: 2, intimidation: 3, investigation: 1, medicine: 2, nature: 1, perception: 0, performance: 3, persuasion: 5, religion: 1, sleightOfHand: 2, stealth: 2, survival: 0 },
	species: "Variant Human",
	speed: 30,
	statBlock: { cha: 3, con: 2, dex: 2, int: 1, str: -1, wis: 0 },
	description: "",
	status: [Status.NONE],
	initiative: 0,
	spellSlots: [2],
};
