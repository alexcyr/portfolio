import projectDict from "assets/projectDict";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ContentType } from "types/contentType";
import Title from "./components/Title";
import Text from "./components/Text";
import Multimedia from "./components/Multimedia";

const ProjectWrapper = styled.div``;

export function Project() {
	const { id } = useParams();
	const projectInfo = projectDict[id];

	if (!projectInfo) {
		return <Navigate to="/" replace />;
	}

	return (
		<ProjectWrapper>
			{projectInfo.pageContent.map((content, index) => {
				if (content.type === ContentType.title) {
					return <Title key={`${index}-${content.type}`} {...content} />;
				} else if (content.type === ContentType.text) {
					return <Text key={`${index}-${content.type}`} {...content} />;
				} else if (content.type === ContentType.multimedia) {
					return <Multimedia key={`${index}-${content.type}`} {...content} />;
				}
				return null;
			})}
		</ProjectWrapper>
	);
}

export default Project;
