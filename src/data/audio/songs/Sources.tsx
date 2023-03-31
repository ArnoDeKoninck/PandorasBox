import { SongType } from "../../../types/GlobalTypes";

export const songTagList = ["all", "clown", "dramatic", "drums", "epic", "generic", "intense", "middle_eastern", "upbeat", "vistani", "eerie"];
export const songCategoryList = ["Combat", "Boss", "Ravenloft"];

export enum songTags {
	CLOWN = "clown",
	DRAMATIC = "dramatic",
	DRUMS = "drums",
	EERIE = "eerie",
	EPIC = "epic",
	GENERIC = "generic",
	INTENSE = "intens",
	MIDDLE_EASTERN = "middle_eastern",
	UPBEAT = "upbeat",
	VISTANI = "vistani",
	BALLROOM = "ballroom",
}

export const DeathHouseBasementPlaylist: SongType[] = [
	{
		name: "Kallam the cursed by Borough Bound",
		url: "https://youtu.be/hrxqMy3AxMM",
		tags: [songTags.DRAMATIC],
	},
	{
		name: "Woedica by Justin Bell",
		url: "https://youtu.be/3lWnDXQOFGg",
		tags: [songTags.DRAMATIC],
	},
	{
		name: "The stars my solaceby Inon Zur",
		url: "https://youtu.be/68GWCgYEHGM",
		tags: [songTags.EERIE, songTags.DRAMATIC],
	},
	{
		name: "Those who writhe below by will savino",
		url: "https://youtu.be/wNNnss-1kbQ",
		tags: [songTags.EERIE],
	},
	{
		name: "Forgotten by Inon Zur",
		url: "https://youtu.be/yNkMS7rIWpE",
		tags: [songTags.EERIE],
	},
];
export const CombatSongList: SongType[] = [
	{
		name: "Clarity and Cut by Will Savino",
		url: "audio/songs/Clarity_and_Cut_by_Will_Savino.mp3",
		tags: [songTags.INTENSE, songTags.DRUMS],
	},
	{
		name: "Crehl-Vohr the Blight",
		url: "https://youtu.be/TTD8G6ZL9Hk",
		tags: [songTags.INTENSE, songTags.DRUMS],
	},
	{
		name: "False Knight by Cristopher Larkin",
		url: "https://youtu.be/vKDQNGDOdE4",
		tags: [songTags.DRAMATIC],
	},
	{
		name: "Jaun Zuria by Tartalo Music",
		url: "audio/songs/JaunZuria_by_Tartalo_Music.mp3",
		tags: [songTags.EPIC],
	},
	{
		name: "Lord Merriweather wants you dead by Will Savino",
		url: "https://youtu.be/Rrajuz-gQAY",
		tags: [songTags.UPBEAT, songTags.CLOWN],
	},
	{
		name: "Pyroclast Blitz by Borough Bound",
		url: "https://youtu.be/BhSn6I0kao4",
		tags: [songTags.INTENSE, songTags.DRUMS],
	},
	{
		name: "Their hearts grew bold ",
		url: "https://youtu.be/s49GLLCLVAg",
		tags: [songTags.GENERIC],
	},

	{
		name: "Wasteland War by TabletopRPGMusic",
		url: "audio/songs/Wasteland_War_(combat)_by_Tabletop_RPG_Music.mp3",
		tags: [songTags.MIDDLE_EASTERN, songTags.VISTANI],
	},
];

export const BossThemeList: SongType[] = [
	{
		name: "Divinity Unshackled by Will Savino",
		url: "audio/songs/Divinity_Unshackled_by_Will_Savino.mp3",
		tags: [songTags.INTENSE, songTags.EPIC],
		boss: "",
	},
	{
		name: "Strahd's Vengeance",
		url: "audio/songs/StrahdsVengeance.mp3",
		tags: [songTags.EPIC],
		boss: "Strahd Von Zarovich",
	},
	{
		name: "Twin Princes",
		url: "https://youtu.be/L6sFp6pG6_w",
		tags: [songTags.DRAMATIC],
		boss: "",
	},
	{
		name: "And The sky turned black",
		url: "https://youtu.be/eB6DCu4uLCo?t=43",
		tags: [songTags.DRAMATIC, songTags.DRUMS, songTags.EERIE],
		boss: "Rahadin",
	},
];
export const VistaniHuntingPlaylist: SongType[] = [
	{
		name: "Svanrand by Heilung",
		url: "https://youtu.be/VGzOj5JTMnE?t=15",
		tags: [songTags.EERIE, songTags.EPIC],
	},
];
export const WalterBossFightPlaylist: SongType[] = [
	{
		name: "Covetous demon by Motoi Sakuraba",
		url: "https://youtu.be/DTCp8E0E5CE",
		tags: [songTags.EERIE, songTags.EPIC],
		boss: "Walter",
	},
	{
		name: "Elddansurin by Heilung",
		url: "https://youtu.be/Xph2Phcj0LA",
		tags: [songTags.EPIC, songTags.DRAMATIC],
		boss: "Walter",
	},
	{
		name: "Covetous demon by Motoi Sakuraba",
		url: "https://youtu.be/Xph2Phcj0LA?t=112",
		tags: [songTags.EERIE, songTags.EPIC],
		boss: "Walter",
	},
];

export const RavenloftPlaylist: SongType[] = [
	{
		name: "Snow Waltz by Lindsey Stirling",
		url: "https://youtu.be/YIqSFna1RTY",
		tags: [songTags.UPBEAT, songTags.BALLROOM],
	},
	{
		name: "Dance of the Damned by Peter Gundry",
		url: "https://youtu.be/Q2fk4Ia1IZs",
		tags: [songTags.BALLROOM],
	},
	{
		name: "Tonight Ve' Dance by Peter Gundry",
		url: "https://youtu.be/p5svu1l6PFw",
		tags: [songTags.BALLROOM],
	},
	{
		name: "Dance of the Damned by Peter Gundry",
		url: "https://youtu.be/Q2fk4Ia1IZs",
		tags: [songTags.BALLROOM],
	},
	{
		name: "Dinner Ambiance",
		url: "https://youtu.be/d_xXt28N9kw",
		tags: [songTags.GENERIC],
	},
];
