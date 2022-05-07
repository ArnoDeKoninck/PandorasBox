import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia } from "@mui/material";
import React from "react";
import { Entity } from "../../../../types/GlobalTypes";

import StatBlockModule from "../StatBlock/StatblockModule";

interface EditEnemyDialogProps {
	setOpenEditEnemyDialog: (input: Entity | undefined) => void;
	enemy: Entity;
}
function EditEnemyDialog({ enemy, setOpenEditEnemyDialog }: EditEnemyDialogProps) {
	const [currentEnemy, setCurrentEnemy] = React.useState<Entity>(enemy);
	const handleClose = () => {
		setOpenEditEnemyDialog(undefined);
	};

	const onSubmit = () => {
		enemy.currentHealth = currentEnemy.currentHealth;
		enemy.tempHealth = currentEnemy.tempHealth ?? 0;
		enemy.status = currentEnemy.status ?? undefined;
		enemy.initiative = currentEnemy.initiative;
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
						<StatBlockModule entity={enemy} onChange={setCurrentEnemy}></StatBlockModule>
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
