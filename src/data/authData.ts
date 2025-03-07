import type { Auth } from "@/model/auth";

export const mockAuth: Auth = {
  id: 1,
  email: "abc@abc.com",
  name: "홍길동",
  company: {
    id: 1,
    name: "와이즈버즈",
  },
};
