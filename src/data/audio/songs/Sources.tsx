import { SongType } from "../../../types/GlobalTypes";

export const songTagList = ["all", "clown", "dramatic", "drums", "epic", "generic", "intense", "middle_eastern", "upbeat", "vistani"];
export const songCategoryList = ["Combat", "Boss"];

export const CombatSongList: SongType[] = [
	{
		name: "Clarity and Cut by Will Savino",
		url: "audio/songs/Clarity_and_Cut_by_Will_Savino.mp3",
		tags: ["intense", "drums"],
	},
	{
		name: "Crehl-Vohr the Blight",
		url: "https://www.youtube.com/watch?v=TTD8G6ZL9Hk&ab_channel=WillSavino-Topic",
		tags: ["intense", "drums"],
	},
	{
		name: "False Knight by Cristopher Larkin",
		url: "https://www.youtube.com/watch?v=vKDQNGDOdE4&ab_channel=Amellifera",
		tags: ["dramatic"],
	},
	{
		name: "Jaun Zuria by Tartalo Music",
		url: "audio/songs/JaunZuria_by_Tartalo_Music.mp3",
		tags: ["epic"],
	},
	{
		name: "Lord Merriweather wants you dead by Will Savino",
		url: "https://www.youtube.com/watch?v=Rrajuz-gQAY&ab_channel=WillSavino-Topic",
		tags: ["upbeat", "clown"],
	},
	{
		name: "Pyroclast Blitz by Borough Bound",
		url: "https://www.youtube.com/watch?v=BhSn6I0kao4&ab_channel=BoroughBound-Topic",
		tags: ["intense", "drums"],
	},
	{
		name: "Their hearts grew bold ",
		url: "https://www.youtube.com/watch?v=s49GLLCLVAg&ab_channel=JustinBell-Topic",
		tags: ["generic"],
	},
	{
		name: "Wasteland War by TabletopRPGMusic",
		url: "audio/songs/Wasteland_War_(combat)_by_Tabletop_RPG_Music.mp3",
		tags: ["middle_eastern", "vistani"],
	},
];

export const BossThemeList: SongType[] = [
	{
		name: "Divinity Unshackled by Will Savino",
		url: "audio/songs/Divinity_Unshackled_by_Will_Savino.mp3",
		tags: ["intense", "epic"],
		boss: "",
	},
	{
		name: "Strahd's Vengeance",
		url: "audio/songs/StrahdsVengeance.mp3",
		tags: ["epic"],
		boss: "Strahd Von Zarovich",
	},
];
