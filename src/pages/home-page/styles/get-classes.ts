import classNames from 'classnames/bind';

import classes from './home-page.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('home-page');

  const cnTitle = cn('home-page__title');

  const cnHeader = cn('home-page__header');

  return {
    cnRoot,
    cnTitle,
    cnHeader,
  };
};
