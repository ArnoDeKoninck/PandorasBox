import { Card, Chip, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../../../customTheme";
import { Entity } from "../../../../types/GlobalTypes";
import { ThemeProvider } from "@mui/styles";
import EnemyDetailsCard from "./EnemyDetailsCard";
import { EnemyList } from "../../../../data/Monsters/Monsters";

interface props {
	enemies: Entity[];
	index: number;
	setOpenEditEnemyDialog: (input: Entity | undefined) => void;
	setEnemies: (input: Entity[]) => void;
	setIndex: (input: number) => void;
}

function EnemyDetails({ enemies, index, setIndex, setOpenEditEnemyDialog, setEnemies }: props) {
	const [selectedEnemy, setSelectedEnemy] = React.useState<string>("");
	const classes = useStyles();

	async function addSelectedEnemyToParty(enemyName: string) {
		EnemyList.map((enemy) => {
			if (enemyName === enemy.name) {
				setSelectedEnemy(enemy.name);
				setEnemies([...enemies, enemy]);
			}
			return enemy;
		});
	}
	function removeEnemy(index: number) {
		setEnemies([...enemies.slice(0, index), ...enemies.slice(index + 1, enemies.length)]);
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Card>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"} gap={2}>
							<Grid item sm={3} xs={12}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} id="enemies" select value={selectedEnemy} label="Add Enemies to the fight">
										<MenuItem value={"Select the Enemy to add to the fight"}>Select an Enemy to add to the fight</MenuItem>
										{EnemyList.map((enemy: Entity, i) => (
											<MenuItem key={i} value={enemy.name} onClick={(e: any) => addSelectedEnemyToParty(e.target.textContent as string)}>
												{enemy.name}
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
							<Grid item sm={9} xs={12}>
								<Grid container>
									{enemies &&
										enemies.map((enemy, index) => (
											<Grid item key={index} marginLeft={1}>
												<Chip label={enemy.name} onDelete={() => removeEnemy(index)} />
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
									<Grid key={i} item lg={3} md={4} sm={12} padding={1}>
										<EnemyDetailsCard enemy={enemy} index={index} setIndex={() => setIndex(i)} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />
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
