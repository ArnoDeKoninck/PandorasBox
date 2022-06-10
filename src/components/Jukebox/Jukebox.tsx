import { CasinoOutlined } from "@mui/icons-material";
import { Grid, IconButton, MenuItem, TextField } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import customTheme, { useStyles } from "../../customTheme";
import { BossThemeList, CombatSongList, songCategoryList, songTagList } from "../../data/audio/songs/Sources";
import { SoundList } from "../../data/audio/sounds/Sounds";
import { SongType } from "../../types/GlobalTypes";

function Jukebox() {
	const [category, setCategory] = React.useState<string>("Combat");
	const [mood, setMood] = React.useState<string>(songTagList[0]);
	const [songList, setSongList] = React.useState<SongType[]>(CombatSongList);
	const [song, setSong] = React.useState<SongType>(CombatSongList[0]);
	const [muted, setMuted] = React.useState<boolean>(true);
	const [playing, setPlaying] = React.useState<boolean>(false);
	const [selectedSound, setSelectedSound] = React.useState<string>(SoundList[0].url[0]);

	const filteredSongList = mood !== "all" ? songList.filter((song) => song.tags.includes(mood)) : songList;

	const getRandomMusic = async () => {
		filteredSongList.filter((song: SongType) => song.tags.includes(mood));
		return songList[(songList.length * Math.random()) << 0] as SongType;
	};

	const updateSongList = (input: string, key: string) => {
		key === "Category" ? setCategory(input) : setMood(input);
		if (key === "Category") {
			input === "Combat" ? setSongList(CombatSongList) : input === "Boss" ? setSongList(BossThemeList) : setSongList(CombatSongList);
		}
	};

	const setRandomSong = async () => {
		const randomSong = await getRandomMusic();
		setSong(randomSong);

		setTimeout(() => {
			setMuted(false);
			setPlaying(true);
		}, 2000);
	};

	const getSelectedSong = (url: string) => {
		const selectedSong = songList.filter((song) => song.url === url);
		setSong(selectedSong[0]);
	};

	const classes = useStyles();

	return (
		<Grid container rowGap={2}>
			<Grid container gap={2} alignItems="center">
				<Grid item xs={4}>
					<TextField
						fullWidth
						select
						value={category}
						onChange={(e) => updateSongList(e.target.value, "Category")}
						label="Song Category"
						SelectProps={{
							MenuProps: {
								style: { maxHeight: 200 },
							},
						}}
					>
						{songCategoryList.map((category) => (
							<MenuItem value={category}>{category}</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={4}>
					<TextField
						fullWidth
						select
						value={mood}
						onChange={(e) => updateSongList(e.target.value, "Mood")}
						label="Song Mood"
						SelectProps={{
							MenuProps: {
								style: { maxHeight: 200 },
							},
						}}
					>
						{songTagList.map((tag) => (
							<MenuItem value={tag}>{tag}</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={7}>
					<TextField fullWidth select value={song.url} onChange={(e) => getSelectedSong(e.target.value)} label="Select Song">
						{songList.map((song) => (
							<MenuItem key={song.url} value={song.url}>
								{song.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={2}>
					<IconButton
						onClick={() => setRandomSong()}
						component="span"
						sx={{
							backgroundColor: customTheme.palette.primary.dark,
							"&:hover > *": {
								color: customTheme.palette.primary.dark,
							},
						}}
					>
						<CasinoOutlined
							sx={{
								color: customTheme.palette.secondary.main,
							}}
						/>
					</IconButton>
				</Grid>
				{song && (
					<Grid item xs={12}>
						<ReactPlayer className={classes.audioControls} width="100%" height="3rem" controls url={song.url} onEnded={() => setRandomSong()} playing={playing} muted={muted} />
					</Grid>
				)}
			</Grid>
			<Grid container justifyContent={"space-between"}>
				<Grid item xs={7}>
					<TextField fullWidth select value={selectedSound} onChange={(e) => setSelectedSound(e.target.value)} label="Play Sound">
						{SoundList.map((sound) => (
							<MenuItem key={sound.url[(sound.url.length * Math.random()) << 0]} value={sound.url[(sound.url.length * Math.random()) << 0]}>
								{sound.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				{song && (
					<Grid item xs={4}>
						<ReactPlayer className={classes.audioControls} width="100%" height="3rem" controls url={selectedSound} />
					</Grid>
				)}
			</Grid>
		</Grid>
	);
}
export default Jukebox;
