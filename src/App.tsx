import { Button, ButtonGroup, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { customTheme, useStyles } from "./customTheme";
import PartyInformation from "./components/ModuleSelector/CombatModule/partyInformation/PartyInformation";
import Generators from "./components/generators/Generators";
import { Encounter, Encounter_Variant } from "./types/EncounterTypes";
import { Item } from "./types/ItemTypes";
import { Entity, ViewModules } from "./types/GlobalTypes";
import { dayTimeEncounterList } from "./data/Encounters/Encounters";
import ModuleSelector from "./components/ModuleSelector/ModuleSelector";
import { CombatModuleProps } from "./components/ModuleSelector/CombatModule/CombatModule";
import Jukebox from "./components/Jukebox/Jukebox";

function App() {
	const [encounter, getEncounter] = React.useState<Encounter | Encounter_Variant | undefined>(dayTimeEncounterList[0].variant![0]);
	const [loot, getLoot] = React.useState<Item[] | undefined>();
	const [partyLevel, setPartyLevel] = React.useState(1);
	const [partySize, setPartySize] = React.useState(1);
	const [party, setParty] = React.useState<Entity[]>([]);
	const [enemies, setEnemies] = React.useState<Entity[]>([]);
	const [index, setIndex] = React.useState<number>(0);
	const [openEditPcDialog, setOpenEditPcDialog] = React.useState<Entity | undefined>(undefined);
	const [openEditEnemyDialog, setOpenEditEnemyDialog] = React.useState<Entity | undefined>(undefined);
	const [combat, setCombat] = React.useState<Entity[]>([]);
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
		index,
		openEditEnemyDialog,
		openEditPcDialog,
		party,
		partyLevel,
		setCombat,
		setCombatTurn,
		setEnemies,
		setIndex,
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
											<PartyInformation partySize={partySize} partyLevel={partyLevel} setPartyLevel={setPartyLevel} setPartySize={setPartySize} />
										</Grid>
										<Grid item xs={12}>
											<Jukebox></Jukebox>
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
