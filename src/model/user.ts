export interface User {
  id: number;
  email: string;
  name: string;
  last_login_at: string;
}

export interface UserCreate {
  email: string;
  name: string;
  password: string;
  repeat_password: string;
}
