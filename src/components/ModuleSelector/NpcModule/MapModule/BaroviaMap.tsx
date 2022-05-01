import { Card, CardMedia, Grid } from "@mui/material";
import React from "react";

interface MousePosition {
	x: number;
	y: number;
}

function BaroviaMap() {
	const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });

	const getMousePosition = (e: any) => {
		const map = e.target.getBoundingClientRect();
		const offsetY = e.nativeEvent.offsetY;
		const offsetX = e.nativeEvent.offsetX;
		setMousePosition({ x: (offsetX / map.width) * 100, y: (offsetY / map.height) * 100 });
		console.log(mousePosition);
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<Card sx={{ borderTopLeftRadius: 0 }}>
					<Grid container padding={2}>
						<Grid item xs={12}>
							<Card>
								<CardMedia sx={{ boxSizing: "border-box" }} component="img" src="/images/Barovia_WorldMap.webp" onMouseMove={getMousePosition}></CardMedia>
							</Card>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
export default BaroviaMap;
