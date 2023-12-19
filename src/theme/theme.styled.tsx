/* eslint-disable @typescript-eslint/no-explicit-any */
// import { DARK_THEME, LIGHT_THEME } from "@gamestop/nft-web-components";
import { css, DefaultTheme } from "styled-components";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

export const MEDIA_WIDTHS = {
	upToExtremeSmall: 450,
	upToExtraSmall: 500,
	upToSmall: 768,
	upToMedium: 1024,
	upToLarge: 1280,
	upToExtraLarge: 1600,
};

export const mediaWidthTemplates: {
	[width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
	(accumulator as any)[size] = (one: any, two: any, three: any) => css`
		@media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
			${css(one, two, three)}
		}
	`;
	return accumulator;
}, {}) as any;

export function theme(darkMode: boolean): DefaultTheme {
	const THEME = darkMode ? darkTheme : lightTheme;

	return {
		// media queries
		mediaWidth: mediaWidthTemplates,

		// css snippets
		flexColumnNoWrap: css`
			display: flex;
			flex-flow: column nowrap;
		`,
		flexRowNoWrap: css`
			display: flex;
			flex-flow: row nowrap;
		`,
		flexCenter: css`
			display: flex;
			align-items: center;
			justify-content: center;
		`,
		// bodyText: css`
		// 	font-family: ${THEME.text.family.body};
		// 	font-weight: ${THEME.text.weight.light};
		// 	letter-spacing: ;
		// `,
		pageWidth: css`
			max-width: 1600px;
			margin: 0 auto;
			padding: 0 80px;

			${mediaWidthTemplates.upToExtraLarge`
        padding: 0 80px;
      `}

			${mediaWidthTemplates.upToLarge`
        padding: 0 60px;
      `}

      ${mediaWidthTemplates.upToMedium`
        padding: 0 50px;
      `}

      ${mediaWidthTemplates.upToSmall`
        padding: 0 40px;
      `}

      ${mediaWidthTemplates.upToExtraSmall`
        padding: 0 20px;
      `}
		`,
		...THEME,
	};
}
