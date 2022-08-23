import { Button, ButtonGroup, Card, CardContent, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { customTheme } from "./customTheme";
import PartyInformation from "./components/ModuleSelector/CombatModule/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";
import { Entity, SessionData, ViewModules } from "./types/GlobalTypes";
import ModuleSelector from "./components/ModuleSelector/ModuleSelector";
import { CombatModuleProps } from "./components/ModuleSelector/CombatModule/CombatModule";
import Jukebox from "./components/Jukebox/Jukebox";

function App() {
	const sessionData = localStorage.getItem("SessionData");
	const savedData = sessionData ? JSON.parse(sessionData) : "";
	console.log(savedData);
	const defaultSession =
		savedData !== ""
			? savedData
			: {
					combat: [],
					combatTurn: 0,
					currentModule: ViewModules.COMBAT,
					encounter: [],
					enemies: [],
					enemyIndex: 0,
					party: [],
					partyLevel: 1,
			  };
	const [session, setSession] = React.useState<SessionData>(defaultSession);
	const [encounter, getEncounter] = React.useState<Encounter | Encounter_Variant | undefined>(undefined);
	const [loot, getLoot] = React.useState<Item[] | undefined>();
	const [partyLevel, setPartyLevel] = React.useState(session.partyLevel);
	const [party, setParty] = React.useState<Entity[]>(session.party);
	const [enemies, setEnemies] = React.useState<Entity[]>(session.enemies);
	const [enemyIndex, setEnemyIndex] = React.useState<number>(session.enemyIndex);
	const [openEditPcDialog, setOpenEditPcDialog] = React.useState<Entity | undefined>(undefined);
	const [openEditEnemyDialog, setOpenEditEnemyDialog] = React.useState<Entity | undefined>(undefined);
	const [combat, setCombat] = React.useState<Entity[]>(session.combat);
	const [combatTurn, setCombatTurn] = React.useState<number>(session.combatTurn);
	const [currentModule, setCurrentModule] = React.useState<ViewModules>(session.currentModule);

	useEffect(() => {
		setSession({
			combat,
			combatTurn,
			currentModule,
			encounter,
			enemies,
			enemyIndex,
			party,
			partyLevel,
		});
	}, [combat, combatTurn, currentModule, encounter, enemies, enemyIndex, party, partyLevel]);

	useEffect(() => {
		localStorage.setItem("SessionData", JSON.stringify(session));
	}, [session]);

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
		enemyIndex,
		openEditEnemyDialog,
		openEditPcDialog,
		party,
		partyLevel,
		setCombat,
		setCombatTurn,
		setEnemies,
		setEnemyIndex,
		setOpenEditEnemyDialog,
		setOpenEditPcDialog,
		setParty,
	};

	return (
		<Container maxWidth={false} sx={{ paddingLeft: "0 !important" }}>
			<ThemeProvider theme={customTheme}>
				<Grid container justifyContent={"center"}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Card>
								<CardContent>
									<Grid container rowGap={2}>
										<Grid item xs={12}>
											<PartyInformation partyLevel={partyLevel} setPartyLevel={setPartyLevel} />
										</Grid>
										<Grid item xs={12}>
											<Jukebox />
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} md={8}>
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
