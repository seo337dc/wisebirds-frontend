import { apiClient } from "..";
import type { ModelInvestment } from "@/model/investment";

export class InvestmentApi {
  public static async list(diaryId: number): Promise<ModelInvestment[]> {
    return await apiClient.get<ModelInvestment[]>(
      `/diaries/${diaryId}/assets.json`
    );
  }
}
