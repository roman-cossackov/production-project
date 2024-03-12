import { useContext } from 'react';
import {
    ThemeContext,
    Theme,
    LOCAL_STORAGE_THEME_KEY
} from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        if (setTheme !== undefined) {
            setTheme(newTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
