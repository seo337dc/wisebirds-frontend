import { mockAuth } from "@/data/authData";
import { Auth } from "@/model/auth";

const AuthApi = {
  /**
   * 로그인 된 사용자 정보
   * [GET] : /api/auth/me
   */
  getMe: async () => {
    return new Promise<Auth>((resolve) => {
      setTimeout(() => {
        resolve(mockAuth);
      }, 500);
    });
  },
};

export default AuthApi;
