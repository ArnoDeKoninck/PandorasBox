import { Card, Chip, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../customTheme";
import { Monster } from "../../types/GlobalTypes";
import { ThemeProvider } from "@mui/styles";
import EnemyDetailsCard from "./EnemyDetailsCard";
import { EnemyList } from "../../data/Monsters/Monsters";

interface props {
	enemies: Monster[];
	setOpenEditEnemyDialog: (input: Monster | undefined) => void;
	setEnemies: (input: React.SetStateAction<Monster[]>) => void;
}

function EnemyDetails({ enemies, setOpenEditEnemyDialog, setEnemies }: props) {
	const [selectedEnemy, setSelectedEnemy] = React.useState<string>("");
	const classes = useStyles();

	async function addSelectedEnemyToParty(enemyName: string) {
		EnemyList.map((enemy) => {
			if (enemyName === enemy.name) {
				setSelectedEnemy(enemy.name);
				setEnemies((oldEnemies) => [...oldEnemies, enemy]);
			}
			return enemy;
		});
	}

	function removeEnemy(enemy: Monster) {
		setEnemies(enemies.filter((entity) => entity.name !== enemy.name));
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Card>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"}>
							<Grid item xs={3}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} id="enemies" select value={selectedEnemy} label="Add Enemies to the fight">
										<MenuItem value={"Select the Enemy to add to the fight"}>Select an Enemy to add to the fight</MenuItem>
										{EnemyList.map((enemy: Monster, i) => (
											<MenuItem key={i} value={enemy.name} onClick={(e: any) => addSelectedEnemyToParty(e.target.textContent as string)}>
												{enemy.name}
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
							<Grid item xs={9}>
								<Grid container>
									{enemies &&
										enemies.map((enemy, i) => (
											<Grid item key={i} marginLeft={1}>
												<Chip label={enemy.name} onDelete={() => removeEnemy(enemy)} />
											</Grid>
										))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{enemies &&
								enemies.map((enemy, i) => (
									<Grid key={i} item xs={3} padding={1}>
										<EnemyDetailsCard enemy={enemy} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />
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
