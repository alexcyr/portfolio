import { createContext, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme as styledTheme } from "./theme.styled";
import { ThemeName } from "types/theme";

export const THEME_STORAGE_KEY = "theme-mode";

export const ThemeContext = createContext({
	theme: ThemeName.dark,
	setTheme: (_name: ThemeName) => undefined,
});

const useThemeStore = () => {
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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const themeNameSelected = useThemeStore();

	const [themeName, setThemeName] = useState(themeNameSelected);

	const setThemeMode = (name: ThemeName) => {
		localStorage.setItem(THEME_STORAGE_KEY, name);
		setThemeName(name);
	};

	return (
		<ThemeContext.Provider value={{ theme: themeName, setTheme: (name) => setThemeMode(name) }}>
			<StyledComponentsThemeProvider theme={styledTheme(themeNameSelected === ThemeName.dark)}>
				{children}
			</StyledComponentsThemeProvider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
