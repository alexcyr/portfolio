import AppRouter from "AppRouter";

import { GlobalStyle } from "styles";
import ThemeProvider from "theme/ThemeProvider";

const App = () => (
	<ThemeProvider>
		<GlobalStyle />
		<AppRouter />
	</ThemeProvider>
);

export default App;
