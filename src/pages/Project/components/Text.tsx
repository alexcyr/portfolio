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
		line-height: 32px;
		letter-spacing: 0.5px;
		margin: ${theme.space.s20} auto ${theme.space.s20} auto;
      `;
		} else {
			return `
        font-size: ${theme.text.size.s28};
		line-height: 42px;
		letter-spacing: 1px;
		margin: ${theme.space.s20} auto ${theme.space.s72} auto;

      `;
		}
	}}

	p {
		color: ${({ theme }) => theme.color.primary2};
	}

	strong {
		letter-spacing: 0px;
		color: ${({ theme }) => theme.color.primary1};
		font-weight: ${({ theme }) => theme.text.weight.semibold};
	}

	ol,
	ul {
		padding-inline-start: 24px;
		color: ${({ theme }) => theme.color.primary2};
	}

	li {
		margin: ${({ theme }) => `${theme.space.s16} 0`};
	}

	a {
		font-weight: ${({ theme }) => theme.text.weight.semi_bold};
		color: ${({ theme }) => theme.color.primary1};
		text-decoration: underline;
		text-decoration-thickness: 2px;

		&:hover {
			text-decoration: underline;
		}
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
