import styled from "styled-components";
import { Size } from "types/size";
import { Text as TextProps } from "types/text";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const StyledText = styled(Markdown)<{ size: Size }>`
	${({ theme }) => theme.pageWidth};
	font-weight: ${({ theme }) => theme.text.weight.light};
	font-family: ${({ theme }) => theme.text.family.body};
	margin: 0 auto;
	max-width: 800px;

	${({ theme, size }) => {
		if (size === Size.sm) {
			return `
        font-size: ${theme.text.size.s16};
        line-height: ${theme.space.s20};
      `;
		} else if (size === Size.md) {
			return `
        font-size: ${theme.text.size.s21};
        line-height: ${theme.space.s28};
      `;
		} else {
			return `
        font-size: ${theme.text.size.s28};
        line-height: ${theme.space.s36};
      `;
		}
	}}

	p {
		color: ${({ theme }) => theme.color.primary2};
	}
`;

export const Text = ({ text, size }: TextProps) => {
	return (
		<StyledText remarkPlugins={[remarkGfm]} size={size}>
			{text}
		</StyledText>
	);
};
export default Text;
