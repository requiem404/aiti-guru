import { API_URL, BASE_URL } from '@shared/constants';
import type { Product, ProductsQueryParams, ProductsResponse, SearchProductsParams } from '../model/types';
import { api } from '@shared/api';

const BASE_PRODUCT_URL = `${BASE_URL}${API_URL.PRODUCTS}`;

export const productApi = {
  getProducts: async (params?: ProductsQueryParams): Promise<ProductsResponse> => {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          if (key === 'select' && Array.isArray(value)) {
            searchParams.append(key, value.join(','));
          } else {
            searchParams.append(key, String(value));
          }
        }
      });
    }

    const queryString = searchParams.toString();
    const url = queryString ? `${BASE_PRODUCT_URL}?${queryString}` : BASE_PRODUCT_URL;

    console.log('🚀 ~ url:', url);
    const response = await api.get(url);

    return response.data;
  },

  // Get single product by ID
  getProductById: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_PRODUCT_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    return response.json();
  },

  // Search products
  searchProducts: async (params: SearchProductsParams): Promise<ProductsResponse> => {
    const { q, ...restParams } = params;
    const searchParams = new URLSearchParams({ q, ...restParams } as any);

    // Handle select array if present
    if (restParams.select && Array.isArray(restParams.select)) {
      searchParams.set('select', restParams.select.join(','));
    }

    const queryString = searchParams.toString();
    const response = await fetch(`${BASE_PRODUCT_URL}/search?${queryString}`);

    if (!response.ok) {
      throw new Error('Failed to search products');
    }

    return response.json();
  },
};
