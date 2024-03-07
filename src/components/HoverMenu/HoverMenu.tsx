import { ReactNode } from "react";
import styled from "styled-components";
import pageData from "assets/data/pageData";
import { Link } from "react-router-dom";

const LinksWrapper = styled.div`
	display: none;
	position: absolute;
	top: 50px;
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.color.primary1};
`;

const MenuWrapper = styled.div`
	position: relative;
	&:hover {
		${LinksWrapper} {
			display: block;
		}
	}
`;

interface HoverMenuProps {
	children?: ReactNode;
}

export const HoverMenu = ({ children }: HoverMenuProps) => (
	<MenuWrapper>
		{children}
		<LinksWrapper>
			{pageData.sections.map((section) => (
				<StyledLink to={`#${section.id}`} key={section.id}>
					{section.label}
				</StyledLink>
			))}
		</LinksWrapper>
	</MenuWrapper>
);
