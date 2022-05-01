import { Button, ButtonGroup, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { customTheme, useStyles } from "./customTheme";
import PartyInformation from "./components/ModuleSelector/CombatModule/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";
import { Monster, PC, ViewModules } from "./types/GlobalTypes";
import { dayTimeEncounterList } from "./data/Encounters/Encounters";
import ModuleSelector from "./components/ModuleSelector/ModuleSelector";
import { CombatModuleProps } from "./components/ModuleSelector/CombatModule/CombatModule";
import ReactPlayer from "react-player";

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
	const [currentModule, setCurrentModule] = React.useState<ViewModules>(ViewModules.COMBAT);

	const classes = useStyles();

	useEffect(() => {
		setCombat([...enemies, ...party].sort((a, b) => b.initiative! - a.initiative!));
	}, [party, enemies]);

	const rollInitiative = () => {
		if (encounter) {
			return true;
		}
	};

	const combatProps: CombatModuleProps = {
		combat,
		enemies,
		combatTurn,
		openEditEnemyDialog,
		openEditPcDialog,
		party,
		partyLevel,
		setCombat,
		setCombatTurn,
		setEnemies,
		setOpenEditEnemyDialog,
		setOpenEditPcDialog,
		setParty,
	};

	return (
		<Container maxWidth={false} sx={{ paddingLeft: "0 !important" }}>
			<ThemeProvider theme={customTheme}>
				<Grid container justifyContent={"center"}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Card>
								<CardContent>
									<Grid container rowGap={2}>
										<Grid item xs={12}>
											<PartyInformation partySize={partySize} partyLevel={partyLevel} setPartyLevel={setPartyLevel} setPartySize={setPartySize} />
										</Grid>
										<Grid item xs={12}>
											<ReactPlayer className={classes.audioControls} width="100%" height="3rem" controls url={"audio/StrahdsVengeance.mp3"} />
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={8}>
							<Generators rollInitiative={rollInitiative} encounter={encounter} loot={loot} partyLevel={partyLevel} getEncounter={getEncounter} getLoot={getLoot} />
						</Grid>
						<Grid item xs={12}>
							<ButtonGroup variant="text" aria-label="outlined primary button group">
								<Button sx={{ margin: 0, backgroundColor: customTheme.palette.primary.main, borderBottomLeftRadius: 0, color: customTheme.palette.secondary.light, borderColor: customTheme.palette.secondary.light }} onClick={() => setCurrentModule(ViewModules.COMBAT)}>
									Combat
								</Button>
								<Button sx={{ margin: 0, backgroundColor: customTheme.palette.primary.main, borderRadius: 0, color: customTheme.palette.secondary.light, borderColor: customTheme.palette.secondary.light }} onClick={() => setCurrentModule(ViewModules.GENERATORS)}>
									Generators
								</Button>
								<Button sx={{ margin: 0, backgroundColor: customTheme.palette.primary.main, borderBottomRightRadius: 0, color: customTheme.palette.secondary.light, borderColor: customTheme.palette.secondary.light }} onClick={() => setCurrentModule(ViewModules.NPCS)}>
									Npcs
								</Button>
								<Button sx={{ margin: 0, backgroundColor: customTheme.palette.primary.main, borderBottomRightRadius: 0, color: customTheme.palette.secondary.light, borderColor: customTheme.palette.secondary.light }} onClick={() => setCurrentModule(ViewModules.MAP)}>
									Map
								</Button>
							</ButtonGroup>
							<ModuleSelector moduleToShow={currentModule} combatProps={combatProps} />
						</Grid>
					</Grid>
				</Grid>
			</ThemeProvider>
		</Container>
	);
}

export default App;
