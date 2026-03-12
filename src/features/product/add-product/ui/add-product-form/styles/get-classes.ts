import classNames from 'classnames/bind';

import classes from './add-product-form.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('add-product-form');

  const cnTitle = cn('add-product-form__title');

  const cnControls = cn('add-product-form__controls');

  const cnButtons = cn('add-product-form__buttons');

  return {
    cnRoot,
    cnTitle,
    cnControls,
    cnButtons,
  };
};
