import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import {AppLink, AppLinkVariant} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <nav className={classNames(cls.navBar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink variant={AppLinkVariant.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink variant={AppLinkVariant.SECONDARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </nav>
    );
};
