import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Home from "pages/Home/Home";
import NavBar from "components/NavBar/NavBar";
import { Project } from "pages/Project/Project";
import { Footer } from "components/Footer/Footer";
import About from "pages/About/About";

export const AppRouter = () => (
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="project/:id" element={<Project />} />
			<Route path="about" element={<About />} />
		</Routes>
		<ScrollToTop />
		<Footer />
	</BrowserRouter>
);

export default AppRouter;
