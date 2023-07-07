import React from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError)}>
      <p>{t('Что-то пошло не так')}</p>
      <Button type="button" onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
