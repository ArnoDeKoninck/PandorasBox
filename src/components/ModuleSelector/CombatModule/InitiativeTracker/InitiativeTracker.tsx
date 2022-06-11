import { Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import { FastForward, FastRewind, Refresh } from "@mui/icons-material";
import { Encounter } from "../../../../types/EncounterTypes";
import { Entity } from "../../../../types/GlobalTypes";
import { green } from "@mui/material/colors";
import { useStyles } from "../../../../customTheme";

interface InitiativeProps {
	combat: (Entity | Encounter)[];
	combatTurn: number;
	onChangeTurn: (input: number) => void;
}

function InitiativeTracker({ combat, combatTurn, onChangeTurn }: InitiativeProps) {
	const classes = useStyles();

	const onNextTurn = () => {
		if (combatTurn + 1 > combat!.length - 1) {
			onChangeTurn(0);
		} else {
			onChangeTurn(combatTurn + 1);
		}
	};

	const onPreviousTurn = () => {
		if (combatTurn - 1 < 0) {
			onChangeTurn(combat!.length - 1);
		} else {
			onChangeTurn(combatTurn - 1);
		}
	};

	const onResetTurns = () => {
		combat = [];
	};
	console.log(combat);
	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item xs={12}>
						<Grid container alignItems={"center"}>
							<Grid item xs={8}>
								<Typography variant={"h6"}>Initiative Tracker</Typography>
							</Grid>
							<Grid item flexShrink={2}>
								<IconButton disabled={combat.length < 1} size="small" color={"secondary"} onClick={() => onPreviousTurn()}>
									<FastRewind fontSize="inherit" />
								</IconButton>
								<IconButton disabled={combat.length < 1} size="small" color={"secondary"} onClick={() => onNextTurn()}>
									<FastForward fontSize="inherit" />
								</IconButton>
								<IconButton size="small" color={"secondary"} onClick={() => onResetTurns()}>
									<Refresh fontSize="inherit" />
								</IconButton>
							</Grid>
						</Grid>

						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Grid container rowSpacing={2}>
							{combat.length > 0 &&
								combat.map((entity, index) => {
									return (
										<Grid key={index} item xs={12}>
											<Card className={classes.itemCard} style={combatTurn === index ? { boxShadow: `0px 0px 10px 4px ${green[500]}` } : {}}>
												<CardContent>
													<Grid container alignItems={"center"}>
														<Grid item flexGrow={4}>
															{entity.image && <CardMedia component="img" height={80} src={`/images/${entity.image}`} />}
														</Grid>
														<Grid item xs={8}>
															<Grid container rowGap={1} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
																<Grid item>
																	<Typography sx={{ fontSize: "15px" }} align="center">
																		{entity.name}
																	</Typography>
																</Grid>
																<Grid item>
																	<Typography variant={"h6"} align="center">
																		initiative:
																	</Typography>
																	<Typography sx={{ fontSize: "25px" }} align="center" variant={"h1"}>
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
