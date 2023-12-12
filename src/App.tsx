import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { Theme } from "./theme/ThemeContext";
import { classNames } from "./helpers/classNames/classNames";

type Props = {};

const App = (props: Props) => {
	const {theme, setTheme} = useContext(ThemeContext)

	const ToggleTheme = () => {
		setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	};

	return (
		<div className={classNames('app', {hovered: true, selected: false}, [theme])}>
			<button onClick={ToggleTheme}>Toggle</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
