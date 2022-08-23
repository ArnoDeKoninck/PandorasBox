import { Chip } from "@mui/material";
import { blue, brown, green, grey, indigo, lightBlue, orange, pink, purple, red, yellow } from "@mui/material/colors";
import { Status } from "../../../../types/GlobalTypes";

interface StatusChipProps {
	status: Status;
	removable?: boolean;
	onRemoveStatus?: (input: Status) => void;
}
function StatusChip({ status, onRemoveStatus, removable }: StatusChipProps) {
	return removable ? (
		<Chip sx={{ "& .MuiChip-deleteIcon": { color: getStatusChip(status)?.iconColor }, fontWeight: "bolder", color: getStatusChip(status)!.color, backgroundColor: getStatusChip(status)!.bgColor }} label={status} onDelete={() => onRemoveStatus!(status)} title={getStatusChip(status)?.description} />
	) : (
		<Chip sx={{ "& .MuiChip-deleteIcon": { color: getStatusChip(status)?.iconColor }, fontWeight: "bolder", color: getStatusChip(status)!.color, backgroundColor: getStatusChip(status)!.bgColor }} label={status} title={getStatusChip(status)?.description} />
	);
}
export default StatusChip;

const getStatusChip = (status: Status) => {
	switch (status) {
		case Status.BLINDED:
			return { bgColor: grey[900], color: "#fff", iconColor: "#fff", description: "A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage." };
		case Status.CHARMED:
			return { bgColor: pink[100], color: "#212121", description: "A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects. The charmer has advantage on any ability check to interact socially with the creature." };
		case Status.DEAFENED:
			return { bgColor: grey[700], color: "#fff", description: "A deafened creature can’t hear and automatically fails any ability check that requires hearing." };
		case Status.EXHAUSTION_1:
			return { bgColor: blue[50], color: "#212121", description: "Disadvantage on Ability Checks" };
		case Status.EXHAUSTION_2:
			return { bgColor: blue[100], color: "#212121", description: "Disadvantage on Ability Checks and speed is halved" };
		case Status.EXHAUSTION_3:
			return { bgColor: blue[200], color: "#212121", description: "Disadvantage on Ability Checks, speed is halved, Disadvantage on attack rolls and saving throws" };
		case Status.EXHAUSTION_4:
			return { bgColor: blue[500], color: "#fff", description: "Disadvantage on Ability Checks, speed is halved, Disadvantage on attack rolls and saving throws and max HP is halved" };
		case Status.EXHAUSTION_5:
			return { bgColor: blue[700], color: "#fff", description: "Disadvantage on Ability Checks, Disadvantage on attack rolls and saving throws, max HP is halved and speed is 0" };
		case Status.EXHAUSTION_6:
			return { bgColor: blue[900], color: "#fff", description: "Death" };
		case Status.FRIGHTENED:
			return { bgColor: indigo[500], color: "#fff", description: "A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight. The creature can’t willingly move closer to the source of its fear." };
		case Status.GRAPPLED:
			return {
				bgColor: orange[900],
				color: "#fff",
				description:
					"A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the Grappler is incapacitated. The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell.",
			};
		case Status.INCAPACITATED:
			return { bgColor: brown["A200"], color: "#212121", description: "An incapacitated creature can’t take Actions or Reactions." };
		case Status.INVISIBLE:
			return {
				bgColor: grey["A200"],
				color: "#212121",
				description:
					"An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.",
			};
		case Status.PARALYZED:
			return {
				bgColor: yellow[300],
				color: "#212121",
				description:
					"A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
			};
		case Status.PETRIFIED:
			return {
				bgColor: grey[400],
				color: "#212121",
				description:
					"A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity Saving Throws. The creature has Resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
			};
		case Status.POISONED:
			return {
				bgColor: green["A200"],
				color: "#212121",
				description: "A poisoned creature has disadvantage on Attack rolls and Ability Checks.",
			};
		case Status.PRONE:
			return {
				bgColor: lightBlue[100],
				color: "#212121",
				description:
					"A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on Attack rolls. An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.",
			};
		case Status.RESTRAINED:
			return {
				bgColor: brown[700],
				color: "#fff",
				description: "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. The creature has disadvantage on Dexterity Saving Throws.",
			};
		case Status.STUNNED:
			return { bgColor: purple[200], color: "#212121", description: "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage." };
		case Status.UNCONCIOUS:
			return {
				bgColor: red[900],
				color: "#fff",
				description:
					"An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
			};
	}
};
