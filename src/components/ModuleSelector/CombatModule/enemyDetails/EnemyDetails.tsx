import { Card, Chip, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import customTheme, { useStyles } from "../../../../customTheme";
import { Entity } from "../../../../types/GlobalTypes";
import { ThemeProvider } from "@mui/styles";
import EnemyDetailsCard from "./EnemyDetailsCard";
import { EnemyList } from "../../../../data/Monsters/Monsters";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { addEntityToEnemies, removeEntityFromEnemies } from "src/features/enemySlice";

function EnemyDetails() {
	const classes = useStyles();

	const currentEnemies = useAppSelector((state) => state.enemies);
	const dispatch = useAppDispatch();

	const handleAddEnemy = (enemyName: string) => {
		//Checks if the clicked enemy matches one in the enemy list and adds it to enemies
		const selectedEnemy = EnemyList.find((enemy) => enemy.name === enemyName);
		if (selectedEnemy) {
			dispatch(addEntityToEnemies(selectedEnemy));
		}
	};

	const handleRemoveEnemy = (index: number) => {
		dispatch(removeEntityFromEnemies(index));
	};

	return (
		<ThemeProvider theme={customTheme}>
			<Card>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"} gap={2}>
							<Grid item sm={3} xs={12}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} id="enemies" select value={currentEnemies.entities[currentEnemies.entities.length] ?? "Select the Enemy to add to the fight"} onChange={(e) => handleAddEnemy(e.target.value)} label="Add Enemies to the fight">
										<MenuItem value={"Select the Enemy to add to the fight"}>Select an Enemy to add to the fight</MenuItem>
										{EnemyList.map((enemy: Entity, i) => (
											<MenuItem key={i} value={enemy.name}>
												{enemy.name}
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
							<Grid item sm={9} xs={12}>
								<Grid container>
									{currentEnemies.entities &&
										currentEnemies.entities.map((enemy, index) => (
											<Grid item key={index} marginLeft={1}>
												<Chip label={enemy.name} onDelete={() => handleRemoveEnemy(index)} />
											</Grid>
										))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{currentEnemies.entities &&
								currentEnemies.entities.map((enemy, index) => (
									<Grid key={index} item lg={3} md={4} sm={12} padding={1}>
										{<EnemyDetailsCard index={index} />}
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</ThemeProvider>
	);
}

export default EnemyDetails;
