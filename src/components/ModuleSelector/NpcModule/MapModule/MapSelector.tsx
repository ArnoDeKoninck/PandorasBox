import { LocalGroceryStore, LocationCity, LocationOn, PriorityHigh, SavedSearch, SportsBar } from "@mui/icons-material";
import { Card, CardMedia, Divider, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Switch, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { CR_FirstFloorLocations } from "src/data/MapLocations/CastleRavenloft/CR_FirstFloor";
import { DeathHouseEscapeLocations, DeathHouseLocations } from "src/data/MapLocations/DeathHouse/DeathHouseLocations";
import customTheme, { useStyles } from "../../../../customTheme";
import { AllMaps, CastleRavenloftMaps } from "../../../../data/maps/maps";
import { Maps } from "../../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
import { CR_OutsideLocations } from "src/data/MapLocations/CastleRavenloft/CR_Outside";

interface MousePosition {
	x: number;
	y: number;
}

function MapSelector() {
	const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });
	const [selectedMap, setSelectedMap] = React.useState<Maps>(AllMaps.filter((map) => map.name === "Barovia")[0]);
	const [isMapAlternative, setMapAlternative] = useState<number>(0);
	const [showIcons, setShowIcons] = useState<boolean>(true);

	const getMousePosition = (e: any) => {
		const map = e.target.getBoundingClientRect();
		const offsetY = e.nativeEvent.offsetY;
		const offsetX = e.nativeEvent.offsetX;
		setMousePosition({ x: (offsetX / map.width) * 100, y: (offsetY / map.height) * 100 });
	};
	console.log(mousePosition);
	const changeMap = (mapName: string) => {
		const map = AllMaps.filter((map) => map.name === mapName);
		setSelectedMap(map[0] as Maps);
	};

	const classes = useStyles();
	const swapToAlternativeMap = (input: number) => {
		console.log("Do I get my input: " + input);
		setMapAlternative((prevState) => (prevState === 0 ? input : 0));

		if (input !== 0) {
			//when map is not default
			if (selectedMap.name === "Death House") {
				//When map is Death house and switched to alternative, switch to death house escape module
				selectedMap.locations = DeathHouseEscapeLocations;
			}
			if (selectedMap.name === "Castle Ravenloft") {
				console.log("Do i get here?");
				switch (input) {
					case 0:
						selectedMap.img = "./images/cr_outside.webp";
						selectedMap.locations = CR_OutsideLocations;
						break;
					case 1:
						selectedMap.img = "./images/cr_first_floor.webp";
						selectedMap.locations = CR_FirstFloorLocations;
						break;
					default: {
						selectedMap.img = "./images/cr_outside.webp";
						selectedMap.locations = CR_OutsideLocations;
					}
				}
			}
		} else {
			if (selectedMap.name === "Death House") {
				selectedMap.locations = DeathHouseLocations;
			}
			if (selectedMap.name === "Castle Ravenloft") {
				selectedMap.img = "./images/cr_outside.webp";
				selectedMap.locations = CR_OutsideLocations;
			}
		}
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<Card sx={{ borderTopLeftRadius: 0 }}>
					<Grid container padding={2} gap={2} justifyContent="center">
						<Grid item xs={12}>
							<Grid container columnGap={2}>
								<Grid item xs={2}>
									<FormControl fullWidth>
										<TextField size={"small"} className={classes.headerTitle} select id="maps" value={selectedMap.name} label="Choose the map" onChange={(e: any) => changeMap(e.target.value)}>
											{AllMaps.map((map) => (
												<MenuItem key={uuid()} value={map.name}>
													{map.name}
												</MenuItem>
											))}
										</TextField>
									</FormControl>
								</Grid>
								{selectedMap.name === "Castle Ravenloft" && (
									<Grid item xs={2}>
										<FormControl fullWidth>
											<TextField size={"small"} className={classes.headerTitle} select id="Castle Ravenloft floors" value={isMapAlternative} label="Choose the floor" onChange={(e: any) => swapToAlternativeMap(e.target.value)}>
												{CastleRavenloftMaps.map((map, index) => (
													<MenuItem key={uuid()} value={index}>
														{map.name}
													</MenuItem>
												))}
											</TextField>
										</FormControl>
									</Grid>
								)}
								<Grid item xs={2}>
									<FormGroup>
										<FormControlLabel control={<Switch checked={showIcons} onChange={() => setShowIcons(!showIcons)} color={"error"} />} label="Toggle Landmarks" />
									</FormGroup>
								</Grid>
								{selectedMap.name === "Death House" && (
									<Grid item xs={2}>
										<FormGroup>
											<FormControlLabel control={<Switch checked={isMapAlternative ? true : false} onChange={() => swapToAlternativeMap(isMapAlternative === 0 ? 1 : 0)} color={"error"} />} label="Toggle Skill Challenge" />
										</FormGroup>
									</Grid>
								)}
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Card sx={{ position: "relative" }}>
								{selectedMap.locations.map(
									(location) =>
										showIcons && (
											<Tooltip
												key={uuid()}
												title={
													<div key={uuid()}>
														{location.name}
														<Divider sx={{ marginBottom: "5px" }} key={uuid()} />
														{location.flavorText}
														{location.note}
														{location.events && (
															<div style={{ marginTop: "1rem" }} key={uuid()}>
																Events:
																<ul key={uuid()}>{location.events}</ul>
															</div>
														)}
													</div>
												}
												componentsProps={{ tooltip: { sx: { backgroundColor: customTheme.palette.primary.dark, fontSize: "1rem", maxWidth: 500, maxHeight: 250, overflow: "auto" } } }}
											>
												<div style={{ zIndex: 2, display: `${showIcons ? "default" : "invisible"}`, position: "absolute", left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%`, borderRadius: "20px" }} key={uuid()}>
													<IconButton
														key={uuid()}
														size="small"
														component="span"
														sx={{
															backgroundColor: customTheme.palette.primary.dark,
															"&:hover > *": {
																color: customTheme.palette.primary.dark,
															},
															"&:hover img": {
																filter: "none !important",
															},
														}}
													>
														{getLocationIcon(location.type)}
													</IconButton>
												</div>
											</Tooltip>
										)
								)}
								<CardMedia sx={{ boxSizing: "border-box" }} component="img" src={`./` + selectedMap.img} onMouseMove={getMousePosition} />
							</Card>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
export default MapSelector;

export const getLocationIcon = (locationType: string) => {
	switch (locationType) {
		case "location":
			return (
				<LocationOn
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "village":
			return (
				<LocationCity
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "shop":
			return (
				<LocalGroceryStore
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "tavern":
			return (
				<SportsBar
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "search":
			return (
				<SavedSearch
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "event":
			return (
				<PriorityHigh
					key={uuid()}
					sx={{
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "trap":
			return (
				<img
					key={uuid()}
					alt="trap_icon"
					src="./images/trap.svg"
					style={{
						width: "1.5rem",
						height: "1.5rem",
						filter: "invert(84%) sepia(17%) saturate(353%) hue-rotate(195deg) brightness(95%) contrast(91%)",
					}}
				/>
			);
	}
};
