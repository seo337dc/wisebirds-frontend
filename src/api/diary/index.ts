import { ModelDiary, TCreateDiary } from "@/model/diary";
import { apiClient } from "..";

export class DiaryApi {
  public static async list(signal?: AbortSignal): Promise<ModelDiary[]> {
    return await apiClient.get<ModelDiary[]>("/diaries.json", {
      signal,
    });
  }

  public static async create(
    params: TCreateDiary,
    signal?: AbortSignal
  ): Promise<ModelDiary> {
    const formData = new URLSearchParams();
    formData.append("diary[title]", params.title);
    formData.append("diary[contents]", params.contents);
    formData.append("diary[date]", params.date?.toISOString() || "");

    return await apiClient.post<ModelDiary>("/diaries.json", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      signal,
    });
  }
}
