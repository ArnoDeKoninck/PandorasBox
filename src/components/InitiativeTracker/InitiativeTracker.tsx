import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import customTheme, { useStyles } from "../../customTheme";
import { Encounter } from "../../types/EncounterTypes";
import { PC } from "../../types/GlobalTypes";

interface InitiativeProps {
	combat: (PC | Encounter)[];
}
function InitiativeTracker({ combat }: InitiativeProps) {
	const classes = useStyles();
	if (!combat) {
		return <Typography>No initiative rolled</Typography>;
	}
	console.log(combat);
	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant={"h6"}>Initiative Tracker</Typography>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Grid container rowSpacing={2}>
							{combat.map((entity) => {
								return (
									<Grid item xs={12}>
										<Card className={classes.itemCard}>
											<CardContent>
												<Grid container alignItems={"center"} gap={"5px"}>
													<Grid item flexGrow={4}>
														{entity.image && <CardMedia component="img" height={80} src={`/images/${entity.image}`} />}
													</Grid>
													<Grid item xs={8}>
														<Grid container rowGap={1} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
															<Grid item>
																<Typography align="center">{entity.name}</Typography>
															</Grid>
															<Grid style={{ border: `2px solid ${customTheme.palette.secondary.main}` }} item>
																<Typography padding={"10px 20px"} variant={"h4"}>
																	{entity.initiative ?? 0}
																</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
export default InitiativeTracker;
