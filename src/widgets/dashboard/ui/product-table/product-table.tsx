import type { FC } from 'react';

import type { Product, ProductsResponse, SortOrder } from '@entities/product';
import { SvgPlus } from '@shared/icons/components/plus';
import { SvgDotsHorizontal } from '@shared/icons/components/dots-horizontal';

import { getClasses } from './styles/get-classes';
import { DashboardCheckbox } from '../dashboard-checkbox';

type ProductTableProps = {
  productsData: ProductsResponse;
  sortBy?: string;
  sortOrder?: SortOrder;
  selectedIds: Set<number>;
  ratingLowThreshold: number;
  onToggleSelect: (product: Product) => void;
  onToggleSelectAll: () => void;
  onSort: (field: string) => void;
  formatPrice: (value: number) => string;
};

const getSortValue = (field: string, sortBy?: string, sortOrder?: SortOrder) => {
  if (sortBy === field && sortOrder === 'asc') return ' ▲';
  if (sortBy === field && sortOrder === 'desc') return ' ▼';
  return '';
};

export const ProductTable: FC<ProductTableProps> = ({
  productsData,
  sortBy,
  sortOrder,
  selectedIds,
  ratingLowThreshold,
  onToggleSelect,
  onToggleSelectAll,
  onSort,
  formatPrice,
}) => {
  const {
    cnRoot,
    cnThead,
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
  } = getClasses();

  return (
    <table className={cnRoot}>
      <thead className={cnThead}>
        <tr className={cnTr}>
          <th className={cnThCheckbox}>
            <DashboardCheckbox
              checked={selectedIds.size > 0 && productsData.products.every(p => selectedIds.has(p.id))}
              ariaLabel="Выбрать все"
              onClick={onToggleSelectAll}
            />
          </th>
          <th className={cnThName} onClick={() => onSort('title')}>
            Наименование{getSortValue('title', sortBy, sortOrder)}
          </th>
          <th className={cnThVendor} onClick={() => onSort('brand')}>
            Вендор{getSortValue('brand', sortBy, sortOrder)}
          </th>
          <th className={cnThSku} onClick={() => onSort('id')}>
            Артикул{getSortValue('id', sortBy, sortOrder)}
          </th>
          <th className={cnThRating} onClick={() => onSort('rating')}>
            Оценка{getSortValue('rating', sortBy, sortOrder)}
          </th>
          <th className={cnThPrice} onClick={() => onSort('price')}>
            Цена, Р{getSortValue('price', sortBy, sortOrder)}
          </th>
          <th className={cnThActions} />
        </tr>
      </thead>
      <tbody className={cnTbody}>
        {productsData.products.map(product => {
          const isSelected = selectedIds.has(product.id);
          const isRatingLow = product.rating < ratingLowThreshold;
          return (
            <tr key={product.id} className={isSelected ? cnTrSelected : cnTr} onClick={() => onToggleSelect(product)}>
              <td className={cnTdCheckbox} onClick={e => e.stopPropagation()}>
                <DashboardCheckbox
                  checked={isSelected}
                  ariaLabel={`Выбрать ${product.title}`}
                  onClick={() => onToggleSelect(product)}
                />
              </td>
              <td className={cnTdName}>
                <div className={cnProductImage} />
                <span className={cnProductInfo}>
                  <span className={cnProductName}>{product.title}</span>
                  <span className={cnProductCategory}>{product.category}</span>
                </span>
              </td>
              <td className={cnTdVendor}>{product.brand}</td>
              <td className={cnTdSku}>{product.id}</td>
              <td className={isRatingLow ? cnTdRatingLow : cnTdRating}>{product.rating.toFixed(1)}/5</td>
              <td className={cnTdPrice}>{formatPrice(product.price)}</td>
              <td className={cnTdActions} onClick={e => e.stopPropagation()}>
                <div className={cnTdActionsContainer}>
                  <button className={cnBtnActionPrimary}>
                    <SvgPlus color="currentColor" width={20} height={20} />
                  </button>
                  <button className={cnBtnActionSecondary}>
                    <SvgDotsHorizontal />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
