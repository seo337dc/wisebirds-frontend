"use client";

import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";
import {
  Breadcrumb,
  Layout as LayoutContent,
  Menu,
  theme,
  Typography,
} from "antd";

import HeaderRight from "./HeaderRight";
import { useRoleStore } from "@/store/useRoleStore";

import { MENU_TIEMS } from "./constant";

type TProps = {
  children: React.ReactNode;
};

const { Header, Content } = LayoutContent;

const Layout = ({ children }: TProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const pathName = usePathname();

  const { role } = useRoleStore();

  const items = role === "admin" ? MENU_TIEMS.concat(menuUser) : MENU_TIEMS;
  const title = items.find((item) => item.key === pathName)?.title;

  return (
    <div className="relative min-h-screen">
      <LayoutContent>
        <Header className="flex justify-center">
          <Menu
            className="flex-1 min-w-0"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            selectedKeys={pathName === "/" ? undefined : [pathName]}
            items={items}
            onClick={(e) => router.push(e.key)}
          />

          <HeaderRight />
        </Header>
        <Content className="px-5 py-5">
          <Breadcrumb className="my-4 mx-0">
            <Breadcrumb.Item>
              <Typography.Title level={4}>{title}</Typography.Title>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Wrap $bg={colorBgContainer} $borderRadius={borderRadiusLG}>
            {children}
          </Wrap>
        </Content>
      </LayoutContent>
    </div>
  );
};

export default Layout;

const Wrap = styled.div<{ $bg: string; $borderRadius: number }>`
  background: ${({ $bg }) => $bg};
  min-height: 85vh;
  padding: 24px;
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;

const menuUser = {
  label: "사용자",
  key: "/user",
  title: "사용자 관리",
};
