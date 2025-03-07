import { create } from "zustand";

type ErrorState = {
  isError: boolean;
  setIsError: (error: boolean) => void;
  clear: () => void;
};

export const useErrorStore = create<ErrorState>((set) => ({
  isError: false,
  setIsError: (isError) => set({ isError }),
  clear: () => set({ isError: false }),
}));
