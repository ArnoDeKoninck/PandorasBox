import { Classes, PC, Status } from "../../types/GlobalTypes";

export const Marcus_Grub: PC = {
	name: "Marcus Grub",
	class: Classes.PALADIN,
	currentHealth: 10,
	maxHealth: 10,
	skills: { acrobatics: 1, animalHandling: 1, arcana: 1, athletics: 3, deception: 3, history: -1, insight: 1, intimidation: 3, investigation: -1, medicine: 1, nature: -1, perception: 1, performance: 3, persuasion: 3, religion: 1, sleightOfHand: 1, stealth: 1, survival: 1 },
	species: "Human",
	speed: 30,
	statblock: { cha: 3, con: 3, dex: 1, int: -1, str: 1, wis: 1 },
	description: "",
	initiative: 0,
	status: [Status.NONE],
};
