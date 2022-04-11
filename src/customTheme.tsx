import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
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
					/* "& .MuiGrid-item": {
            paddingTop: "0px",
            paddingLeft: "0px",
          },*/
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
				},
				notchedOutline: {
					borderColor: customTheme.palette.secondary.main,
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					borderColor: customTheme.palette.secondary.main,
					color: customTheme.palette.secondary.main,
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
					"&:hover": {
						backgroundColor: customTheme.palette.primary.light,
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
		MuiTypography: {
			styleOverrides: {
				root: {
					color: customTheme.palette.secondary.main,
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					background: customTheme.palette.secondary.main,
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					height: "20px",
					borderRadius: "5px",
					"& .MuiLinearProgress-dashed": {
						background: customTheme.palette.info.light,
						animation: "none",
					},
					"& .MuiLinearProgress-colorSuccess": {
						background: customTheme.palette.error.dark,
						animation: "none",
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
	})
);
