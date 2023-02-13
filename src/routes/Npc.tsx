import { Card, CardContent, CardMedia, Divider, Grid, ThemeProvider, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import customTheme from "../customTheme";
import { npcs } from "../data/npcs";
function Npc() {
	const urlName = useParams();

	if (!urlName) {
		throw new Error("No NPC name in the url");
	}

	const formatUrlName = (input: string) => {
		const wordArray = input.split("_");

		const name = wordArray
			.map((word) => {
				return word[0].toUpperCase() + word.substring(1);
			})
			.join(" ");

		return name;
	};

	const npcName = formatUrlName(urlName!.name!);

	const npc = npcs.filter((npc) => npc.name === npcName)[0];

	return (
		<ThemeProvider theme={customTheme}>
			<Grid container padding={"1rem"}>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid container gap={2}>
								<Grid item xs={12}>
									<Typography sx={{ fontSize: "1.5rem" }}>{npc.name}</Typography>
									<Divider />
								</Grid>
								<Grid item xs={2}>
									<CardMedia component="img" src={`./images/${npc.image}`} alt={npc.name}></CardMedia>
								</Grid>
								<Grid item flexGrow={1}>
									<Typography sx={{ fontSize: "1rem", textDecoration: "underline" }}>Description: </Typography>
									<Typography>{npc.description}</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
export default Npc;
