import React from 'react';
import {Button, VariantButton} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggle}
            className={classNames(cls.langSwitcher, {}, [className])}
            variant={VariantButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};
