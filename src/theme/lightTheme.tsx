import { Theme, ThemeColor, ThemeName } from "types/theme";
import { baseTheme } from "./baseTheme";

export const lightColors: ThemeColor = {
	surface1: "#e5e5e5",
	surface2: "#f7f7f7",
	surface3: "",
	primary1: "#151515",
	primary2: "#666",
	primary3: "#4f4f4f",
};

export const lightTheme: Theme = {
	name: ThemeName.light,
	color: lightColors,
	...baseTheme,
};
