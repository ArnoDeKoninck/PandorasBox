import { PointOfIntrest } from "../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const TserPoolEncampmentLocations: PointOfIntrest[] = [
	{
		name: "Madam Eva's Wagon",
		coordinates: { x: 70, y: 40 },
		type: "location",
		note: "Magic flames cast a reddish glow over the interior of this tent, revealing a low table covered in a black velvet cloth. Glints of light seem to flash from a crystal ball on the table as a hunched figure peers into its depths. As the crone speaks, her voice crackles like dry weeds. 'At last you have arrived!' Cackling laughter bursts like mad lightning from her withered lips.",
	},
	{
		name: "Tarrot Reading",
		coordinates: { x: 74, y: 40 },
		type: "event",
		note: "",
		events: [
			<li key={uuid()}>7 of stars, The illusionist: A man who seeks to entertain is not what he seems. Where he slumbers, something lies hidden, something you seek. (Tomb of Strahd in Rictavio's wagon)</li>,
			<li key={uuid()}>2 of swords, The Paladin: I see a sleeping prince, a servant of light and the brother of darkness. That which you seek is to this day loyally guarded.</li>,
			<li key={uuid()}>5 of stars, The elementalist: a treasure is hidden inside a small castle beneath a mountain, protected by golden giants.</li>,
			<li key={uuid()}>Queen of Hearts, The Innocent: Seek out Evil's Bride, She might yet one day open the way.</li>,
			<li key={uuid()}>Jack of Diamonds, The Beast: The Beast sits on dark throne.</li>,
		],
	},
	{
		name: "Vistani storyteller",
		coordinates: { x: 41, y: 57 },
		type: "event",
		note: "A mighty wizard came to this land over 50 years ago. He stood exactly where you're standing. A very charismatic man, he was. He thought he could rally the people of Barovia against the devil Strahd. He stirred them with thoughts of revolt and bore them to the castle en masse. When the vampire appeared, the wizard's peasant army fled in terror. A few stood their ground and were never seen again. ",
		events: [
			<li key={uuid()}>
				The wizard and the vampire cast spells at each other. Their battle flew from the courtyards of Ravenloft to a precipice overlooking the falls. Thunder shook the mountainside, and great rocks tumbled down upon the wizard, yet by his magic he survived. Lightning from the heavens struck the
				wizard, and again he stood his ground. But when the devil Strahd fell upon him himself, the wizard's magic couldn't save him. I saw him thrown a thousand feet to his death. They went down to the river to search for the wizard's body, to see if, you know, he had anything of value, but the
				River Ivlis had already spirited him away. Or so the story goes!
			</li>,
		],
	},
];
