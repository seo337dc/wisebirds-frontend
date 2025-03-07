"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Layout as LayoutContent, Menu, theme } from "antd";
import HeaderRight from "./HeaderRight";

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

  const [authority, setAuthority] = useState("admin");

  const handleAuthority = (authorityValue: string) => {
    setAuthority(authorityValue);
  };

  const items =
    authority === "admin"
      ? MENU_TIEMS.concat({ label: "사용자", key: "/user" })
      : MENU_TIEMS;

  return (
    <div className="relative min-h-screen">
      <LayoutContent>
        <Header className="flex justify-center">
          <Menu
            className="flex-1 min-w-0"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            items={items}
            onClick={(e) => router.push(e.key)}
          />

          <HeaderRight
            authority={authority}
            handleAuthority={handleAuthority}
          />
        </Header>
        <Content className="px-5 py-10">
          <div
            style={{
              background: colorBgContainer,
              minHeight: "85vh",
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </LayoutContent>
    </div>
  );
};

export default Layout;
