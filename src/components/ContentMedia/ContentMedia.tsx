import { Media } from "types/media";
import styled from "styled-components";
import { MediaType } from "types/mediaType";
import { useState, useEffect } from "react";

const Image = styled.img`
	width: 100%;
	cursor: zoom-in;
`;

const ContentMediaWrapper = styled.div`
	${({ theme }) => theme.flexCenter};
	flex-direction: column;
	width: 100%;
`;

const FullscreenWrapper = styled.div<{ $fullscreen: boolean }>`
	${({ theme }) => theme.flexCenter};
	flex-direction: column;
	display: none;
	background: ${({ theme }) => theme.color.surface1};

	${({ $fullscreen }) =>
		$fullscreen
			? `
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		${Image} {
			cursor: zoom-out;
			width:100%;
    height:100%;
    object-fit: contain;
			
		}
	`
			: ""};
`;

const Video = styled.video`
	width: 100%;
`;

const Iframe = styled.iframe`
	width: 100%;
`;

const Caption = styled.span`
	font-family: ${({ theme }) => theme.text.family.body};
	font-size: ${({ theme }) => theme.text.size.s14};
	font-weight: ${({ theme }) => theme.text.weight.light};
	color: ${({theme}) => theme.color.primary1};
	margin: ${({theme}) => `${theme.space.s4} 0`};
`;

export const ContentMedia = ({ type, src, alt, caption }: Media) => {
	let content;
	const [fullscreen, setFullscreen] = useState(false);

	useEffect(() => {
		const minimize = () => setFullscreen(false);
		window.addEventListener("scroll", minimize);

		return () => window.removeEventListener("scroll", minimize);
	}, []);

	if (type === MediaType.image) {
		content = <Image src={src} alt={alt} />;
	} else if (type === MediaType.video) {
		content = <Video src={src} title={alt} autoPlay muted loop controls />;
	} else {
		content = <Iframe src={src} title={alt} />;
	}

	return (
		<ContentMediaWrapper
			onClick={() => {
				setFullscreen((prev) => !prev);
				console.log("click");
			}}
		>
			{content}
			{caption && (
				<Caption>
					{fullscreen.toString()} {caption}
				</Caption>
			)}
			{fullscreen && (
				<FullscreenWrapper $fullscreen={fullscreen}>
					{content}
					{caption && (
						<Caption>
							{fullscreen.toString()} {caption}
						</Caption>
					)}
				</FullscreenWrapper>
			)}
		</ContentMediaWrapper>
	);
};
export default ContentMedia;
