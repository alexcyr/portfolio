import { useTheme } from "styled-components";

export const PlayIcon = () => {
	const theme  = useTheme();
	return (
		<svg
			width="153"
			height="153"
			viewBox="0 0 153 153"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M112 76.8171L56 112L56 39L112 76.8171Z" fill={theme.color.primary1} />
			<circle cx="76.5" cy="76.5" r="75.5" stroke={theme.color.primary1} strokeWidth="2" />
		</svg>
	);
};
