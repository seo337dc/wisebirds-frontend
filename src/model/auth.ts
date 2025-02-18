// reqeust 로그인
export type ModelSignInReq = {
  email: string;
  password: string;
};

// response 로그인
export type ModelSignInRes = {
  token: string; // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6InRlc3QxQGV4YW1wbGUuY29tIn0.SBsK7V2Dx8R4sPsHU7zt7tGa2e4fDuz0ZpecqK8j7Xo";
  user_id: number; // 2;
};
