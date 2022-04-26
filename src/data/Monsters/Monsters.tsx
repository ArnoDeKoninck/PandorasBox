import { Monster } from "../../types/GlobalTypes";

export const peasant: Monster = {
	name: "Peasant",
	statBlock: { cha: 0, con: 0, dex: 0, int: 0, str: 0, wis: 0 },
	exp: 10,
	cr: 1,
	maxHealth: 10,
	currentHealth: 10,
	speed: 30,
	initiative: 0,
	species: "human",
	status: [],
	statblock: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
};
export const EnemyList: Monster[] = [peasant];
