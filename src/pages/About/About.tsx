import styled from "styled-components";

import SelfImage from "assets/images/self.jpeg";

const AboutWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	display: flex;
	gap: ${({ theme }) => theme.space.s72};
	align-items: center;
`;

const Image = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	overflow: hidden;
	flex-shrink: 0;
`;

const ContentWrapper = styled.div``;

const Bio = styled.p`
	font-weight: ${({ theme }) => theme.text.weight.light};
	font-family: ${({ theme }) => theme.text.family.body};
	margin: 0 auto;
	max-width: 800px;

	${({ theme }) => `

        font-size: ${theme.text.size.s28};
		line-height: 42px;
		letter-spacing: 1px;
		margin: ${theme.space.s20} auto ${theme.space.s72} auto;

      `}
`;

export function About() {
	return (
		<AboutWrapper>
			<Image src={SelfImage} />
			<ContentWrapper>
				<h1>about</h1>
				<Bio>
					Welcome to my portfolio site. I graduated from Michigan State with a degree in graphic
					design. Since then I’ve worked hard to become a full-stack and video game developer,
					working professionally and on personal projects. Currently based in the Detroit area
					working remotely for Gamestop on a blockchain project.
				</Bio>
			</ContentWrapper>
		</AboutWrapper>
	);
}

export default About;
