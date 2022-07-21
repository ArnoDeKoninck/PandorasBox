import { createTheme } from "@mui/material";
import { green, grey, pink } from "@mui/material/colors";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
}

export let customTheme = createTheme({
	palette: {
		primary: {
			main: "#282828",
			dark: "#181818",
			light: "#2c3e50",
		},
		secondary: {
			main: "#c5cae9",
		},
	},
});
customTheme = createTheme(customTheme, {
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					marginLeft: "0px",
					marginTop: "0px",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					background: customTheme.palette.primary.main,
					borderRadius: "8px",
					boxShadow: " 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
					":active .MuiOutlinedInput-notchedOutline": {
						borderWidth: "1px",
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
					":hover .MuiOutlinedInput-notchedOutline": {
						borderWidth: "1px",
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
					":focused .MuiOutlinedInput-notchedOutline": {
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
					"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
				},
				notchedOutline: {
					borderColor: customTheme.palette.secondary.main,
				},
				input: {
					"&.Mui-disabled ": {
						WebkitTextFillColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
				},
			},
		},

		MuiFieldSet: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
					"&.Mui-focused": {
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
					"&.Mui-disabled": {
						borderColor: customTheme.palette.secondary.main,
						color: customTheme.palette.secondary.main,
					},
				},
			},
		},

		MuiSelect: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
					backgroundColor: customTheme.palette.primary.dark,
				},
				icon: {
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
					backgroundColor: customTheme.palette.primary.dark,
					"&:hover": {
						borderColor: customTheme.palette.secondary.main,
					},
				},

				icon: {
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					borderBottom: `1px solid`,
				},
			},
		},

		MuiPaper: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
					backgroundColor: customTheme.palette.primary.dark,
				},
				icon: {
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background: grey[800],
					width: "auto",
					height: "2.5rem",
					borderRadius: "8px",
					marginRight: "10px",
					borderColor: customTheme.palette.primary.light,
					"&:hover": {
						backgroundColor: customTheme.palette.primary.light,
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					backgroundColor: customTheme.palette.primary.dark,
					borderRadius: "20px",
					"&:hover": {
						backgroundColor: customTheme.palette.secondary.light,
					},
				},
			},
		},
		Mui: {
			styleOverrides: {
				root: {
					background: customTheme.palette.primary.light,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					background: pink[800],
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: customTheme.palette.secondary.main,
					fontSize: "12px",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					height: "20px",
					borderRadius: "5px",
					"& .MuiLinearProgress-dashed": {
						background: customTheme.palette.error.dark,
						animation: "none",
					},
					"& .MuiLinearProgress-colorSuccess": {
						background: customTheme.palette.info.light,
					},
				},
			},
		},
	},
});

export default customTheme;

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: customTheme.palette.secondary.light,
		},
		headerTitle: {
			textAlign: "left",
			color: customTheme.palette.secondary.light,
		},
		body: {
			width: "100VW",
			height: "100vh",
			background: "#2C3E50",
			color: customTheme.palette.secondary.light,
		},
		bodyContainer: {
			margin: "3rem",
		},
		select: {
			borderColor: customTheme.palette.secondary.light,
			color: customTheme.palette.secondary.light,
		},
		itemCard: {
			backgroundColor: customTheme.palette.primary.dark + "!important",
		},
		npcCard: {
			backgroundColor: customTheme.palette.primary.dark + "!important",
			position: "relative",
			textAlign: "center",
			cursor: "pointer",
			"&:hover": {
				position: "absolute",
				transform: "scale(1.2)",
				width: "150px",
				margin: "auto",
				zIndex: 1,
				boxShadow: " 0px 5px 5px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
			},
		},
		npcCardTitle: {
			textAlign: "center",
			color: customTheme.palette.secondary.light,
		},
		link: {
			borderBottom: `1px solid ${customTheme.palette.secondary.main}`,
			"&:hover": { cursor: "pointer" },
		},
		audioControls: {
			"& audio::-webkit-media-controls-panel": {
				backgroundColor: customTheme.palette.primary.dark,
				color: customTheme.palette.secondary.light,
			},
			"& audio::-webkit-media-controls-timeline-container": {
				color: customTheme.palette.secondary.light,
			},
			"& audio::-webkit-media-controls-current-time-display,audio::-webkit-media-controls-time-remaining-display": {
				color: customTheme.palette.secondary.light,
			},
			"& audio::-webkit-media-controls-mute-button,audio::-webkit-media-controls-play-button,audio::-webkit-media-controls-timeline-container,audio::-webkit-media-controls-timeline,audio::-webkit-media-controls-volume-slider-container,audio::-webkit-media-controls-volume-slider,audio::-webkit-media-controls-seek-back-button,audio::-webkit-media-controls-seek-forward-button,audio::-webkit-media-controls-fullscreen-button,audio::-webkit-media-controls-rewind-button,audio::-webkit-media-controls-return-to-realtime-button,audio::-webkit-media-controls-toggle-closed-captions-button":
				{
					filter: "invert(0.8)",
				},
		},
	})
);
