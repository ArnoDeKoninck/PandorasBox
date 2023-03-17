import { PointOfIntrest } from "src/types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const CR_FirstFloorLocations: PointOfIntrest[] = [
	{
		name: "Entry",
		coordinates: { x: 28.5, y: 51 },
		type: "location",
		note: "The ornate outer doors of the castle hang open, flanked by fluttering torches in iron sconces. Twenty feet inside the castle is a second set of doors.",
		events: [
			<li key={uuid()}>Overhead, in the vaulted entry foyer, four giant lifelike statues of dragons glare down, their eyes flickering in the torchlight.</li>,
			<li key={uuid()}>
				If anyone except Strahd enters this area through the doors that adjoin the great entry, the dragons come alive, drop to the floor hissing and spitting, and attack. The dragons don't attack characters who enter this area from the courtyard, heading east. The dragons are four red dragon
				wyrmlings, and they have instructions to allow guests to enter the castle, but not to leave it. If intruders vacate this area, the dragons fly up to their perches and revert to stone. In their stone forms, they are impervious to weapon damage. The dragons never leave the room.
			</li>,
		],
	},
	//Entry
	{
		name: "Great Entry",
		coordinates: { x: 39.45, y: 50.5 },
		type: "location",
		note: "Marble columns support the vaulted ceiling of a great, adorned hall brightly lit by sputtering torches in iron sconces and a crystal chandelier hanging from the ceiling. Eight stone statues of gargoyles are squatting motionlessly on the rim of the domed ceiling Double doors of bronze stand closed to the east and north. A lit passageway to the south contains another set of bronze doors that are propped open, revealing a large area within.",
	},
	//Guest Hall
	{
		name: "Guest Hall",
		coordinates: { x: 39.45, y: 65 },
		type: "location",
		note: "Candle light flutters against the walls of this massive hall. To the east you see a closed bronze door with the relief of a spiraling staircase depicted on it. ",
	},
	{
		name: "Guest Hall Paintings",
		coordinates: { x: 29.1, y: 61 },
		type: "search",
		note: "On the northern wall just across the beginning of the stairs you see two paintings of Castle Ravenloft, each painted from a different angle.",
	},
	{
		name: "Guest Hall Grand staircase",
		coordinates: { x: 29.1, y: 73 },
		type: "location",
		note: "Nearly blocking the corridor is a large bronze statue of a rider on a horse, its counterpart flanking the grand, carpeted staircase that leads upwards.  Looking up the wide stairway you see that it goes up roughly 10ft and then splits to the east and west. Hanging on the wall on the landing is a large portrait of the man you have come to know as Strahd von Zarovich.",
	},
	{
		name: "Guest Hall Sofa",
		coordinates: { x: 43, y: 70 },
		type: "search",
		note: "To the south a welcoming well-stuffed sofa sits near a corner and a small corridor ending in yet another closed door.",
	},
	{
		name: "Elevator Shaft",
		coordinates: { x: 50.5, y: 61 },
		type: "location",
		note: "Cold air fills this rectangular shaft, the walls of which are coated with mildew and worn smooth. Taut iron chains extend up and down the shaft. The links of the chains are thick and covered with grease.",
	},
	{
		name: "South Tower Stair",
		coordinates: { x: 50.5, y: 67.5 },
		type: "location",
		note: "Fluttering torches in iron sconces illuminate this spiral staircase. A chill wind rushes down the circling stairway, seeming to kill the very heat of the torches.",
	},
	{
		name: "Guards' Stairs",
		coordinates: { x: 43, y: 75.5 },
		type: "location",
		note: "The long, hollow sigh of the wind breathes a semblance of life into this otherwise featureless staircase.",
	},
	//Dining room
	{
		name: "Dining Room",
		coordinates: { x: 30.8, y: 31.8 },
		type: "location",
		note: "Three enormous crystal chandeliers brilliantly illuminate this magnificent chamber. Pillars of stone stand against dull marble white marble walls, supporting the ceiling. In the center of the room, a long, heavy table is covered with a fine white satin cloth. Each of the eighteen seats have neatly set up dining ware placed before it.",
	},
	{
		name: "Dining Room Fireplace",
		coordinates: { x: 43, y: 31.8 },
		type: "search",
		note: "To the right of the entrance is a roaring large fireplace that covers almost the entirety of the wall-section.",
	},
	{
		name: "Dining Room Organ",
		coordinates: { x: 18, y: 31.8 },
		type: "search",
		note: "Opposite of the large dining table at the far end of this room is the source of the music. At the center of the far west wall, between floor-to-ceiling mirrors, stands a massive organ. Its pipes blare out a thunderous melody that speaks in its tone of greatness and despair. Seated at the organ, facing away from you is the Lord of the Castle, pounding the keys in raptured ecstasy. As you take a step further in to the room, he suddenly stops and slowly turns toward you.",
	},
	//Turrets
	{
		name: "Northern Turret Post",
		coordinates: { x: 11.5, y: 24 },
		type: "location",
		note: "A high, domed ceiling caps the thirty-foot-wide octagonal room before you. Against the walls of the tower, frescoes can be seen depicting Strahd von Zarovich and his army batteling against the mountain folk. Their banners are pitch black with the red crest of Ravenloft held high. At certain intervals arrow slits can be seen overlooking the courtyard.",
	},
	{
		name: "Turret Post Access Hall",
		coordinates: { x: 30.8, y: 23.5 },
		type: "location",
		note: "This long, narrow corridor runs east to west. Cobwebs fill the hall, obstructing sight beyond a few feet.",
	},
	{
		name: "Southern Turret Post",
		coordinates: { x: 11.5, y: 78 },
		type: "location",
		note: "A high, domed ceiling caps the thirty-foot-wide octagonal room before you. Against the walls of the tower, frescoes can be seen depicting Strahd von Zarovich on horseback and his army batteling against Bears, werewolves and the forest folk. Their banners are pitch black with the red crest of Ravenloft held high. At certain intervals arrow slits can be seen overlooking the courtyard.",
	},
	//Chapel
	{
		name: "Hall of Faith",
		coordinates: { x: 59.8, y: 50.5 },
		type: "location",
		note: "A prestine hall of black marble continues east. Life-sized white marble statues of knights line the hallway on both sides standing on pedestals. Their eyes seeming to watch you.",
		events: [<li key={uuid()}> Some names on the statue pedestals include: Alek Gwilym, Illya Buchvold, Lord Ivan Buchvold, High Priestess Ilona Darovnya, Tasha Petrovna </li>],
	},
	{
		name: "Chapel",
		coordinates: { x: 78, y: 50.5 },
		type: "location",
		note: "Dim, colored light filters through tall windows of stained glass, illuminating the ancient chapel of Ravenloft. A balcony runs the length of the west wall, fifty feet above the floor. In the center of the balcony are two tall chairs.",
	},
	{
		name: "Chapel Altar",
		coordinates: { x: 88, y: 50.5 },
		type: "search",
		note: "Lit by a piercing shaft of light, an altar stands upon a stone platform. The sides of the altar are carved with bas-reliefs of angelic figures entwined with grape vines. The light from above falls directly on a silver statuette.",
		events: [<li key={uuid()}> The statuette is the icon of Ravenloft (magic item)</li>],
	},
	{
		name: "North Chapel Access",
		coordinates: { x: 70.9, y: 40 },
		type: "location",
		note: "This arched room connects a vast chamber to the east and a staircase that rises to the west. Alcoves in the north and south walls hold eight-foot-tall sculptures of helmed knights with muscular builds.",
	},
	{
		name: "Creaky Landing",
		coordinates: { x: 63.5, y: 42 },
		type: "location",
		note: "This staircase is made of old wood that strains underfoot, creaking and groaning. Can not be suprised",
	},
	{
		name: "South Chapel Access",
		coordinates: { x: 70.9, y: 61 },
		type: "location",
		note: "This small room has two alcoves to the north and south that holds eight-foot-tall sculptures of helmed knights with muscular builds. Black shadows fall across their faces.",
		events: [<li key={uuid()}>A character who inspects the wall closely can spot the chink with a successful DC 10 Wisdom (Perception) check. The western wall can be pushed to open into the staircase behind it.</li>],
	},
	//High Tower
	{
		name: "High Tower Staircase",
		coordinates: { x: 61.7, y: 69.3 },
		type: "location",
		note: "The large flagstones of this spiraling staircase lead up and down around a twenty-foot-wide stone core. Cobwebs fill the staircase, making it difficult to see even the ceiling. Heavy beams sag overhead from centuries of supporting weight.",
	},
	{
		name: "High Tower Shaft",
		coordinates: { x: 61.7, y: 63 },
		type: "location",
		note: "Characters can access this 10-foot-diameter, 390-foot-tall stone shaft from the top or the bottom of the high tower. The shaft is dark and choked with cobwebs. A rushing wind causes the webs to stir. Climbing the shaft is impossible without the aid of magic or the use of a climber's kit, since there are few handholds. The bats in the catacombs fly up the shaft at night, exiting Castle Ravenloft through various arrow slits and holes in the tower's peak. After feeding, they return by the same route.",
	},
	//Heart Of Sorrow
	{
		name: "Heart of Sorrow",
		coordinates: { x: 54, y: 42 },
		type: "location",
		note: "A mosaic floor adds a touch of color to the otherwise dark, cold, empty tower that rises above you. A spiral staircase rises slowly into darkness, hugging the outer wall. In the center of the room, another set of stairs lead down. To the east and west in the northern parts of the room is a door pointing in either direction.",
	},
	{
		name: "Tower Hall Stair",
		coordinates: { x: 56, y: 34 },
		type: "location",
		note: "You see a similar stone staircase with no railing decending into the dark below in the middle of the room.",
	},
	//Servant's wing
	{
		name: "Servants' Entrance",
		coordinates: { x: 66, y: 26 },
		type: "location",
		note: "Dim light filters in through the window in the east wall. A door next to the window leads to the castle's northeast courtyard. There is a heavy table in the center of the floor. A thick book lies open on a desk, with an inkwell and a quill next to it. There is a door in the north and western wall, and a staircase in the south wall plunges into darkness. On each side of the staircase, a skeletal figure draped in gleaming chain mail stands sagging at attention, holding a rusty halberd.",
	},
	{
		name: "Servants' Quarters",
		coordinates: { x: 61.5, y: 18 },
		type: "location",
		note: "Broken furniture and torn cloth are strewn about this twenty-by-forty-foot room. Dim light comes from a pair of dirt-caked windows in the northeast corner. A narrow staircase with no railing ascends along the north wall.",
	},
];
