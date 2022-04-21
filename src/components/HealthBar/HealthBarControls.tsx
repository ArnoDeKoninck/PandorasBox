import { Grid, FormControl, TextField } from "@mui/material";
import { useStyles } from "../../customTheme";
import HealthBar, { HealthBarProps } from "./HealthBar";

interface HealthBarControlProps extends HealthBarProps {
	onCurrentHpChange: (input: number) => void;
	onTempChange: (input: number) => void;
}
function HealthBarControls({ onCurrentHpChange, onTempChange, currentHp, tempHp, maxHealth }: HealthBarControlProps) {
	const classes = useStyles();
	const onEnterDmg = (e: any) => {
		if (e.key === "Enter") {
			onCurrentHpChange(currentHp - parseInt(e.target.value));
			e.target.value = "";
		}
	};
	const onEnterHealing = (e: any) => {
		if (e.key === "Enter") {
			if (currentHp + parseInt(e.target.value) > maxHealth) {
				console.log(maxHealth);
				onCurrentHpChange(maxHealth);
				e.target.value = "";
			} else {
				onCurrentHpChange(currentHp + parseInt(e.target.value));
				e.target.value = "";
			}
		}
	};
	const onEnterTempHealth = (e: any) => {
		if (e.key === "Enter") {
			onTempChange(parseInt(e.target.value));
			e.target.value = "";
		}
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<HealthBar currentHp={currentHp} maxHealth={maxHealth} tempHp={tempHp} />
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={2}>
						<FormControl>
							<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"DMG"} onKeyDown={onEnterDmg} />
						</FormControl>
					</Grid>
					<Grid item xs={2}>
						<FormControl>
							<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"+HP"} onKeyDown={onEnterHealing} />
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl>
							<TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label={"+THP"} onKeyDown={onEnterTempHealth} />
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default HealthBarControls;
