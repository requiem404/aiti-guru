import type { ProductsResponse } from '@entities/product';
import { type FC } from 'react';
import { Button } from '@shared/ui/button';
import { Pagination } from '@shared/ui/pagination';
import { getClasses } from './styles/get-classes';

export type DashboardProps = {
  pageCount: number;
  pageNumber: number;
  isFetching: boolean;
  productsData?: ProductsResponse;
  setPage: (page: number) => void;
};

export const Dashboard: FC<DashboardProps> = ({ productsData, pageCount, pageNumber, setPage, isFetching }) => {
  const { cnRoot, cnTitle, cnHeader } = getClasses();

  if (isFetching) {
    return (
      <div className={cnRoot}>
        <h2>Fetching...</h2>
      </div>
    );
  }

  if (!productsData) {
    return (
      <div className={cnRoot}>
        <h2>No data</h2>
      </div>
    );
  }

  return (
    <div className={cnRoot}>
      <header className={cnHeader}>
        <h3 className={cnTitle}>Все позиции</h3>
        <div>
          <Button size="small">Добавить</Button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>brand</th>
            <th>id</th>
            <th>rating</th>
            <th>price</th>
          </tr>
        </thead>

        <tbody>
          {productsData?.products.map(product => (
            <tr>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.id}</td>
              <td>{product.rating}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>
          Показано{' '}
          <span>
            {productsData.skip + 1}-{productsData.skip + productsData.limit}{' '}
          </span>{' '}
          из <span>{productsData.total}</span>
        </p>

        <Pagination pageNumber={pageNumber} setPage={setPage} showRange={2} pageCount={pageCount} />
      </div>
    </div>
  );
};
