import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia, Typography, TextField } from "@mui/material";
import React from "react";

import { PC, Status } from "../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";

interface EditPcDialogProps {
	setOpenEditPcDialog: (input: PC | undefined) => void;
	pc: PC;
}
function EditPcDialog({ pc, setOpenEditPcDialog }: EditPcDialogProps) {
	const [currentHp, setCurrentHp] = React.useState<number>(pc.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(pc.tempHealth ?? 0);
	const [status, setStatus] = React.useState<Status[]>(pc.status);
	const [initiative, setInitiative] = React.useState<string>(pc.initiative.toString());

	const handleClose = () => {
		setOpenEditPcDialog(undefined);
	};

	const removeStatus = (statusToRemove: Status) => {
		const newStatusArray = status.filter((status) => status !== statusToRemove);
		setStatus(newStatusArray);
	};

	const onSubmit = () => {
		pc.currentHealth = currentHp;
		pc.tempHealth = tempHp ?? 0;
		pc.status = status ?? undefined;
		pc.initiative = parseInt(initiative);
		handleClose();
	};

	return (
		<Dialog open={pc ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${pc.name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					<Grid item xs={2}>
						<CardMedia component="img" height={200} src={`/images/${pc.image}`} />
					</Grid>
					{/* Health bar container*/}
					<Grid item xs={10}>
						<Grid container alignItems="center" columnSpacing={2} rowSpacing={2}>
							<Grid item xs={7}>
								<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={pc.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
							</Grid>
							<Grid item xs={5}>
								<Grid container rowGap={4}>
									<Grid item xs={12}>
										<Typography>Status:</Typography>
										<Grid container>
											{status &&
												status.map(
													(status: Status) =>
														status !== Status.NONE && (
															<Grid item key={status}>
																<StatusChip removable onRemoveStatus={removeStatus} status={status} />
															</Grid>
														)
												)}
										</Grid>
									</Grid>
									<Grid item>
										<SetStatus status={status} onChangeStatus={setStatus} />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={1}>
								<TextField
									inputProps={{ min: 0, style: { textAlign: "center" } }}
									label={"Initiative"}
									value={initiative}
									onChange={(e: any) => {
										setInitiative(e.target.value);
									}}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button variant={"contained"} onClick={handleClose}>
					Cancel
				</Button>
				<Button variant={"contained"} onClick={onSubmit}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
export default EditPcDialog;
