import { Grid } from "@mui/material";

import { ViewModules } from "../../types/GlobalTypes";
import CombatModule, { CombatModuleProps } from "./CombatModule/CombatModule";
import NpcSelector from "./NpcModule/NpcSelector";

interface ModuleSelectorProps {
	moduleToShow: ViewModules;
	combatProps: CombatModuleProps;
}
function ModuleSelector({ moduleToShow, combatProps }: ModuleSelectorProps) {
	return (
		<Grid container>
			{moduleToShow === ViewModules.COMBAT && (
				<CombatModule
					combat={combatProps.combat}
					combatTurn={combatProps.combatTurn}
					enemies={combatProps.enemies}
					openEditEnemyDialog={combatProps.openEditEnemyDialog}
					openEditPcDialog={combatProps.openEditPcDialog}
					party={combatProps.party}
					setCombat={combatProps.setCombat}
					setCombatTurn={combatProps.setCombatTurn}
					setEnemies={combatProps.setEnemies}
					setOpenEditEnemyDialog={combatProps.setOpenEditEnemyDialog}
					setOpenEditPcDialog={combatProps.setOpenEditPcDialog}
					partyLevel={combatProps.partyLevel}
					setParty={combatProps.setParty}
				/>
			)}
			{moduleToShow === ViewModules.NPCS && <NpcSelector />}
		</Grid>
	);
}

export default ModuleSelector;
