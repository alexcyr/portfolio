import { Media } from "types/media";
import styled from "styled-components";
import { MediaType } from "types/mediaType";
import { useState, useEffect } from "react";
import { Video } from "components/Video/Video";
import { Iframe } from "components/Iframe/Iframe";
import { Video as VideoType } from "types/video";
import Markdown from "react-markdown";

const Image = styled.img`
	width: 100%;
	cursor: zoom-in;
	height: 100%;
	object-fit: cover;
`;

const ContentMediaWrapper = styled.div`
	width: 100%;
	/* display: flex;
	flex: 1; */
`;

const ContentWrapper = styled.div<{ disable: boolean }>`
	width: 100%;
	flex-direction: column;
	flex: 1;

	video {
		cursor: zoom-in;
	}

	${({ theme }) => theme.flexCenter};

	gap: ${({ theme }) => theme.space.s16};

	${({ disable }) =>
		disable
			? `
		${Image}, video {
			cursor: default;
			pointer-events: none;	
		}
	`
			: ""}
`;

const FullscreenWrapper = styled.div`
	${({ theme }) => theme.flexCenter};
	z-index: 10;

	${({ theme }) => theme.mediaWidth.upToSmall`
		margin: 16px auto;
	`}

	flex-direction: column;
	position: fixed;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.color.surface1};
	gap: 8px;

	img,
	div,
	video {
		cursor: zoom-out;
		object-fit: contain;
		max-width: 90vw;
		max-height: 90vh;
		width: auto;
	}
`;

const Caption = styled(Markdown)`
	font-family: ${({ theme }) => theme.text.family.body};
	font-size: ${({ theme }) => theme.text.size.s14};
	font-weight: ${({ theme }) => theme.text.weight.light};
	color: ${({ theme }) => theme.color.primary1};
	margin: ${({ theme }) => `${theme.space.s4} 0`};
`;

export const ContentMedia = (media: Media | VideoType) => {
	const [fullscreen, setFullscreen] = useState(false);
	const { type, src, alt, caption, preload, disable, fullscreenSrc } = media;
	let content;

	useEffect(() => {
		if (!disable) {
			const minimize = () => setFullscreen(false);
			window.addEventListener("scroll", minimize);
			return () => window.removeEventListener("scroll", minimize);
		}
	}, [disable]);

	if (type === MediaType.image) {
		content = <Image loading={preload ? "eager" : "lazy"} src={src} alt={alt} />;
	} else if (type === MediaType.video) {
		content = <Video {...media} />;
	} else if (type === MediaType.embed) {
		content = <div dangerouslySetInnerHTML={{ __html: src }} />;
	} else {
		content = <Iframe {...media} />;
	}

	return (
		<ContentMediaWrapper>
			<ContentWrapper
				disable={disable}
				onClick={() => type !== MediaType.iframe && !disable && setFullscreen((prev) => !prev)}
			>
				{content}
				{caption && <Caption>{caption}</Caption>}
			</ContentWrapper>

			{!disable && fullscreen && (
				<FullscreenWrapper>
					{fullscreenSrc ? (
						<Iframe src={fullscreenSrc} alt={alt} type={MediaType.iframe} preload={preload} />
					) : (
						<ContentWrapper
							disable={disable}
							onClick={() =>
								type !== MediaType.iframe && !disable && setFullscreen((prev) => !prev)
							}
						>
							{content}
							{caption && <Caption>{caption}</Caption>}
						</ContentWrapper>
					)}
				</FullscreenWrapper>
			)}
		</ContentMediaWrapper>
	);
};
export default ContentMedia;
