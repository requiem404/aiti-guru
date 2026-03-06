import classNames from 'classnames/bind';

import classes from './checkbox.module.scss';
import type { CheckboxProps } from '../checkbox';

const cn = classNames.bind(classes);

type PickedCheckboxProps = Pick<CheckboxProps, 'className'>;
export const getClasses = ({ className }: PickedCheckboxProps) => {
  const cnRoot = cn('checkbox', className);

  const cnInput = cn('checkbox__input');

  const cnBox = cn('checkbox__box');

  const cnLabel = cn('checkbox__label');

  return {
    cnRoot,
    cnInput,
    cnBox,
    cnLabel,
  };
};
