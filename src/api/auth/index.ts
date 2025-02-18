import { ModelSignInReq, ModelSignInRes } from "@/model/auth";
import { apiClient } from "..";

// main 히스토리 내역
// Book API 클래스
export class AuthApi {
  public static async siginIn(
    params: ModelSignInReq,
    signal?: AbortSignal
  ): Promise<ModelSignInRes> {
    return await apiClient.post<ModelSignInRes>("/users/login", {
      ...params,
      signal,
    });
  }
}
