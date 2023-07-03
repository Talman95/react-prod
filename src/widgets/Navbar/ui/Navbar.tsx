import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkVariant} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string
}

export const Navbar = ({className}: NavBarProps) => {
    return (
        <nav className={classNames(cls.navBar, {}, [className])}>
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
