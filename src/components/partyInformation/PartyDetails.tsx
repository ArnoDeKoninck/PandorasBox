import { Card, Chip, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../customTheme";
import { PC } from "../../types/GlobalTypes";
import { PCs } from "../../data/PCs/Pcs";
import { ThemeProvider } from "@mui/styles";
import PcDetailCard from "./PcDetailCard";

interface props {
	party: PC[];
	partyLevel: number;
	partySize: number;
	setOpenEditPcDialog: (input: PC | undefined) => void;
	setParty: (input: React.SetStateAction<PC[]>) => void;
}

function PartyDetails({ party, partySize, partyLevel, setOpenEditPcDialog, setParty }: props) {
	const [selectedPc, setSelectedPc] = React.useState<PC | string>("Select the PC to add to the party");
	const classes = useStyles();

	async function addSelectedPcToParty(pcName: string) {
		PCs.map((pc) => {
			if (pcName === pc.name) {
				setSelectedPc(pc.name);
				setParty((oldParty) => [...oldParty, pc]);
			}
			return pc;
		});
	}

	function removePcFromParty(pc: PC) {
		setParty(party.filter((partyPc) => partyPc.name !== pc.name));
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Card>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"}>
							<Grid item xs={3}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} select id="pcs" value={selectedPc} label="Add PCs to the party" onChange={(e) => addSelectedPcToParty(e.target.value)}>
										<MenuItem value={"Select the PC to add to the party"}>Select a PC to add to the party</MenuItem>
										{PCs.map((pc) => (
											<MenuItem key={pc.name} value={pc.name}>
												{pc.name}
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
							<Grid item xs={9}>
								<Grid container>
									{party &&
										party.map((pc) => (
											<Grid item key={pc.name} marginLeft={1}>
												<Chip label={pc.name} onDelete={() => removePcFromParty(pc)} />
											</Grid>
										))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{party &&
								party.map((pc) => (
									<Grid key={pc.name} item xs={3} padding={1}>
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
