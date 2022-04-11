import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { customTheme, useStyles } from "./customTheme";
import PartyInformation from "./components/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";

function App() {
	const [encounter, getEncounter] = React.useState<Encounter | Encounter_Variant | undefined>();
	const [loot, getLoot] = React.useState<Item[] | undefined>();
	const [partyLevel, setPartyLevel] = React.useState(1);
	const [partySize, setPartySize] = React.useState(1);
	const classes = useStyles();

	return (
		<ThemeProvider theme={customTheme}>
			<Grid container paddingRight={"1rem"}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Card>
							<CardContent>
								<Grid item xs={12} rowSpacing={8}>
									<Typography variant="h4" className={classes.headerTitle}>
										Pandora's Box
									</Typography>
								</Grid>
								<Grid item xs={12} rowSpacing={8}>
									<PartyInformation partySize={partySize} partyLevel={partyLevel} setPartyLevel={setPartyLevel} setPartySize={setPartySize} />
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={8}>
						<Generators encounter={encounter} loot={loot} partyLevel={partyLevel} getEncounter={getEncounter} getLoot={getLoot} />
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
