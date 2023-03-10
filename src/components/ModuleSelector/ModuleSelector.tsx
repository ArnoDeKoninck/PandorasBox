import { Grid } from "@mui/material";
import { ViewModules } from "../../types/GlobalTypes";
import CombatModule from "./CombatModule/CombatModule";
import MapSelector from "./NpcModule/MapModule/MapSelector";
import NpcSelector from "./NpcModule/NpcSelector";

interface ModuleSelectorProps {
	moduleToShow: ViewModules;
}

function ModuleSelector({ moduleToShow }: ModuleSelectorProps) {
	return (
		<Grid container>
			{moduleToShow === ViewModules.COMBAT && <CombatModule />}
			{moduleToShow === ViewModules.NPCS && <NpcSelector />}
			{moduleToShow === ViewModules.MAP && <MapSelector />}
		</Grid>
	);
}

export default ModuleSelector;
