import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        variant = AppLinkVariant.PRIMARY,
        className,
        ...restProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [cls[variant], className])}
            {...restProps}
        >
            {children}
        </Link>
    );
};
