import { useProducts, useSearchProducts } from '@entities/product';
import { performanceUtils } from '@shared/services';
import { useEffect, useState } from 'react';

const LIMIT = 10;
export const useGetProducts = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const skip = (page - 1) * LIMIT;

  const { data, isLoading, isFetching, refetch } = useSearchProducts({ q: query, limit: LIMIT, skip });
  const { data: dataInit } = useProducts({ limit: LIMIT, skip });

  const totalItems = query ? data?.total : dataInit?.total;
  const totalPages = totalItems ? Math.ceil(totalItems / LIMIT) : 0;
  const hasNextPage = page < totalPages;

  const activeData = query ? data : dataInit;

  const handleSearch = performanceUtils.debounce((value: string) => {
    setQuery(value);
  }, 200);

  const goToPage = (newPage: number) => {
    setPage(newPage);
  };

  // useEffect(() => {
  //   refetch();
  // }, []);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return {
    productsData: activeData,
    handleSearch,
    isLoading,
    isFetching,
    page,
    totalPages,
    hasNextPage,
    goToPage,
  };
};
