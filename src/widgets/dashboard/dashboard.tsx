import type { Product, ProductsResponse, SortOrder } from '@entities/product';
import { type FC, useState, useCallback } from 'react';
import { Button } from '@shared/ui/button';
import { Pagination } from '@shared/ui/pagination';
import { getClasses } from './styles/get-classes';
import { useShowAddProductModal } from '@features/product/add-product';
import { SvgArrowsClockwise } from '@shared/icons/components/arrows-clockwise';
import { SvgPlusCircle } from '@shared/icons/components/plus-circle';
import { ProductTable } from './ui';

export type DashboardProps = {
  pageCount: number;
  pageNumber: number;
  isLoading: boolean;
  productsData?: ProductsResponse;
  sortBy?: string;
  sortOrder?: SortOrder;
  setPage: (page: number) => void;
  handleSort: (field: string) => void;
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

const RATING_LOW_THRESHOLD = 4;

export const Dashboard: FC<DashboardProps> = ({
  sortBy,
  sortOrder,
  productsData,
  pageCount,
  pageNumber,
  isLoading,
  setPage,
  handleSort,
}) => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const { cnRoot, cnTitle, cnHeader, cnRefresh, cnActions, cnTableWrap, cnFooter, cnPaginationInfo, cnPaginationWrap } =
    getClasses();

  const { showAddProductModal } = useShowAddProductModal();

  const toggleSelect = useCallback((product: Product) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(product.id)) next.delete(product.id);
      else next.add(product.id);
      return next;
    });
  }, []);

  const currentIds = productsData?.products.map(p => p.id) ?? [];
  const isAllSelected = currentIds.length > 0 && currentIds.every(id => selectedIds.has(id));
  const toggleSelectAll = useCallback(() => {
    if (!currentIds.length) return;
    if (isAllSelected) setSelectedIds(prev => new Set([...prev].filter(id => !currentIds.includes(id))));
    else setSelectedIds(prev => new Set([...prev, ...currentIds]));
  }, [currentIds, isAllSelected]);

  if (isLoading) {
    return (
      <div className={cnRoot}>
        <h2>Загрузка...</h2>
      </div>
    );
  }

  if (!productsData) {
    return (
      <div className={cnRoot}>
        <h2>Нет данных</h2>
      </div>
    );
  }

  return (
    <div className={cnRoot}>
      <header className={cnHeader}>
        <h3 className={cnTitle}>Все позиции</h3>
        <div className={cnActions}>
          <button className={cnRefresh}>
            <SvgArrowsClockwise />
          </button>
          <Button size="small" leftIcon={<SvgPlusCircle />} onClick={showAddProductModal}>
            Добавить
          </Button>
        </div>
      </header>

      <div className={cnTableWrap}>
        <ProductTable
          productsData={productsData}
          sortBy={sortBy}
          sortOrder={sortOrder}
          selectedIds={selectedIds}
          ratingLowThreshold={RATING_LOW_THRESHOLD}
          onToggleSelect={toggleSelect}
          onToggleSelectAll={toggleSelectAll}
          onSort={handleSort}
          formatPrice={formatPrice}
        />
      </div>

      <footer className={cnFooter}>
        <p className={cnPaginationInfo}>
          Показано {productsData.skip + 1}-{productsData.skip + productsData.products.length} из {productsData.total}
        </p>
        <div className={cnPaginationWrap}>
          <Pagination pageNumber={pageNumber} setPage={setPage} showRange={2} pageCount={pageCount} size="small" />
        </div>
      </footer>
    </div>
  );
};
