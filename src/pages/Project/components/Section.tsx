import { ReactNode } from "react";
import { Section as SectionProps } from "types/section";
import styled from "styled-components";
import { Size } from "types/size";

const SectionWrapper = styled.div<{ size: Size }>`
	${({ size, theme }) => {
		if (size === Size.md) {
			return `
                margin: 120px auto;
            `;
		}
		return `
                margin: ${theme.space.s72} auto;
            `;
	}}
`;

export const Section = ({ children, size }: { children: ReactNode } & SectionProps) => (
	<SectionWrapper size={size}>{children}</SectionWrapper>
);
