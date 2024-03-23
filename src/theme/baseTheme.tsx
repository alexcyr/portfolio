import { ThemeSpace, ThemeText } from "types/theme";

export const space: ThemeSpace = {
	s1: "1px",
	s2: "2px",
	s4: "4px",
	s8: "8px",
	s12: "12px",
	s16: "16px",
	s20: "20px",
	s24: "24px",
	s28: "28px",
	s32: "32px",
	s36: "36px",
	s48: "48px",
	s56: "56px",
	s64: "64px",
	s72: "72px",
};

export const text: ThemeText = {
	family: {
		title: "'Albert Sans', sans-serif",
		body: "'Source Sans', sans-serif",
	},
	size: {
		s12: "12px",
		s14: "14px",
		s16: "16px",
		s18: "18px",
		s21: "21px",
		s24: "24px",
		s28: "28px",
		s32: "32px",
		s36: "36px",
		s42: "42px",
		s48: "48px",
		s56: "56px",
		s64: "64px",
		s72: "72px",
	},
	weight: {
		light: 300,
		normal: 400,
		semibold: 600,
		bold: 700,
	},
};

export const baseTheme = {
	space: space,
	text: text,
};
