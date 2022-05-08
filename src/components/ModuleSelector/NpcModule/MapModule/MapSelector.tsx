import { LocalGroceryStore, LocationCity, LocationOn, SportsBar } from "@mui/icons-material";
import { Card, CardMedia, Divider, FormControl, Grid, IconButton, MenuItem, TextField, Tooltip } from "@mui/material";
import React from "react";
import customTheme, { useStyles } from "../../../../customTheme";
import { BaroviaLocations } from "../../../../data/MapLocations/Barovia/BaroviaLocation";
import { AllMaps } from "../../../../data/maps/maps";
import { Maps } from "../../../../types/GlobalTypes";

interface MousePosition {
	x: number;
	y: number;
}

function MapSelector() {
	const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });
	const [selectedMap, setSelectedMap] = React.useState<Maps>(AllMaps.filter((map) => map.name === "Barovia")[0]);

	const getMousePosition = (e: any) => {
		const map = e.target.getBoundingClientRect();
		const offsetY = e.nativeEvent.offsetY;
		const offsetX = e.nativeEvent.offsetX;
		setMousePosition({ x: (offsetX / map.width) * 100, y: (offsetY / map.height) * 100 });
		console.log(mousePosition);
	};

	const changeMap = (mapName: string) => {
		const map = AllMaps.filter((map) => map.name === mapName);
		setSelectedMap(map[0] as Maps);
	};

	const getLocationIcon = (locationType: string) => {
		switch (locationType) {
			case "location":
				return (
					<LocationOn
						sx={{
							color: customTheme.palette.secondary.main,
						}}
					/>
				);
			case "village":
				return (
					<LocationCity
						sx={{
							color: customTheme.palette.secondary.main,
						}}
					/>
				);
			case "shop":
				return (
					<LocalGroceryStore
						sx={{
							color: customTheme.palette.secondary.main,
						}}
					/>
				);
			case "tavern":
				return (
					<SportsBar
						sx={{
							color: customTheme.palette.secondary.main,
						}}
					/>
				);
		}
	};
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12}>
				<Card sx={{ borderTopLeftRadius: 0 }}>
					<Grid container padding={2} gap={2} justifyContent="center">
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={2}>
									<FormControl fullWidth>
										<TextField size={"small"} className={classes.headerTitle} select id="maps" value={selectedMap.name} label="Choose the map" onChange={(e: any) => changeMap(e.target.value)}>
											{AllMaps.map((map) => (
												<MenuItem key={map.name} value={map.name}>
													{map.name}
												</MenuItem>
											))}
										</TextField>
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={8}>
							<Card sx={{ position: "relative" }}>
								{selectedMap.locations.map((location) => (
									<Tooltip
										title={
											<div>
												{location.name}
												<Divider sx={{ marginBottom: "5px" }} />
												{location.note}
											</div>
										}
										componentsProps={{ tooltip: { sx: { backgroundColor: customTheme.palette.primary.dark } } }}
									>
										<div style={{ zIndex: 2, position: "absolute", left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%`, borderRadius: "20px" }}>
											<IconButton
												size="small"
												component="span"
												sx={{
													backgroundColor: customTheme.palette.primary.dark,
													"&:hover > *": {
														color: customTheme.palette.primary.dark,
													},
												}}
											>
												{getLocationIcon(location.type)}
											</IconButton>
										</div>
									</Tooltip>
								))}
								<CardMedia sx={{ boxSizing: "border-box" }} component="img" src={selectedMap.img} onMouseMove={getMousePosition} />
							</Card>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
export default MapSelector;