import ContentMedia from "components/ContentMedia/ContentMedia";
import { IframeContext } from "pages/Project/Project";
import { useContext, useEffect, useRef, useState } from "react";
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

	${({ theme }) => theme.mediaWidth.upToSmall`
		max-width: 150px;
		width: unset;
	`}
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
	margin: 0;

	${({ theme }) => theme.mediaWidth.upToSmall`
		font-size: ${theme.text.size.s32};
	`}

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		font-size: ${theme.text.size.s24};
	`}
`;

const RowWrapper = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.space.s32};
	margin-top: ${({ theme }) => theme.space.s16};

	${({ theme }) => theme.mediaWidth.upToSmall`
		gap: ${theme.space.s16};
	`}
`;

const Description = styled.p`
	/* max-width: calc(100% - ${PREVIEW_WIDTH}); */
	flex: 2;
	overflow: hidden;
	font-size: ${({ theme }) => theme.text.size.s24};
	max-width: 800px;
	color: ${({ theme }) => theme.color.primary2};
	line-height: 36px;
	margin: -4px 0 auto;

	// Truncate text
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;

	${({ theme }) => theme.mediaWidth.upToSmall`
		font-size: ${theme.text.size.s16};
		line-height: 24px;
		max-width: 600px;
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
	}

	${DescriptionWrapper} {
		grid-template-rows: 1fr;
		transition-delay: 0.33s;
	}
`;

const StyleLink = styled(Link)`
	text-decoration: none;
	outline: none;

	&:hover,
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
	width: 100%;
	height: 100%;
	aspect-ratio: 3 / 2;

	position: absolute;
	display: block;
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
		<ProjectRowWrapper ref={ref}>
			<StyleLink to={`project/${id}`}>
				<TextWrapper>
					<Title>{title}</Title>
					<RowWrapper>
						{previewMedia && (
							<PreviewWrapper>
								<ImagePoster src={previewMedia.posterSrc} />

								{hovered && <ContentMedia {...previewMedia} />}
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
