import styled from "styled-components";
import { Project } from "types/project";
import ProjectRow from "./ProjectRow";

const SectionWrapper = styled.section`
	padding: ${({ theme }) => `${theme.space.s36} 0 ${theme.space.s72} 0`};

	${({ theme }) => theme.mediaWidth.upToSmall`
		padding: ${theme.space.s36} 0 ${theme.space.s36} 0;
	`}
`;

const SectionLabel = styled.h2`
	font-size: ${({ theme }) => theme.text.size.s24};
	font-weight: ${({ theme }) => theme.text.weight.light};
	margin: 0;
	color: ${({ theme }) => theme.color.primary2};
`;

interface SectionProps {
	label: string;
	id: string;
	projects: Project[];
}

const Section = ({ label, id, projects }: SectionProps) => {
	return (
		<SectionWrapper id={id}>
			<SectionLabel>{label}</SectionLabel>
			{projects.map((project) => (
				<ProjectRow key={project.id} {...project} />
			))}
		</SectionWrapper>
	);
};

export default Section;
