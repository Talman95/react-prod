import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeReturnType {
    theme: Theme;
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnType => {
    const {theme, setTheme} = useContext(ThemeContext)

    if (!theme) {
        throw new Error('Can not use useTheme outside of the ThemeProvider')
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
