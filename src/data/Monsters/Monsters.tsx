import { MartialWeaponList, SimpleWeaponList } from "../../lootTables/weaponTables/WeaponTables";
import { generateRandomWeapon } from "../../services/loot-service/loot-service";
import { Entity } from "../../types/GlobalTypes";
import { Weapon } from "../../types/ItemTypes";

export const bandit: Entity = {
	name: "Bandit",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 10 },
		{ name: "Dex", value: 12 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 10 },
		{ name: "Wis", value: 10 },
		{ name: "Cha", value: 10 },
	],
	skills: [],
	exp: 25,
	cr: 0.125,
	maxHealth: 18,
	currentHealth: 18,
	speed: 30,
	initiative: 0,
	weapon: generateRandomWeapon(MartialWeaponList) as Weapon,
	species: "human",
	status: [],
	onHit: 3,
	ac: 12,
	image: "",
};

export const direWolf: Entity = {
	name: "Dire Wolf",
	type: "Monster",
	size: "Large",
	statBlock: [
		{ name: "Str", value: 10 },
		{ name: "Dex", value: 14 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 10 },
		{ name: "Wis", value: 12 },
		{ name: "Cha", value: 10 },
	],
	skills: [
		{ name: "Nature", value: 4 },
		{ name: "Perception", value: 5 },
		{ name: "Stealth", value: 6 },
		{ name: "Survival", value: 5 },
	],
	abilities: [{ name: "Keen Hearing and Sight", description: [<span>"Advantage on Perception checks with hearing or sight"</span>] }],
	actions: [
		{ name: "Multiattack", description: [<span>Can attack twice</span>] },
		{ name: "Melee attack", description: [<span>Shortsword +4 to hit, 1D6+2 Piercing</span>] },
		{ name: "Ranged attack", description: [<span>Longbow +4 to hit, 1D8+2 piercing, 150/600ft</span>] },
	],
	exp: 100,
	cr: 0.5,
	maxHealth: 27,
	currentHealth: 27,
	speed: 30,
	initiative: 0,
	species: "Beast",
	status: [],
	onHit: 4,
	ac: 13,
	image: "",
};

export const peasant: Entity = {
	name: "Peasant",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 10 },
		{ name: "Dex", value: 10 },
		{ name: "Con", value: 10 },
		{ name: "Int", value: 10 },
		{ name: "Wis", value: 10 },
		{ name: "Cha", value: 10 },
	],
	skills: [],
	exp: 10,
	cr: 1,
	maxHealth: 10,
	currentHealth: 10,
	speed: 30,
	initiative: 0,
	species: "human",
	status: [],
	weapon: generateRandomWeapon(SimpleWeaponList) as Weapon,
	onHit: 2,
	ac: 10,
	image: "",
};

export const scout: Entity = {
	name: "Scout",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 10 },
		{ name: "Dex", value: 14 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 10 },
		{ name: "Wis", value: 12 },
		{ name: "Cha", value: 10 },
	],
	skills: [
		{ name: "Nature", value: 4 },
		{ name: "Perception", value: 5 },
		{ name: "Stealth", value: 6 },
		{ name: "Survival", value: 5 },
	],
	abilities: [{ name: "Keen Hearing and Sight", description: [<span> "Advantage on Perception checks with hearing or sight"</span>] }],
	actions: [
		{ name: "Multiattack", description: [<span>Can attack twice</span>] },
		{ name: "Melee attack", description: [<span>Shortsword +4 to hit, 1D6+2 Piercing</span>] },
		{ name: "Ranged attack", description: [<span>Longbow +4 to hit, 1D8+2 piercing, 150/600ft</span>] },
	],
	exp: 100,
	cr: 0.5,
	maxHealth: 27,
	currentHealth: 27,
	speed: 30,
	initiative: 0,
	species: "human",
	status: [],
	onHit: 4,
	ac: 13,
	image: "",
};

