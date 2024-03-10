import { Theme, ThemeColor, ThemeName } from "types/theme";
import { baseTheme } from "./baseTheme";

export const darkColors: ThemeColor = {
	surface1: "#101010",
	surface2: "#1a1a1a",
	surface3: "",
	primary1: "#d3d3d3",
	primary2: "#a8a8a8",
	primary3: "#666",
};

export const darkTheme: Theme = {
	name: ThemeName.dark,
	color: darkColors,
	...baseTheme,
};
