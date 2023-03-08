import { PointOfIntrest } from "../../../types/GlobalTypes";

export const BaroviaLocations: PointOfIntrest[] = [
	{
		name: "Death House",
		coordinates: { x: 88.8, y: 52.5 },
		type: "location",
		note: "The gravel road leads to a village, its tall houses dark as tombstones. Nestled among these solemn dwellings are a handful of closed-up shops. Even the tavern is shut tight. A soft whimpering draws your eye toward a pair of children standing in the middle of an otherwise lifeless street.",
	},
	{
		name: "Old Svalich Road",
		coordinates: { x: 95.12, y: 52 },
		type: "location",
		note: "Black pools of water stand like dark mirrors in and around the muddy roadway. Giant trees loom on both sides of the road, branches clawing at the mist.",
	},
	{
		name: "Gates of Barovia",
		coordinates: { x: 92.2, y: 51 },
		type: "location",
		note: "The fog spills out of the forest to swallow up the road behind you. Ahead, jutting from the impenetrable woods on both sides of the road, are high stone buttresses looming gray in the fog. Huge iron gates hang on the stonework. Dew clings with cold tenacity to the rusted bars. Two headless statues of armed guardians flank the gate, their heads now lying among the weeds at their feet. They greet you only with silence.",
	},
	{
		name: "Svalich Woods",
		coordinates: { x: 91, y: 58 },
		type: "location",
		note: "Towering trees, whose tops are lost in heavy grey mist, block out all but a death-grey light. The tree trunks are unnaturally close to one another, and the woods have the silence of a forgotten grave, yet exude the feeling of an unvoiced scream.",
		events: [
			<li key="passive perception">
				PC with the highest passive perception notices a scent of death in the air. If the party follows it read:
				<p>
					"The foul scent leads you to a human corpse half-buried in the underbrush about fifteen feet from the road. The young man appears to be a commoner. His muddy clothes are torn and raked with claw marks. Crows havebeen at the body, which is surrounded by paw prints. The man has obviously
					been dead for several days. He holds a crumpled envelope in one hand."
				</p>
				The letter has a large wax seal with a "B" stamped in it. The parchment is worn and flimsy. If opened give the party handout "Kolyan Indirovich Letter (Version 2). The letter is dated a week ago.
			</li>,
			<li key="overstaying the forest" style={{ marginTop: "1rem" }}>
				If the party lingers in the woods a wolf howl is heard. Every round another wolf adds to the howling and appears to be getting closer. After 5 rounds, triggers an encounter with 5 Dire wolves. If the party tries to leave Barovia, the Dire wolves are joined by a pack of 20 wolves. They stop
				chasing the party if the party seems to be returning to the road and in the direction of the village of Barovia.
			</li>,
		],
	},
	{
		name: "River Ivlis",
		coordinates: { x: 87.2, y: 68 },
		type: "location",
		note: "This river flows as clear as a blue winter sky through the valley. It's 50 feet wide with depths from 5 to 10 feet with two bridges to cross it. One near the village of Barovia, one near Tser falls.",
	},
	{
		name: "The village of Barovia",
		coordinates: { x: 76, y: 57 },
		type: "village",
		note: "Tall shapes loom out of the dense fog that surrounds everything. The muddy ground underfoot gives way to slick, wet cobblestones. The tall shapes become recognizable as village dwellings. The windows of each house stare out from pools of blackness. No sound cuts the silence except for mournful sobbing that echoes through the streets from a distance",
	},
	{
		name: "Tser Pool Encampment",
		coordinates: { x: 65, y: 60 },
		type: "village",
		note: "The road gradually disappears and is replaced by a twisted, muddy path through the trees. Deep ruts in the earth are evidence of the comings and goings of wagons. The canopy of mist and branches suddenly gives way to black clouds boiling far above. There is a clearing here, next to a river that widens to form a small lake several hundred feet across. Five colorful round tents, each ten feet in diameter, are pitched outside a ring of four barrel-topped wagons. A much larger tent stands near the shore of the lake, its sagging form lit from within. Near this tent, eight unbridled horses drink from the river. The mournful strains of an accordion clash with the singing of several brightly clad figures around bonfire. A footpath continues beyond this encampment, meandering north between the river and the forest's edge.",
	},
	{
		name: "Old Bonegrinder",
		coordinates: { x: 56, y: 61 },
		type: "location",
		note: "The Old Svalich Road transitions here from being a winding path through the Balinok Mountains to a lazy trail that hugs the mountainside as it descends into a fog-filled valley. In the heart of the valley you see a walled town near the shores of a great mountain lake, its waters dark and still. A branch in the road leads west to a promontory, atop which is perched a dilapidated stone windmill, its warped wooden vanes stripped bare.",
	},
	{
		name: "Stone Megaliths",
		coordinates: { x: 50, y: 63 },
		type: "location",
		note: "The four ancient stones near the windmill were erected centuries ago by the valley's original human inhabitants. Each moss-covered stone bears a crude carving of a city, each of which is associated with a different season. The city of winter is shown covered with snow, the city of spring is arrayed in flowers, the city of summer has a sunburst overhead, and the city of autumn is covered with leaves. If the characters ask any of the priests or scholarly NPCs in Barovia about the stones, the characters are told that ancient legends tell of the Four Cities, said to be the cities of paradise where the Morninglord, Mother Night, and the other ancient gods first dwelled.",
		events: [
			<li>
				Several ravens circle overhead, and one pecks at something on top of the stone that depicts the city of autumn. Upon inspection, the characters see the raven is pecking at a dream pastry, and on the ground in the center of the stone circle is a small pile of children's teeth. The hags placed
				these here to desecrate the stones and as an offering to the entity they worship, the wicked archfey Ceithlenn of the Crooked Teeth.
			</li>,
		],
	},
	{
		name: "Vallaki",
		coordinates: { x: 39, y: 32 },
		type: "village",
		note: "The Old Svalich Road meanders into a valley watched over by dark, brooding mountains to the north and south. The woods recede, revealing a sullen mountain burg surrounded by a wooden palisade. Thick fog presses up against this wall, as though looking for a way inside, hoping to catch the town aslumber. The dirt road ends at a set of sturdy iron gates with a pair of shadowy figures standing behind them. Planted in the ground and flanking the road outside the gates are a half-dozen pikes with wolves' heads impaled on them.",
	},
	{
		name: "Krezk",
		coordinates: { x: 10, y: 28 },
		type: "village",
		note: "The road branches north and climbs a rocky escarpment, ending at a gatehouse built into a twenty-foot-high wall of stone reinforced with buttresses every fifty feet or so. The wall encloses a settlement on the side of a snow-dusted mountain spur. Beyond the wall you see the tops of snow-covered pines and thin, white wisps of smoke. The somber toll of a bell comes from a stone abbey that clings to the mountainside high above the settlement. The steady chime is inviting—a welcome change from the deathly silence and oppressive fog to which you have grown accustomed. It's hard to tell at this distance, but there seems to be a switchback road clinging to the cliffs that lead up from the walled settlement to the abbey.",
	},
	{
		name: "Yester Hill",
		coordinates: { x: 6, y: 61 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Filatov's Estate",
		coordinates: { x: 14, y: 28 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Castle Ravenloft",
		coordinates: { x: 70.5, y: 49 },
		type: "village",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "The Amber Temple",
		coordinates: { x: 33, y: 82 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Argynvostholt",
		coordinates: { x: 32, y: 47 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Ruins of Berez",
		coordinates: { x: 32, y: 61 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Tolenka Pass",
		coordinates: { x: 26, y: 73 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "The Wizards of Wines",
		coordinates: { x: 10, y: 45 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
	{
		name: "Van Richten's Tower",
		coordinates: { x: 22.7, y: 26 },
		type: "location",
		note: "The trail through the thick woods leads to a hill covered with dead grass and cairns of black rock. Dark, ominous clouds gather high above, and a single bolt of lightning strikes the hilltop. West of the hill, the land, the woods, and the sky vanish behind a towering wall of fog.",
	},
];
