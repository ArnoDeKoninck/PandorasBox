import { DamageTypes } from "../../types/GlobalTypes";
import { Weapon } from "../../types/ItemTypes";

export const SimpleWeaponList: Weapon[] = [
	{
		name: "Club",
		range: 5,
		tags: ["Light"],
		price: "1sp",
		weight: 1,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Dagger",
		range: 20,
		maxRange: 60,
		tags: ["Finesse", "Light", "Thrown"],
		price: "2gp",
		weight: 0.5,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
	{
		name: "Dart",
		range: 20,
		maxRange: 60,
		tags: ["Finesse", "Thrown"],
		price: "5cp",
		weight: 0.125,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
	{
		name: "Greatclub",
		range: 5,
		tags: ["Two-handed"],
		price: "2sp",
		weight: 5,
		damage: {
			dice: 8,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Handaxe",
		range: 20,
		maxRange: 60,
		tags: ["Light", "Thrown"],
		price: "5gp",
		weight: 1,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.SLASHING,
		},
	},
	{
		name: "Javelin",
		range: 30,
		maxRange: 120,
		tags: ["Thrown"],
		price: "5sp",
		weight: 1,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
	{
		name: "Light Crossbow",
		range: 80,
		maxRange: 320,
		tags: ["Ammunition", "Loading", "Two-handed"],
		price: "25gp",
		weight: 2.5,
		damage: {
			dice: 8,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
	{
		name: "Light Hammer",
		range: 20,
		maxRange: 60,
		tags: ["Light", "Thrown"],
		price: "5gp",
		weight: 1,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Mace",
		range: 5,
		tags: [""],
		price: "5gp",
		weight: 2,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Quarterstaff",
		range: 5,
		tags: ["Versatile"],
		price: "2sp",
		weight: 2,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Shortbow",
		range: 80,
		maxRange: 320,
		tags: ["Ammunition", "Two-handed"],
		price: "25gp",
		weight: 1,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Sickle",
		range: 5,
		tags: ["Light"],
		price: "1gp",
		weight: 1,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
	{
		name: "Sling",
		range: 30,
		maxRange: 120,
		tags: ["Ammunition"],
		price: "1sp",
		weight: 0.125,
		damage: {
			dice: 4,
			amount: 1,
			type: DamageTypes.BLUDGEONING,
		},
	},
	{
		name: "Spear",
		range: 20,
		maxRange: 60,
		tags: ["Versatile", "Thrown"],
		price: "1gp",
		weight: 1.5,
		damage: {
			dice: 6,
			amount: 1,
			type: DamageTypes.PIERCING,
		},
	},
];

export const MartialWeaponList: Weapon[] = [
	{
		name: "Battleaxe",
		price: "10gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.SLASHING,
		},
		weight: 2,
		tags: ["Versatile"],
		range: 5,
	},
	{
		name: "Blowgun",
		price: "10gp",
		damage: {
			amount: 1,
			dice: 4,
			type: DamageTypes.PIERCING,
		},
		weight: 0.5,
		tags: ["Ammunition", "Loading"],
		range: 25,
		maxRange: 100,
	},
	{
		name: "Flail",
		price: "10gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.BLUDGEONING,
		},
		weight: 1,
		tags: [""],
		range: 5,
	},
	{
		name: "Glaive",
		price: "20gp",
		damage: {
			amount: 1,
			dice: 10,
			type: DamageTypes.SLASHING,
		},
		weight: 3,
		tags: ["Heavy", "Reach", "Two-handed"],
		range: 10,
	},
	{
		name: "Greataxe",
		price: "30gp",
		damage: {
			amount: 1,
			dice: 12,
			type: DamageTypes.SLASHING,
		},
		weight: 3.5,
		tags: ["Heavy", "Two-handed"],
		range: 5,
	},
	{
		name: "Greatsword",
		price: "50gp",
		damage: {
			amount: 2,
			dice: 6,
			type: DamageTypes.SLASHING,
		},
		weight: 3,
		tags: ["Heavy", "Two-handed"],
		range: 5,
	},
	{
		name: "Halberd",
		price: "20gp",
		damage: {
			amount: 1,
			dice: 10,
			type: DamageTypes.SLASHING,
		},
		weight: 3,
		tags: ["Heavy", "Reach", "Two-handed"],
		range: 10,
	},
	{
		name: "Hand Crossbow",
		price: "75gp",
		damage: {
			amount: 1,
			dice: 6,
			type: DamageTypes.PIERCING,
		},
		weight: 1.5,
		tags: ["Ammunition", "Light", "Loading"],
		range: 30,
		maxRange: 120,
	},
	{
		name: "Heavy Crossbow",
		price: "50gp",
		damage: {
			amount: 1,
			dice: 10,
			type: DamageTypes.PIERCING,
		},
		weight: 9,
		tags: ["Ammunition", "Heavy", "Two-handed", "Loading"],
		range: 100,
		maxRange: 400,
	},
	{
		name: "Lance",
		price: "10gp",
		damage: {
			amount: 1,
			dice: 12,
			type: DamageTypes.PIERCING,
		},
		weight: 3,
		tags: ["Reach", "Special"],
		range: 10,
	},
	{
		name: "Longbow",
		price: "50gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.PIERCING,
		},
		weight: 1,
		tags: ["Ammunition", "Heavy", "Two-handed"],
		range: 150,
		maxRange: 600,
	},
	{
		name: "Longsword",
		price: "15gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.SLASHING,
		},
		weight: 1.5,
		tags: ["Versatile"],
		range: 5,
	},
	{
		name: "Maul",
		price: "10gp",
		damage: {
			amount: 2,
			dice: 6,
			type: DamageTypes.BLUDGEONING,
		},
		weight: 5,
		tags: ["Heavy", "Two-handed"],
		range: 5,
	},
	{
		name: "Morningstar",
		price: "15gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.PIERCING,
		},
		weight: 2,
		tags: [""],
		range: 5,
	},
	{
		name: "Pike",
		price: "5gp",
		damage: {
			amount: 1,
			dice: 10,
			type: DamageTypes.PIERCING,
		},
		weight: 9,
		tags: ["Heavy", "Reach", "Two-handed"],
		range: 10,
	},
	{
		name: "Rapier",
		price: "25gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.PIERCING,
		},
		weight: 1,
		tags: ["Finesse"],
		range: 5,
	},
	{
		name: "Scimitar",
		price: "25gp",
		damage: {
			amount: 1,
			dice: 6,
			type: DamageTypes.SLASHING,
		},
		weight: 1.5,
		tags: ["Finesse", "Light"],
		range: 5,
	},
	{
		name: "Shortsword",
		price: "10gp",
		damage: {
			amount: 1,
			dice: 6,
			type: DamageTypes.PIERCING,
		},
		weight: 1,
		tags: ["Finesse", "Light"],
		range: 5,
	},
	{
		name: "Trident",
		price: "5gp",
		damage: {
			amount: 1,
			dice: 6,
			type: DamageTypes.PIERCING,
		},
		weight: 2,
		tags: ["Thrown", "Versatile"],
		range: 20,
		maxRange: 60,
	},
	{
		name: "War Pick",
		price: "5gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.PIERCING,
		},
		weight: 1,
		tags: [""],
		range: 5,
	},
	{
		name: "Warhammer",
		price: "15gp",
		damage: {
			amount: 1,
			dice: 8,
			type: DamageTypes.BLUDGEONING,
		},
		weight: 2,
		tags: ["Versatile"],
		range: 5,
	},
	{
		name: "Whip",
		price: "2gp",
		damage: {
			amount: 1,
			dice: 4,
			type: DamageTypes.SLASHING,
		},
		weight: 1.5,
		tags: ["Finesse", "Reach"],
		range: 5,
	},
];
