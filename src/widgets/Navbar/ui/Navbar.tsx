import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink variant={AppLinkVariant.SECONDARY} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink variant={AppLinkVariant.SECONDARY} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </nav>
  );
};
