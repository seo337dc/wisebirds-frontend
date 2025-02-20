export type ModelAssetByDiary = {
  id: number; // 2;
  diary_id: number; // 2;
  asset_id: number; // 1;
  amount: string; // "10.0";
  buy_price: string; // "100.0";
  created_at: string; // "2020-11-24T20:33:40.541Z";
  updated_at: string; // "2020-11-24T20:33:40.541Z";
};

// response Assest list Model
export type ModelAssetRes = {
  id: number; // 1;
  ticker: string; // "AAPL";
  name: string; // "Apple";
  price: string; // "150";
  created_at: string; // "2020-11-24T20:20:47.706Z";
  updated_at: string; // "2020-11-24T20:20:47.706Z";
  url: string; // "https://the-rich-coding-test1.herokuapp.com/assets/1.json";
};

// request create diary assest model
export type ModelAssetsReq = {
  diary_id: number;
  asset_id: number;
  amount: number;
  buy_price: string;
};

export type TAssestCreateDiary = Pick<ModelAssetRes, "ticker" | "name" | "id"> &
  Pick<ModelAssetsReq, "amount" | "buy_price" | "asset_id">;
