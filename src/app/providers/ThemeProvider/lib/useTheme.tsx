import { useContext } from 'react'
import {
    ThemeContext,
    Theme
} from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = (): void => {
        if (setTheme !== undefined) {
            setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }
    }
    return { theme, toggleTheme }
}
