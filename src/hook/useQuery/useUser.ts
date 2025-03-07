import { useQuery } from "@tanstack/react-query";
import UserApi from "@/api/user";

export const useUsers = (page: number, size: number) => {
  return useQuery({
    queryKey: ["/users", page, size],
    queryFn: () => UserApi.getUsers(page, size),
  });
};
