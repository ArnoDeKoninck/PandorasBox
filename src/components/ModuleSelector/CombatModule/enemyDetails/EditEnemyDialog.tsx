import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, CardMedia } from "@mui/material";
import React from "react";
import { Entity } from "../../../../types/GlobalTypes";

import StatBlockModule from "../StatBlock/StatblockModule";

interface EditEnemyDialogProps {
	setOpenEditEnemyDialog: (input: Entity | undefined) => void;
	setEnemies: (input: Entity[]) => void;
	enemies: Entity[];
	index: number;
}
function EditEnemyDialog({ enemies, index, setEnemies, setOpenEditEnemyDialog }: EditEnemyDialogProps) {
	const [currentEnemy, setCurrentEnemy] = React.useState<Entity>(enemies[index]);
	const handleClose = () => {
		setOpenEditEnemyDialog(undefined);
	};

	const onSubmit = () => {
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
		setEnemies(updatedEnemies);
		handleClose();
	};

	return (
		<Dialog open={enemies[index] ? true : false} onClose={handleClose} fullWidth maxWidth={"lg"}>
			<DialogTitle>{`Edit ${enemies[index].name}`}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container>
					<Grid item xs={2}>
						<CardMedia component="img" height={200} src={`PandorasBox/images/${enemies[index].image}`} />
					</Grid>
					{/* Health bar container*/}
					<Grid item xs={10}>
						<StatBlockModule entities={enemies} index={index} onChange={setCurrentEnemy}></StatBlockModule>
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
