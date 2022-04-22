import { Grid, LinearProgress, Typography } from "@mui/material";

export interface HealthBarProps {
	currentHp: number;
	tempHp: number;
	maxHealth: number;
}
function HealthBar({ currentHp, tempHp, maxHealth }: HealthBarProps) {
	console.log(`currentHp: ${currentHp},MaxHp: ${maxHealth},tempHp: ${tempHp}`);
	return (
		<Grid container columnGap={1}>
			<Grid item xs={8}>
				<LinearProgress color="success" variant="buffer" value={100 / (maxHealth / currentHp)} valueBuffer={currentHp + tempHp} />
			</Grid>
			<Grid item xs={3}>
				<Typography>{`${currentHp + tempHp}${tempHp ? "(+" + tempHp + ")" : ""}/${maxHealth} HP`}</Typography>
			</Grid>
		</Grid>
	);
}
export default HealthBar;
