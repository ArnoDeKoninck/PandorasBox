import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid, LinearProgress, Typography } from "@mui/material";
import customTheme, { useStyles } from "../../customTheme";
import { PC } from "../../types/GlobalTypes";

interface EditPcDialogProps {
	setOpenEditPcDialog: (input: PC | undefined) => void;
	pc: PC;
}
function EditPcDialog({ pc, setOpenEditPcDialog }: EditPcDialogProps) {
	const classes = useStyles();
	const handleClose = () => {
		setOpenEditPcDialog(undefined);
	};

	return (
		<Dialog open={pc ? true : false} onClose={handleClose} fullWidth>
			<DialogTitle>{`Edit ${pc.name}`}</DialogTitle>
			<DialogContent>
				<Grid container>
					{/* Health bar container*/}
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / pc.currentHealth)} valueBuffer={pc.tempHealth ?? 0} />
						</Grid>
						<Grid item xs={2}>
							<Typography>{`${pc.currentHealth}/${pc.maxHealth} HP`}</Typography>
						</Grid>
						<Grid item xs={6}>
							<Grid container spacing={1}>
								<Grid item>
									<TextField label={"Take Damage"} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button variant={"contained"} onClick={handleClose}>
					Cancel
				</Button>
				<Button variant={"contained"}>Save</Button>
			</DialogActions>
		</Dialog>
	);
}
export default EditPcDialog;
