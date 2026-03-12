import classNames from 'classnames/bind';

import classes from './pagination.module.scss';
import type { PaginationProps } from '../pagination';

const cn = classNames.bind(classes);

type ClassesArgs = Pick<PaginationProps, 'className'> & {
  isLeftChevronHidden: boolean;
  isRightChevronHidden: boolean;
};

export const getClasses = ({ className, isLeftChevronHidden, isRightChevronHidden }: ClassesArgs) => {
  const cnRoot = cn('pagination', className);

  const cnLeftChevron = cn({ 'pagination__left-chevron': isLeftChevronHidden });

  const cnRightChevron = cn({ 'pagination__right-chevron': isRightChevronHidden });

  return {
    cnRoot,
    cnLeftChevron,
    cnRightChevron,
  };
};
