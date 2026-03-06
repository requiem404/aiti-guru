import classNames from 'classnames/bind';

import classes from './text-button.module.scss';
import type { TextButtonProps } from '../text-button';

const cn = classNames.bind(classes);
type PickedTextButtonProps = Pick<TextButtonProps, 'className'>;
export const getClasses = ({ className }: PickedTextButtonProps) => {
  const cnRoot = cn('text-button', className);

  const cnText = cn('text-button__text');

  return {
    cnRoot,
    cnText,
  };
};
