import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/api";

export const useUsers = (page: number, size: number) => {
  return useQuery({
    queryKey: ["users", page, size],
    queryFn: () => apiClient.getUsers(page, size),
  });
};
