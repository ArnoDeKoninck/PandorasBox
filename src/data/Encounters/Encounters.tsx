import { Encounter } from "../../types/EncounterTypes";
import { direWolf, peasant } from "../Monsters/Monsters";

export const dayTimeEncounterList: Encounter[] = [
	{
		name: "Barovian",
		variant: [
			{
				name: "Barovian commoners",
				description: "The sound of snapping twigs draws your attention to several dark shapes in the fog. They carry torches and pitchforks.",
				minAmount: 3,
				maxAmount: 18,
				monster: peasant,
			},
			{
				name: "Barovian scouts",
				description: "You see a dark firgure crouched low and perfectly still, aiming a crossbow in you direction. Notes: They drop their weapons upon and approach the party asking to help them find the missing barovians. If they decline they point the party to the nearest settlement and move on.",
				minAmount: 1,
				maxAmount: 6,
				monster: peasant,
			},
		],
	},
	{
		name: "Berserkers",
		description: "They are covered from head to toe in mud and stealthily laying in weight. Notes: Roll stealth with advantage vs a partymembers passive perception.",
		minAmount: 1,
		maxAmount: 4,
	},
	{
		name: "Corpse",
		variant: [
			{
				name: "Wolf corpse",
				description: "The party stumbles on a corpse of a wolf. It's body riddled with crossbow bolts and seemingly stabbed with a spear.",
			},
			{
				name: "Barovian corpse",
				description: "The party stumbles on the corpse of a man, woman or child shredded by Dire Wolves. Note: If the party is accompanied by the barovian scouts, they recognize the corpse as the lost barovian",
			},
			{
				name: "Corpse of a partymember",
				description: "The party finds a corpse on the ground. After coming closer they see it's the absolute resemblance of one of the party members, without armor, weapons or gear. If they touch the corpse it melts infront of their eyes untill nothing but a skeleton remains.",
			},
		],
	},
	{
		name: "Dire Wolves",
		description: "A snarling wolf the size of a grizzly bear steps out of the fog. Notes: Can't be feared or charmed.",
		minAmount: 1,
		maxAmount: 6,
		monster: direWolf,
	},
	{
		name: "False Trail",
		description: "You narrowly spot a small game trail leading off into the mist, no tracks can be seen but it's obvious animals and perhaps the locale populus used to frequent this path at least some time ago. On a failed DC, they fall in a spike pit taking damage.",
		savingThrow: "Survival",
		dc: 15,
	},
	{
		name: "Grave",
		variant: [
			{
				name: "Destroyed grave",
				description: "You find a mud filled hole with rocks and dirt scattered around. Inside the hole you find a few fragments of bones.",
			},
			{
				name: "Destroyed grave",
				description:
					"Contrasting the dark trees and everlasting grey, it's like an oasis in the desert. A bush of bright blood red flowers drape themselves over the cold stone of the grave, almost akin to a mother embracing their child. You lose 2 points of stress, characters can also dig open the grave and find treasure.",
			},
		],
	},
	{
		name: "Hidden bundle",
		description: "The party finds a bundle of barovian clothes wrapped in a bundle of cloth",
	},
	{
		name: "Hunting Trap",
		description: "You spot a wolf trap, it's steel jaws cakes with rust. Someone has carefully hidden the trap under a thin layer of pine needles and detritus.",
		savingThrow: "Survival",
		dc: 15,
	},
	{
		name: "Needle Blights",
		description: "Hunched figures lurch through the mist, their gaunt bodies covered in needles.",
		minAmount: 2,
		maxAmount: 8,
	},
	{
		name: "Scarecrows",
		description: "A scarecrow lurches into view. Its sackcloth eyes and rictus are ripewith malevalonce, and its gut is stuffed with dead ravens. It has long, rusted knives for claws. Notes: DC 11 perception allows the PC to spot them.",
		minAmount: 1,
		maxAmount: 6,
	},
	{
		name: "Skeletal Rider",
		description: "Through the mist comes a skeletal warhorse and a rider, both clad in ruined chainmail. The skeletal rider holds up a rusted lantern that sheds no light. Note: they ignore the party unless attacked.",
	},
	{
		name: "Trinket",
		description: "Roll a single trinket.",
	},
	{
		name: "Twig blights and 1 Druid",
		description: "A gaunt figure with wild hair and bare feet bounds towards you on all fours, wearing a tattered gown of stitched animal skins. It stops for a second to sniff the air before laughing like a lunatic. The ground around it is crawling with tiny twig monsters.",
		minAmount: 2,
		maxAmount: 12,
	},
	{
		name: "Revenant",
		description:
			"A figure walks alone with the stride and bearing of one who knows no fear. Clad in rusty armor, it clutches a gleaming longsword in its pale hand and looks ready for a fight. Notes: DC 10 Insight checks reveal it to be intelligent and full of hate. If the PCs talk with it it reveals he's part of the Order of the Silver Dragon. He tells them to find Vladimir Horngaard in Argynvostholt, and will lead the party there if asked.",
		minAmount: 1,
		maxAmount: 1,
	},
	{
		name: "Ravens",
		variant: [
			{
				name: "Swarms of ravens",
				description: "Your presence in this dreary land has not gone unnoticed. A raven follows you for several minutes while keeping a respectfull distance. Notes: If attacked it flies away, if left alone more swarms gather and help the party in other encounters by distracting their enemies.",
				minAmount: 1,
				maxAmount: 4,
			},
			{
				name: "Wereraven",
				description:
					"Through the mist, you see a black bird circling overhead. When it feels your eyes upon it, the raven flies away, but is soon back, keeping its distance. Notes: If attacked or after a while it leaves. Upon a second encounter it introduces itself and tells the party to go to Vallaki to meet some new friends.",
				minAmount: 1,
				maxAmount: 1,
			},
		],
	},
	{
		name: "Vistani",
		variant: [
			{
				name: "Vistani Bandits",
				description: "Some Mortu are blockingt he roads up ahead, demanding tribute for safe passage.",
				minAmount: 2,
				maxAmount: 5,
			},
		],
	},
	{
		name: "Werewolves",
		description:
			"A deep voice calls out: 'Who goes there?' through the chill mist you see a large man in drab clothing wearing a tattered gray cloak. He has shaggy, Black hair and thick muttonchops. He leans heavily on a spear and has a small bundle of animal pelts slung over his shoulder. Notes: Upon confirming the Party has no silvered weapons he whistles his mates to transform and attack.",
		minAmount: 1,
		maxAmount: 6,
	},
	{
		name: "Wolves",
		description: "A pack of oversized wolves lurk in the mists of the forest. Red Eyes glaring down at you.",
		minAmount: 3,
		maxAmount: 18,
	},
];
