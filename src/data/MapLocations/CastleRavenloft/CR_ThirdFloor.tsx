import { PointOfIntrest } from "src/types/GlobalTypes";
import { v4 as uuid } from "uuid";
export const CR_ThirdFloorLocations: PointOfIntrest[] = [
	{
		name: "Guardian Death Knights",
		type: "location",
		coordinates: { x: 41, y: 65 },
		note: "A door of delicately engraved steel stands at the west end of this short, dark hallway. Intricate details stand out clearly on the door's surface. The door seems to shine with a light of its own, untouched by time. Flanking the door are two alcoves in shadow. A dark humanoid shape stands in each alcove.",
		events: [<li key={uuid()}>The shapes are two innanimate Death knights standing guard. They each have impressive looking full plate and carry large two-handed weapons.</li>],
	},
	{
		name: "Hall of Heroes",
		type: "location",
		coordinates: { x: 26, y: 32 },
		note: "A door of delicately engraved steel stands at the west end of this short, dark hallway. Intricate details stand out clearly on the door's surface. The door seems to shine with a light of its own, untouched by time. Flanking the door are two alcoves in shadow. A dark humanoid shape stands in each alcove.",
		events: [<li key={uuid()}>The shapes are two innanimate Death knights standing guard. They each have impressive looking full plate and carry large two-handed weapons.</li>],
	},
];
