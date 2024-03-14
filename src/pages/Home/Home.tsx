import * as Styled from "./Home.styled";
import pageData from "assets/data/pageData";
import Section from "./components/Section";
import { IframeContext } from "pages/Project/Project";
import { useState } from "react";

export function Home() {
	const [activeId, setActiveId] = useState("");
	return (
		<IframeContext.Provider value={{ iframeId: activeId, setIframeId: (id) => setActiveId(id) }}>
			<Styled.HomeWrapper>
				<Styled.ContentWrapper>
					{pageData.sections.map((section) => (
						<Section key={section.label} {...section} />
					))}
				</Styled.ContentWrapper>
			</Styled.HomeWrapper>
		</IframeContext.Provider>
	);
}

export default Home;
