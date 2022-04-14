import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Monster } from "../../../types/GlobalTypes";

interface MonsterCardProps {
	monster: Monster;
}
function monsterCard({ monster }: MonsterCardProps) {
	const { name, statBlock, exp } = monster;
	return (
		<Card>
			<CardContent>
				<Grid container padding={4}>
					<Grid item>
						<Typography>{name}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.cha > 0 ? "+" : "-" + statBlock.cha} CHA</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.con > 0 ? "+" : "-" + statBlock.con} CON</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.dex > 0 ? "+" : "-" + statBlock.dex} DEX</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.int > 0 ? "+" : "-" + statBlock.int} INT</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.str > 0 ? "+" : "-" + statBlock.str} STR</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography>{statBlock.wis > 0 ? "+" : "-" + statBlock.wis} WIS</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
export default monsterCard;
