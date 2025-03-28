import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function useScrollToAnchor() {
	const location = useLocation();
	const lastHash = useRef("");

	useEffect(() => {
		const handlePopState = (event) => {
			if (event.currentTarget.location.hash.includes("#")) {
				lastHash.current = "";
				window.location.hash = "";
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	useEffect(() => {
		if (location.hash) {
			lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
		}

		if (lastHash.current && document.getElementById(lastHash.current)) {
			setTimeout(() => {
				document
					.getElementById(lastHash.current)
					?.scrollIntoView({ behavior: "smooth", block: "start" });
				lastHash.current = "";
			}, 100);
		}
	}, [location]);

	return null;
}

export default useScrollToAnchor;
