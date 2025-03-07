import { Table, Switch } from "antd";

import {
  useCampaigns,
  useUpdateCampaignEnabled,
} from "@/hook/useQuery/useCampaigns";
import { useRoleStore } from "@/store/useRoleStore";

import { campaignObjectiveLabels } from "@/util/constant";

import type { TableProps } from "antd";
import type { Campaign, CampaignObj } from "@/model/campaign";

type TProps = {
  page: number;
  size: number;
  handlePage: (value: number) => void;
};
const TableSection = ({ page, size, handlePage }: TProps) => {
  const { role } = useRoleStore();

  const { data, isFetching: loadingData } = useCampaigns(page, size);
  const { mutate: onPatch, isPending: loadingUpdate } =
    useUpdateCampaignEnabled();

  const handleStatusChange = (id: number, enabled: boolean) => {
    onPatch({ id, enabled });
  };

  const columns: TableProps<Campaign>["columns"] = [
    {
      title: "상태",
      dataIndex: "enabled",
      key: "enabled",
      align: "center",
      render: (enabled: boolean, record: Campaign) => (
        <Switch
          disabled={role === "viewer"}
          defaultChecked={enabled}
          onChange={(checked) => handleStatusChange(record.id, checked)}
        />
      ),
    },
    {
      title: "캠페인명",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "캠페인 목적",
      dataIndex: "campaign_objective",
      key: "campaign_objective",
      render: (value: CampaignObj) =>
        campaignObjectiveLabels[value] || "알 수 없음",
    },
    {
      title: "노출수",
      dataIndex: "impressions",
      key: "impressions",
      align: "right",
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: "클릭수",
      dataIndex: "clicks",
      key: "clicks",
      align: "right",
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: "CTR",
      dataIndex: "ctr",
      key: "ctr",
      align: "right",
      render: (value: number) => `${value.toFixed(2)}%`,
    },
    {
      title: "동영상조회수",
      dataIndex: "video_views",
      key: "video_views",
      align: "right",
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: "VTR",
      dataIndex: "vtr",
      key: "vtr",
      align: "right",
      render: (value: number) => `${value.toFixed(2)}%`,
    },
  ];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={data?.content.map((item) => ({ ...item, key: item.id }))}
      loading={loadingData || loadingUpdate}
      pagination={{
        position: ["bottomCenter"],
        current: page + 1,
        total: data?.total_elements,
        pageSize: size,
        onChange: (newPage) => handlePage(newPage - 1),
      }}
    />
  );
};

export default TableSection;
