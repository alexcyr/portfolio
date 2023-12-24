// import Logo from "components/Logo/Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const STRINGS = {
	siteName: "alex cyr",
};

const NavBarWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	display: flex;
	justify-content: space-between;
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

export const NavBar = () => {
	return (
		<NavBarWrapper>
			<StyleLink to="/">
				<SiteName>
					{/* <Logo /> */}
					{STRINGS.siteName}
				</SiteName>
			</StyleLink>
		</NavBarWrapper>
	);
};

export default NavBar;
