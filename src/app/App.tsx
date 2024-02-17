import "./styles/index.scss";
import { useContext, Suspense } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

const App = () => {
	const { theme } = useTheme();

	return (
		<div
			className={classNames("app", { hovered: true, selected: false }, [
				theme,
			])}
		>
			<Suspense fallback={""}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
