import ContentMedia from "components/ContentMedia/ContentMedia";
import styled from "styled-components";
import { MultiMedia as MultiMediaProps } from "types/multimedia";
import { Size } from "types/size";

const MultimediaWrapper = styled.div<{ size: Size }>`
	display: flex;
	gap: ${({ theme }) => theme.space.s16};
	margin: 0 auto;

	${({ size }) => {
		if (size === Size.sm) {
			return `
				${({ theme }) => theme.pageWidth};

        max-width: 800px;
      `;
		} else if (size === Size.md) {
			return `
				${({ theme }) => theme.pageWidth};

        max-width: 900px;
      `;
		} else {
			return `
        width: 100%;
      `;
		}
	}}
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
