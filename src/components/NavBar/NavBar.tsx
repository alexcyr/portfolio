// import Logo from "components/Logo/Logo";
import { ThemeToggle } from "components/ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { LinkedInIcon } from "components/Icons/LinkedIn";
import { GithubIcon } from "components/Icons/Github";
import { HoverMenu } from "components/HoverMenu/HoverMenu";

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

const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 18px;
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

export const NavBar = () => {
	const { theme } = useTheme();
	console.log(theme);
	return (
		<NavBarWrapper>
			<StyleLink to="/">
				<SiteName>{STRINGS.siteName}</SiteName>
			</StyleLink>

			<LinksWrapper>
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
