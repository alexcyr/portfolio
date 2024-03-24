import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Home from "pages/Home/Home";
import NavBar from "components/NavBar/NavBar";
import { Project } from "pages/Project/Project";
import { Footer } from "components/Footer/Footer";
import About from "pages/About/About";
import styled from "styled-components";

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.div`
	flex: 1;
`;
export const AppRouter = () => (
	<BrowserRouter>
		<PageWrapper>
			<NavBar />
			<MainContent>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="project/:id" element={<Project />} />
					<Route path="about" element={<About />} />
				</Routes>
			</MainContent>
			<ScrollToTop />
			<Footer />
		</PageWrapper>
	</BrowserRouter>
);

export default AppRouter;
