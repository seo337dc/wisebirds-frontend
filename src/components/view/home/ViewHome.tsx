"use client";

import NoneData from "@/components/template/NoneData";
import { useAuthStore } from "@/store/authStore";
import DiaryListSection from "./DiaryListSection";

const ViewHome = () => {
  const { authInfo } = useAuthStore();

  return (
    <div className="h-full">
      {!authInfo && <NoneData />}
      {authInfo && <DiaryListSection token={authInfo.token} />}
    </div>
  );
};

export default ViewHome;
