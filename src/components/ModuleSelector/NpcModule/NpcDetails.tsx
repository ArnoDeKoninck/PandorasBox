import { Close, Search } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Dialog, DialogContent, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import customTheme from "src/customTheme";
import { Npc } from "src/types/GlobalTypes";

interface NpcProps {
	npc: Npc;
	changeOpen: (input: boolean) => void;
}
function NpcDetailsDialog({ changeOpen, npc }: NpcProps) {
	const [isEnlarged, setIsEnlarged] = useState<boolean>(false);
	const handleClose = () => {
		changeOpen(false);
	};
	return (
		<Grid container>
			<Grid item xs={12}>
				<Card>
					<CardContent sx={{ height: window.innerHeight * 0.8 }}>
						<Grid container justifyContent={"space-between"}>
							<Grid item>
								<Typography sx={{ fontSize: "2rem" }}>{npc.name}</Typography>
							</Grid>
							<Grid item>
								<IconButton
									onClick={handleClose}
									sx={{
										backgroundColor: customTheme.palette.primary.dark,
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
									}}
								>
									<Close sx={{ color: customTheme.palette.secondary.light }} />
								</IconButton>
							</Grid>
						</Grid>
						<Divider sx={{ marginBottom: "1Rem" }} />
						<Grid container gap={1}>
							<Grid item xs={4} sx={{ position: "relative", "> button::first-child": { padding: 0 } }}>
								<CardMedia component="img" height={250} src={`images/${npc.image}`} sx={{ objectFit: "contain" }} />
								<IconButton
									onClick={() => setIsEnlarged(true)}
									sx={{
										backgroundColor: customTheme.palette.primary.dark,
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
										position: "absolute",
										bottom: "10px",
										right: "20px",
									}}
								>
									<Search sx={{ color: customTheme.palette.secondary.light }} />
								</IconButton>
							</Grid>
							<Grid item xs={6}>
								<Typography fontSize={"15px"}>Species: {npc.species} </Typography>
								<Typography fontSize={"15px"}>Alignment: {npc.alignment}</Typography>
								<Typography fontSize={"15px"}>Age: {npc.age}</Typography>
								<Typography fontSize={"15px"}>Voice: {npc.voice}</Typography>
								<Typography fontSize={"15px"}>Location: {npc.location}</Typography>
								<Typography fontSize={"15px"}>Faction: {npc.tags}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography fontSize={"20px"} sx={{ textDecoration: "underline" }}>
									Description:
								</Typography>
								<Typography fontSize={"20px"}>{npc.description}</Typography>

								<Typography fontSize={"15px"}></Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Dialog open={isEnlarged} fullWidth maxWidth="md">
				<DialogContent>
					<Card>
						<CardContent>
							<Grid container justifyContent={"center"}>
								<Typography sx={{ fontSize: "2rem" }}>{npc.name}</Typography>
								<CardMedia component="img" height={window.innerHeight ? window.innerHeight * 0.8 : window.screen.height * 0.8} src={`images/${npc.image}`} sx={{ objectFit: "contain", position: "relative" }} />
								<IconButton
									onClick={() => setIsEnlarged(false)}
									sx={{
										backgroundColor: customTheme.palette.primary.dark,
										"&:hover > *": {
											color: customTheme.palette.primary.dark,
										},
										position: "absolute",
										right: "50px",
									}}
								>
									<Close sx={{ color: customTheme.palette.secondary.light }} />
								</IconButton>
							</Grid>
						</CardContent>
					</Card>
				</DialogContent>
			</Dialog>
		</Grid>
	);
}

export default NpcDetailsDialog;
