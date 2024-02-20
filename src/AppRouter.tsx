import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Home from "pages/Home/Home";
import NavBar from "components/NavBar/NavBar";
import { Project } from "pages/Project/Project";
import { Footer } from "components/Footer/Footer";

export const AppRouter = () => (
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="project/:id" element={<Project />} />
		</Routes>
		<ScrollToTop />
		<Footer />
	</BrowserRouter>
);

export default AppRouter;
