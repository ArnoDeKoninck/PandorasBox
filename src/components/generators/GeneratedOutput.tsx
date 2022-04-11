
import { Grid } from "@mui/material";
import { Encounter, Encounter_Variant } from "../../types/EncounterTypes";
import { Item } from "../../types/ItemTypes";
import EncounterCard from "../encounters/EncounterCard/EncounterCard";
import TreasureCard from "../items/TreasureCard/TreasureCard";

interface props{
   encounter: Encounter| Encounter_Variant |undefined;
   loot: Item[]|undefined;

}
   
function GeneratedOutput({encounter, loot}:props) {
  return (
    <Grid container spacing={2}>
      {encounter && <EncounterCard encounter={encounter}/>}
      {loot && loot.map((item)=>
      <Grid item xs={3}>
        <TreasureCard item={item}/>
      </Grid>
      )}
  </Grid>
  );
}

export default GeneratedOutput;

