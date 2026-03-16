import classNames from 'classnames/bind';

import classes from './button-pagination.module.scss';
import type { ButtonPaginationProps } from '../button-pagination';

const cn = classNames.bind(classes);

type ClassesArgs = Pick<ButtonPaginationProps, 'className' | 'isLoading' | 'isActive' | 'size'> & {
  isEllipsis: boolean;
};

export const getClasses = ({ className, isLoading, isActive, size, isEllipsis }: ClassesArgs) => {
  const cnRoot = cn(
    'button-pagination',
    `button-pagination--${size}`,
    {
      'button-pagination--active': isActive,
      'button-pagination--loading': isLoading,
      'button-pagination--ellipsis': isEllipsis,
    },
    className
  );

  const cnText = cn('button-pagination__text');

  const cnIcon = cn('button-pagination__icon');

  const cnBefore = cn('button-pagination__before');

  const cnAfter = cn('button-pagination__after');

  const cnSpinner = cn('button-pagination__spinner');

  return {
    cnRoot,
    cnText,
    cnIcon,
    cnBefore,
    cnAfter,
    cnSpinner,
  };
};
