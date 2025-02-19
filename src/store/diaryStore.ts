import { ModelDiary } from "@/model/diary";
import { create } from "zustand";

interface DiaryState {
  diary: ModelDiary | null;
  setDiary: (diary: ModelDiary) => void;
  clearDiary: () => void;
}

export const useDiaryStore = create<DiaryState>((set) => ({
  diary: null,
  setDiary: (diary) => set({ diary }),
  clearDiary: () => set({ diary: null }),
}));
