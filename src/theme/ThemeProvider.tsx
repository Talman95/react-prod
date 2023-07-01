import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    const themeStore = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={themeStore}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
