import ContentMedia from "components/ContentMedia/ContentMedia";
import { IframeContext } from "pages/Project/Project";
import { useContext, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Project } from "types/project";

const PREVIEW_WIDTH = "150px";

const PreviewWrapper = styled.div`
	/* width: 300px; */
	max-width: 300px;
	transition: max-height 0.25s ease-in-out;
	max-height: 0;
	flex: 1;
	overflow: hidden;
	position: relative;
	aspect-ratio: 3 / 2;
	width: 100vw;

	${({ theme }) => theme.mediaWidth.upToSmall`
		max-width: 150px;
		
	`}

	div {
		z-index: 1;
	}

	img {
		z-index: 0;
	}
`;

const RelativePreviewBlock = styled.div`
	position: relative;
	display: block;
	width: 100%;
	aspect-ratio: 3 / 2;
`;

const MediaWrapper = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
`;

const DescriptionWrapper = styled.div`
	transition: grid-template-rows 0.25s ease-in-out;
	flex: 4;
	display: grid;
	grid-template-rows: 0fr;
	overflow: hidden;

	${({ theme }) => theme.mediaWidth.upToMedium`
		flex: 2;
	`}
`;

const Title = styled.h3`
	font-size: ${({ theme }) => theme.text.size.s48};
	word-break: break-word;
	margin: 0;

	&:hover,
	&:focus {
		text-decoration: underline;
		text-decoration-thickness: 4px;
	}

	${({ theme }) => theme.mediaWidth.upToSmall`
		font-size: ${theme.text.size.s32};
	`}

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		font-size: ${theme.text.size.s24};
		line-height: 26px;
	`}
`;

const Description = styled(Markdown)`
	/* max-width: calc(100% - ${PREVIEW_WIDTH}); */
	flex: 2;
	overflow: hidden;
	font-size: ${({ theme }) => theme.text.size.s24};
	max-width: 800px;
	color: ${({ theme }) => theme.color.primary2};
	line-height: 36px;
	margin: -4px 0 auto;
	font-weight: ${({ theme }) => theme.text.weight.light};

	// Truncate text
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;

	p {
		letter-spacing: 1px;
		color: ${({ theme }) => theme.color.primary2};
		margin: 0;
	}

	strong {
		letter-spacing: 0px;
		color: ${({ theme }) => theme.color.primary1};
		font-weight: ${({ theme }) => theme.text.weight.semibold};
	}

	${({ theme }) => theme.mediaWidth.upToSmall`
		font-size: ${theme.text.size.s16};
		line-height: 24px;
		max-width: 600px;

		p {
		letter-spacing: 0.25px;
		
		}
	`}

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		font-size: ${theme.text.size.s12};
		line-height: 18px;
		max-width: 500px;
	`}
`;

const TextWrapper = styled.div``;

const ProjectRowWrapper = styled.div`
	${({ theme }) => theme.flexRowNoWrap};
	padding: ${({ theme }) => `${theme.space.s16} 0 0`};

	${({ theme }) => theme.mediaWidth.upToSmall`
		padding: ${theme.space.s8} 0 ${theme.space.s16};
	`}
`;

const descriptionHoverStyle = css`
	${PreviewWrapper} {
		max-height: 200px;
		transition-delay: 0.33s;

		${({ theme }) => theme.mediaWidth.upToSmall`
				max-height: 100px;
		`}
	}

	${DescriptionWrapper} {
		grid-template-rows: 1fr;
		transition-delay: 0.33s;
	}
`;

const StyleLink = styled(Link)`
	text-decoration: none;
	outline: none;

	&:focus {
		${descriptionHoverStyle}

		${Title} {
			text-decoration: underline;
			text-decoration-thickness: 4px;
		}
	}

	${({ theme }) => theme.mediaWidth.upToSmall`
		${descriptionHoverStyle}
	`}
`;

const ImagePoster = styled.img`
	/* width: 300px;
	height: 200px; */
	/* object-fit: cover; */
	width: 100%;
	position: absolute;
	height: auto;
	aspect-ratio: 3 / 2;
	object-fit: contain;
	top: 0;
	left: 0;

	${({ theme }) => theme.mediaWidth.upToSmall`
		width: 100%;
		max-width: 150px;

	`}
`;

const RowWrapper = styled.div<{ hovered: boolean }>`
	display: flex;
	gap: ${({ theme }) => theme.space.s32};
	margin-top: ${({ theme }) => theme.space.s16};

	${({ hovered }) =>
		hovered
			? `
		${descriptionHoverStyle}

	`
			: ""};

	${({ theme }) => theme.mediaWidth.upToSmall`
		gap: ${theme.space.s16};
	`}
`;

export const ProjectRow = ({ id, previewMedia, title, description }: Project) => {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);
	const { iframeId, setIframeId } = useContext(IframeContext);

	useEffect(() => {
		if (iframeId !== id) {
			setHovered(false);
		}
	}, [iframeId, id]);

	useEffect(() => {
		const current = ref.current;
		if (current) {
			const onMouseEnter = () => setHovered(true);
			const onMouseLeave = () => setHovered(false);

			const onTouchEnter = () => {
				setIframeId(id);
				setHovered(true);
			};

			current.addEventListener("mouseenter", onMouseEnter);
			current.addEventListener("mouseleave", onMouseLeave);
			current.addEventListener("touchstart", onTouchEnter);

			return () => {
				current.removeEventListener("mouseenter", onMouseEnter);
				current.removeEventListener("mouseleave", onMouseLeave);
				current.removeEventListener("touchstart", onTouchEnter);
			};
		}
	}, [id, setIframeId]);

	return (
		<ProjectRowWrapper>
			<StyleLink to={`project/${id}`}>
				<TextWrapper>
					<Title ref={ref}>{title}</Title>
					<RowWrapper hovered={hovered}>
						{previewMedia && (
							<PreviewWrapper>
								<ImagePoster src={previewMedia.posterSrc} />
								<RelativePreviewBlock />
								{hovered && (
									<MediaWrapper>
										<ContentMedia {...previewMedia} />
									</MediaWrapper>
								)}
							</PreviewWrapper>
						)}
						<DescriptionWrapper>
							<Description>{description}</Description>
						</DescriptionWrapper>
					</RowWrapper>
				</TextWrapper>
			</StyleLink>
		</ProjectRowWrapper>
	);
};
export default ProjectRow;
