import styled from "styled-components";
import { createContext } from "react";

const AboutWrapper = styled.div``;

export const IframeContext = createContext({
	iframeId: "",
	setIframeId: (_id: string) => undefined,
});

export function About() {
	return (
		<AboutWrapper>
			<img src={"/fake-path.jpg"} />
			<div>
				<h1>about alex</h1>
				<p>
					Welcome to my portfolio site. I graduated from Michigan State with a degree in graphic
					design. Since then I’ve worked hard to become a full-stack and video game developer,
					working professionally and on personal projects. Currently based in the Detroit area
					working remotely for Gamestop on a blockchain project.
				</p>
			</div>
		</AboutWrapper>
	);
}

export default About;
