// import Logo from "components/Logo/Logo";
import { ThemeToggle } from "components/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkedInIcon } from "components/Icons/LinkedIn";
import { GithubIcon } from "components/Icons/Github";
import { HoverMenu } from "components/HoverMenu/HoverMenu";
import useScrollToAnchor from "hooks/ScrollToAnchor";
import { useState } from "react";
import { HamburgerToggleIcon } from "components/HamburgerToggleIcon/HamburgerToggleIcon";

const STRINGS = {
	siteName: "alex cyr",
	work: "work",
	about: "about",
};

const NavBarWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyleLink = styled(Link)`
	text-decoration: none;
	flex-shrink: 0;

	&:hover {
		text-decoration: underline;
		text-decoration-color: ${({ theme }) => theme.color.primary1};
	}
`;

const SiteName = styled.h1`
	color: ${({ theme }) => theme.color.primary1};
	font-family: ${({ theme }) => theme.text.family.title};
	font-size: ${({ theme }) => theme.text.size.s42};
`;

const LinksWrapper = styled.div<{ isChecked: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 18px;

	${({ theme }) => theme.mediaWidth.upToSmall`
		display: none;
		position: fixed;
		inset: 0;
		height: 100vh;
		width: 100vw;
		align-items: unset;
		justify-content: unset;
		background: ${theme.color.surface2};
		padding: ${theme.space.s32};
		flex-direction: column;
	`}

	${({ isChecked }) => (isChecked ? "display: flex !important;" : "")}
`;

const PageLink = styled(StyleLink)`
	color: ${({ theme }) => theme.color.primary1};
	font-family: ${({ theme }) => theme.text.family.title};
	font-size: ${({ theme }) => theme.text.size.s28};
	font-weight: 400;
	padding: ${({ theme }) => theme.text.size.s8};
	margin-right: ${({ theme }) => theme.text.size.s24};
`;

const IconLink = styled(Link)`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.primary1};
	padding: 4px;
`;

const Checkbox = styled.input`
	position: absolute;
	inset: 0;
	padding: ${({ theme }) => theme.space.s4};
	visibility: 0;
	opacity: 0;
`;

const MenuToggleLabel = styled.label`
	width: 32px;
	height: 32px;
	position: relative;
	z-index: 1;
	display: none;
	cursor: pointer;

	${({ theme }) => theme.mediaWidth.upToSmall`
		display: block;
	`}
`;

export const NavBar = () => {
	const [isChecked, setIsChecked] = useState(false);
	useScrollToAnchor();

	const handleClick = () => {
		if (isChecked) {
			document.body.style.overflow = "unset";
		} else {
			document.body.style.overflow = "hidden";
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
			});
		}

		setIsChecked((previous) => !previous);
	};

	return (
		<NavBarWrapper>
			<StyleLink to="/">
				<SiteName>{STRINGS.siteName}</SiteName>
			</StyleLink>

			<MenuToggleLabel htmlFor="menu-toggle">
				<Checkbox
					name="menu-toggle"
					id="menu-toggle"
					type="checkbox"
					checked={isChecked}
					onClick={() => handleClick()}
				/>

				<HamburgerToggleIcon isChecked={isChecked} />
			</MenuToggleLabel>

			<LinksWrapper isChecked={isChecked}>
				<HoverMenu>
					<PageLink to="/">{STRINGS.work}</PageLink>
				</HoverMenu>
				<PageLink to={`/${STRINGS.about}`}>{STRINGS.about}</PageLink>
				<IconLink to="https://www.linkedin.com/in/alexander-cyr/" target="blank" title="LinkedIn">
					<LinkedInIcon />
				</IconLink>
				<IconLink to="https://github.com/alexcyr" target="blank" title="Github">
					<GithubIcon />
				</IconLink>
				<ThemeToggle />
			</LinksWrapper>
		</NavBarWrapper>
	);
};

export default NavBar;
