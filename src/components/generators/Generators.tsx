import { Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { customTheme} from "../../customTheme";
import { rollEncounter } from "../../services/encounter-service/encounter-service";
import { generateRandomTreasure, getLevelRangeIndex } from "../../services/loot-service/loot-service";
import { Encounter, Encounter_Variant } from "../../types/EncounterTypes";
import { Item } from "../../types/ItemTypes";
import GeneratedOutput from "./GeneratedOutput";

interface props{
    partyLevel: number;
    encounter:  Encounter | Encounter_Variant |undefined; 
    loot: Item[] | undefined;
    getEncounter: (input: any)=> void;
    getLoot: (input: any) => void;

}
   
function Generators({partyLevel, getEncounter, getLoot, encounter,loot}:props) {
  return (
    <Card>
      <CardContent>
        <Grid container >
          <Grid item xs={12}>
            <Typography variant={"h5"}>Generators</Typography>
            <Divider component={"h5"}/>
          </Grid>
          <Grid container rowSpacing={2}>
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
          <GeneratedOutput encounter={encounter} loot={loot}/>
        </Grid>
          </Grid>  
      </Grid>
    </CardContent>
  </Card>
  );
}

export default Generators;

