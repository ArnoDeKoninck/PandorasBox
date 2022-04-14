import { Monster } from "./GlobalTypes";

export interface Encounter {
	name: string;
	monster?: Monster;
	image?: string;
	initiative?: number;
	variant?: Encounter_Variant[];
	description?: string;
	savingThrow?: string;
	dc?: number;
	minAmount?: number;
	maxAmount?: number;
	amount?: number;
}
export interface Encounter_Variant extends Encounter {
	name: string;
}
