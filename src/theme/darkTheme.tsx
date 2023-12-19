import { Theme, ThemeColor, ThemeName } from "types/theme";
import { baseTheme } from "./baseTheme";

export const darkColors: ThemeColor = {
	surface1: "#151515",
	surface2: "",
	surface3: "",
	primary1: "#d3d3d3",
	primary2: "#a8a8a8",
	primary3: "",
};

export const darkTheme: Theme = {
	name: ThemeName.dark,
	color: darkColors,
	...baseTheme,
};
