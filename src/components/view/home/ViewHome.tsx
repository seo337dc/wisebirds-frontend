"use client";

import { AiFillPlusCircle } from "react-icons/ai";

import NoneData from "@/components/template/NoneData";
import DiaryListSection from "./DiaryListSection";
import { useAuthStore } from "@/store/authStore";

import { Colors } from "@/util/constant";
import { useState } from "react";
import ViewDiaryCreate from "../diary/ViewDiaryCreate";

const ViewHome = () => {
  const { authInfo } = useAuthStore();

  const [isCreate, setIsCreate] = useState(false);

  if (isCreate) {
    return <ViewDiaryCreate onClose={() => setIsCreate(false)} />;
  }

  return (
    <div className="h-full">
      {!authInfo && <NoneData />}
      {authInfo && <DiaryListSection token={authInfo.token} />}
      {authInfo && (
        <AiFillPlusCircle
          className="fixed bottom-2 right-2 cursor-pointer z-10"
          size={60}
          color={Colors.PalletPrimary}
          onClick={() => setIsCreate(true)}
        />
      )}
    </div>
  );
};

export default ViewHome;
