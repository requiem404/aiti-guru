import { useSearchProducts, type SortOrder } from '@entities/product';
import { performanceUtils } from '@shared/services';
import { useEffect, useState } from 'react';

const LIMIT = 20;
export const useGetProducts = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const skip = (page - 1) * LIMIT;
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  const { data, isLoading, isFetching } = useSearchProducts({
    q: query,
    limit: LIMIT,
    skip,
    sortBy,
    order: sortOrder,
  });

  const totalItems = data?.total;
  const totalPages = totalItems ? Math.ceil(totalItems / LIMIT) : 0;

  const handleSearch = performanceUtils.debounce((value: string) => {
    setQuery(value);
  }, 200);

  const goToPage = (newPage: number) => {
    setPage(newPage);
  };

  const handleSort = (field: string) => {
    if (field === sortBy) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    setPage(1);
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  return {
    productsData: data,
    handleSearch,
    isLoading,
    isFetching,
    page,
    totalPages,
    sortBy,
    sortOrder,
    goToPage,
    handleSort,
  };
};
