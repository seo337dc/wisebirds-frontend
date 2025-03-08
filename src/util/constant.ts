import { CampaignObj } from "@/model/campaign";

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

export const campaignObjectiveLabels: Record<CampaignObj, string> = {
  WEBSITE_CONVERSIONS: "웹사이트 전환",
  WEBSITE_TRAFFIC: "웹사이트 트래픽",
  SALES: "판매",
  APP_INSTALLATION: "앱설치",
  LEAD: "리드",
  BRAND: "브랜드 인지도 및 도달 범위",
  VIDEO_VIEWS: "동영상 조회",
};

export const REG_PWD =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

export const REG_NAME = /^[가-힣a-zA-Z]{1,16}$/;
