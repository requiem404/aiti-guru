import classNames from 'classnames/bind';

import classes from './sign-in-form.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('sign-in-form');

  const cnContent = cn('sign-in-form__content');

  const cnLogo = cn('sign-in-form__logo');

  const cnTitle = cn('sign-in-form__title');

  const cnDescription = cn('sign-in-form__description');

  const cnInputs = cn('sign-in-form__inputs');

  const cnCheckbox = cn('sign-in-form__checkbox');

  const cnButton = cn('sign-in-form__button');

  const cnOr = cn('sign-in-form__or');

  const cnNoAccount = cn('sign-in-form__no-account');

  return {
    cnRoot,
    cnOr,
    cnLogo,
    cnTitle,
    cnButton,
    cnInputs,
    cnContent,
    cnCheckbox,
    cnNoAccount,
    cnDescription,
  };
};
