import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import {Button, VariantButton} from "shared/ui/Button/Button";

interface ThemeSwitcher {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcher) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
            variant={VariantButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
};
