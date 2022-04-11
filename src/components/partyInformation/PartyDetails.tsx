import { Button, Card, CardContent, CardMedia, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../customTheme";
import { PC } from "../../types/GlobalTypes";
import { Ghesh_Ebonrock } from "../../data/PCs/Ghesh_Ebonrock";
import { ThemeProvider } from "@mui/styles";

interface props {
	partyLevel: number;
	partySize: number;
}
function PartyDetails({ partySize, partyLevel }: props) {
	const [party, setParty] = React.useState<PC[]>([Ghesh_Ebonrock]);
	const classes = useStyles();
	console.log(party);
	return (
		<ThemeProvider theme={customTheme}>
			<Card>
				<Grid container padding={2}>
					<Grid item>
						<Grid container>
							<Button onClick={() => setParty([Ghesh_Ebonrock])}>
								<Typography className={classes.headerTitle}>Add PC</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							{party &&
								party.map((pc) => (
									<Grid key={pc.name} item xs={4}>
										<Card className={classes.itemCard}>
											<CardContent>
												<Grid container>
													<Grid item xs={2}>
														<CardMedia component="img" height={100} src={`/images/${pc.image}`} />
													</Grid>
													<Grid item xs={10}>
														<Grid container padding={"5px"}>
															<Grid item xs={4}>
																<Typography align={"left"}>{pc.name}</Typography>
															</Grid>
															<Grid item xs={4}>
																<Typography align={"center"}>Class: {pc.class}</Typography>
															</Grid>
															<Grid item xs={4}>
																<Typography align="right"> Level: {partyLevel}</Typography>
															</Grid>

															<Grid item xs={8}>
																<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / pc.currentHealth)} valueBuffer={pc.tempHealth} />
																<Typography>{`${pc.currentHealth}/${pc.maxHealth} HP`}</Typography>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</ThemeProvider>
	);
}

export default PartyDetails;
