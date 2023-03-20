import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { updateEnemy } from "src/features/enemySlice";
import { Entity } from "../../../../types/GlobalTypes";

import StatBlockModule from "../StatBlock/StatblockModule";

interface EditEnemyDialogProps {
	open: Entity | undefined;
	setOpenEditEnemyDialog: (input: Entity | undefined) => void;
	index: number;
}
function EditEnemyDialog({ open, index, setOpenEditEnemyDialog }: EditEnemyDialogProps) {
	const enemies = useAppSelector((state) => state.enemies);
	const dispatch = useAppDispatch();

	const currentEnemy = enemies.entities[index];
	const [updatedEnemy, setUpdatedEnemy] = useState<Entity>(currentEnemy);

	const handleClose = () => {
		setOpenEditEnemyDialog(undefined);
	};

	const onSubmit = () => {
		//handle updates on enemies

		dispatch(updateEnemy({ enemy: updatedEnemy, index: index }));
		/*
		const updatedEnemies = enemies.map((enemy) => {
			return { ...enemy };
		});
		
		updatedEnemies[index] = {
			...updatedEnemies[index],
			...{
				currentHealth: currentEnemy.currentHealth,
				tempHealth: currentEnemy.tempHealth ?? 0,
				status: currentEnemy.status ?? undefined,
				initiative: currentEnemy.initiative,
			},
		};
		setEnemies(updatedEnemies);*/
		handleClose();
	};

	return (
		<Dialog open={open ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${enemies.entities[index].name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					<Grid item xs={2}>
						<CardMedia component="img" height={200} src={`./images/${enemies.entities[index].image}`} />
					</Grid>
					{/* Health bar container*/}
					<Grid item xs={10}>
						<StatBlockModule entities={enemies.entities} index={index} onChange={setUpdatedEnemy}></StatBlockModule>
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
