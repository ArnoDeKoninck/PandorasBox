import { Grid, Divider } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Entity } from "../../../types/GlobalTypes";
import EditEnemyDialog from "./enemyDetails/EditEnemyDialog";
import EnemyDetails from "./enemyDetails/EnemyDetails";
import InitiativeTracker from "./InitiativeTracker/InitiativeTracker";
import EditPcDialog from "./partyInformation/EditPcDialog";
import PartyDetails from "./partyInformation/PartyDetails";

export interface CombatModuleProps {
	combat: Entity[];
	setCombat: (input: Entity[]) => void;
	party: Entity[];
	setParty: (input: Entity[]) => void;
	partyLevel: number;
	setOpenEditPcDialog: (input: Entity | undefined) => void;
	enemies: Entity[];
	setEnemies: (input: Entity[]) => void;
	enemyIndex: number;
	setEnemyIndex: (input: number) => void;
	setOpenEditEnemyDialog: (input: Entity | undefined) => void;
	combatTurn: number;
	setCombatTurn: (input: number) => void;
	openEditPcDialog: Entity | undefined;
	openEditEnemyDialog: Entity | undefined;
}

function CombatModule({ combat, enemyIndex, setEnemyIndex, party, setParty, partyLevel, setOpenEditPcDialog, enemies, setEnemies, setOpenEditEnemyDialog, combatTurn, setCombatTurn, openEditEnemyDialog, openEditPcDialog }: CombatModuleProps) {
	return (
		<Grid container gap={2} wrap="nowrap">
			<Grid item flexGrow={1}>
				<Grid container flexDirection={"column"}>
					<Grid item xs={12}>
						<PartyDetails party={party} setParty={setParty} partySize={party.length} partyLevel={partyLevel} setOpenEditPcDialog={setOpenEditPcDialog} />
					</Grid>
					{combat && (
						<Grid item xs={12}>
							<Divider variant="middle" sx={{ padding: "1rem", color: pink[800], borderColor: pink[800], "&::before": { borderColor: pink[800] }, "&::after": { borderColor: pink[800] } }}>
								Versus
							</Divider>
							<EnemyDetails enemies={enemies} setEnemies={setEnemies} index={enemyIndex} setIndex={setEnemyIndex} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />
						</Grid>
					)}
				</Grid>
			</Grid>
			<Grid item flexGrow={1} sx={{ maxWidth: "200px" }}>
				<InitiativeTracker combat={combat} combatTurn={combatTurn} onChangeTurn={setCombatTurn} />
			</Grid>
			{openEditPcDialog && <EditPcDialog pc={openEditPcDialog} level={partyLevel} setOpenEditPcDialog={setOpenEditPcDialog} />}
			{openEditEnemyDialog && <EditEnemyDialog setEnemies={setEnemies} enemies={enemies} index={enemyIndex} setOpenEditEnemyDialog={setOpenEditEnemyDialog} />}
		</Grid>
	);
}
export default CombatModule;
