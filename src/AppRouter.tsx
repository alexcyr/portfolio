import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Home from "pages/Home/Home";
import Project from "pages/Project/Project";
import NavBar from "components/NavBar/NavBar";

export const AppRouter = () => (
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="project/:id" element={<Project />} />
		</Routes>
		<ScrollToTop />
	</BrowserRouter>
);

export default AppRouter;
