"use client";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  return <div className="relative min-h-screen">{children}</div>;
};

export default Layout;
