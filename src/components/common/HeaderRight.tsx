import { usePathname } from "next/navigation";
import { Select, Typography, Avatar, Popconfirm } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useAuth } from "@/hook/useQuery/useAuth";
import { useRoleStore } from "@/store/useRoleStore";

import { AUTH_MENUT } from "./constant";

const { Text } = Typography;

const HeaderRight = () => {
  const pathName = usePathname();
  const { role, setRole } = useRoleStore();

  const { data } = useAuth();

  const options =
    pathName === "/user" ? [{ value: "admin", label: "어드민" }] : AUTH_MENUT;

  return (
    <div className="flex items-center gap-8">
      <Popconfirm
        placement="bottom"
        title=""
        icon={null}
        description={
          <div className="w-[120px] flex flex-col items-center gap-2">
            <Text className="text-lg">{data?.name}</Text>
            <Text className="text-base" disabled>
              {data?.email}
            </Text>
            <Text className="text-base" disabled>
              {data?.company.name}
            </Text>
          </div>
        }
        showCancel={false}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar size={24} icon={<UserOutlined />} />
          <Text className="text-white">{data?.email}</Text>
        </div>
      </Popconfirm>

      <Select
        className="w-[120px]"
        defaultValue="authority"
        value={role}
        options={options}
        onChange={(roleValue) => setRole(roleValue)}
      />
    </div>
  );
};

export default HeaderRight;
