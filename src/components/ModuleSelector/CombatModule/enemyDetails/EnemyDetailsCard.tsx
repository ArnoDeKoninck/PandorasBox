import { Card, CardContent, Grid, CardMedia, Typography, LinearProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "src/app/hooks";
import { useStyles } from "../../../../customTheme";
import { Entity, Status } from "../../../../types/GlobalTypes";
import StatusChip from "../Status/StatusChip";
import EditEnemyDialog from "./EditEnemyDialog";

interface PcDetailCardProps {
	index: number;
}
function EnemyDetailsCard({ index }: PcDetailCardProps) {
	const classes = useStyles();
	const enemy = useAppSelector((state) => state.enemies.entities[index]);
	console.log(enemy);
	const [openEditEnemyDialog, setOpenEditEnemyDialog] = useState<Entity | undefined>(undefined);

	return (
		<>
			<Card className={classes.itemCard}>
				<CardContent>
					<Grid container rowGap={1}>
						{/* Character Image container*/}
						<Grid container>
							<Grid item xs={3}>
								<CardMedia component="img" height={100} src={`./images/${enemy.image}`} sx={{ objectFit: "contain" }} />
							</Grid>
							<Grid item xs={9}>
								<Grid container padding={"5px"}>
									{/* General info container*/}
									<Grid container>
										<Grid item xs={4}>
											<Typography align={"left"}>{enemy.name}</Typography>
										</Grid>
									</Grid>
									{/* Health bar container*/}
									<Grid item xs={12}>
										<Grid container spacing={1}>
											<Grid item xs={7}>
												<LinearProgress className={classes.smallHealthBar} color="success" variant="buffer" value={100 / (enemy.maxHealth / enemy.currentHealth)} valueBuffer={enemy.currentHealth + (enemy.tempHealth ?? 0)} />
											</Grid>
											<Grid item xs={5}>
												<Typography>{`${enemy.currentHealth + (enemy.tempHealth ?? 0)}${enemy.tempHealth ? "(+" + enemy.tempHealth + ")" : ""}/${enemy.maxHealth} HP`}</Typography>
											</Grid>
											<Grid item xs={12}>
												<Typography>Status:</Typography>
												<Grid container>
													{enemy.status &&
														enemy.status.map(
															(status: Status) =>
																status !== Status.NONE && (
																	<Grid item key={status}>
																		<StatusChip status={status} />
																	</Grid>
																)
														)}
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid container alignContent={"space-between"}>
							<Grid item xs={11}>
								{/* Initiative and status container*/}
								<Grid container rowGap={2}>
									<Grid item xs={12}>
										<Grid container rowGap={1}>
											<Grid item xs={12}>
												<Typography>Spellslots:</Typography>
											</Grid>

											{enemy.resources &&
												enemy.resources.map((spellSlot: number, index: number) => (
													<Grid key={spellSlot} item xs={2}>
														<TextField className={classes.headerTitle} disabled label={index + 1} value={spellSlot} />
													</Grid>
												))}
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={1}>
								<Typography
									className={classes.link}
									align={"center"}
									onClick={() => {
										setOpenEditEnemyDialog(enemy);
									}}
								>
									Edit
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			{enemy && <EditEnemyDialog index={index} open={openEditEnemyDialog} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />}
		</>
	);
}
export default EnemyDetailsCard;
