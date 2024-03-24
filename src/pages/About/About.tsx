import styled from "styled-components";

import SelfImage from "assets/images/self.jpeg";

const AboutWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	display: flex;
	gap: ${({ theme }) => theme.space.s72};
	align-items: center;

	${({ theme }) => theme.mediaWidth.upToSmall`
        gap: ${theme.space.s48};

	`}

	${({ theme }) => theme.mediaWidth.upToSmall`
		flex-direction: column;
        gap: ${theme.space.s16};
        margin-top: ${theme.space.s16};
	`}
`;

const Image = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	overflow: hidden;
	flex-shrink: 0;

	${({ theme }) => theme.mediaWidth.upToSmall`
		width: 150px;
	    height: 150px;
	`}
`;

const ContentWrapper = styled.div``;

const Bio = styled.p`
	color: ${({ theme }) => theme.color.primary2};
	font-weight: ${({ theme }) => theme.text.weight.light};
	font-family: ${({ theme }) => theme.text.family.body};
	margin: 0 auto;
	max-width: 800px;

	a {
		color: ${({ theme }) => theme.color.primary1};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	${({ theme }) => `

        font-size: ${theme.text.size.s28};
		line-height: 42px;
		letter-spacing: 1px;
		margin: ${theme.space.s20} auto ${theme.space.s32} auto;

      `}

	${({ theme }) => theme.mediaWidth.upToMedium`
		font-size: ${theme.text.size.s18};
        line-height: 32px;
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
					design. Since then I&apos;ve worked hard to become a web and game developer, working
					professionally and on personal projects. Currently based in the Detroit area working
					remotely for GameStop.
				</Bio>
				<Bio>
					Email: <a href="mailto:cyr.alexander@gmail.com">cyr.alexander@gmail.com</a>
				</Bio>
			</ContentWrapper>
		</AboutWrapper>
	);
}

export default About;
