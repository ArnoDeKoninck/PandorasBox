import { Card, CardContent, Grid, CardMedia, Typography, LinearProgress } from "@mui/material";
import { useStyles } from "../../customTheme";
import { PC } from "../../types/GlobalTypes";

interface PcDetailCardProps {
	pc: PC;
	partyLevel: number;
	setOpenEditPcDialog: (input: PC | undefined) => void;
}
function PcDetailCard({ pc, partyLevel, setOpenEditPcDialog }: PcDetailCardProps) {
	const classes = useStyles();
	return (
		<Card className={classes.itemCard}>
			<CardContent>
				<Grid container rowGap={1}>
					{/* Character Image container*/}
					<Grid container>
						<Grid item xs={3}>
							<CardMedia component="img" height={100} src={`/images/${pc.image}`} />
						</Grid>
						<Grid item xs={9}>
							<Grid container padding={"5px"}>
								{/* General info container*/}
								<Grid container>
									<Grid item xs={4}>
										<Typography align={"left"}>{pc.name}</Typography>
									</Grid>
									<Grid item xs={4}>
										<Typography align={"center"}>Class: {pc.class}</Typography>
									</Grid>
									<Grid item xs={4}>
										<Typography align="right"> Level: {partyLevel}</Typography>
									</Grid>
								</Grid>
								{/* Health bar container*/}
								<Grid item xs={12}>
									<Grid container spacing={1}>
										<Grid item xs={9}>
											<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / pc.currentHealth)} valueBuffer={pc.tempHealth ?? 0} />
										</Grid>
										<Grid item xs={3}>
											<Typography>{`${pc.currentHealth}/${pc.maxHealth} HP`}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid container alignContent={"space-between"}>
						<Grid item xs={11}>
							{/* Initiative and status container*/}
							<Grid container>
								<Grid item xs={4}>
									<Typography>Initiative:</Typography>
								</Grid>
								<Grid item xs={8}>
									<Typography>Status: </Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={1}>
							<Typography className={classes.link} align={"center"} onClick={() => setOpenEditPcDialog(pc)}>
								Edit
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
export default PcDetailCard;
