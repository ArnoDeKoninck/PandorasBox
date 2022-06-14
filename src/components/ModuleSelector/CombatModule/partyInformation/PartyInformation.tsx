import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../../../customTheme";

interface props {
	partyLevel: number;
	setPartyLevel: (input: any) => void;
}
function PartyInformation({ partyLevel, setPartyLevel }: props) {
	const changePartyLevel = (event: any) => {
		setPartyLevel(event.target.value);
	};
	const classes = useStyles();
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const maxLevel = 20;

	return (
		<Grid container justifyContent={"space-between"} alignItems={"center"}>
			<Grid item xs={6}>
				<Typography sx={{ fontSize: "2rem" }} className={classes.headerTitle}>
					Pandora's Box
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<Grid container rowSpacing={2} gap={4}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel color="secondary" id="partyLevelLabel">
								Party Level
							</InputLabel>
							<Select
								size={"small"}
								className={classes.select}
								labelId="partyLevelLabel"
								id="partyLevel"
								value={partyLevel}
								label="Party Level"
								onChange={changePartyLevel}
								MenuProps={{
									PaperProps: {
										style: {
											maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
											width: 25,
										},
									},
									anchorOrigin: { vertical: "bottom", horizontal: "center" },
									transformOrigin: { vertical: "top", horizontal: "center" },
								}}
							>
								{[...Array(maxLevel)].map((each, level) => (
									<MenuItem key={level} value={level + 1}>
										{level + 1}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default PartyInformation;
