"use client";

import { useState } from "react";
import TableSection from "./TableSection";
import type { User } from "@/model/user";
import UserEditModal from "@/components/template/UserEditModal";
import { message } from "antd";

const ViewUser = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [page, setPage] = useState(0);
  const [editUser, setEditUser] = useState<User | null>(null);

  const handlePage = (pageValue) => setPage(pageValue);
  const onClickEdit = (userInfo: User) => setEditUser(userInfo);

  const onSuccessAfter = () => {
    messageApi.success("수정을 완료하였습니다.");
    setEditUser(null);
  };

  return (
    <div>
      {contextHolder}
      {editUser && (
        <UserEditModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onSuccessAfter={onSuccessAfter}
        />
      )}
      <TableSection
        page={page}
        size={25}
        handlePage={handlePage}
        onClickEdit={onClickEdit}
      />
    </div>
  );
};

export default ViewUser;
