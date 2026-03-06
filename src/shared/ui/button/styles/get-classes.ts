import classNames from 'classnames/bind';

import classes from './button.module.scss';
import type { ButtonProps } from '../button';

const cn = classNames.bind(classes);
type PickedButtonProps = Pick<ButtonProps, 'size' | 'variant' | 'isFullWidth' | 'className'>;
export const getClasses = ({ className, isFullWidth, variant, size }: PickedButtonProps) => {
  const cnRoot = cn(
    'button',
    `button--${variant}`,
    `button--${size}`,
    {
      'button--full-width': isFullWidth,
    },
    className
  );

  return {
    cnRoot,
  };
};
