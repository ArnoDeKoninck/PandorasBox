import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia, Typography, TextField } from "@mui/material";
import React from "react";

import { Monster, Status } from "../../../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";

interface EditEnemyDialogProps {
	setOpenEditEnemyDialog: (input: Monster | undefined) => void;
	enemy: Monster;
}
function EditEnemyDialog({ enemy, setOpenEditEnemyDialog }: EditEnemyDialogProps) {
	const [currentHp, setCurrentHp] = React.useState<number>(enemy.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(enemy.tempHealth ?? 0);
	const [status, setStatus] = React.useState<Status[]>(enemy.status);
	const [initiative, setInitiative] = React.useState<string>(enemy.initiative.toString());

	const handleClose = () => {
		setOpenEditEnemyDialog(undefined);
	};

	const removeStatus = (statusToRemove: Status) => {
		const newStatusArray = status.filter((status) => status !== statusToRemove);
		setStatus(newStatusArray);
	};

	const onSubmit = () => {
		enemy.currentHealth = currentHp;
		enemy.tempHealth = tempHp ?? 0;
		enemy.status = status ?? undefined;
		enemy.initiative = parseInt(initiative);
		handleClose();
	};

	return (
		<Dialog open={enemy ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${enemy.name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					<Grid item xs={2}>
						<CardMedia component="img" height={200} src={`/images/${enemy.image}`} />
					</Grid>
					{/* Health bar container*/}
					<Grid item xs={10}>
						<Grid container alignItems="center" columnSpacing={2} rowSpacing={2}>
							<Grid item xs={7}>
								<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={enemy.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
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
export default EditEnemyDialog;
