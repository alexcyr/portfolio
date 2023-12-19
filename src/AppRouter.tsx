import { BrowserRouter, Route, Routes } from "react-router-dom";
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
	</BrowserRouter>
);

export default AppRouter;
