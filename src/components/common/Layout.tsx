"use client";

import styled from "styled-components";
import Header from "./Header";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Wrap>{children}</Wrap>
    </div>
  );
};

export default Layout;

const Wrap = styled.div`
  min-height: calc(100vh - 80px);
  margin-top: 120px;
`;
