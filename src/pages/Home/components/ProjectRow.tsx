import ContentMedia from "components/ContentMedia/ContentMedia";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Project } from "types/project";

// const colors = ["#a4c441", "#f7931e", "#5ac1e5"];

const PREVIEW_WIDTH = "150px";

const PreviewWrapper = styled.div`
	max-width: 0;
	width: 100%;
	transition: max-width 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out;
	transition-delay: 0.25s;
	display: grid;
	grid-template-rows: 0fr;
	display: none;
`;

const DescriptionWrapper = styled.div`
	transition: grid-template-rows 0.25s ease-in-out;
	display: grid;
	grid-template-rows: 0fr;
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

const Description = styled.p`
	/* max-width: calc(100% - ${PREVIEW_WIDTH}); */
	margin: 0;
	overflow: hidden;
	font-size: ${({ theme }) => theme.text.size.s24};
	max-width: 860px;
	color: ${({ theme }) => theme.color.primary2};
	line-height: 36px;
	margin-top: ${({ theme }) => theme.space.s8};

	// Truncate text
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;

	${({ theme }) => theme.mediaWidth.upToSmall`
			font-size: ${theme.text.size.s18};
			line-height: 24px;
	`}
`;

const TextWrapper = styled.div``;

const ProjectRowWrapper = styled.div`
	${({ theme }) => theme.flexRowNoWrap};
	padding: ${({ theme }) => `${theme.space.s16} 0`};

	${({ theme }) => theme.mediaWidth.upToSmall`
		padding: ${theme.space.s8} 0;
	`}
`;

const StyleLink = styled(Link)`
	text-decoration: none;
	outline: none;

	&:hover,
	&:focus {
		${Title} {
			text-decoration: underline;
			text-decoration-thickness: 4px;
		}

		${PreviewWrapper} {
			max-width: ${PREVIEW_WIDTH};
			grid-template-rows: 1fr;
		}

		${DescriptionWrapper} {
			grid-template-rows: 1fr;
			transition-delay: 0.33s;
		}
	}
`;

export const ProjectRow = ({ id, previewMedia, title, description }: Project) => {
	return (
		<ProjectRowWrapper>
			<StyleLink to={`project/${id}`}>
				<PreviewWrapper>
					<ContentMedia {...previewMedia} />
				</PreviewWrapper>
				<TextWrapper>
					<Title>{title}</Title>
					<DescriptionWrapper>
						<Description>{description}</Description>
					</DescriptionWrapper>
				</TextWrapper>
			</StyleLink>
		</ProjectRowWrapper>
	);
};
export default ProjectRow;
