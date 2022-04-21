import { Grid, FormControl, TextField, MenuItem } from "@mui/material";
import { useStyles } from "../../customTheme";
import { allStatuses, Status } from "../../types/GlobalTypes";

interface SetStatusProps {
	status: Status[];
	onChangeStatus: (input: Status[]) => void;
}
function SetStatus({ onChangeStatus, status }: SetStatusProps) {
	const addStatus = (input: Status) => {
		if (!status.includes(input)) {
			onChangeStatus([...status, input]);
		}
	};
	const classes = useStyles();
	return (
		<Grid container>
			<FormControl fullWidth>
				<TextField SelectProps={{ MenuProps: { PaperProps: { sx: { maxHeight: 400 } } } }} className={classes.headerTitle} select id="status" value={Status.NONE} label="Status" onChange={(e) => addStatus(e.target.value as Status)}>
					{allStatuses.map((status) => (
						<MenuItem key={status} value={status}>
							{Status[status]}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
		</Grid>
	);
}
export default SetStatus;
