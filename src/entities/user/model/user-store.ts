import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Token } from './types';

interface UserState {
  token: Token;
  shouldStoreUser: boolean;

  setUserData: (token: Token, shouldStoreUser: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      token: null,
      shouldStoreUser: false,
      setUserData: (token: Token, shouldStoreUser: boolean) => {
        set({ token, shouldStoreUser });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => {
        if (state.shouldStoreUser) {
          return {
            token: state.token,
            shouldStoreUser: state.shouldStoreUser,
          };
        }
        return {};
      },
    }
  )
);
