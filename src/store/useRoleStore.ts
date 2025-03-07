import { create } from "zustand";

interface Role {
  role: string;
  setRole: (role: string) => void;
}

export const useRoleStore = create<Role>((set) => ({
  role: "admin",
  setRole: (role) => set({ role: role }),
}));
