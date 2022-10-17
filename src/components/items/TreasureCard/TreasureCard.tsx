import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import customTheme, { useStyles } from "../../../customTheme";
import { generateRandomItem } from "../../../services/loot-service/loot-service";
import { Item } from "../../../types/ItemTypes";

interface props {
	item: Item;
}

function TreasureCard({ item }: props) {
	const classes = useStyles();
	const { name, description, amount, link } = item.variant && item.spellScroll ? (generateRandomItem(item.variant) as Item) : item;
	return (
		<Card style={{ backgroundColor: grey[800] }}>
			<CardContent>
				<Grid container rowSpacing={2} className={classes.headerTitle}>
					<Grid container>
						<Grid item>
							<Typography component={"span"}>
								{amount} {item.spellScroll ? `Scroll of ${name}` : name}
							</Typography>
							{description && <Typography component={"span"}>{description}</Typography>}
						</Grid>
						<Grid item xs={12}>
							{link && (
								<Link href={link} color={customTheme.palette.secondary.main}>
									Read more
								</Link>
							)}
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default TreasureCard;
