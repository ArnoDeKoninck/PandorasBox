import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useStyles } from "../../../customTheme";
import { Encounter, Encounter_Variant } from "../../../types/EncounterTypes";

interface props {
	encounter: Encounter | Encounter_Variant;
}

function EncounterCard({ encounter }: props) {
	const classes = useStyles();
	const { amount, dc, description, name, savingThrow } = encounter;
	return (
		<Card style={{ backgroundColor: grey[800] }}>
			<CardContent>
				<Grid container rowSpacing={2} className={classes.headerTitle}>
					<Grid container>
						<Grid item>
							<Typography component={"span"}>
								{amount} {name}
							</Typography>
							{description && <Typography component={"span"}>{description}</Typography>}
							{savingThrow && (
								<Typography component={"span"}>
									DC {dc} {savingThrow}
								</Typography>
							)}
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default EncounterCard;
