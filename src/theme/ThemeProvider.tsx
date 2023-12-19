import { useEffect, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme as styledTheme } from "./theme.styled";
import { ThemeName } from "types/theme";

export const THEME_STORAGE_KEY = "theme-mode";

const useThemeMode = () => {
	const mode = localStorage.getItem(THEME_STORAGE_KEY);
	let themeMode;
	if (mode) {
		themeMode = mode === "dark" ? ThemeName.dark : ThemeName.light;
	} else {
		const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		themeMode = prefersDarkScheme ? ThemeName.dark : ThemeName.light;
		localStorage.setItem(THEME_STORAGE_KEY, themeMode);
	}

	return themeMode;
};

export const setThemeMode = (themeName: ThemeName) =>
	localStorage.setItem(THEME_STORAGE_KEY, themeName);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const themeNameSelected = useThemeMode();

	const [themeName, setThemeName] = useState(styledTheme(themeNameSelected === ThemeName.dark));

	useEffect(() => {
		setThemeName(styledTheme(themeNameSelected === ThemeName.dark));
	}, [themeNameSelected]);

	return (
		<StyledComponentsThemeProvider theme={themeName}>{children}</StyledComponentsThemeProvider>
	);
}

export default ThemeProvider;
