import { useContext, useState } from "react";
import {
	ThemeContext,
	type Theme,
} from "./ThemeContext";

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme() {
	const { theme, setTheme } = useContext(ThemeContext);
}
