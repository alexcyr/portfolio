import { ReactNode } from "react";
import { Section as SectionProps } from "types/section";
import styled from "styled-components";
import { Size } from "types/size";

const SectionWrapper = styled.div<{ size: Size }>`
	${({ size }) => {
		if (size === Size.xs) {
			return `
                margin: 16px auto;
            `;
		}
		if (size === Size.sm) {
			return `
                margin: 32px auto;
            `;
		}
		if (size === Size.md) {
			return `
                margin: 64px auto;
            `;
		}
		return `
                margin: 128px auto;
            `;
	}}
`;

export const Section = ({ children, size }: { children: ReactNode } & SectionProps) => (
	<SectionWrapper size={size}>{children}</SectionWrapper>
);