export const strahdVonZarovich: Entity = {
	name: "Strahd Von Zarovich",
	type: "Monster",
	size: "Medium",
	alignment: "Lawful Evil",
	ac: 20,
	statBlock: [
		{ name: "Str", value: 20 },
		{ name: "Dex", value: 20 },
		{ name: "Con", value: 16 },
		{ name: "Int", value: 20 },
		{ name: "Wis", value: 15 },
		{ name: "Cha", value: 18 },
	],
	skills: [
		{ name: "Athletics", value: 9 },
		{ name: "Arcana", value: 15 },
		{ name: "Perception", value: 12 },
		{ name: "Religion", value: 10 },
		{ name: "Stealth", value: 14 },
	],
	savingThrows: ["Str +9", "Dex +11", "Wis +8", "Cha +10"],
	resistances: ["Necrotic", "Non-magical attacks"],
	senses: ["Darkvision 120 ft", "Passive Perception: 24"],
	languages: ["Common", "Abyssal", "Draconic", "Elvish", "Giant", "Infernal"],
	cr: 18,
	abilities: [
		{
			name: "Shapechanger",
			description: [
				<span>If Strahd isn't in running water or sunlight, he can use his action to polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back into his true form.</span>,
				<p>
					While in bat or wolf form, Strahd can't speak. In bat form, his walking speed is 5 feet, and he has a flying speed of 30 feet. In wolf form, his walking speed is 40 feet. His statistics, other than his size and speed, are unchanged. Anything he is wearing transforms with him, but nothing
					he is carrying does. He reverts to his true form if he dies.
				</p>,
				<p>
					While in mist form, Strahd can't take any actions, speak, or manipulate objects. He is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and he
					can't pass through water. He has advantage on Strength, Dexterity, and Constitution saving throws, and he is immune to all nonmagical damage, except the damage he takes from sunlight.
				</p>,
			],
		},
		{
			name: "Legendary Resistance (3/Day)",
			description: [<span>If Strahd fails a saving throw, he can choose to succeed instead.</span>],
			amount: 3,
		},
		{
			name: "Misty Escape",
			description: [
				<span>When Strahd drops to 0 hit points outside his coffin, he transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that he isn't in running water or sunlight. If he can't transform, he is destroyed.</span>,
				<p>
					While he has 0 hit points in mist form, he can't revert to his vampire form, and he must reach his coffin within 2 hours or be destroyed. Once in his coffin, he reverts to his vampire form. He is then paralyzed until he regains at least 1 hit point. After 1 hour in his coffin with 0 hit
					points, he regains 1 hit point.
				</p>,
			],
		},
		{
			name: "Regeneration",
			description: [<span>Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in running water or sunlight. If he takes radiant damage or damage from holy water, this trait doesn't function at the start of his next turn.</span>],
		},
		{
			name: "Spellcasting.",
			description: [
				<span>Strahd is an 11th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 19, +12 to hit with spell attacks). He has the following wizard spells prepared:</span>,
				<p>Cantrips (at will): mage hand, prestidigitation, ray of frost</p>,
				<p>1st level (4 slots): comprehend languages, fog cloud, sleep</p>,
				<p>2nd level (3 slots): detect thoughts, gust of wind, mirror image</p>,
				<p>3rd level (3 slots): animate dead, fireball, nondetection</p>,
				<p>4th level (3 slots): blight, greater invisibility, polymorph</p>,
				<p>5th level (2 slots): animate objects, scrying</p>,
				<p>6th level (1 slot): A selection of 6th-level wizard spells. Examples include: arcane gate, magic jar, mass suggestion, programmed illusion, and sunbeam</p>,
			],
		},
		{
			name: "Spider Climb",
			description: [<span>Strahd can climb difficult surfaces, including upside down on ceilings, without having to make an ability check.</span>],
		},
		{
			name: "Vampire Weaknesses",
			description: [
				<span>Strahd has the following flaws:</span>,
				<p> Forbiddance. He can't enter a residence without an invitation from one of the occupants.</p>,
				<p>Harmed by Running Water. He takes 20 acid damage if he ends his turn in running water.</p>,
				<p>Stake to the Heart. If a piercing weapon made of wood is driven into his heart while he is incapacitated in his coffin, he is paralyzed until the stake is removed.</p>,
				<p>Sunlight Hypersensitivity. While in sunlight, Strahd takes 20 radiant damage at the start of his turn, and he has disadvantage on attack rolls and ability checks.</p>,
			],
		},
	],
	actions: [{ name: "Multiattack (Vampire Form Only)", description: [<span>Strahd makes two attacks, only one of which can be a bite attack.</span>] }],
	maxHealth: 800,
	currentHealth: 800,
	exp: 25000,
	initiative: 5,
	species: "Human Vampire",
	speed: 30,
	status: [],
	image: "strahd_von_zarovich.jpg",
};

export const EnemyList: Entity[] = [peasant, scout, strahdVonZarovich];
