import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { customTheme, useStyles } from "./customTheme";
import PartyInformation from "./components/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";
import PartyDetails from "./components/partyInformation/PartyDetails";
import EditPcDialog from "./components/partyInformation/EditPcDialog";
import { PC } from "./types/GlobalTypes";
import InitiativeTracker from "./components/InitiativeTracker/InitiativeTracker";
import { dayTimeEncounterList } from "./data/Encounters/Encounters";

function App() {
	const [encounter, getEncounter] = React.useState<Encounter | Encounter_Variant | undefined>(dayTimeEncounterList[0].variant![0]);
	const [loot, getLoot] = React.useState<Item[] | undefined>();
	const [partyLevel, setPartyLevel] = React.useState(1);
	const [partySize, setPartySize] = React.useState(1);
	const [party, setParty] = React.useState<PC[]>([]);
	const [openEditPcDialog, setOpenEditPcDialog] = React.useState<PC | undefined>(undefined);
	const [combat, setCombat] = React.useState<(PC | Encounter)[]>([]);
	const [combatTurn, setCombatTurn] = React.useState<number>(0);
	const classes = useStyles();

	const getCombatParticipants = (party: PC[], encounter: Encounter | Encounter_Variant) => {
		encounter.amount = 3;
		encounter.initiative = 0;
		const enemies: Encounter[] = Array(encounter.amount).fill(encounter);
		const participants = [...party, ...enemies];
		setCombat(participants);
	};
	const rollInitiative = () => {
		if (encounter) {
			getCombatParticipants(party, encounter);
		}
	};
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
						<Generators rollInitiative={rollInitiative} encounter={encounter} loot={loot} partyLevel={partyLevel} getEncounter={getEncounter} getLoot={getLoot} />
					</Grid>
					<Grid item xs={10}>
						<PartyDetails party={party} setParty={setParty} partySize={partySize} partyLevel={partyLevel} setOpenEditPcDialog={setOpenEditPcDialog} />
					</Grid>
					<Grid item xs={2}>
						<InitiativeTracker combat={combat} combatTurn={combatTurn} onChangeTurn={setCombatTurn} />
					</Grid>
				</Grid>
				{openEditPcDialog && <EditPcDialog pc={openEditPcDialog} setOpenEditPcDialog={setOpenEditPcDialog} />}
			</Grid>
		</ThemeProvider>
	);
}

export default App;
