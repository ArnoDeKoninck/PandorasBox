import { LocalGroceryStore, LocationCity, LocationOn, Person, PriorityHigh, SavedSearch, SportsBar } from "@mui/icons-material";
import { Card, CardMedia, Divider, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Switch, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { CR_FirstFloorLocations } from "src/data/MapLocations/CastleRavenloft/CR_FirstFloor";
import { DeathHouseEscapeLocations, DeathHouseLocations } from "src/data/MapLocations/DeathHouse/DeathHouseLocations";
import customTheme, { useStyles } from "../../../../customTheme";
import { AllMaps, CastleRavenloftMaps, KrezkMaps } from "../../../../data/maps/maps";
import { Maps, PointOfIntrest } from "../../../../types/GlobalTypes";
import { v4 as uuid } from "uuid";
import { CR_OutsideLocations } from "src/data/MapLocations/CastleRavenloft/CR_Outside";
import { CR_SecondFloorLocations } from "src/data/MapLocations/CastleRavenloft/CR_SecondFloor";
import { CR_ThirdFloorLocations } from "src/data/MapLocations/CastleRavenloft/CR_ThirdFloor";
import { AOSM_OutsideLocations, AOSM_UpperLocations, KrezkLocations } from "src/data/MapLocations/Krezk/Krezk";

interface MousePosition {
	x: number;
	y: number;
}

function MapSelector() {
	const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });
	const [selectedMap, setSelectedMap] = React.useState<Maps>(AllMaps.filter((map) => map.name === "Barovia")[0]);
	const [isMapAlternative, setMapAlternative] = useState<number>(0);
	const [showIcons, setShowIcons] = useState<boolean>(true);
	const [selectedIcon, setSelectedicon] = useState<PointOfIntrest>();
	const [iconSize, setIconSize] = useState<number>(window.innerWidth * 0.02);

	const getMousePosition = (e: any) => {
		const map = e.target.getBoundingClientRect();
		const offsetY = e.nativeEvent.offsetY;
		const offsetX = e.nativeEvent.offsetX;
		setMousePosition({ x: (offsetX / map.width) * 100, y: (offsetY / map.height) * 100 });
	};
	console.log(mousePosition);
	console.log(selectedMap.img);
	const changeMap = (mapName: string) => {
		const map = AllMaps.filter((map) => map.name === mapName);
		setSelectedMap(map[0] as Maps);
	};

	const handleClick = (location: PointOfIntrest) => {
		const currentSelected = selectedIcon;
		if (currentSelected === location) {
			setSelectedicon(undefined);
		} else setSelectedicon(location);
	};

	const classes = useStyles();
	const swapToAlternativeMap = (input: number) => {
		setMapAlternative(input);
		console.log(input);
		if (input !== 0) {
			//when map is not default
			if (selectedMap.name === "Death House") {
				//When map is Death house and switched to alternative, switch to death house escape module
				selectedMap.locations = DeathHouseEscapeLocations;
			}
			if (selectedMap.name === "Castle Ravenloft") {
				switch (input) {
					case 0:
						selectedMap.img = "./images/cr_outside.webp";
						selectedMap.locations = CR_OutsideLocations;
						break;
					case 1:
						selectedMap.img = "./images/cr_first_floor.webp";
						selectedMap.locations = CR_FirstFloorLocations;
						break;
					case 2:
						selectedMap.img = "./images/cr_second_floor.webp";
						selectedMap.locations = CR_SecondFloorLocations;
						break;
					case 3:
						selectedMap.img = "./images/cr_third_floor.webp";
						selectedMap.locations = CR_ThirdFloorLocations;
						break;
					default: {
						selectedMap.img = "./images/cr_outside.webp";
						selectedMap.locations = CR_OutsideLocations;
					}
				}
			}
			if (selectedMap.name === "Krezk") {
				switch (input) {
					case 0:
						selectedMap.img = "./images/Krezk.jpg";
						selectedMap.locations = KrezkLocations;
						break;
					case 1:
						selectedMap.img = "./images/abbeyOfSaintMarkovia.jpg";
						selectedMap.locations = AOSM_OutsideLocations;
						break;
					case 2:
						selectedMap.img = "./images/AOSM_upperfloor.jpg";
						selectedMap.locations = AOSM_UpperLocations;
						break;
					default: {
						selectedMap.img = "./images/Krezk.jpg";
						selectedMap.locations = KrezkLocations;
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
			if (selectedMap.name === "Krezk") {
				selectedMap.img = "./images/Krezk.jpg";
				selectedMap.locations = KrezkLocations;
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
								{selectedMap.name === "Krezk" && (
									<Grid item xs={2}>
										<FormControl fullWidth>
											<TextField size={"small"} className={classes.headerTitle} select id="Abbey Of Saint Markovia" value={isMapAlternative} label="Choose the floor" onChange={(e: any) => swapToAlternativeMap(e.target.value)}>
												{KrezkMaps.map((map, index) => (
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
												open={selectedIcon === location}
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
												<div
													style={{
														zIndex: 2,
														display: `${showIcons ? "default" : "invisible"}`,
														position: "absolute",
														left: `${location.coordinates.x}%`,
														top: `${location.coordinates.y}%`,
														borderRadius: "20px",
													}}
													key={uuid()}
												>
													<IconButton
														key={uuid()}
														size="small"
														component="span"
														onClick={() => handleClick(location)}
														sx={{
															height: iconSize,
															width: iconSize,
															maxHeight: "40px",
															maxWidth: "40px",
															minHeight: "20px",
															minWidth: "20px",
															backgroundColor: selectedIcon === location ? customTheme.palette.secondary.light : customTheme.palette.primary.dark,
															"& > *": { color: selectedIcon === location ? customTheme.palette.primary.dark : customTheme.palette.secondary.light },
															"&:hover > *": {
																color: customTheme.palette.primary.dark,
															},
															"&:hover img": {
																filter: "none !important",
															},
														}}
													>
														{getLocationIcon(location.type, iconSize)}
													</IconButton>
												</div>
											</Tooltip>
										)
								)}
								<CardMedia sx={{ boxSizing: "border-box" }} component="img" src={`./` + selectedMap.img} />
							</Card>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
export default MapSelector;

export const getLocationIcon = (locationType: string, iconSize: number) => {
	switch (locationType) {
		case "location":
			return (
				<LocationOn
					key={uuid()}
					sx={{
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "20px",
						minWidth: "20px",
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "village":
			return <LocationCity key={uuid()} sx={{ height: iconSize * 0.7, width: iconSize * 0.7, maxHeight: "40px", maxWidth: "40px", minHeight: "20px", minWidth: "20px", color: customTheme.palette.secondary.main }} />;
		case "shop":
			return (
				<LocalGroceryStore
					key={uuid()}
					sx={{
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "15px",
						minWidth: "15px",
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "tavern":
			return (
				<SportsBar
					key={uuid()}
					sx={{
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "20px",
						minWidth: "20px",
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "search":
			return (
				<SavedSearch
					key={uuid()}
					sx={{
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "20px",
						minWidth: "20px",
						color: customTheme.palette.secondary.main,
					}}
				/>
			);
		case "event":
			return (
				<PriorityHigh
					key={uuid()}
					sx={{
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "20px",
						minWidth: "20px",
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
						height: iconSize * 0.7,
						width: iconSize * 0.7,
						maxHeight: "40px",
						maxWidth: "40px",
						minHeight: "20px",
						minWidth: "20px",
						filter: "invert(84%) sepia(17%) saturate(353%) hue-rotate(195deg) brightness(95%) contrast(91%)",
					}}
				/>
			);
		case "npc":
			return <Person id={uuid()} sx={{ height: iconSize * 0.7, width: iconSize * 0.7, maxHeight: "40px", maxWidth: "40px", minHeight: "20px", minWidth: "20px", color: customTheme.palette.secondary.main }} />;
	}
};
