import { api } from '@shared/api';
import type { AuthResponse, LoginCredentials } from '../model/types';

export const userApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', { ...credentials, expiresInMins: 30 });
    return response.data;
  },

  getCurrentUser: async (token: string): Promise<AuthResponse> => {
    const response = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  refreshToken: async (token: string): Promise<{ token: string }> => {
    const response = await api.post('/auth/refresh', {
      refreshToken: token,
    });
    return response.data;
  },
};
