import classNames from 'classnames/bind';

import classes from './dashboard.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('dashboard');

  const cnTitle = cn('dashboard__title');

  const cnHeader = cn('dashboard__header');

  const cnRefresh = cn('dashboard__refresh');

  const cnActions = cn('dashboard__actions');

  const cnTableWrap = cn('dashboard__table-wrap');

  const cnFooter = cn('dashboard__footer');

  const cnPaginationInfo = cn('dashboard__pagination-info');

  const cnPaginationWrap = cn('dashboard__pagination-wrap');

  return {
    cnRoot,
    cnTitle,
    cnHeader,
    cnRefresh,
    cnActions,
    cnTableWrap,
    cnFooter,
    cnPaginationInfo,
    cnPaginationWrap,
  };
};
