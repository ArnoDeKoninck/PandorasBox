import { PointOfIntrest } from "src/types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const CR_SecondFloorLocations: PointOfIntrest[] = [
	{
		name: "Grand Landing",
		type: "location",
		coordinates: { x: 28, y: 76 },
		note: "Ascending the Grand Staircase with its vaulted ceiling, you see the matching staircase from the floor below come up opposite of the hallway. A set of giant double doors stand open to the north, the wall to the south has two painted portraits of a man and a woman in regal clothing, an enormous candelabra illuminating the entryway. The audience hall lay before you to the north. These are supposed to be portraits of the late King Barov and Queen Ravenovia.",
	},
	{
		name: "Audience Hall",
		type: "location",
		coordinates: { x: 28, y: 63 },
		note: "This large hall is lined with white marble pillars reaching the ceiling lined with shining crystal candelabra. At the north of the hall, raised from the floor by a few stone steps you can see a large, tall backed, obsidian throne overlooking the entirety of the Audience Hall. Flanking the throne are two half circles filled with candles and behind them two giant statues depicting gargoyles. Two large red drapes can be seen behind them, showing hints of a doorway.",
	},
	{
		name: "Guard's Post",
		type: "location",
		coordinates: { x: 37.25, y: 48 },
		note: "You can’t help but feel the layout of this L-shaped corridor is somewhat odd. There are three doors leading out of this room. A set of large double doors to the east as well as two smaller doors to the north and southwest. At each end of the corridor, floating in the darkness, is a set of knight armor seemingly standing guard.",
	},
	{
		name: "King's Hall",
		type: "location",
		coordinates: { x: 51.7, y: 50 },
		note: "This twenty-foot-high hall has an arched ceiling. Standing guard are several of the same armorstands found throughout the castle.",
	},
	{
		name: "King's Hall Secret Passage",
		type: "search",
		coordinates: { x: 51.7, y: 54 },
		note: "An iron torch holder is bolted to the wall here. Pulling on it reveals a secret passage behind it.",
	},
	{
		name: "King's Balcony",
		type: "location",
		coordinates: { x: 70, y: 50 },
		note: "A sculpted stone railing encloses this long balcony, which overlooks Ravenloft's chapel. Two ornate thrones stand side by side in the center of the balcony, The thrones face away from the double doors that give access to the balcony.",
	},
	{
		name: "Creaky Landing",
		type: "location",
		coordinates: { x: 70, y: 50 },
		note: "This staircase is made of old wood that strains underfoot, creaking and groaning. King's Balcony can not be suprised by whoever uses these stairs.",
	},
	{
		name: "King's Accountant",
		type: "location",
		coordinates: { x: 41, y: 64 },
		note: "Dusty scrolls and tomes line the walls of this room. More scrolls and books lie scattered on the floor, around four heavy wooden chests fitted with study iron locks. The only unobstructed floor space is directly in front of the door on the east wall and against the wall opposite to the west. Even the door to the north has a bunch of paper strewn before it. In the center of this clutter stands a great black desk. A figure crouches atop a tall stool, scratching on a seemingly endless scroll of paper with a dry quill pen. Nearby a tasseled rope hangs from a hole in the ceiling.",
		events: [
			<li key={uuid()}>The figure is Lief Lipsiege, an accountant. He is chained to the heavy wooden desk and has no interest in the characters or their concerns. Under no circumstances does he voluntarily leave the room. Lief pulls the rope the instant he feels threatened</li>,
			<li key={uuid()}>
				Pulling the rope requires an action. When the rope is pulled, a tremendously loud gong sounds. One or more creatures arrive 1d6 rounds later, attacking any characters still in the room. Determine the creatures randomly by rolling a d4. (1: 1-6 shadows, 2: 1-4 vampire spawn, 3: 1-4 wights, 4:
				1 wraith and 2-4 spectres)
			</li>,
		],
	},
	{
		name: "Accountant chests",
		type: "search",
		coordinates: { x: 41, y: 69 },
		note: "Spending 10 minutes looking around and succeeding a DC 15(Investigation) check reveals a book with a bloodstained leather cover. It appears to be hollow on the inside and has a secret compartement with the key to the chests inside.",
		events: [<li key={uuid()}>Two chests contain 10.000 copper pieces each.</li>, <li key={uuid()}>One chest contains 1.000 gold pieces</li>, <li key={uuid()}>The fourth chest contains 500 platinum pieces and a manual of bodily health.</li>],
	},
	{
		name: "Lief's Bedchambers",
		type: "location",
		coordinates: { x: 42, y: 57 },
		note: "A dark, dusty bedchamber with a stone-slab bed and a thin hay-filled mattress sit by the northwestern corner. The thick layer of dust tells you that no person has gone into the eastern parts of this room in a long time. Lief’s chains reach far enough so that he can lay down on the bed to sleep, but they are too short for him to reach the other end of the room, hence why it seems so untouched.",
	},
	{
		name: "Elevator Trapworks",
		type: "location",
		coordinates: { x: 50, y: 58 },
		note: "The aromas of grease and well-oiled wood hit your nostrils as you pull open the door. This ten-by-twenty-foot room is filled with intricate machinery, except for small spaces between the stone gears and the iron chains and pulleys. On the other side of the machinery, to the south, is a rectangular shaft that rises up from the darkness and continues past this room. Attached to the west wall is a steel plate that has an iron lever protruding downward.",
		events: [
			<li key={uuid()}>A character can spend 1 minute disabling the machinery in this room. The elevator trap won't function until the machinery is repaired.</li>,
			<li key={uuid()}>The iron lever set into the western wall is normally in the "down" position. Moving it to the "up" position activates the trap and raises the elevator. Sliding it back down lowers the elevator and resets the trap. </li>,
			<li key={uuid()}>When the elevator trap in the basement is activated, all the chains, pulleys, and gears in this room move at once. It takes 10 seconds (1 round) for the elevator to reach the top of the shaft, and the machinery doesn't stop until the elevator completes its journey.</li>,
		],
	},
	{
		name: "Maid In Hell",
		type: "location",
		coordinates: { x: 64, y: 26 },
		note: "Oil lamps illuminate these servant sleeping quarters. Eight canopied beds stand along the walls, a larger, two-person bed is crammed into a small alcove with a pair of drapes hanging in front of the opening, preventing too much insight but not blocking it completely. The figure of a woman moves lithely about the room, dusting furniture and humming quietly. Around her pale slender neck is a gold necklace with a ruby pendant.",
		events: [
			<li key={uuid()}>The maid, Helga Ruvak, is a vampire spawn who claims to be the daughter of the village bootmaker, kidnapped and forced into service by Strahd. She pleads, on her hands and knees if necessary, to be saved from this awful place.</li>,
			<li key={uuid()}>Helga will join the party if the characters ask her along. She intends to attack the characters but does so only if she senses an opportunity that doesn't involve having to fight the entire party. She also attacks if commanded to do so by Strahd.</li>,
			<li key={uuid()}>Helga plays the part of the innocent damsel in distress to the last, revealing her ferocity only when she attacks. She is, in fact, the bootmaker's daughter she claims to be, but she chose a life of evil with Strahd.</li>,
			<li key={uuid()}>Helga's gold necklace with its ruby pendant is a gift from Strahd. The necklace is almost five centuries old and is worth 750 gp. (or Necklace of Fireball 3 charges)</li>,
		],
	},
	{
		name: "King's Appartement Stairs",
		type: "location",
		coordinates: { x: 37, y: 28 },
		note: "This arched corridor has been swept clean. Oak paneling decorates the walls to a height of four feet. Mounted on the east wall above the wood paneling are three unlit oil lamps spaced ten feet apart. A plain wooden door is set into the west wall, and light seeps through its cracks. A staircase at the north end of the west wall ascends into darkness.",
	},
	{
		name: "Servant's Upper Floor",
		type: "location",
		coordinates: { x: 62, y: 17 },
		note: "Dirt-caked windows allow little light to enter this upstairs room. Broken bed frames and torn bits of mattress litter the floors. A tall, dusty wardrobe roughly shaped like a coffin, its black doors painted with fey creatures, stands between two cracked, full-length mirrors hanging on the south wall. A staircase descends along the north wall.",
		events: [<li key={uuid()}> A plain white dress yellowed with age flies out of the wardrobe and begins to dance in the middle of the room. The dress flaps around to the music of the storm.</li>],
	},
	{
		name: "Servant's Upper Floor Secret Door",
		type: "search",
		coordinates: { x: 57, y: 22 },
		note: "Set into the south wall, behind the hanging mirror west of the wardrobe, is a secret door. It can be pulled open to reveal a closet choked with dust and cobwebs and that contains a wooden ladder that leads up 20 feet to another secret door in the tower stairway",
	},
	{
		name: "Queen's Bedchamber",
		type: "location",
		coordinates: { x: 25, y: 34 },
		note: "You step into a grand bedchamber fit for royalty. The place is spotless and free from dust. The furniture seems old but not worn. There is a smell of flowery incense lingering in the room. To the east, opposite a door that leads westward, is a large bed with a vanity table along the wall. A sitting area can be found in the southern parts of the room just before a doorway leading south.",
	},
	{
		name: "Queen's Bath",
		type: "location",
		coordinates: { x: 11.4, y: 23.25 },
		note: "A skeleton draped in cloth stands at the south end of a short hallway. To the north, visibility is a little impaired because of hot steam rising from a large stone pool filled with warm water. A small gargoyle fountain pours water into it in a steady stream. The air is incredibly humid, and the walls are wet because of it. A closed door to the east by the bath is full of water beads trickling down its blackened wood.",
	},
];
