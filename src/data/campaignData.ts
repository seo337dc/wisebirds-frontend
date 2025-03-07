import { Campaign, CampaignObj } from "@/model/campaign";

export const mockCampaigns: Campaign[] = Array.from(
  { length: 50 },
  (_, index) => {
    const campaignObjective: CampaignObj = [
      "WEBSITE_CONVERSIONS",
      "WEBSITE_TRAFFIC",
      "SALES",
      "APP_INSTALLATION",
      "LEAD",
      "BRAND",
      "VIDEO_VIEWS",
    ][Math.floor(Math.random() * 7)] as CampaignObj;

    return {
      id: index + 1,
      name: `캠페인 ${index + 1}`,
      enabled: Math.random() > 0.5,
      campaign_objective: campaignObjective,
      impressions: Math.floor(Math.random() * 1000000),
      clicks: Math.floor(Math.random() * 10000),
      ctr: parseFloat((Math.random() * 1).toFixed(4)),
      video_views: Math.floor(Math.random() * 10000),
      vtr: parseFloat((Math.random() * 1).toFixed(4)),
    };
  }
);
