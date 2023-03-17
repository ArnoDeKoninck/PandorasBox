import { PointOfIntrest } from "../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const ChurchOfBaroviaLocations: PointOfIntrest[] = [
	{
		name: "Office",
		coordinates: { x: 33, y: 51.7 },
		type: "location",
		note: "An old desk and chair stand against the south wall, a wooden holy symbol mounted above them—a sunburst. A ten-foot-long iron rod attached to the north wall stands bare, suggesting a tapestry once hung there. Against the far wall stands a wooden cabinet with four tall doors.",
	},
	{
		name: "Chapel",
		coordinates: { x: 25.5, y: 33.7 },
		type: "location",
		note: "The chapel is a shambles, with overturned and broken pews littering the dusty floor. Dozens of candles mounted in candlesticks and candelabras light every dusty corner in a fervent attempt to rid the chapel of shadows. At the far end of the church sits a claw-scarred altar, behind which kneels a priest in soiled vestments. Next to him hangs a long, thick rope that stretches up into the bell tower.",
		events: [<li key={uuid()}>If party has not ventured downstairs add: 'From beneath the chapel floor, you hear a young man's voice cry out, "Father! I'm starving!"'</li>],
	},
	{
		name: "Hall",
		coordinates: { x: 25.3, y: 56 },
		type: "location",
		note: "The doors open to reveal a ten-foot-wide, twenty-foot-long hall leading to a brightly lit chapel. The hall is unlit and reeks of mildew. Four doors, two on each side of the hall, lead to adjacent chambers. You can see that the chapel is strewn with debris, and you hear a soft voice from within reciting a prayer. Suddenly, the prayer is blotted out by an inhuman scream that rises up from beneath the wooden floor.",
	},
	{
		name: "Doru's Bedroom",
		coordinates: { x: 18.1, y: 58.7 },
		type: "location",
		note: "This dirty, lightless room contains a wooden bed with a straw-filled mattress. Mounted above the bed's headboard is a wooden holy symbol.",
	},
	{
		name: "Donavich's Bedroom",
		coordinates: { x: 18.1, y: 52.5 },
		type: "location",
		note: "This dirty, lightless room contains a wooden bed with a straw-filled mattress. Mounted above the bed's headboard is a wooden holy symbol.",
	},
	{
		name: "Trapdoor",
		coordinates: { x: 33, y: 60 },
		type: "location",
		note: "Time and neglect have punched holes in the ceiling of this moldy room, which contains a few broken roof shingles amid puddles of water. In one corner, set into the floor, is a heavy wooden trapdoor held shut with a chain and a padlock. A young man's screams of anguish can be heard through the door.",
		events: [<li key={uuid()}>Donavich lost the key. A DC 12 Lockpick check can open the lock. The sound of screaming stops when someone fiddles with the lock. An extra DC 12 strength check is required since the wooden frame is swollen stuck. </li>],
	},
	{
		name: "Undercroft",
		coordinates: { x: 73, y: 46.5 },
		type: "location",
		note: "The church's undercroft has rough-hewn walls and a floor made of damp clay and earth. Rotting wooden pillars strain under the weight of the wooden ceiling. Candlelight from the chapel above slips though the cracks, allowing you to glimpse a gaunt shape in the far corner.",
	},
	{
		name: "Front doors",
		coordinates: { x: 25.5, y: 64.5 },
		type: "location",
		note: "The heavy wooden doors of the church are covered with claw marks and scarred by fire.",
	},
];
