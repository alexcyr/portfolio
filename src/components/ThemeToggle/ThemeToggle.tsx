import { useContext } from "react";
import { ThemeContext } from "theme/ThemeProvider";
import { ThemeName } from "types/theme";
import styled from "styled-components";

const StyledButton = styled.button`
	border: 1px solid ${({ theme }) => theme.color.primary1};
	border-radius: 25px;
	background: transparent;
	height: 40px;
	width: 75px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	outline: 1px solid transparent;
	flex-shrink: 0;
	margin-left: 4px;

	&:hover {
		outline: 1px solid ${({ theme }) => theme.color.primary1};
	}
`;

const IconWrapper = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	position: relative;
`;

const IconBase = styled.div<{ active: boolean }>`
	transition: all 0.5s ease-in-out;
	height: 100%;
	aspect-ratio: 1 / 1;
	left: 0;
	top: 0;
	position: absolute;

	& svg {
		width: 100%;
		height: 100%;
	}
`;

const SunIcon = styled(IconBase)`
	${({ active, theme }) => `
        transform: translateX(${active ? "0" : "-100%"}) scale(${active ? 1 : 0}) rotate(${
		active ? 0 : "-90deg"
	});
        left: ${active ? "0" : "100%"};
        color: ${theme.color.primary1};
    `};
`;

const MoonIcon = styled(IconBase)`
	${({ active, theme }) => `
        transform: translateX(${active ? "-100%" : "0"}) scale(${active ? 1 : 0}) rotate(${
		active ? 0 : "90deg"
	});
        left: ${active ? "100%" : "0"};
        color: ${theme.color.primary1};
        
    `};
`;

export const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const sunSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
			<path
				fill="currentColor"
				d="M120 40v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm0 116.68l-8 8a8 8 0 0 0 11.32 11.32l8-8a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l8 8a8 8 0 0 0 11.32-11.32ZM40 120h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16m88 88a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m96-88h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16"
			/>
		</svg>
	);
	const moonSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
			<path
				fill="currentColor"
				d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
			/>
		</svg>
	);

	return (
		<StyledButton
			title={`toggle ${theme === ThemeName.dark ? ThemeName.light : ThemeName.dark} theme`}
			onClick={() => setTheme(theme === ThemeName.dark ? ThemeName.light : ThemeName.dark)}
		>
			<IconWrapper>
				<SunIcon active={theme === ThemeName.light}>{sunSvg}</SunIcon>
				<MoonIcon active={theme === ThemeName.dark}>{moonSvg}</MoonIcon>
			</IconWrapper>
		</StyledButton>
	);
};
