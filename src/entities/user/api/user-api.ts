import { api } from '@shared/api';
import type { AuthResponse, LoginCredentials } from '../model/types';
import { API_URL } from '@shared/constants';

export const userApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post(API_URL.LOGIN, { ...credentials, expiresInMins: 30 });
    return response.data;
  },
};
