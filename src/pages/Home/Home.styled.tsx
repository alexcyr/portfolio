import styled from "styled-components";

export const HomeWrapper = styled.div`
	background: ${({ theme }) => theme.color.surface1};
`;

export const ContentWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
`;
