import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  text?: string;
  onLoading: (text?: string) => void;
  onCloseLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  text: "",
  onLoading: (text) =>
    set(() => ({
      isLoading: true,
      text: text ?? "", // text가 없으면 기본값 빈 문자열
    })),
  onCloseLoading: () =>
    set(() => ({
      isLoading: false,
      text: "",
    })),
}));
