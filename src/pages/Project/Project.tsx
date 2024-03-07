import projectDict from "assets/data/projectDict";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ContentType } from "types/contentType";
import Title from "./components/Title";
import Text from "./components/Text";
import Multimedia from "./components/Multimedia";
import { Project } from "types/project";
import { Title as TitleProps } from "types/title";
import { Text as TextProps } from "types/text";
import { MultiMedia as MultiMediaProps } from "types/multimedia";
import { Section as SectionProps } from "types/section";
import { Section } from "./components/Section";
import { createContext, useState } from "react";

const ProjectWrapper = styled.div``;

export const IframeContext = createContext({
	iframeId: "",
	setIframeId: (_id: string) => undefined,
});

export function Project() {
	const { id } = useParams();
	const projectInfo = projectDict[id];
	const [activeIframe, setActiveIframe] = useState("");

	if (!projectInfo) {
		return <Navigate to="/" replace />;
	}

	const getComponentByType = (
		content: TitleProps | TextProps | MultiMediaProps | SectionProps,
		index,
	) => {
		if (content.type === ContentType.section) {
			return (
				<Section key={`${index}-${content.type}`} {...content}>
					{content.content.map((item, i) => getComponentByType(item, i))}
				</Section>
			);
		} else if (content.type === ContentType.title) {
			return <Title key={`${index}-${content.type}`} {...content} />;
		} else if (content.type === ContentType.text) {
			return <Text key={`${index}-${content.type}`} {...content} />;
		} else if (content.type === ContentType.multimedia) {
			return <Multimedia key={`${index}-${content.type}`} {...content} />;
		}
		return null;
	};

	return (
		<ProjectWrapper>
			<IframeContext.Provider
				value={{ iframeId: activeIframe, setIframeId: (activeId) => setActiveIframe(activeId) }}
			>
				{projectInfo.pageContent.map((content, index) => getComponentByType(content, index))}
			</IframeContext.Provider>
		</ProjectWrapper>
	);
}

export default Project;
