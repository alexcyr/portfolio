import ContentMedia from "components/ContentMedia/ContentMedia";
import styled from "styled-components";
import { MultiMedia as MultiMediaProps } from "types/multimedia";
import { Size } from "types/size";

const MultimediaWrapper = styled.div<{ size: Size; isGrid: boolean; flipGrid: boolean }>`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.space.s16};

	${({ size, theme }) => {
		if (size === Size.xs) {
			return `
				${theme.pageWidth};
        		max-width: 600px;
      `;
		} else if (size === Size.sm) {
			return `
				${theme.pageWidth};

        max-width: 800px;
      `;
		} else if (size === Size.md) {
			return `${theme.pageWidth};

       	 max-width: 900px;
      `;
		} else {
			return `
        width: 100%;
      `;
		}
	}}
	margin: 16px auto 48px auto;

	${({ isGrid, flipGrid }) =>
		isGrid
			? flipGrid
				? `
				display: grid;
				grid-template-areas: 
						"a a c"
						"b  b c";
						

`
				: `				
				display: grid;
				grid-template-areas: 
				"a a c c"
						"b b c c";
				div:nth-child(1) {
					grid-area: a;
				}
				div:nth-child(2) {
					grid-area: b;
				}
				div:nth-child(3) {
					grid-area: c;
					display: flex;
				}

`
			: ""}

	${({ theme }) => theme.mediaWidth.upToSmall`
		margin: 16px auto;

	`}

	${({ theme }) => theme.mediaWidth.upToMedium`
        padding: 0;
      `}
`;

export const Multimedia = ({ media, size, isGrid, flipGrid }: MultiMediaProps) => {
	return (
		<MultimediaWrapper size={size} isGrid={isGrid} flipGrid={flipGrid}>
			{media.map((item) => (
				<ContentMedia key={item.alt} {...item} />
			))}
		</MultimediaWrapper>
	);
};
export default Multimedia;
