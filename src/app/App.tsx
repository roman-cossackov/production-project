import "./styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";


type Props = {};

const App = (props: Props) => {
	const { theme } = useTheme();

	return (
		<div
			className={classNames("app", { hovered: true, selected: false }, [
				theme,
			])}
		>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
