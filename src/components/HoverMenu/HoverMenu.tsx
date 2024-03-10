import { ReactNode } from "react";
import styled from "styled-components";
import pageData from "assets/data/pageData";
import { Link } from "react-router-dom";

const LinksOuterWrapper = styled.div`
	display: none;
	position: absolute;
	top: ${({ theme }) => theme.space.s32};
	padding-top: ${({ theme }) => theme.space.s16};
	right: 0;
`;

const LinksInnerWrapper = styled.div`
	display: flex;
	top: ${({ theme }) => theme.space.s32};
	flex-direction: column;
	background: ${({ theme }) => theme.color.surface2};
	padding: ${({ theme }) => `${theme.space.s12} 0 ${theme.space.s16}`};
	border-radius: 16px;
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.color.primary1};
	white-space: nowrap;
	padding: ${({ theme }) => `${theme.space.s4} ${theme.space.s24}`};
	font-family: ${({ theme }) => theme.text.family.title};
	font-size: ${({ theme }) => theme.text.size.s24};
	font-weight: 400;
	text-decoration: none;
	text-align: right;

	&:hover {
		text-decoration: underline;
	}
`;

const MenuWrapper = styled.div`
	position: relative;

	&:hover {
		${LinksOuterWrapper} {
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
		<LinksOuterWrapper>
			<LinksInnerWrapper>
				{pageData.sections.map((section) => (
					<StyledLink to={`/#${section.id}`} key={section.id}>
						{section.label}
					</StyledLink>
				))}
			</LinksInnerWrapper>
		</LinksOuterWrapper>
	</MenuWrapper>
);
