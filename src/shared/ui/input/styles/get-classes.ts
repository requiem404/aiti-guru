import classNames from 'classnames/bind';

import classes from './input.module.scss';
import type { InputProps } from '../input';

const cn = classNames.bind(classes);
type PickedInputProps = Pick<InputProps, 'className'> & { isError: boolean };
export const getClasses = ({ className, isError }: PickedInputProps) => {
  const cnRoot = cn('input', { 'input--error': isError }, className);

  const cnLabel = cn('input__label');

  const cnField = cn('input__field');

  const cnWrapper = cn('input__wrapper');

  const cnIconLeft = cn('input__icon-left');

  const cnIconRight = cn('input__icon-right');

  const cnErrorMessage = cn('input__error-message');

  return {
    cnRoot,
    cnLabel,
    cnField,
    cnWrapper,
    cnIconLeft,
    cnIconRight,
    cnErrorMessage,
  };
};
