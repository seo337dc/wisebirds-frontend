"use client";

import { useLoadingStore } from "@/store/loadingStore";
import styled from "styled-components";
import Loading from "../ui/Loading";
import Header from "./Header";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  const { isLoading, text } = useLoadingStore();

  return (
    <div className="relative min-h-screen">
      {isLoading && <Loading text={text} />}

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
