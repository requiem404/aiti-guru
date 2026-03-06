import classNames from 'classnames/bind';

import classes from './auth-page.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('auth-page');

  return {
    cnRoot,
  };
};
