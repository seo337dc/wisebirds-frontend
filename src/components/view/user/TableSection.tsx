import { Table, Button } from "antd";

import { useUsers } from "@/hook/useQuery/useUser";

import { USER_COLUMNS } from "./constants";

import type { User } from "@/model/user";
import type { ColumnsType } from "antd/es/table";

type TProps = {
  page: number;
  size: number;
  handlePage: (value: number) => void;
};
const TableSection = ({ page, size, handlePage }: TProps) => {
  const { data, isFetching: loadingData } = useUsers(page, size);

  const columns: ColumnsType<User> = [
    ...USER_COLUMNS,
    {
      title: "수정",
      dataIndex: "modify",
      key: "modify",
      align: "center",
      render: (_: any, record: User) => {
        return (
          <Button
            color="primary"
            variant="link"
            onClick={() => console.log("수정 버튼 클릭:", record)}
          >
            수정
          </Button>
        );
      },
    },
  ];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={data?.content.map((item) => ({ ...item, key: item.id }))}
      loading={loadingData}
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
