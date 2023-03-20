import { Grid, LinearProgress, Typography } from "@mui/material";
import { useStyles } from "src/customTheme";

export interface HealthBarProps {
	currentHp: number;
	tempHp: number;
	maxHealth: number;
}
function HealthBar({ currentHp, tempHp, maxHealth }: HealthBarProps) {
	const classes = useStyles();
	return (
		<Grid container columnGap={1}>
			<Grid item xs={8}>
				<LinearProgress className={classes.healthBar} color="success" variant="buffer" value={100 / (maxHealth / currentHp)} valueBuffer={currentHp + tempHp} />
			</Grid>
			<Grid item xs={3}>
				<Typography>{`${currentHp + tempHp}${tempHp ? "(+" + tempHp + ")" : ""}/${maxHealth} HP`}</Typography>
			</Grid>
		</Grid>
	);
}
export default HealthBar;
