import ContentMedia from "components/ContentMedia/ContentMedia";
import styled from "styled-components";
import { MultiMedia as MultiMediaProps } from "types/multimedia";
import { Size } from "types/size";

const MultimediaWrapper = styled.div<{ size: Size }>`
	display: flex;
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
	
	margin: 16px auto;

	${({ theme }) => theme.mediaWidth.upToMedium`
        padding: 0;
      `}
`;

export const Multimedia = ({ media, size }: MultiMediaProps) => {
	return (
		<MultimediaWrapper size={size}>
			{media.map((item) => (
				<ContentMedia key={item.alt} {...item} />
			))}
		</MultimediaWrapper>
	);
};
export default Multimedia;
