import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useStyles } from "../../../customTheme";
import { Item } from "../../../types/ItemTypes";

interface props{
   item: Item;

}
   
function TreasureCard({item}:props) {
    const classes= useStyles();
  return (
    <Card style={{backgroundColor: grey[800]}}> 
        <CardContent>
            <Grid container rowSpacing={2} className={classes.headerTitle}>
                <Grid container >
                    <Grid item>
                        <Typography component={"span"}>{item.amount} {item.name}</Typography>
                        {item.description && <Typography component={"p"}>{item.description}</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
   
  );
}

export default TreasureCard;