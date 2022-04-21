import { Card, CardContent, Grid, CardMedia, Typography, LinearProgress, TextField } from "@mui/material";
import customTheme, { useStyles } from "../../customTheme";
import { PC, Status } from "../../types/GlobalTypes";
import StatusChip from "../Status/StatusChip";

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
										<Grid item xs={7}>
											<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / pc.currentHealth)} valueBuffer={pc.currentHealth + (pc.tempHealth ?? 0)} />
										</Grid>
										<Grid item xs={5}>
											<Typography>{`${pc.currentHealth + (pc.tempHealth ?? 0)}${pc.tempHealth ? "(+" + pc.tempHealth + ")" : ""}/${pc.maxHealth} HP`}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid container alignContent={"space-between"}>
						<Grid item xs={11}>
							{/* Initiative and status container*/}
							<Grid container rowGap={2}>
								<Grid item xs={12}>
									<Typography>Status:</Typography>
									<Grid container>
										{pc.status &&
											pc.status.map(
												(status: Status) =>
													status !== Status.NONE && (
														<Grid item key={status}>
															<StatusChip status={status} />
														</Grid>
													)
											)}
									</Grid>
								</Grid>
								<Grid></Grid>
								<Grid item xs={12}>
									<Grid container rowGap={1}>
										<Grid item xs={12}>
											<Typography>Spellslots:</Typography>
										</Grid>

										{pc.spellSlots &&
											pc.spellSlots.map((spellSlot: number, index: number) => (
												<Grid key={spellSlot} item xs={2}>
													<TextField className={classes.headerTitle} disabled label={index + 1} value={spellSlot} />
												</Grid>
											))}
									</Grid>
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
