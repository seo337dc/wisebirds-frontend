import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockUsers } from "@/data/userData";
import type { User } from "@/model/user";

interface UserStore {
  users: User[];
  addUser: (newUser: User) => void;
  updateUser: (id: number, updatedUser: Partial<User>) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: mockUsers,

      addUser: (newUser) =>
        set((state) => ({ users: [...state.users, newUser] })),

      updateUser: (id, updatedUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        })),
    }),
    {
      name: "user-storage",
    }
  )
);
