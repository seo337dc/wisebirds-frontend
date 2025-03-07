import { mockCampaigns } from "@/data/campaignData";
import type { Campaign } from "@/model/campaign";
import type { PaginatedResponse } from "@/model/common";

const CampaignApi = {
  /**
   * 캠페인 리스트 조회 api
   * [GET] : /api/campaigns
   */
  getCampaigns: async (page: number = 0, size: number = 10) => {
    const start = page * size;
    const end = start + size;
    const paginatedCampaigns = mockCampaigns.slice(start, end);

    return new Promise<PaginatedResponse<Campaign>>((resolve) => {
      setTimeout(() => {
        resolve({
          content: paginatedCampaigns,
          total_elements: mockCampaigns.length,
          total_pages: Math.ceil(mockCampaigns.length / size),
          last: end >= mockCampaigns.length,
          number: page,
          size,
          sort: {}, // 정렬
          number_of_elements: paginatedCampaigns.length,
          first: page === 0,
          empty: paginatedCampaigns.length === 0,
        });
      }, 500);
    });
  },

  /**
   * 캠페인 상태 수정
   * [PATCH] : /api/campaigns/${id}
   */
  updateCampaignEnabled: async (id: number, enabled: boolean) => {
    const campaignIndex = mockCampaigns.findIndex(
      (campaign) => campaign.id === id
    );

    if (campaignIndex === -1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("캠페인을 찾을 수 없습니다."));
        }, 500);
      });
    }

    const updatedCampaign = {
      ...mockCampaigns[campaignIndex],
      enabled,
    };

    mockCampaigns[campaignIndex] = updatedCampaign;

    return new Promise<Campaign>((resolve) => {
      setTimeout(() => {
        resolve(updatedCampaign);
      }, 500);
    });
  },
};

export default CampaignApi;
