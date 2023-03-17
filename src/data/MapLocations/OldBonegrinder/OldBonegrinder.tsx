import { PointOfIntrest } from "../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const OldBonegrinderLocations: PointOfIntrest[] = [
	{
		name: "Old Bonegrinder",
		coordinates: { x: 64.78, y: 89.38 },
		type: "location",
		note: "The onion-domed edifice leans forward and to one side, as though trying to turn away from the stormy gray sky. You see gray brick walls and dirt-covered windows on the upper floors. A decrepit wooden platform encircles the windmill above a flimsy doorway leading to the building's interior. Perched on a wooden beam above the door is a raven. It hops about and squawks at you, seemingly agitated.",
		events: [<li key={uuid()}>A character who succeeds on a DC 12 Wisdom (Insight) check senses that the raven is trying to warn the party. After delivering its message, the raven flies off toward Vallaki, the town in the valley below</li>],
	},
	//Area 01 (First floor)
	{
		name: "Ground Floor ",
		coordinates: { x: 58, y: 78 },
		type: "location",
		note: "A large brick oven takes up most of one side of the room. The oven emits warmth and you can smell something sweet baking inside. Surrounding the oven on some shelves are several jars of condiments and ingredients. There's also a couple rubbish bins filled with animal bones and bits of discarded dough",
		events: [<li key={uuid()}>If the party explores the room: Small human bones litter the flagstone floor.</li>],
	},
	{
		name: "Oven",
		coordinates: { x: 50, y: 79 },
		type: "search",
		note: "Baking in the oven are a dozen dream pastries. Morgantha checks on them every 10 minutes.",
	},
	{
		name: "Barrel",
		coordinates: { x: 54, y: 70 },
		type: "search",
		note: "The barrel holds glistening, greenish-black demon ichor. Morgantha can use the barrel as a font for a scrying spell. She can also knock on the barrel three times as an action to summon a dretch. The demon crawls out of the barrel at the end of Morgantha's turn and obeys the night hag's commands for 1 hour, after which it dissolves into a pool of ichor. Morgantha can summon up to nine dretches in this manner before the ichor is gone.",
	},
	{
		name: "Cabinet",
		coordinates: { x: 50, y: 68 },
		type: "search",
		note: "contains wooden bowls full of herbs and baking ingredients, including flour, sugar, and several gourds of powdered bone. Hanging on the inside of the cabinet doors are a dozen locks of hair. Amid various concoctions are three small, labeled containers that hold elixirs. The first elixir, labeled 'Youth', is a golden syrup that magically makes the imbiber appear younger and more attractive for 24 hours. The second elixir, labeled 'Laughter', is a nonmagical red tea that infects the imbiber with cackle fever(disease). The third elixir, a greenish milky liquid labeled 'Mother's Milk', is actually a dose of pale tincture.(poison)",
	},
	{
		name: "Chicken Coop",
		coordinates: { x: 52, y: 74 },
		type: "search",
		note: "The chicken coop contains three chickens, a rooster, and a few laid eggs.",
	},
	{
		name: "Wooden Trunk",
		coordinates: { x: 48, y: 72 },
		type: "search",
		note: "The wooden trunk has tiny holes bored into its lid and contains a hundred croaking toads. Several toads escape if the lid is lifted, but they are harmless.",
	},
	//Area 02 (Second floor)
	{
		name: "Bone mill",
		coordinates: { x: 81.5, y: 74 },
		type: "location",
		note: "A haggard, heavyset old woman with a face as wrinkled as a boiled apple sweeps the floor, pushing around a few old bones and stirring up a cloud of white dust with her broom. She wears a bloodstained, flour-caked apron. A long, sharp bodkin impales her bundled-up mound of gray hair. The dirt-caked windows allow very little light to enter this eight-foot-high chamber, most of which is taken up by a large millstone connected to a wooden gear shaft that rises through the ceiling in the center of the room. A stone staircase continues up, toward the sound of loud cackling.",
		events: [
			<li key={uuid()}>
				She doesn't mind visitors, as long as they've come to do business. She tries to sell her latest batch of dream pastries, charging 1 gp for each one. She's proud of her confections and claims that she uses only the finest ingredients. If the characters seem uninterested in her wares, she
				bellows, "Begone!" If they attack or refuse to leave, she calls out to her daughters and turns to fight.
			</li>,
		],
	},
	//Area 03 (Third floor)
	{
		name: "Bedroom",
		coordinates: { x: 53.5, y: 28 },
		type: "location",
		note: "Dancing around a thick wooden gear shaft in the center of this cramped, circular room are two ugly young women wearing silk shawls and gowns of stitched flesh. Long needles stick out of their tangled mops of black hair. The women cackle with glee. In a rotting wooden closet are three crates, stacked one atop another, with small doors set into them. Next to the closet is a heap of discarded clothing. A ladder climbs to a wooden trapdoor in the nine-foot-high ceiling. A moldy bed with a tattered canopy stands nearby.",
		events: [
			<li key={uuid()}>The trapdoor leading up can be opened</li>,
			<li key={uuid()}>
				Each crate is 3 feet square. The top one is empty, but the middle and lower ones each contain a captive child. The outward-facing side of each crate is fitted with a small door that has an iron latch and iron hinges. It can be unlatched and opened easily from the outside.
			</li>,
			<li key={uuid()}>
				The two captured children were taken from the village of Barovia after being given to the hags by their parents in exchange for dream pastries. The boy, Freek, is seven years old. The girl, Myrtle, is barely five. Their crates are full of crumbs, as the hags are fattening them up. If freed,
				neither child wants to go home, because of what their parents did. They both speak kindly of Ismark and Ireena in Barovia, hoping to be taken to them.
			</li>,
		],
	},
	{
		name: "Beds",
		coordinates: { x: 51, y: 24 },
		type: "search",
		note: "The hags don't use the bed for sleeping, but they store their treasure in it. Six pieces of cheap jewelry (worth 25 gp each) are stuffed in the moldy straw mattress.",
	},
	//Area 04 (Top floor)
	{
		name: "Domed Attic",
		coordinates: { x: 83, y: 30 },
		type: "search",
		note: "a domed chamber filled with old machinery. There's not much room to move around. Light slips into this attic through small holes in the walls.",
		events: [<li key={uuid()}>Characters searching this space find a few old, abandoned bird's nests.</li>],
	},
];
