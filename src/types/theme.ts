export interface ThemeColor {
	surface1: string;
	surface2: string;
	surface3: string;
	primary1: string;
	primary2: string;
	primary3: string;
}

export interface ThemeText {
	family: {
		title: string;
		body: string;
	};
	size: {
		s12: string;
		s14: string;
		s16: string;
		s18: string;
		s21: string;
		s24: string;
		s28: string;
		s32: string;
		s36: string;
		s42: string;
		s48: string;
		s56: string;
		s64: string;
		s72: string;
	};
	weight: {
		light: number;
		normal: number;
		semi_bold: number;
		bold: number;
	};
}

export interface ThemeSpace {
	s1: string;
	s2: string;
	s4: string;
	s8: string;
	s12: string;
	s16: string;
	s20: string;
	s24: string;
	s28: string;
	s32: string;
	s36: string;
	s48: string;
	s56: string;
	s64: string;
	s72: string;
}

export enum ThemeName {
	light = "light",
	dark = "dark",
}

export interface Theme {
	name: ThemeName;
	color: ThemeColor;
	space: ThemeSpace;
	text: ThemeText;
}
