import { Damage, SavingThrows } from "./GlobalTypes";

export interface Item {
	name: string;
	description?: string;
	variant?: Item_variant[];
	spellScroll?: boolean;
	weight?: string;
	uses?: number;
	link?: string;
	amount?: number;
	savingThrow?: SavingThrows;
	dc?: number;
	onPass?: string;
	onFail?: string;
}
export interface Item_variant extends Item {
	name: string;
}
export interface LootTable {
	name: string;
	table: Item[];
}

export interface Weapon {
	name: string;
	tags: string[];
	range: number;
	maxRange?: number;
	price?: string;
	weight: number;
	damage: Damage;
}
