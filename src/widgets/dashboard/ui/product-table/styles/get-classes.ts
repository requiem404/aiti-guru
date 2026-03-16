import classNames from 'classnames/bind';

import classes from './product-table.module.scss';

const cn = classNames.bind(classes);
export const getClasses = () => {
  const cnRoot = cn('product-table');

  const cnThead = cn('product-table__thead');

  const cnTh = cn('product-table__th');

  const cnThCheckbox = cn('product-table__th', 'product-table__th-checkbox');

  const cnThName = cn('product-table__th', 'product-table__th-name');

  const cnThVendor = cn('product-table__th', 'product-table__th-vendor');

  const cnThSku = cn('product-table__th', 'product-table__th-sku');

  const cnThRating = cn('product-table__th', 'product-table__th-rating');

  const cnThPrice = cn('product-table__th', 'product-table__th-price');

  const cnThActions = cn('product-table__th', 'product-table__th-actions');

  const cnTbody = cn('product-table__tbody');

  const cnTr = cn('product-table__tr');

  const cnTrSelected = cn('product-table__tr', 'product-table__tr--selected');

  const cnTdCheckbox = cn('product-table__td', 'product-table__td-checkbox');

  const cnTdName = cn('product-table__td', 'product-table__td-name');

  const cnTdVendor = cn('product-table__td', 'product-table__td-vendor');

  const cnTdSku = cn('product-table__td', 'product-table__td-sku');

  const cnTdRating = cn('product-table__td', 'product-table__td-rating');

  const cnTdRatingLow = cn('product-table__td', 'product-table__td-rating', 'product-table__td-rating--low');

  const cnTdPrice = cn('product-table__td', 'product-table__td-price');

  const cnTdActions = cn('product-table__td', 'product-table__td-actions');

  const cnTdActionsContainer = cn('product-table__td-actions-container');

  const cnProductImage = cn('product-table__product-image');

  const cnProductInfo = cn('product-table__product-info');

  const cnProductName = cn('product-table__product-name');

  const cnProductCategory = cn('product-table__product-category');

  const cnBtnActionPrimary = cn('product-table__btn-action', 'product-table__btn-action--primary');

  const cnBtnActionSecondary = cn('product-table__btn-action', 'product-table__btn-action--secondary');

  return {
    cnRoot,
    cnThead,
    cnTh,
    cnThCheckbox,
    cnThName,
    cnThVendor,
    cnThSku,
    cnThRating,
    cnThPrice,
    cnThActions,
    cnTdActionsContainer,
    cnTbody,
    cnTr,
    cnTrSelected,
    cnTdCheckbox,
    cnTdName,
    cnTdVendor,
    cnTdSku,
    cnTdRating,
    cnTdRatingLow,
    cnTdPrice,
    cnTdActions,
    cnProductImage,
    cnProductInfo,
    cnProductName,
    cnProductCategory,
    cnBtnActionPrimary,
    cnBtnActionSecondary,
  };
};
