import { Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useAppDispatch } from "src/app/hooks";
import { FastForward, FastRewind, Refresh } from "@mui/icons-material";
import { Encounter } from "../../../../types/EncounterTypes";
import { Entity } from "../../../../types/GlobalTypes";
import { green } from "@mui/material/colors";
import customTheme, { useStyles } from "../../../../customTheme";
import { updateCombatTurn } from "src/features/combatTurnSlice";

interface InitiativeProps {
	combat: (Entity | Encounter)[];
	combatTurn: number;
}

function InitiativeTracker({ combat, combatTurn }: InitiativeProps) {
	console.log(combatTurn);
	const dispatch = useAppDispatch();
	const classes = useStyles();
	if (combat.filter((entity) => entity.initiative === undefined).length > 0) {
		return <div>No initiative found</div>;
	}
	const sortedCombat = combat.sort((a, b) => b.initiative! - a.initiative!);
	const onNextTurn = () => {
		if (combatTurn + 1 > sortedCombat!.length - 1) {
			dispatch(updateCombatTurn(0));
		} else {
			dispatch(updateCombatTurn(combatTurn + 1));
		}
	};

	const onPreviousTurn = () => {
		if (combatTurn - 1 < 0) {
			dispatch(updateCombatTurn(sortedCombat!.length - 1));
		} else {
			dispatch(updateCombatTurn(combatTurn - 1));
		}
	};

	const onResetTurns = () => {
		combat = [];
		dispatch(updateCombatTurn(0));
	};
	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item xs={12}>
						<Grid container alignItems={"center"} justifyContent={"space-between"}>
							<Grid item xs={8}>
								<Typography variant={"h6"}>Initiative Tracker</Typography>
							</Grid>
							<Grid item flexShrink={2}>
								<IconButton
									size="small"
									color={"secondary"}
									onClick={() => onResetTurns()}
									sx={{
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
									}}
								>
									<Refresh fontSize="inherit" />
								</IconButton>
							</Grid>
							<Grid item flexShrink={2}>
								<IconButton
									disabled={combat.length < 1}
									size="small"
									color={"secondary"}
									onClick={() => onPreviousTurn()}
									sx={{
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
									}}
								>
									<FastRewind fontSize="inherit" />
								</IconButton>
								<IconButton
									disabled={combat.length < 1}
									size="small"
									color={"secondary"}
									onClick={() => onNextTurn()}
									sx={{
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
									}}
								>
									<FastForward fontSize="inherit" />
								</IconButton>
							</Grid>
						</Grid>

						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Grid container rowSpacing={2}>
							{sortedCombat.length > 0 &&
								sortedCombat.map((entity, index) => {
									return (
										<Grid key={index} item xs={12}>
											<Card className={classes.itemCard} style={combatTurn === index ? { boxShadow: `0px 0px 10px 4px ${green[500]}` } : {}}>
												<CardContent>
													<Grid container justifyContent={"center"} alignItems={"center"} gap={1}>
														<Grid item flexGrow={4}>
															{entity.image && <CardMedia component="img" height={80} src={`./images/${entity.image}`} sx={{ objectFit: "contain" }} />}
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
