import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { customTheme} from "../../customTheme";
import { rollEncounter } from "../../services/encounter-service/encounter-service";
import { generateRandomTreasure, getLevelRangeIndex } from "../../services/loot-service/loot-service";
import { Encounter, Encounter_Variant } from "../../types/EncounterTypes";

interface props{
    partyLevel: number;
    encounter:  Encounter | Encounter_Variant |undefined; 
    loot: React.ReactNode | undefined;
    getEncounter: (input: any)=> void;
    getLoot: (input: any) => void;

}
   
function Sidebar({partyLevel, getEncounter, getLoot, encounter}:props) {
  return (
    <Grid container spacing={2}>
    <Grid item >
      <Button onClick={() => getEncounter(rollEncounter())}>
        <Typography color={customTheme.palette.secondary.main}>Generate Encounter</Typography>
      </Button>
    </Grid>
    <Grid item >
      <Button onClick={() => getLoot(generateRandomTreasure(getLevelRangeIndex(partyLevel)))}>
      <Typography color={customTheme.palette.secondary.main}>Generate Treasure</Typography>
      </Button>
    </Grid>
    <Grid item xs={12}>

    </Grid>
  </Grid>
  );
}

export default Sidebar;

