import "./styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

type Props = {};

const App = (props: Props) => {
	const { theme, setTheme } = useContext(ThemeContext);

	const ToggleTheme = () => {
		setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	};

	return (
		<div
			className={classNames("app", { hovered: true, selected: false }, [
				theme,
			])}
		>
			<Navbar />
			<button onClick={ToggleTheme}>Toggle</button>
		</div>
	);
};

export default App;
