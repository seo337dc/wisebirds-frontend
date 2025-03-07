import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CampaignApi from "@/api/campain";

import type { PaginatedResponse } from "@/model/common";
import type { Campaign, CampaignsReqModel } from "@/model/campaign";

export const useCampaigns = (page: number, size: number) => {
  return useQuery<PaginatedResponse<Campaign>>({
    queryKey: ["/campaigns", page, size],
    queryFn: () => CampaignApi.getCampaigns(page, size),
    staleTime: 1000 * 60,
  });
};

export const useUpdateCampaignEnabled = () => {
  const queryClient = useQueryClient();

  return useMutation<Campaign, Error, CampaignsReqModel>({
    mutationKey: ["/campaigns/id"],
    mutationFn: async ({ id, enabled }) =>
      await CampaignApi.updateCampaignEnabled(id, enabled),
    onSuccess: (updatedCampaign) => {
      queryClient.invalidateQueries({ queryKey: ["/campaigns"] });
    },
  });
};
