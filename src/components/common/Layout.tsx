"use client";

import { useModalStore } from "@/store/modalStore";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  const ref = useRef<HTMLDivElement>(null); // TODO : 임시 보류
  const { isOpen } = useModalStore();

  useEffect(() => {
    if (!ref.current) return;

    if (isOpen) {
      ref.current.style.overflow = "hidden";
    } else {
      ref.current.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-screen" ref={ref}>
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
