import type { User } from "@/model/user";

export const mockUsers: User[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  email: `user${index + 1}@example.com`,
  name: `User ${index + 1}`,
  last_login_at: new Date(
    Date.now() - Math.random() * 10000000000
  ).toISOString(),
}));
