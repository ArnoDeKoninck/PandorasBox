import { Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import { FastForward, FastRewind, Refresh } from "@mui/icons-material";
import { useStyles } from "../../customTheme";
import { Encounter } from "../../types/EncounterTypes";
import { PC } from "../../types/GlobalTypes";
import { green } from "@mui/material/colors";

interface InitiativeProps {
	combat: (PC | Encounter)[];
	combatTurn: number;
	onChangeTurn: (input: number) => void;
}
function InitiativeTracker({ combat, combatTurn, onChangeTurn }: InitiativeProps) {
	const classes = useStyles();
	if (!combat) {
		return <Typography>No initiative rolled</Typography>;
	}
	const onNextTurn = () => {
		if (combatTurn + 1 > combat.length - 1) {
			onChangeTurn(0);
		} else {
			onChangeTurn(combatTurn + 1);
		}
	};
	const onPreviousTurn = () => {
		if (combatTurn - 1 < 0) {
			onChangeTurn(combat.length - 1);
		} else {
			onChangeTurn(combatTurn - 1);
		}
	};
	const onResetTurns = () => {
		onChangeTurn(0);
	};
	combat.sort((a, b) => b.initiative! - a.initiative!);
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
								<IconButton size="small" color={"secondary"} onClick={() => onPreviousTurn()}>
									<FastRewind fontSize="inherit" />
								</IconButton>
								<IconButton size="small" color={"secondary"} onClick={() => onNextTurn()}>
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
							{combat.map((entity, index) => {
								return (
									<Grid item xs={12}>
										{console.log(`This is the index: ${index}, combatTurn: ${combatTurn}`)}
										<Card className={classes.itemCard} style={combatTurn === index ? { boxShadow: `0px 0px 10px 4px ${green[500]}` } : {}}>
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
															<Grid item>
																<Typography align="center">initiative:</Typography>
																<Typography align="center" variant={"h6"}>
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
