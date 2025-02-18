import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ModelSignInRes } from "@/model/auth";

interface AuthState {
  authInfo: ModelSignInRes | null;
  setAuthInfo: (info: ModelSignInRes) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authInfo: null,
      setAuthInfo: (info) => set({ authInfo: info }),
      clearToken: () => set({ authInfo: null }),
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
