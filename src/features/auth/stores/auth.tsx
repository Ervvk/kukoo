import { create } from 'zustand';

import { Account } from '../../../types';
import { getAccount } from '../api/login';

interface AuthState {
  account: Account | null;
  isLogged: boolean;
  authWithCode: (code: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  isLogged: false,
  account: null,
  authWithCode: async (code: string) => {
    const accountDetails = await getAccount(code);
    const authDetails = (accountDetails as Account) || null;
    const authResult = authDetails !== null;
    set({ account: authDetails, isLogged: authResult });
    return authResult;
  },
}));

export const useCodeAuth = () => useAuthStore((state) => state.authWithCode);
export const useIsLogged = () => useAuthStore((state) => state.isLogged);
export const useAccount = () => useAuthStore((state) => state.account);
