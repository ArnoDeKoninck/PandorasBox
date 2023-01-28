import { Grid } from "@mui/material";

import { ViewModules } from "../../types/GlobalTypes";
import CombatModule, { CombatModuleProps } from "./CombatModule/CombatModule";
import MapSelector from "./NpcModule/MapModule/MapSelector";
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
					enemyIndex={combatProps.enemyIndex}
					openEditEnemyDialog={combatProps.openEditEnemyDialog}
					openEditPcDialog={combatProps.openEditPcDialog}
					party={combatProps.party}
					setCombat={combatProps.setCombat}
					setCombatTurn={combatProps.setCombatTurn}
					setEnemies={combatProps.setEnemies}
					setEnemyIndex={combatProps.setEnemyIndex}
					setOpenEditEnemyDialog={combatProps.setOpenEditEnemyDialog}
					setOpenEditPcDialog={combatProps.setOpenEditPcDialog}
					setParty={combatProps.setParty}
				/>
			)}
			{moduleToShow === ViewModules.NPCS && <NpcSelector />}
			{moduleToShow === ViewModules.MAP && <MapSelector />}
		</Grid>
	);
}

export default ModuleSelector;
