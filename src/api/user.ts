import { mockUsers } from "@/data/userData";
import type { PaginatedResponse } from "@/model/common";
import type { User, UserCreate } from "@/model/user";

const UserApi = {
  /**
   * 사용자 리스트 조회
   * - [GET] : /api/users
   */
  getUsers: async (page: number = 0, size: number = 10) => {
    const start = page * size;
    const end = start + size;
    const reversedUsers = [...mockUsers].reverse();
    const paginatedUsers = reversedUsers.slice(start, end);

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

  /**
   * 사용자 생성
   * - [POST] : /api/users
   */
  createUser: async (userData: UserCreate) => {
    return new Promise<{ result: boolean; id: number }>((resolve, reject) => {
      setTimeout(() => {
        const { name, email } = userData;

        // 새로운 사용자 생성
        const newUser: User = {
          id: mockUsers.length + 1,
          name,
          email,
          last_login_at: new Date().toISOString(),
        };

        mockUsers.push(newUser);

        resolve({ result: true, id: newUser.id });
      }, 500);
    });
  },

  /**
   * 사용자 수정
   * - [PATCH] : /api/users/${id}
   *
   */
  updateUser: async (id: number, updateUser: Partial<User>) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const userIndex = mockUsers.findIndex((user) => user.id === id);

        if (userIndex === -1) {
          reject(new Error("사용자를 찾을 수 없습니다."));
          return;
        }

        mockUsers[userIndex] = { ...mockUsers[userIndex], ...updateUser };

        resolve(mockUsers[userIndex]);
      }, 500);
    });
  },

  /**
   * 사용자 이메일 중복 체크
   * - [GET] api/users/${email}/exists
   */
  checkEmailExists: async (email: string) => {
    return new Promise<{ result: boolean }>((resolve) => {
      setTimeout(() => {
        const exists = mockUsers.some((user) => user.email === email);
        resolve({ result: exists });
      }, 500);
    });
  },
};

export default UserApi;
