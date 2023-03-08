import { PointOfIntrest } from "../../../types/GlobalTypes";

export const OldBonegrinderLocations: PointOfIntrest[] = [
	{
		name: "Old Bonegrinder",
		coordinates: { x: 64.78, y: 89.38 },
		type: "location",
		note: "The onion-domed edifice leans forward and to one side, as though trying to turn away from the stormy gray sky. You see gray brick walls and dirt-covered windows on the upper floors. A decrepit wooden platform encircles the windmill above a flimsy doorway leading to the building's interior. Perched on a wooden beam above the door is a raven. It hops about and squawks at you, seemingly agitated.",
		events: [<li>A character who succeeds on a DC 12 Wisdom (Insight) check senses that the raven is trying to warn the party. After delivering its message, the raven flies off toward Vallaki, the town in the valley below</li>],
	},
	{
		name: "Tarrot Reading",
		coordinates: { x: 74, y: 40 },
		type: "event",
		note: "",
		events: [
			<li>7 of stars, The illusionist: A man who seeks to entertain is not what he seems. Where he slumbers, something lies hidden, something you seek. (Tomb of Strahd in Rictavio's wagon)</li>,
			<li>2 of swords, The Paladin: I see a sleeping prince, a servant of light and the brother of darkness. That which you seek is to this day loyally guarded.</li>,
			<li>5 of stars, The elementalist: a treasure is hidden inside a small castle beneath a mountain, protected by golden giants.</li>,
			<li>Queen of Hearts, The Innocent: Seek out Evil's Bride, She might yet one day open the way.</li>,
			<li>Jack of Diamonds, The Beast: The Beast sits on dark throne.</li>,
		],
	},
];
