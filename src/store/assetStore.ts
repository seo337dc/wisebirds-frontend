import { create } from "zustand";
import type { TAssestCreateDiary } from "@/model/asset";

interface AssetsState {
  assets: TAssestCreateDiary[];
  setAssets: (assets: TAssestCreateDiary[]) => void;
  updateAssets: (id: number, updatedAsset: Partial<TAssestCreateDiary>) => void;
  clearAssets: () => void;
}

export const useAssetStore = create<AssetsState>((set) => ({
  assets: [],

  setAssets: (newAssets) =>
    set(() => ({
      assets: newAssets,
    })),

  updateAssets: (id, updatedAsset) =>
    set((state) => ({
      assets: state.assets.map((asset) =>
        asset.id === id
          ? {
              ...asset,
              ...Object.fromEntries(
                Object.entries(updatedAsset).map(([key, value]) => [
                  key,
                  typeof value === "number" && !isNaN(value)
                    ? value
                    : asset[key as keyof TAssestCreateDiary],
                ])
              ),
            }
          : asset
      ),
    })),

  clearAssets: () => set({ assets: [] }),
}));
