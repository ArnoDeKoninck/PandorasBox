import { Card, CardContent, Grid, CardMedia, Typography, LinearProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "src/app/hooks";
import { useStyles } from "../../../../customTheme";
import { Entity, Status } from "../../../../types/GlobalTypes";
import StatusChip from "../Status/StatusChip";
import { getClassResources } from "./ClassResource";
import EditPcDialog from "./EditPcDialog";

interface PcDetailCardProps {
	pc: Entity;
}
function PcDetailCard({ pc }: PcDetailCardProps) {
	const [openEditDialog, setOpenEditDialog] = useState<Boolean>(false);
	const partyLevel = useAppSelector((state) => state.party.partyLevel);
	const classes = useStyles();
	return (
		<Card className={classes.itemCard}>
			<CardContent>
				<Grid container rowGap={1}>
					{/* Character Image container*/}
					<Grid container>
						<Grid item xs={3}>
							<CardMedia component="img" height={100} src={`./images/${pc.image}`} sx={{ objectFit: "contain" }} />
						</Grid>
						<Grid item xs={9}>
							<Grid container padding={"5px"}>
								{/* General info container*/}
								<Grid container columnSpacing={1} justifyContent="space-between">
									<Grid item>
										<Typography align={"left"}>{pc.name}</Typography>
									</Grid>
									<Grid item>
										<Typography align={"center"}>
											{pc.class}: {partyLevel}
										</Typography>
									</Grid>
								</Grid>
								{/* Health bar container*/}
								<Grid item xs={12}>
									<Grid container spacing={1}>
										<Grid item xs={8}>
											<LinearProgress color="success" variant="buffer" value={100 / (pc.maxHealth / pc.currentHealth)} valueBuffer={pc.currentHealth + (pc.tempHealth ?? 0)} />
										</Grid>
										<Grid item xs={4}>
											<Typography>{`${pc.currentHealth + (pc.tempHealth ?? 0)}${pc.tempHealth ? "(+" + pc.tempHealth + ")" : ""}/${pc.maxHealth} HP`}</Typography>
										</Grid>
										<Grid item xs={8}>
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
										<Grid item xs={4}>
											<Typography>Initiative: {pc.initiative}</Typography>
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
									<Grid container rowGap={1}>
										<Grid item xs={12}>
											<Typography>{getClassResources(pc.class!, partyLevel).title}</Typography>
										</Grid>
										{pc.resources &&
											pc.resources.map((spellSlot: number, index: number) => (
												<Grid key={`${pc.name} ${spellSlot} ${index}`} item xs={2}>
													<TextField className={classes.headerTitle} inputProps={{ className: classes.spellslotBox }} disabled label={index + 1} value={spellSlot} />
												</Grid>
											))}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={1}>
							<Typography className={classes.link} align={"center"} onClick={() => setOpenEditDialog(true)}>
								Edit
							</Typography>
						</Grid>
						{openEditDialog && pc && <EditPcDialog selectedPc={pc} setOpenEditDialog={setOpenEditDialog} />}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
export default PcDetailCard;
