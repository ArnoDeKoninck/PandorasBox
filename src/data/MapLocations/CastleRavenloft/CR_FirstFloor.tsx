import { PointOfIntrest } from "src/types/GlobalTypes";

export const CR_OutsideLocations: PointOfIntrest[] = [
	{
		name: "Gate Tower",
		coordinates: { x: 4, y: 41 },
		type: "location",
		note: "Each outer gate tower has an ironbound door with a built-in lock. Characters who enter a gate tower find themselves on a flagstone floor with a hollow tower stretching high above them. The mechanisms for raising and lowering the drawbridge and portcullis fill both gate towers. The latch mechanism in each tower is magically activated by a word that only Strahd knows. It can also be activated with a successful casting of dispel magic (DC 14). Neither the drawbridge nor the portcullis will move until both latches are activated.",
	},
	{
		name: "Gate Tower",
		coordinates: { x: 4, y: 55 },
		type: "location",
		note: "Each outer gate tower has an ironbound door with a built-in lock. Characters who enter a gate tower find themselves on a flagstone floor with a hollow tower stretching high above them. The mechanisms for raising and lowering the drawbridge and portcullis fill both gate towers. The latch mechanism in each tower is magically activated by a word that only Strahd knows. It can also be activated with a successful casting of dispel magic (DC 14). Neither the drawbridge nor the portcullis will move until both latches are activated.",
	},
	{
		name: "Courtyard",
		coordinates: { x: 21, y: 47.5 },
		type: "location",
		note: "Thick, cold fog swirls in this courtyard. Sporadic flashes of lightning lance the weeping clouds overhead as thunder shakes the ground. Through the drizzle, you see torch flames fluttering on each side of the keep's open main doors. Warm light spills out of the entrance, flooding the courtyard. High above the entrance is a round window with shards of broken glass lodged in its iron frame. Each step you take make an audible ‘crunch’ as the mists part from the ground you see that you are walking on a pathway of bones. There must be hundreds of skeletons under your feet.",
	},
	{
		name: "Center Court Gate",
		coordinates: { x: 51, y: 17 },
		type: "location",
		note: "A massive wall juts out to connect the outer walls of the castle with the keep. A twenty-foot-wide, twenty-foot-tall archway offers passage through the connecting wall but is blocked by a rusting iron portcullis.",
	},
	{
		name: "Center Court Gate",
		coordinates: { x: 51, y: 79 },
		type: "location",
		note: "A massive wall juts out to connect the outer walls of the castle with the keep. A twenty-foot-wide, twenty-foot-tall archway offers passage through the connecting wall but is blocked by a rusting iron portcullis.",
	},
	{
		name: "Farm Patch",
		coordinates: { x: 74.5, y: 74.5 },
		type: "location",
		note: "This corner of the court has a small patch of farmland. Through the mist what first come into view is a haphazardly put-up scarecrow. A few heads of salads are poking out of the ground. As you get closer you start to see body parts sticking out from under the tilled soil. And there are skulls at the center of each salad, as if they’ve grown that way. On the southern end you see body-shaped packages stacked on top of each other. Probably more ‘fertilizer’.",
	},
	{
		name: "Servant's Courtyard",
		coordinates: { x: 69, y: 25 },
		type: "location",
		note: "This courtyard northeast of the keep is enclosed by towering walls. A multitude of colorful tents can be seen propped up against along the walls. A stone carriage house with hinged wooden doors stands silent in the corner where the outer walls meet in stark contrast to the group of men sitting around a campfire just south of it, singing and drinking. Across from the carriage house, a slender wooden door reinforced with iron bands leads into the keep.",
	},
	{
		name: "Carriage House",
		coordinates: { x: 74, y: 18 },
		type: "location",
		note: "The double doors swing open to reveal 3 sleek, black carriages fitted with glass windows and brass lanterns.",
	},
	{
		name: "Chapel Garden",
		coordinates: { x: 81, y: 49 },
		type: "location",
		note: "At the back of the keep, behind towering buttresses and tall, boarded-up stained-glass windows, a lush oasis spreads out. Roses cover the walls, clinging on to every brick. At the center, in a cracked fountain sits the largest, most beautiful flower you have ever seen.",
	},
	{
		name: "Overlook",
		coordinates: { x: 81, y: 49 },
		type: "location",
		note: "Dark clouds overhead drizzle constantly. A flagstone avenue passes between empty outbuildings, leading to a stone-paved overlook. The overlook has a low stone wall adorned with outward-facing gargoyle carvings.",
		events: [
			<li>on inspection: A flash of lightning illuminates the dismal village of Barovia, its rooftops visible above a smothering blanket of fog one thousand feet below.</li>,
			<li>If they have 15 passive perception: Underneath the platform on which you stand, about one hundred feet down, a stone construction protrudes from the cliff face. Three dirt-caked windows are set into it.</li>,
		],
	},
	{
		name: "Entry",
		coordinates: { x: 35, y: 47 },
		type: "location",
		note: "The ornate outer doors of the castle hang open, flanked by fluttering torches in iron sconces. Twenty feet inside the castle is a second set of doors.",
	},
];

export const CR_FirstFloorLocations: PointOfIntrest[] = [
	{
		name: "Entry",
		coordinates: { x: 35, y: 47 },
		type: "location",
		note: "The ornate outer doors of the castle hang open, flanked by fluttering torches in iron sconces. Twenty feet inside the castle is a second set of doors.",
	},
];
