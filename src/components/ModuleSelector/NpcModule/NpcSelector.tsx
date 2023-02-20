import { Search } from "@mui/icons-material";
import { Grid, Card, Typography, CardMedia, TextField, InputAdornment, MenuItem } from "@mui/material";
import { useState } from "react";
import { npcs } from "src/data/npcs";
import { Factions } from "src/types/GlobalTypes";
import customTheme, { useStyles } from "../../../customTheme";

export const factionList = [Factions.BAROVIA, Factions.DARK_POWERS, Factions.KREZK, Factions.RAVENLOFT, Factions.VALLAKI, Factions.VISTANI];
function NpcSelector() {
	const classes = useStyles();
	const [input, setInput] = useState<string>("");
	const [faction, setFaction] = useState<string | undefined>(undefined);

	const filteredByName = input !== "" ? npcs.filter((npc) => npc.name.toLowerCase().includes(input.toLowerCase())) : npcs;
	const filteredNpcs = faction !== undefined ? filteredByName.filter((npc) => npc.tags.includes(faction as Factions)) : filteredByName;
	return (
		<Grid container justifyContent="center">
			<Grid item xs={12}>
				<Card sx={{ borderTopLeftRadius: 0, marginBottom: "1rem" }}>
					<Grid item xs={12} rowSpacing={8}>
						<Grid container padding={2}>
							<Grid item xs={2} paddingLeft={1} paddingBottom={2}>
								<TextField
									fullWidth
									size="small"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									label="search by name"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Search style={{ color: customTheme.palette.secondary.light }} />
											</InputAdornment>
										),
									}}
								></TextField>
							</Grid>
							<Grid item xs={2} paddingLeft={1} paddingBottom={2}>
								<TextField
									fullWidth
									size="small"
									select
									value={faction}
									onChange={(e) => setFaction(e.target.value)}
									label="Search By faction"
									SelectProps={{
										MenuProps: {
											style: { maxHeight: 200 },
										},
									}}
								>
									{factionList.map((faction) => (
										<MenuItem key={faction} value={faction}>
											{faction}
										</MenuItem>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={1} paddingRight={2}>
									{filteredNpcs &&
										filteredNpcs.map((npc) => (
											<Grid key={npc.name} item xs={4} md={1}>
												<Card className={classes.npcCard} onClick={() => window.open(`npc/${npc.name.replaceAll(" ", "_").toLowerCase()}`)}>
													{npc.image && <CardMedia component="img" height="180" src={`./images/${npc.image}`} alt={npc.name} />}
													<Typography align="center" className={classes.npcCardTitle}>
														{npc.name}
													</Typography>
												</Card>
											</Grid>
										))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
export default NpcSelector;
