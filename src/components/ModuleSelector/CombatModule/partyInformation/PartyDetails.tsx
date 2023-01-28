import { Card, Chip, FormControl, Grid, MenuItem, TextField, Typography } from "@mui/material";
import customTheme, { useStyles } from "src/customTheme";
import { Entity } from "src/types/GlobalTypes";
import { PCs } from "src/data/PCs/Pcs";
import { ThemeProvider } from "@mui/styles";
import PcDetailCard from "./PcDetailCard";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { addPcToParty, changePartyLevel, removePcFromParty } from "src/features/partySlice";
import { useState } from "react";

interface props {
	setOpenEditPcDialog: (input: Entity | undefined) => void;
}

function PartyDetails({ setOpenEditPcDialog }: props) {
	const classes = useStyles();
	const [selectedPc, setSelectedPc] = useState("Select the PC to add to the party");
	const currentParty = useAppSelector((state) => state.party.members);
	const partyLevel = useAppSelector((state) => state.party.partyLevel);

	const dispatch = useAppDispatch();

	const handleSelectPc = (e: any) => {
		setSelectedPc(e);
		const pcToAdd = PCs.find((pc) => pc.name === e);
		console.log(pcToAdd);
		dispatch(addPcToParty(pcToAdd!));
	};

	const handleRemovePc = (pc: Entity) => {
		dispatch(removePcFromParty(pc));
	};

	const handleChangePartylevel = (newLevel: string) => {
		dispatch(changePartyLevel(parseInt(newLevel)));
	};

	const levelArray = [...Array(21).keys()].slice(1);
	console.log(partyLevel);
	return (
		<ThemeProvider theme={customTheme}>
			<Card sx={{ borderTopLeftRadius: 0 }}>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"}>
							<Grid item md={3} xs={12}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} select id="pcs" value={selectedPc} label="Add PCs to the party" onChange={(e) => handleSelectPc(e.target.value)}>
										<MenuItem value={"Select the PC to add to the party"}>Select a PC to add to the party</MenuItem>
										{PCs.map((pc) => (
											<MenuItem key={pc.name} value={pc.name}>
												{pc.name}
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
							<Grid item xs={7}>
								<Grid container>
									{currentParty &&
										currentParty.map((pc) => (
											<Grid item key={pc.name} marginLeft={1}>
												<Chip label={pc.name} onDelete={() => handleRemovePc(pc)} />
											</Grid>
										))}
								</Grid>
							</Grid>
							<Grid item xs={2} justifySelf="right">
								<Grid container justifyContent="end" alignItems="center" spacing={1}>
									<Grid item>
										<Typography component="span" align="right">
											Level:
										</Typography>
									</Grid>

									<Grid item>
										<FormControl>
											<TextField
												className={classes.headerTitle}
												size="small"
												SelectProps={{
													MenuProps: {
														style: { maxHeight: 200 },
													},
												}}
												select
												id="levels"
												value={partyLevel}
												onChange={(e) => handleChangePartylevel(e.target.value)}
											>
												{levelArray.map((level) => (
													<MenuItem key={level} value={level}>
														{level}
													</MenuItem>
												))}
											</TextField>
										</FormControl>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{currentParty &&
								currentParty.map((pc) => (
									<Grid key={pc.name} item lg={3} md={4} sm={12} padding={1}>
										<PcDetailCard partyLevel={partyLevel} pc={pc} setOpenEditPcDialog={setOpenEditPcDialog} />
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</ThemeProvider>
	);
}

export default PartyDetails;
