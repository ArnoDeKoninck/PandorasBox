import { PointOfIntrest } from "../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const VallakiLocations: PointOfIntrest[] = [
	{
		name: "Church of Saint Andral",
		coordinates: { x: 38, y: 51 },
		type: "location",
		note: "This slouching, centuries-old stone church has a bulging steeple in the back and walls lined with cracked, stained glass windows depicting pious saints. A fence of wrought iron encloses a garden of gravestones next to the church. A thin mist creeps among the graves.",
	},
	{
		name: "Blue Water Inn",
		coordinates: { x: 61, y: 47 },
		type: "tavern",
		note: "Gray smoke issues from the chimney of this large, two-story wooden building with a stone foundation and sagging tile roof, upon which several ravens have perched. A painted wooden sign hanging above the main entrance depicts a blue waterfall.",
	},
	{
		name: "Burgomaster's Mansion",
		coordinates: { x: 56, y: 63 },
		type: "location",
		note: "This mansion has walls of plastered stone that display many scars where the plaster has fallen away from age and neglect. Drapes cover every window, including a large, arched opening above the mansion's double entrance doors.",
	},
	{
		name: "Wachterhaus",
		coordinates: { x: 66, y: 41 },
		type: "location",
		note: "This house seems disgusted with itself. A slouching roof hangs heavy over furrowed gables, and moss-covered walls sag and bulge under the weight of the vegetation. As you study the house's sullen countenance, you hear the edifice actually groan. Only then do you realize the extent to which the house hates what it has become.",
	},
	{
		name: "Arasek Stockyard",
		coordinates: { x: 84, y: 60 },
		type: "location",
		note: "This large stockyard has several locked sheds along its periphery and lies adjacent to a roomy warehouse. A wooden sign above the front gate reads 'Arasek Stockyard'. Parked at the south end of the stockyard is a sturdy carnival wagon, its colorful paint peeling off. Faded lettering on its sides spells out the words 'Rictavio's Carnival of Wonders.' A heavy padlock secures the back door.",
	},
	{
		name: "The Last Rite, Coffin shop",
		coordinates: { x: 73, y: 62 },
		type: "shop",
		note: "This uninviting shop is two stories tall and has a sign shaped like a coffin above the front door. All of the window shutters are closed up tight, and a deathly silence surrounds the establishment.",
	},
	{
		name: "Blinsky's Toys",
		coordinates: { x: 61, y: 65 },
		type: "shop",
		note: "This cramped shop has a dark entrance portico, above which hangs a wooden sign shaped like a rocking horse, with a 'B' engraved on both sides. Flanking the entrance are two arched, lead-framed windows. Through the dirty glass, you see jumbled displays of toys and hanging placards bearing the slogan 'Is No Fun, Is No Blinsky!'",
	},
	{
		name: "Town Square",
		coordinates: { x: 68, y: 60 },
		type: "location",
		note: "This large stockyard has several locked sheds along its periphery and lies adjacent to a roomy warehouse. A wooden sign above the front gate reads 'Arasek Stockyard'. Parked at the south end of the stockyard is a sturdy carnival wagon, its colorful paint peeling off. Faded lettering on its sides spells out the words 'Rictavio's Carnival of Wonders.' A heavy padlock secures the back door.",
	},
	{
		name: "Thimdul's Armaments",
		coordinates: { x: 59, y: 48 },
		type: "shop",
		note: "Piersym Rowley and his shopkeep assistants run a leather workin shop and blacksmith here. He is a, nearly blind, grizzled veteran of a master weaponsmith who apprenticed under an elderly dwarven smith named Thimdul. Thimdul died of old age many years ago.",
		events: [
			<p id={uuid()}>If players inquere about fletching supplies, the local general store has a stock made by the dusk elves.</p>,
			<p id={uuid()}>If players say they are with the burgomaster, he sells them weapons that break when rolling below a 6 on attack at 130% the normal rates.</p>,
			<p id={uuid()}>If players say they are against the burgomaster, he sells them +1 attack weapons at 70% the normal cost.</p>,
		],
	},
	{
		name: "The Third Eye Potions and Sundries",
		coordinates: { x: 80, y: 45 },
		type: "shop",
		note: "Anya, the apothecar stands tall under societal pressures and has proven her worth with her craft. She buys, sells, and trades unique potion ingredients, including plant and monster parts. Her father was a Mortu and died when she was young and was raised mostly by her vallakian mother.",
	},
	{
		name: "The Dusk Light Supply Shop",
		coordinates: { x: 61, y: 52 },
		type: "shop",
		note: "Bethel is the shopowner and easily haggled and deathly afraid of Strahd. This place sells a menagerie of standard craftwork gear, including rope, candles, torches, lanterns, crowbars and most standard adventuring equipment. In general, imagine anything that might be used to build houses or patch wagons and your players can find it here.",
	},
	{
		name: "Yonvich and Sons",
		coordinates: { x: 66, y: 55 },
		type: "shop",
		note: "Owned by an elderly man named Yonvich and his three sons, Yonvi, Sven and Yenva.  These guys serve more as a printing press which they use to copy books for more production, as well as bookbinders. They have a plethora of parchment, calligrapher's tools, empty journals and other such items available for sale.",
	},
	{
		name: "The Beast's Rose",
		coordinates: { x: 64, y: 50 },
		type: "shop",
		note: "Gili and Lottie own this clothing store. Gili is a giant burly intimidating looking man but he's actually a giant teddy bear.",
	},
	{
		name: "St.Andrals Orphanage",
		coordinates: { x: 63, y: 71 },
		type: "location",
		note: "Bildrath Cantemir founded the orphanage thirty years ago with Claudio Belasco as the primary caretaker. The orphanage has seen many kids come and go over the years.",
	},
	{
		name: "The Vallaki Reformation Center",
		coordinates: { x: 62, y: 19 },
		type: "location",
		note: "This is the place where those who break Vallaki's laws are sent to get rehabilitated and incarcerated.",
	},
];
