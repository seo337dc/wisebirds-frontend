import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UserApi from "@/api/user";
import type { User } from "@/model/user";

export const useUsers = (page: number, size: number) => {
  return useQuery({
    queryKey: ["/users", page, size],
    queryFn: () => UserApi.getUsers(page, size),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["/users/update"],
    mutationFn: ({
      id,
      updateUser,
    }: {
      id: number;
      updateUser: Partial<User>;
    }) => UserApi.updateUser(id, updateUser),

    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries({ queryKey: ["/users"] });
      return updatedUser;
    },
  });
};
