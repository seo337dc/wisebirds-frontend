import { create } from "zustand";
import type { TAssestInfo } from "@/model/asset";

interface AssetsState {
  assets: TAssestInfo[];
  setAssets: (assets: TAssestInfo[]) => void;
  updateAssets: (id: number, updatedAsset: Partial<TAssestInfo>) => void;
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
                    : asset[key as keyof TAssestInfo],
                ])
              ),
            }
          : asset
      ),
    })),

  clearAssets: () => set({ assets: [] }),
}));
