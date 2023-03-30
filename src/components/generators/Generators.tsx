import { Card, FormControl, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useAppSelector } from "src/app/hooks";
import { customTheme, useStyles } from "../../customTheme";
import { dayTimeEncounterList } from "src/data/Encounters/Encounters";
import { useState } from "react";
import { randomizeEncounterVariables } from "src/services/encounter-service/encounter-service";
import { Encounter } from "src/types/EncounterTypes";
import { v4 as uuid } from "uuid";
import { AutoFixHigh, Diamond, Grass, LightMode } from "@mui/icons-material";
function Generators() {
	const [category, setCategory] = useState<string>("Encounters");
	const [currentSelected, setCurrentSelected] = useState<number>(0);
	const [amount, setAmount] = useState<number>(1);
	const [currentEncounter, setCurrentEncounter] = useState<Encounter>(randomizeEncounterVariables(dayTimeEncounterList[0]));
	const [currentEncounterList, setCurrentEncounterList] = useState<string>("Daytime Encounters");

	const encounterLists = [
		{
			name: "Daytime Encounters",
			list: dayTimeEncounterList,
			icon: (
				<LightMode
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			),
		},
	];
	const partyLevel = useAppSelector((state) => state.party.partyLevel);
	const classes = useStyles();
	const generatingCategories = [
		{
			name: "Encounters",
			icon: (
				<Grass
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			),
		},
		{
			name: "Magic Items",
			icon: (
				<AutoFixHigh
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			),
		},
		{
			name: "Treasure",
			icon: (
				<Diamond
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			),
		},
	];
	const animationTiming = 10;
	//the Animation Delay Fraction for a specific array
	const dayTimeEncounter_ADR = animationTiming / dayTimeEncounterList.length;
	let endShuffleTimer: ReturnType<typeof setInterval>;

	return (
		<Grid container>
			<Grid item xs={12}>
				<Card sx={{ minHeight: "304px", borderRadius: "0 8px 8px 8px" }}>
					<Grid container padding={3} gap={2}>
						<Grid item xs={3} md={2} sx={{ paddingLeft: "0 !important" }}>
							<FormControl fullWidth>
								<TextField size={"small"} className={classes.headerTitle} select id="GeneratingCategory" label={"Category"} fullWidth value={category} onChange={(e: any) => setCategory(e.target.value)}>
									{generatingCategories.map((category: { name: string; icon: JSX.Element }) => (
										<MenuItem key={uuid()} value={category.name}>
											<Grid container alignItems="center" justifyContent={"space-between"}>
												<Grid item>
													<Typography>{category.name}</Typography>
												</Grid>
												<Grid item>{category.icon}</Grid>
											</Grid>
										</MenuItem>
									))}
								</TextField>
							</FormControl>
						</Grid>
						{category === "Encounters" && (
							<Grid item xs={3} md={2}>
								<FormControl fullWidth>
									<TextField size={"small"} className={classes.headerTitle} select id="encounterLists" value={currentEncounterList} label="Encounter options" onChange={(e: any) => setCurrentEncounterList(e.target.value)}>
										{encounterLists.map((item) => (
											<MenuItem key={uuid()} value={item.name}>
												<Grid container alignItems="center" justifyContent={"space-between"}>
													<Grid item>
														<Typography>{item.name}</Typography>
													</Grid>
													<Grid item>{item.icon}</Grid>
												</Grid>
											</MenuItem>
										))}
									</TextField>
								</FormControl>
							</Grid>
						)}

						<Grid item xs={3} md={1}>
							<FormControl fullWidth>
								<TextField
									sx={{ "& .MuiOutlinedInput-root": { height: "47px !important" } }}
									size={"small"}
									className={`${classes.headerTitle} ${classes.maxHeight}`}
									id="GenerateAmount"
									label={"Amount"}
									value={amount}
									onChange={(e: any) => setAmount(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}></Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}

export default Generators;
