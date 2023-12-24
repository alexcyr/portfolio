import { Title as TitleProps } from "types/title";

import styled from "styled-components";
import { Size } from "types/size";

const TitleLarge = styled.h1`
	font-size: ${({ theme }) => theme.text.size.s56};
`;

const TitleMedium = styled.h2`
	font-size: ${({ theme }) => theme.text.size.s32};

	margin-top: ${({ theme }) => theme.space.s72};
`;

const TitleSmall = styled.h3``;

const TextWrapper = styled.div`
	${({ theme }) => theme.pageWidth};
	max-width: 800px;
	margin: 0 auto;
`;

export const Title = ({ size, title }: TitleProps) => {
	let content;
	if (size === Size.sm) {
		content = <TitleSmall>{title}</TitleSmall>;
	} else if (size === Size.md) {
		content = <TitleMedium>{title}</TitleMedium>;
	} else {
		content = <TitleLarge>{title}</TitleLarge>;
	}
	return <TextWrapper>{content}</TextWrapper>;
};
export default Title;
