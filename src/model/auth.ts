export interface Auth {
  id: number; // 1,
  email: string; // "abc@abc.com";
  name: string; // "홍길동";
  company: Company;
}

export interface Company {
  id: number; // 1;
  name: string; //"와이즈버즈";
}
