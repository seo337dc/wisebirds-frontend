import AuthApi from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

// 캐시 방식으로 확인 필요
export const useAuth = () => {
  return useQuery({
    queryKey: ["/auth/me"],
    queryFn: AuthApi.getMe,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
