import { Chip } from "@mui/material";
import { blue, brown, green, grey, indigo, lightBlue, orange, pink, purple, red, yellow } from "@mui/material/colors";
import { Status } from "../../types/GlobalTypes";

interface StatusChipProps {
	status: Status;
	removable?: boolean;
	onRemoveStatus?: (input: Status) => void;
}
function StatusChip({ status, onRemoveStatus, removable }: StatusChipProps) {
	return removable ? (
		<Chip sx={{ "& .MuiChip-deleteIcon": { color: getChipColor(status)?.iconColor }, fontWeight: "bolder", color: getChipColor(status)!.color, backgroundColor: getChipColor(status)!.bgColor }} label={status} onDelete={() => onRemoveStatus!(status)} />
	) : (
		<Chip sx={{ "& .MuiChip-deleteIcon": { color: getChipColor(status)?.iconColor }, fontWeight: "bolder", color: getChipColor(status)!.color, backgroundColor: getChipColor(status)!.bgColor }} label={status} />
	);
}
export default StatusChip;

const getChipColor = (status: Status) => {
	switch (status) {
		case Status.BLINDED:
			return { bgColor: grey[900], color: "#fff", iconColor: "#fff" };
		case Status.CHARMED:
			return { bgColor: pink[100], color: "#212121" };
		case Status.DEAFENED:
			return { bgColor: grey[700], color: "#fff" };
		case Status.EXHAUSTION_1:
			return { bgColor: blue[50], color: "#212121" };
		case Status.EXHAUSTION_2:
			return { bgColor: blue[100], color: "#212121" };
		case Status.EXHAUSTION_3:
			return { bgColor: blue[200], color: "#212121" };
		case Status.EXHAUSTION_4:
			return { bgColor: blue[500], color: "#fff" };
		case Status.EXHAUSTION_5:
			return { bgColor: blue[700], color: "#fff" };
		case Status.EXHAUSTION_6:
			return { bgColor: blue[900], color: "#fff" };
		case Status.FRIGHTENED:
			return { bgColor: indigo[500], color: "#fff" };
		case Status.GRAPPLED:
			return { bgColor: orange[900], color: "#fff" };
		case Status.INCAPACITATED:
			return { bgColor: brown["A200"], color: "#212121" };
		case Status.INVISIBLE:
			return { bgColor: grey["A200"], color: "#212121" };
		case Status.PARALYZED:
			return { bgColor: yellow[300], color: "#212121" };
		case Status.PETRIFIED:
			return { bgColor: grey[400], color: "#212121" };
		case Status.POISONED:
			return { bgColor: green["A200"], color: "#212121" };
		case Status.PRONE:
			return { bgColor: lightBlue[100], color: "#212121" };
		case Status.RESTRAINED:
			return { bgColor: brown[700], color: "#fff" };
		case Status.STUNNED:
			return { bgColor: purple[200], color: "#212121" };
		case Status.UNCONCIOUS:
			return { bgColor: red[900], color: "#fff" };
	}
};
