import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Grid, LinearProgress, Typography, FormControl, Divider, MenuItem } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../customTheme";
import { allStatuses, PC, Status } from "../../types/GlobalTypes";

interface EditPcDialogProps {
	setOpenEditPcDialog: (input: PC | undefined) => void;
	pc: PC;
}
function EditPcDialog({ pc, setOpenEditPcDialog }: EditPcDialogProps) {
	const [currentHp, setCurrentHp] = React.useState<number>(pc.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(pc.tempHealth ?? 0);
	const [status, setStatus] = React.useState<Status | string>("");
	const classes = useStyles();
	const handleClose = () => {
		setOpenEditPcDialog(undefined);
	};
	const onEnterDmg = (e: any) => {
		if (e.key === "Enter") {
			setCurrentHp(currentHp - parseInt(e.target.value));
			e.target.value = "";
		}
	};
	const onEnterHealing = (e: any) => {
		if (e.key === "Enter") {
			setCurrentHp(currentHp + parseInt(e.target.value));
			e.target.value = "";
		}
	};
	const onEnterTempHealth = (e: any) => {
		if (e.key === "Enter") {
			setTempHp(parseInt(e.target.value));
			e.target.value = "";
		}
	};
	const onSubmit = () => {
		pc.currentHealth = currentHp;
		pc.tempHealth = tempHp ?? 0;
		pc.status = status ?? undefined;
		handleClose();
	};

	return (
		<Dialog open={pc ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${pc.name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					{/* Health bar container*/}
					<Grid container padding={4} alignItems="center" justifyContent={"flex-end"}>
						<Grid item xs={5}>
							<Grid container spacing={1}>
								<Grid item xs={9}>
									<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / currentHp)} valueBuffer={currentHp + tempHp} />
								</Grid>
								<Grid item xs={3}>
									<Typography>{`${currentHp + tempHp}${tempHp ? "(+" + tempHp + ")" : ""}/${pc.maxHealth} HP`}</Typography>
								</Grid>
								<Grid item xs={12}>
									<Grid container spacing={2}>
										<Grid item xs={2}>
											<FormControl>
												<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"DMG"} onKeyDown={onEnterDmg} />
											</FormControl>
										</Grid>
										<Grid item xs={2}>
											<FormControl>
												<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"+HP"} onKeyDown={onEnterHealing} />
											</FormControl>
										</Grid>
										<Grid item xs={3}>
											<FormControl>
												<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"+THP"} onKeyDown={onEnterTempHealth} />
											</FormControl>
										</Grid>
										<Grid item xs={5}>
											<FormControl fullWidth>
												<TextField SelectProps={{ MenuProps: { PaperProps: { sx: { maxHeight: 100 } } } }} className={classes.headerTitle} select id="status" defaultValue={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
													<MenuItem value={"None"}>None</MenuItem>
													{allStatuses.map((status) => (
														<MenuItem key={status} value={status}>
															{Status[status]}
														</MenuItem>
													))}
												</TextField>
											</FormControl>
										</Grid>
									</Grid>
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
