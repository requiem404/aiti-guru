import classNames from 'classnames/bind';

import classes from './dashboard.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('dashboard');

  const cnTitle = cn('dashboard__title');

  const cnHeader = cn('dashboard__header');

  return {
    cnRoot,
    cnTitle,
    cnHeader,
  };
};
