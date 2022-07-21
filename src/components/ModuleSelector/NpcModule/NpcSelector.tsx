import { Grid, Card, Typography, CardMedia } from "@mui/material";
import { useStyles } from "../../../customTheme";
import { npcs } from "../../../data/npcs";

function NpcSelector() {
	const classes = useStyles();
	return (
		<Grid container justifyContent="center">
			<Grid item xs={12}>
				<Card sx={{ borderTopLeftRadius: 0, marginBottom: "1rem" }}>
					<Grid item xs={12} rowSpacing={8}>
						<Grid container padding={2} justifyContent="center">
							<Grid item xs={12}>
								<Typography variant="h4" className={classes.headerTitle}>
									NPCs
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={1} paddingRight={2}>
									{npcs &&
										npcs.map((npc) => (
											<Grid key={npc.name} item xs={4} md={1}>
												<Card className={classes.npcCard} onClick={() => window.open(`npc/${npc.name.replaceAll(" ", "_").toLowerCase()}`)}>
													{npc.image && <CardMedia component="img" height="180" src={`/images/${npc.image}`} alt={npc.name} />}
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
