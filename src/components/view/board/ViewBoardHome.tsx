"use client";

import { useState } from "react";
import BoardListSection from "./BoardListSection";
import HeaderSection from "./HeaderSection";
import { useUsers } from "@/hook/useQuery/useUser";

const size = 10;

const ViewBoard = () => {
  const [page, setPage] = useState(0);

  const { data } = useUsers(page, size);

  console.log(data);

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <HeaderSection />
      <BoardListSection />
    </main>
  );
};

export default ViewBoard;
