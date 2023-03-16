import { Grid, Divider } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useAppSelector } from "src/app/hooks";
import EnemyDetails from "./enemyDetails/EnemyDetails";
import InitiativeTracker from "./InitiativeTracker/InitiativeTracker";
import PartyDetails from "./partyInformation/PartyDetails";

function CombatModule() {
	const party = useAppSelector((state) => state.party.members);
	const enemies = useAppSelector((state) => state.enemies.entities);
	const combatTurn = useAppSelector((state) => state.combatTurn);

	console.log(party);
	const combat = [...party, ...enemies];
	return (
		<Grid container gap={2} wrap="nowrap">
			<Grid item flexGrow={1}>
				<Grid container flexDirection={"column"}>
					<Grid item xs={12}>
						<PartyDetails />
					</Grid>
					{combat && (
						<Grid item xs={12}>
							<Divider variant="middle" sx={{ padding: "1rem", color: pink[800], borderColor: pink[800], "&::before": { borderColor: pink[800] }, "&::after": { borderColor: pink[800] } }}>
								Versus
							</Divider>
							{<EnemyDetails />}
						</Grid>
					)}
				</Grid>
			</Grid>
			<Grid item flexGrow={1} sx={{ maxWidth: "200px" }}>
				<InitiativeTracker combat={combat} combatTurn={combatTurn} />
			</Grid>
		</Grid>
	);
}
export default CombatModule;
