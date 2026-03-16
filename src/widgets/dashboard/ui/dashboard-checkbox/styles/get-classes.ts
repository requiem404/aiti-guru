import classNames from 'classnames/bind';

import classes from './dashboard-checkbox.module.scss';
import type { CheckboxProps } from '@shared/ui/checkbox';

const cn = classNames.bind(classes);

type PickedCheckboxProps = Pick<CheckboxProps, 'checked'>
export const getClasses = ({ checked }: PickedCheckboxProps) => {
  const cnRoot = cn('dashboard-checkbox', {
    'dashboard-checkbox--checked': checked
  });


  return {
    cnRoot,
  };
};
