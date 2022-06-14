import { Card, Chip, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../../../customTheme";
import { Entity } from "../../../../types/GlobalTypes";
import { PCs } from "../../../../data/PCs/Pcs";
import { ThemeProvider } from "@mui/styles";
import PcDetailCard from "./PcDetailCard";

interface props {
	party: Entity[];
	partyLevel: number;
	partySize: number;
	setOpenEditPcDialog: (input: Entity | undefined) => void;
	setParty: (input: Entity[]) => void;
}

function PartyDetails({ party, partySize, partyLevel, setOpenEditPcDialog, setParty }: props) {
	const [selectedPc, setSelectedPc] = React.useState<Entity | string>("Select the PC to add to the party");
	const classes = useStyles();

	async function addSelectedPcToParty(pcName: string) {
		PCs.map((pc) => {
			if (pcName === pc.name) {
				setSelectedPc(pc.name);
				setParty([...party, pc]);
			}
			return pc;
		});
	}

	function removePcFromParty(pc: Entity) {
		setParty(party.filter((partyPc) => partyPc.name !== pc.name));
	}

	return (
		<ThemeProvider theme={customTheme}>
			<Card sx={{ borderTopLeftRadius: 0 }}>
				<Grid container padding={3} gap={2}>
					<Grid item xs={12}>
						<Grid container alignItems={"center"}>
							<Grid item md={3} xs={12}>
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
