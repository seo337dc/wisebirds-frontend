import { ModelDiary } from "@/model/diary";
import { apiClient } from "..";

export class DiaryApi {
  public static async list(signal?: AbortSignal): Promise<ModelDiary[]> {
    return await apiClient.get<ModelDiary[]>("/diaries.json", {
      signal,
    });
  }
}
