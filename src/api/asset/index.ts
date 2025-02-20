import { apiClient } from "..";
import type {
  ModelAssetsReq,
  ModelAssetByDiary,
  ModelAssetRes,
} from "@/model/asset";

interface AddDiaryAssetRes {
  id: number;
  diary_id: number;
  asset_id: number;
  amount: string;
  buy_price: string;
  created_at: string;
  updated_at: string;
  url: string;
}

export class AssetApi {
  // 일지에 등록한 자산목록
  public static async listByDiary(
    diaryId: number
  ): Promise<ModelAssetByDiary[]> {
    return await apiClient.get<ModelAssetByDiary[]>(
      `/diaries/${diaryId}/assets.json`
    );
  }

  // 자산 목록
  public static async list(): Promise<ModelAssetRes[]> {
    return await apiClient.get<ModelAssetRes[]>(`/assets.json`);
  }

  public static async addAssetsByDiary(params: ModelAssetsReq): Promise<any> {
    const formData = new URLSearchParams();
    formData.append("diary_asset[diary_id]", String(params.diary_id));
    formData.append("diary_asset[asset_id]", String(params.asset_id));
    formData.append("diary_asset[amount]", String(params.amount));
    formData.append("diary_asset[buy_price]", String(params.buy_price));

    return await apiClient.post<AddDiaryAssetRes>(
      "/diary_assets.json",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }
}
