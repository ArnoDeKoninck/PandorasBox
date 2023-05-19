import { PointOfIntrest } from "../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const Vallaki_VistaniCampLocations: PointOfIntrest[] = [
	{
		name: "Approaching the camp",
		coordinates: { x: 70, y: 13 },
		type: "location",
		note: "The woods part to reveal an expansive clearing: a small, grass-covered hill with low houses built into its sides. Fog obscures the details, but you can see that these buildings feature elegantly carved woodwork and have decorative lanterns hanging from their sculpted eaves. Atop the hill, above the fog, is a ring of barrel-topped wagons that surround a large tent with a column of smoke pouring out through a hole in the top. The tent is brightly lit from within. Even at this distance, you can smell the odors of wine and horses that emanate from this central area.",
	},
	{
		name: "Kasimir Velikov",
		coordinates: { x: 50, y: 64 },
		type: "npc",
		note: "Standing quietly in front of this house, bathed in the warm light of its lanterns, are three sullen, gray-cloaked figures, their angular features and black, flowing hair half-hidden under their cowls.",
		events: [
			<li id={uuid()}>700 years ago Strahd conquered the dusk elven kingdom. 40 Years after, Kasimir's sister, Patrina Velikovna, tried to win King Strahd's love and become queen of Barovia.</li>,
			<li id={uuid()}>Not wanting to have her fall in Strahd's hands and turned into a vampire, Kasimir ordered the stoning of his sister Patrina.</li>,
			<li id={uuid()}>A furious Strahd ordered Rahadin to punish the Dusk elves who stole Patrina from him. Rahadin slew all the female Dusk elves and cut the ears off of Kasimir.</li>,
		],
	},
	{
		name: "Luvash, Arrigal and Arabelle",
		coordinates: { x: 50, y: 41 },
		type: "npc",
		note: "A large tent can be seen at the very top of the hill. A pleasant warm light emitting from the inside. The sound of music, singing and multiple voices can be heard coming from inside the tent.",
		events: [
			<li key={uuid()}>
				The people here are all Vistani or one of the 11 remaining dusk elves. They are not welcome in Vallaki because Vallakians believe the Vistani to be in league with Strahd and therefor devil worshippers. The same goes for the dusk elves, who's population has dwindled to near extinction at the
				hands of the king and the prince.
			</li>,
			<li id={uuid()}>
				Some Vistani present here:
				<ul id={uuid()}>
					<li key={uuid()}>
						Luvash:{" "}
						<ul id={uuid()}>
							<li id={uuid()}>The leader of this Vistani camp and head of logistics. </li>
							<li id={uuid()}> Father of Arabelle and older brother to Arrigal.</li>
							<li id={uuid()}>Loveable big teddy bear but hard when it matters in order to keep his family and the Vistani safe.</li>
						</ul>
					</li>

					<li id={uuid()}>
						Arrigal:
						<ul id={uuid()}>
							<li id={uuid()}>Luvash's younger brother, right hand man and second in command</li>
							<li id={uuid()}>Shrewd and quickwitted, he is the brains of the camp.</li>
							<li id={uuid()}>He secretely brokered an arrangement with King Strahd. In exchange for information about the going ons of the Vistani, Vallaki and the Dusk elves, Strahd would protect their Vistani camp from any form of harm.</li>
							<li id={uuid()}>Loves his neice Arabelle more than anyone and is the fun uncle.</li>
						</ul>
					</li>
					<li id={uuid()}>
						Arabelle:{" "}
						<ul id={uuid()}>
							<li id={uuid()}>Arabelle is the second most potent seer in the whole of Barovia.</li>
							<li id={uuid()}>Arabelle is the second most potent seer in the whole of Barovia.</li>
						</ul>
					</li>
				</ul>
			</li>,
		],
	},
];
