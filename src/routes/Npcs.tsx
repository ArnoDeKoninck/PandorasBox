import { Card, CardMedia, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../customTheme";
import { npcs } from "../data/npcs";
function Npcs() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={customTheme}>
			<Grid container paddingRight={"1rem"}>
				<Grid container spacing={2} justifyContent="center">
					<Grid item xs={12}>
						<Card>
							<Grid item xs={12} rowSpacing={8}>
								<Grid container padding={2} justifyContent="center">
									<Grid item xs={12}>
										<Typography variant="h4" className={classes.headerTitle}>
											Pandora's Box &gt; NPCs
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Grid container spacing={1} paddingRight={2}>
											{npcs &&
												npcs.map((npc) => (
													<Grid key={npc.name} item xs={1}>
														<Card className={classes.itemCard}>
															{npc.image && <CardMedia component="img" height="180" src={`/images/${npc.image}`} alt={npc.name} />}
															<Typography align="center" className={classes.headerTitle}>
																{npc.name}
															</Typography>
														</Card>
													</Grid>
												))}
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
export default Npcs;
