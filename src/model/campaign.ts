export interface Campaign {
  id: number; // 1;
  name: string; // "캠페인1";
  enabled: boolean; // true;
  campaign_objective: CampaignObj; // "WEBSITE_TRAFFIC";
  impressions: number; // 384057;
  clicks: number; // 1974;
  ctr: number; // 0.8752;
  video_views: number; // 948;
  vtr: number; // 0.95123;
}

export type CampaignObj =
  | "WEBSITE_CONVERSIONS"
  | "WEBSITE_TRAFFIC"
  | "SALES"
  | "APP_INSTALLATION"
  | "LEAD"
  | "BRAND"
  | "VIDEO_VIEWS";
