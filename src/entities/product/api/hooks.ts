import { useQuery } from '@tanstack/react-query';
import { productApi } from './product-api';
import type { ProductsQueryParams, SearchProductsParams } from '../model/types';

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (params: ProductsQueryParams) => [...productKeys.lists(), params] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
  categories: () => [...productKeys.all, 'categories'] as const,
};

export const useProducts = (params?: ProductsQueryParams) => {
  return useQuery({
    queryKey: productKeys.list(params || {}),
    queryFn: () => productApi.getProducts(params),
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productApi.getProductById(id),
    enabled: !!id,
  });
};

export const useSearchProducts = (params: SearchProductsParams) => {
  return useQuery({
    queryKey: [...productKeys.lists(), 'search', params],
    queryFn: () => productApi.searchProducts(params),
  });
};
