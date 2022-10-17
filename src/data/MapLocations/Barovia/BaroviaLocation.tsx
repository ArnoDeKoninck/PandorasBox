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
];
