"use client";

import BoardListSection from "./BoardListSection";
import HeaderSection from "./HeaderSection";

const ViewHome = () => {
  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <HeaderSection />
      <BoardListSection />
    </main>
  );
};

export default ViewHome;
