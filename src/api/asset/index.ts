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
  // 투자일지에 속해 있는 자산목록 확인 API
  public static async listByDiary(
    diaryId: number
  ): Promise<ModelAssetByDiary[]> {
    return await apiClient.get<ModelAssetByDiary[]>(
      `/diaries/${diaryId}/assets.json`
    );
  }

  // 자산종목 정보 조회 API
  public static async list(): Promise<ModelAssetRes[]> {
    return await apiClient.get<ModelAssetRes[]>(`/assets.json`);
  }

  // 투자일지 목록에 자산 추가 API
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

  // 투자 일지 자산 삭제 API
  public static async deleteAssetByDiary(assetId: number): Promise<void> {
    return await apiClient.delete<void>(`/diary_assets/${assetId}.json`);
  }
}
