import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useStyles } from "../../../customTheme";
import { Encounter, Encounter_Variant } from "../../../types/EncounterTypes";

interface props {
	encounter: Encounter | Encounter_Variant;
}

function EncounterCard({ encounter }: props) {
	const classes = useStyles();

	const { name, amount, description } = encounter;
	return (
		<Card style={{ backgroundColor: grey[800], height: "10rem", width: "100%" }}>
			<CardContent>
				<Grid container rowSpacing={2} className={classes.headerTitle}>
					<Grid container>
						<Grid item>
							<Typography component={"p"}>{`${amount} ${name}`}</Typography>
							<Typography component={"p"}>{description}</Typography>
							{encounter.savingThrow && encounter.dc && <Typography component={"p"}>DC {`${encounter.dc} ${encounter.savingThrow}`}</Typography>}
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default EncounterCard;
