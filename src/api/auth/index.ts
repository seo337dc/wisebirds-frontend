import {
  ModelSignInReq,
  ModelSignInRes,
  ModelSignUpRes,
  ModelSignUpReq,
} from "@/model/auth";
import { apiClient } from "..";

export class AuthApi {
  // 로그인 API
  public static async siginIn(
    params: ModelSignInReq,
    signal?: AbortSignal
  ): Promise<ModelSignInRes> {
    return await apiClient.post<ModelSignInRes>("/users/login", {
      ...params,
      signal,
    });
  }

  // 회원가입 API
  public static async signUp(
    params: ModelSignUpReq,
    signal?: AbortSignal
  ): Promise<ModelSignUpRes> {
    const formData = new URLSearchParams();
    formData.append("user[email]", params.email);
    formData.append("user[password]", params.password);

    return await apiClient.post<ModelSignUpRes>("/users.json", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      signal,
    });
  }
}
