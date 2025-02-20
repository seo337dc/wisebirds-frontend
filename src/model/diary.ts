// 일지 목록
export type ModelDiary = {
  id: number; // 1;
  title: string; // "111";
  contents: string; //  "11";
  date: string; //  "2020-11-08T04:04:12.000Z";
  created_at: string; //  "2020-11-24T19:04:14.706Z";
  updated_at: string; //  "2020-11-24T19:04:14.706Z";
  url: string; // "http://localhost:3000/diaries/1.json";
};

// 일지 추가
export type TCreateDiary = {
  title: string;
  contents: string;
  date: Date | null;
};
