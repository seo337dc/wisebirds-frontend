import { apiClient } from "..";

export class InvestmentApi {
  public static async list(params: any, signal?: AbortSignal): Promise<any> {
    return await apiClient.post<any>("/users/login", {
      ...params,
      signal,
    });
  }
}
