import { MartialWeaponList, SimpleWeaponList } from "../../lootTables/weaponTables/WeaponTables";
import { generateRandomWeapon } from "../../services/loot-service/loot-service";
import { Entity } from "../../types/GlobalTypes";
import { Weapon } from "../../types/ItemTypes";

export const animatedArmor: Entity = {
	name: "Animated Armor",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 14 },
		{ name: "Dex", value: 11 },
		{ name: "Con", value: 13 },
		{ name: "Int", value: 1 },
		{ name: "Wis", value: 3 },
		{ name: "Cha", value: 1 },
	],
	skills: [],
	exp: 25,
	cr: 1,
	maxHealth: 33,
	currentHealth: 33,
	speed: 25,
	initiative: 0,
	weapon: generateRandomWeapon(MartialWeaponList) as Weapon,
	species: "construct",
	status: [],
	onHit: 4,
	ac: 18,
	image: "monster_animated_armor_portrait.jpg",
	senses: ["blindsight (60ft)", "passive perception 6"],
	actions: [
		{ name: "Multiattack", description: [<span>Can attack twice</span>] },
		{ name: "Slam", description: [<span>Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.</span>] },
	],
	immunities: ["poison", "psychic", "blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
};

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

export const brownBear: Entity = {
	name: "Brown Bear",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 19 },
		{ name: "Dex", value: 10 },
		{ name: "Con", value: 16 },
		{ name: "Int", value: 2 },
		{ name: "Wis", value: 13 },
		{ name: "Cha", value: 7 },
	],
	skills: [{ name: "Perception", value: 3 }],
	exp: 200,
	cr: 1,
	maxHealth: 34,
	currentHealth: 34,
	speed: 40,
	initiative: 0,
	species: "Beast",
	status: [],
	onHit: 5,
	ac: 18,
	image: "monster_brown_bear_portrait.png",
	senses: ["Passive perception 13"],
	actions: [
		{ name: "Multiattack", description: [<span>Can attack twice</span>] },
		{ name: "Bite", description: [<span>Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d8 + 4) piercing damage.</span>] },
		{ name: "Claws", description: [<span>Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (2d6 + 4) slashing damage.</span>] },
	],
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
	image: "monster_direWolf.jpg",
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
	actions: [
		{ name: "Multiattack (Vampire Form Only)", description: [<span>Strahd makes two attacks, only one of which can be a bite attack.</span>] },
		{
			name: "Unarmed Strike (Vampire or Wolf Form Only)",
			description: [<span>Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, plus 14 (4d6) necrotic damage. If the target is a creature, Strahd can grapple it (escape DC 19) instead of dealing the slashing damage.</span>],
		},
		{
			name: "Bite",
			description: [
				<li>
					Melee Weapon Attack: +11 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. Hit: 8 (1d6 + 5) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage
					taken, and Strahd regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under
					Strahd's control.
				</li>,
			],
		},
		{
			name: "Charm",
			description: [
				<li>
					Strahd targets one humanoid he can see within 30 feet of him. If the target can see Strahd, the target must succeed on a DC 18 Wisdom saving throw against this magic or be charmed. The charmed target regards Strahd as a trusted friend to be heeded and protected. The target isn't under
					Strahd's control, but it takes Strahd's requests and actions in the most favorable way and lets Strahd bite it.
				</li>,
				<li>
					Each time Strahd or his companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until Strahd is destroyed, is on a different plane of existence than the target, or takes a bonus action
					to end the effect.
				</li>,
			],
		},
		{
			name: "Children of the Night (1/Day)",
			description: [
				<li>
					Strahd magically calls 2d4 swarms of bats or swarms of rats, provided that the sun isn't up. While outdoors, Strahd can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of Strahd and obeying his spoken commands. The beasts remain for 1 hour, until Strahd
					dies, or until he dismisses them as a bonus action.
				</li>,
			],
		},
	],
	legendaryActions: [
		{ name: "Move", description: [<li>Strahd moves up to his speed without provoking opportunity attacks.</li>] },
		{ name: "Unarmed Strike", description: [<li>Strahd makes one unarmed strike.</li>] },
		{ name: "Bite (Costs 2 actions)", description: [<li>Strahd makes one bite attack.</li>] },
	],
	lairActions: [
		{ name: "Castle Ravenloft", description: [<li>On initiative count 20 (losing initiative ties), Strahd can take one of the following lair action options, or forgo using any of them in that round:</li>] },
		{ name: "1:", description: [<li>Until initiative count 20 of the next round, Strahd can pass through solid walls, doors, ceilings, and floors as if they weren't there.</li>] },
		{
			name: "2:",
			description: [
				<li>
					Strahd targets any number of doors and windows that he can see, causing each one to either open or close as he wishes. Closed doors can be magically locked (needing a successful DC 20 Strength check to force open) until Strahd chooses to end the effect, or until Strahd uses this lair
					action again.
				</li>,
			],
		},
		{
			name: "3:",
			description: [<li>Strahd summons the angry spirit of one who has died in the castle. The apparition appears next to a hostile creature that Strahd can see, makes an attack against that creature, and then disappears. The apparition has the statistics of a specter.</li>],
		},
		{
			name: "4:",
			description: [
				<li>
					Strahd targets one Medium or smaller creature that casts a shadow. The target's shadow must be visible to Strahd and within 30 feet of him. If the target fails a DC 17 Charisma saving throw, its shadow detaches from it and becomes a shadow that obeys Strahd's commands, acting on initiative
					count 20. A greater restoration spell or a remove curse spell cast on the target restores its natural shadow, but only if its undead shadow has been destroyed.
				</li>,
			],
		},
	],
	maxHealth: 800,
	currentHealth: 800,
	exp: 25000,
	initiative: 5,
	species: "Human Vampire",
	speed: 30,
	status: [],
	image: "strahd_von_zarovich.jpg",
};

export const wolf: Entity = {
	name: "Wolf",
	type: "Monster",
	size: "Medium",
	statBlock: [
		{ name: "Str", value: 12 },
		{ name: "Dex", value: 15 },
		{ name: "Con", value: 12 },
		{ name: "Int", value: 3 },
		{ name: "Wis", value: 12 },
		{ name: "Cha", value: 6 },
	],
	skills: [
		{ name: "Perception", value: 3 },
		{ name: "Stealth", value: 4 },
	],
	abilities: [
		{ name: "Keen Hearing and Smell", description: [<li>Advantage on Perception checks with hearing or smell</li>] },
		{ name: "Pack Tactics", description: [<li>The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.</li>] },
	],
	actions: [{ name: "Bite", description: [<li>Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone</li>] }],
	exp: 50,
	cr: 0.25,
	maxHealth: 13,
	currentHealth: 13,
	speed: 40,
	initiative: 0,
	species: "Beast",
	status: [],
	onHit: 4,
	ac: 13,
	image: "monster_wolf.webp",
};

export const EnemyList: Entity[] = [animatedArmor, bandit, brownBear, direWolf, peasant, scout, strahdVonZarovich, wolf];
