import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia, Typography, TextField, LinearProgress } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { useStyles } from "src/customTheme";
import { Achievement } from "src/features/achievementSlice";
import { updatePartyMember } from "src/features/partySlice";
import { Entity, Status } from "../../../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";
import ClassResource from "./ClassResource";

interface EditPcDialogProps {
	setOpenEditDialog: (input: boolean) => void;
	selectedPc: Entity;
}
function EditPcDialog({ selectedPc, setOpenEditDialog }: EditPcDialogProps) {
	const party = useAppSelector((state) => state.party.members);
	const partyAchievements = useAppSelector((state) => state.achievements);
	const achievements = partyAchievements.find((achievement) => achievement.pc === selectedPc.name)?.achievements as Achievement[];
	const dispatch = useAppDispatch();
	const partyIndex = party.indexOf(selectedPc);
	const [currentHp, setCurrentHp] = React.useState<number>(selectedPc.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(selectedPc.tempHealth ?? 0);
	const [status, setStatus] = React.useState<Status[]>(selectedPc.status);
	const [initiative, setInitiative] = React.useState<string>(selectedPc.initiative.toString());
	const [resources, setResources] = React.useState<number[] | undefined>(selectedPc.resources);
	const classes = useStyles();

	const handleClose = () => {
		setOpenEditDialog(false);
	};

	const removeStatus = (statusToRemove: Status) => {
		const newStatusArray = status.filter((status) => status !== statusToRemove);
		setStatus(newStatusArray);
	};

	const onSubmit = () => {
		const updatedPc: Entity = {
			...selectedPc,
			...{ currentHealth: currentHp, tempHealth: tempHp, status: status, initiative: parseInt(initiative), resources: resources },
		};
		dispatch(updatePartyMember({ index: partyIndex, newValues: updatedPc }));
		handleClose();
	};

	return (
		<Dialog open={selectedPc ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${selectedPc.name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					<Grid item xs={2}>
						<CardMedia component="img" height={200} src={`./images/${selectedPc.image}`} />
					</Grid>
					{/* Health bar container*/}
					<Grid item xs={10}>
						<Grid container alignItems="center" columnSpacing={2} rowSpacing={2}>
							<Grid item xs={7}>
								<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={selectedPc.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
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
							{resources && (
								<Grid item xs={5}>
									<ClassResource entity={selectedPc} setResources={setResources} resources={resources} />
								</Grid>
							)}

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
							<Grid item xs={12}>
								<Grid container>
									{achievements.map((achievement) => (
										<Grid item xs={8}>
											<LinearProgress className={classes.achievementProgressBar} variant="buffer" value={100 / (achievement.targetValue / achievement.currentValue)} valueBuffer={achievement.currentValue} />
										</Grid>
									))}
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
				<Button variant={"contained"} onClick={onSubmit}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
export default EditPcDialog;
