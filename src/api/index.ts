import { mockUsers } from "@/data/userData";
import type { PaginatedResponse } from "@/model/common";
import type { User } from "@/model/user";

export const apiClient = {
  getUsers: async (page: number = 0, size: number = 10) => {
    const start = page * size;
    const end = start + size;
    const paginatedUsers = mockUsers.slice(start, end);

    return new Promise<PaginatedResponse<User>>((resolve) => {
      setTimeout(() => {
        resolve({
          content: paginatedUsers,
          total_elements: mockUsers.length,
          total_pages: Math.ceil(mockUsers.length / size),
          last: end >= mockUsers.length,
          number: page,
          size,
          sort: {}, // 정렬
          number_of_elements: paginatedUsers.length,
          first: page === 0,
          empty: paginatedUsers.length === 0,
        });
      }, 500);
    });
  },
};
