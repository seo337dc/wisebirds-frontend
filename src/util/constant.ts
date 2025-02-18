export const Colors = {
  Black: "#000000",
  White: "#ffffff",

  PalletPrimary: "#4880EE",
  PalletLightGray: "#F2F4F6",

  TextPrimary: "#353C49",
  TextSubTitle: "#8D94A0",
  TextSecondary: "#6D7582",

  LinkLine: "#4880ee",

  Red: "#E84118",

  Neutral3: "#BEBEBE",
  Neutral5: "#505050",
  NeutralE: "#E0E0E0",
};

export enum ScreenBoundary {
  Phone2PC = "375px",
}

export const REG_ENG = /[a-zA-Z]/; // 영문
export const REG_PWD_NUM = /^[a-zA-Z0-9]*$/; // 영어 + 숫자만 허용
export const REG_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규식
export const REG_BAN_KR = /[\uac00-\ud7af\u3131-\u318e]/; // 한글 금지
