import * as Styled from "./Home.styled";
import pageData from "assets/data/pageData";
import Section from "./components/Section";
import useScrollToAnchor from "hooks/ScrollToAnchor";

export function Home() {
	useScrollToAnchor();

	return (
		<Styled.HomeWrapper>
			<Styled.ContentWrapper>
				{pageData.sections.map((section) => (
					<Section key={section.label} {...section} />
				))}
			</Styled.ContentWrapper>
		</Styled.HomeWrapper>
	);
}

export default Home;
