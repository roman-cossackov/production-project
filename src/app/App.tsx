import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "../shared/lib/classNames/classNames";

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
			<button onClick={ToggleTheme}>Toggle</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
		</div>
	);
};

export default App;
