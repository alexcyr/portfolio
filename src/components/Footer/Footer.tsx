import styled from "styled-components";

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	padding-top: 96px;
	padding-bottom: ${({ theme }) => theme.space.s32};
`;

const Copyright = styled.span`
	font-family: ${({ theme }) => theme.text.family.body};
	font-weight: ${({ theme }) => theme.text.weight.light};
	font-size: ${({ theme }) => theme.text.size.s14};
	color: ${({ theme }) => theme.color.primary3};
	letter-spacing: 0.5px;
`;

export const Footer = () => (
	<FooterWrapper>
		<small>
			<Copyright>©{new Date().getFullYear()} alex cyr</Copyright>
		</small>
	</FooterWrapper>
);
