import { useUserStore } from "@/store/useUserStore";

import type { User, UserCreate } from "@/model/user";

const UserApi = {
  /**
   * 사용자 리스트 조회
   * - [GET] : /api/users
   */
  getUsers: async (page: number = 0, size: number = 10) => {
    const { users } = useUserStore.getState();
    const reversedUsers = [...users].reverse();

    return {
      content: reversedUsers.slice(page * size, (page + 1) * size),
      total_elements: users.length,
      total_pages: Math.ceil(users.length / size),
      last: (page + 1) * size >= users.length,
      number: page,
      size,
      sort: {},
      number_of_elements: Math.min(size, users.length - page * size),
      first: page === 0,
      empty: reversedUsers.length === 0,
    };
  },

  /**
   * 사용자 생성
   * - [POST] : /api/users
   */
  createUser: async (userData: UserCreate) => {
    return new Promise<{ result: boolean; id: number }>((resolve) => {
      setTimeout(() => {
        const { users, addUser } = useUserStore.getState();
        const newUser: User = {
          id: users.length + 1,
          name: userData.name,
          email: userData.email,
          last_login_at: new Date().toISOString(),
        };

        addUser(newUser);

        resolve({ result: true, id: newUser.id });
      }, 500);
    });
  },

  /**
   * 사용자 수정
   * - [PATCH] : /api/users/${id}
   */
  updateUser: async (id: number, updateUser: Partial<User>) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const { users, updateUser: updateUserStore } = useUserStore.getState();
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
          reject(new Error("사용자를 찾을 수 없습니다."));
          return;
        }

        updateUserStore(id, updateUser);
        resolve({ ...users[userIndex], ...updateUser });
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
        const { users } = useUserStore.getState();
        const exists = users.some((user) => user.email === email);
        resolve({ result: exists });
      }, 500);
    });
  },
};

export default UserApi;
