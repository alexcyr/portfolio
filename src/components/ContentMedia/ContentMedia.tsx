import { Media } from "types/media";
import styled from "styled-components";
import { MediaType } from "types/mediaType";
import { useState, useEffect } from "react";
import { Video } from "components/Video/Video";
import { Iframe } from "components/Iframe/Iframe";

const Image = styled.img`
	width: 100%;
	cursor: zoom-in;
	height: 100%;
	object-fit: cover;
`;

const ContentMediaWrapper = styled.div`
	width: 100%;
	display: flex;
	flex: 1;
`;

const FullscreenWrapper = styled.div<{ $fullscreen: boolean }>`
	${({ theme }) => theme.flexCenter};
	flex-direction: column;
	flex: 1;
	width: 100%;

	${({ theme }) => theme.flexCenter};
	flex-direction: column;

	gap: ${({ theme }) => theme.space.s16};

	${({ theme }) => theme.mediaWidth.upToSmall`
		margin: 16px auto;
	`}

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
		background: ${({ theme }) => theme.color.surface1};


		${Image} {
			cursor: zoom-out;
			width:100%;
    height:100%;
    object-fit: contain;
			
		}
	`
			: ""};
`;

const Caption = styled.span`
	font-family: ${({ theme }) => theme.text.family.body};
	font-size: ${({ theme }) => theme.text.size.s14};
	font-weight: ${({ theme }) => theme.text.weight.light};
	color: ${({ theme }) => theme.color.primary1};
	margin: ${({ theme }) => `${theme.space.s4} 0`};
`;

export const ContentMedia = (media: Media) => {
	const [fullscreen, setFullscreen] = useState(false);
	const { type, src, alt, caption } = media;
	let content;

	useEffect(() => {
		const minimize = () => setFullscreen(false);
		window.addEventListener("scroll", minimize);
		return () => window.removeEventListener("scroll", minimize);
	}, []);

	if (type === MediaType.image) {
		content = <Image loading="lazy" src={src} alt={alt} />;
	} else if (type === MediaType.video) {
		content = <Video {...media} />;
	} else {
		content = <Iframe {...media} />;
	}

	return (
		<ContentMediaWrapper onClick={() => setFullscreen((prev) => !prev)}>
			<FullscreenWrapper $fullscreen={fullscreen}>
				{content}
				{caption && <Caption>{caption}</Caption>}
			</FullscreenWrapper>
		</ContentMediaWrapper>
	);
};
export default ContentMedia;
