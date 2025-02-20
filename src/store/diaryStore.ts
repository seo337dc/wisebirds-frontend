import { create } from "zustand";
import type { ModelDiary, TCreateDiary } from "@/model/diary";

interface DiaryState {
  diary: ModelDiary | null;
  setDiary: (diary: ModelDiary) => void;
  clearDiary: () => void;

  createDiary: TCreateDiary;
  setCreateDiary: (diary: TCreateDiary) => void;
  clearCreateDiary: () => void;
}

const INIT_CREATE_DIRARY: TCreateDiary = {
  title: "",
  contents: "",
  date: null,
};

export const useDiaryStore = create<DiaryState>((set) => ({
  diary: null,
  setDiary: (diary) => set({ diary }),
  clearDiary: () => set({ diary: null }),

  createDiary: INIT_CREATE_DIRARY,
  setCreateDiary: (diary) => set({ createDiary: diary }),
  clearCreateDiary: () => set({ createDiary: INIT_CREATE_DIRARY }),
}));
