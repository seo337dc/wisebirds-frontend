import dayjs from "dayjs";
import type { ColumnsType } from "antd/es/table";
import type { User } from "@/model/user";

export const USER_COLUMNS: ColumnsType<User> = [
  {
    title: "아이디",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "마지막 로그인 일시",
    dataIndex: "last_login_at",
    key: "last_login_at",

    render: (value: string) => dayjs(value).format("YYYY-MM-DD HH:mm:ss"),
  },
];
