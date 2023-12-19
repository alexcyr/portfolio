import styled from "styled-components";

const STRINGS = {
	siteName: "alex cyr",
};

const NavBarWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	display: flex;
	justify-content: space-between;
`;

const SiteName = styled.h1`
	color: ${({ theme }) => theme.color.primary1};
	font-family: ${({ theme }) => theme.text.family.title};
	font-size: ${({ theme }) => theme.text.size.s42};
`;

export const NavBar = () => {
	return (
		<NavBarWrapper>
			<SiteName>{STRINGS.siteName}</SiteName>
		</NavBarWrapper>
	);
};

export default NavBar;
