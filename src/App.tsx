import { Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { customTheme, useStyles } from "./customTheme";
import PartyInformation from "./components/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";
import PartyDetails from "./components/partyInformation/PartyDetails";
import EditPcDialog from "./components/partyInformation/EditPcDialog";
import { Monster, PC } from "./types/GlobalTypes";
import InitiativeTracker from "./components/InitiativeTracker/InitiativeTracker";
import { dayTimeEncounterList } from "./data/Encounters/Encounters";
import { pink } from "@mui/material/colors";
import EnemyDetails from "./components/enemyDetails/EnemyDetails";
import EditEnemyDialog from "./components/enemyDetails/EditEnemyDialog";

function App() {
	const [encounter, getEncounter] = React.useState<Encounter | Encounter_Variant | undefined>(dayTimeEncounterList[0].variant![0]);
	const [loot, getLoot] = React.useState<Item[] | undefined>();
	const [partyLevel, setPartyLevel] = React.useState(1);
	const [partySize, setPartySize] = React.useState(1);
	const [party, setParty] = React.useState<PC[]>([]);
	const [enemies, setEnemies] = React.useState<Monster[]>([]);
	const [openEditPcDialog, setOpenEditPcDialog] = React.useState<PC | undefined>(undefined);
	const [openEditEnemyDialog, setOpenEditEnemyDialog] = React.useState<Monster | undefined>(undefined);
	const [combat, setCombat] = React.useState<(PC | Monster)[]>([]);
	const [combatTurn, setCombatTurn] = React.useState<number>(0);

	const classes = useStyles();

	useEffect(() => {
		setCombat([...enemies, ...party].sort((a, b) => b.initiative! - a.initiative!));
	}, [party, enemies]);

	const rollInitiative = () => {
		if (encounter) {
			return true;
		}
	};
	return (
		<Container maxWidth={false} sx={{ paddingLeft: "0 !important" }}>
			<ThemeProvider theme={customTheme}>
				<Grid container justifyContent={"center"}>
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
							<Grid container flexDirection={"column"}>
								<Grid item xs={12}>
									<PartyDetails party={party} setParty={setParty} partySize={partySize} partyLevel={partyLevel} setOpenEditPcDialog={setOpenEditPcDialog} />
								</Grid>
								{combat && (
									<Grid item xs={12}>
										<Divider variant="middle" sx={{ padding: "1rem", color: pink[800], borderColor: pink[800], "&::before": { borderColor: pink[800] }, "&::after": { borderColor: pink[800] } }}>
											Versus
										</Divider>
										<EnemyDetails enemies={enemies} setEnemies={setEnemies} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />
									</Grid>
								)}
							</Grid>
						</Grid>
						<Grid item xs={2}>
							<InitiativeTracker combat={combat} combatTurn={combatTurn} onChangeTurn={setCombatTurn} />
						</Grid>
					</Grid>
					{openEditPcDialog && <EditPcDialog pc={openEditPcDialog} setOpenEditPcDialog={setOpenEditPcDialog} />}
					{openEditEnemyDialog && <EditEnemyDialog enemy={openEditEnemyDialog} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />}
				</Grid>
			</ThemeProvider>
		</Container>
	);
}

export default App;
