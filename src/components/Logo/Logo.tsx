import { useEffect, useState, useRef } from "react";
var perlin = require("perlin-noise");
const noise = perlin.generatePerlinNoise(300, 300);

import styled from "styled-components";

const Letter = styled.a<{ rand: number }>`
	position: absolute;
	top: 0;
	left: 0;
	transform-origin: center;
	transition: all 0.25s ease-in-out;

	transform: ${({ rand }) =>
		rand
			? `
        translate(${(Math.sin(rand) * 200 - 100) * 0.2}%, ${(Math.cos(rand) * 200 - 100) * 0.1}%) 
        scale(${1 + rand * 0.15}) 
        rotate(${rand * 30 - 15}deg)`
			: ""};
`;

const LogoTitle = styled.h1`
	font-size: ${({ theme }) => theme.text.size.s42};
	margin: 0;
	position: relative;
	display: flex;

	${Letter} {
		transform: translate(0, 0);
	}

	&:hover {
		${Letter} {
			transform: unset;
		}
	}
`;
const LetterWrapper = styled.span`
	position: relative;
`;

const LetterPlaceholder = styled.span`
	opacity: 0;
`;

export const Logo = () => {
	const [intervalTimer, setIntervalTimer] = useState(null);
	const [t, setT] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		const setTime = () => setT((prev) => prev + 1);

		const interval = setInterval(setTime, 50);

		return () => clearInterval(interval);
	}, []);

	const title = "alex cyr";

	return (
		<LogoTitle ref={ref}>
			{[...title].map((c, index) => (
				<LetterWrapper>
					<Letter rand={t ? noise[(index * [...title].length + t) % noise.length] : null}>
						{c}
					</Letter>
					<LetterPlaceholder>{c}</LetterPlaceholder>
				</LetterWrapper>
			))}
		</LogoTitle>
	);
};

export default Logo;
