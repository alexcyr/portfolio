import styled from "styled-components";
import { Project } from "types/project";
import ProjectRow from "./ProjectRow";

const SectionWrapper = styled.div`
	margin: ${({ theme }) => `${theme.space.s48} 0 ${theme.space.s72} 0`};
`;

const SectionLabel = styled.h2`
	font-size: ${({ theme }) => theme.text.size.s24};
	font-weight: ${({ theme }) => theme.text.weight.light};
	margin: ${({ theme }) => `${theme.space.s36} 0 0 0`};
	color: ${({ theme }) => theme.color.primary2};
`;

interface SectionProps {
	label: string;
	projects: Project[];
}

const Section = ({ label, projects }: SectionProps) => {
	return (
		<SectionWrapper>
			<SectionLabel>{label}</SectionLabel>
			{projects.map((project) => (
				<ProjectRow key={project.id} {...project} />
			))}
		</SectionWrapper>
	);
};

export default Section;
