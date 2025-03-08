"use client";

import { useState } from "react";
import { Button, message } from "antd";
import TableSection from "./TableSection";
import UserEditModal from "@/components/template/UserEditModal";
import UserCreateModal from "@/components/template/UserCreateModall";

import type { User, UserCreate } from "@/model/user";

const ViewUser = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [page, setPage] = useState(0);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [createUser, setCreateUser] = useState(false);

  const handlePage = (pageValue) => setPage(pageValue);
  const onClickEdit = (userInfo: User) => setEditUser(userInfo);

  const onSuccessAfter = () => {
    messageApi.success("수정을 완료하였습니다.");
    setEditUser(null);
  };

  const onSuccessAfterCreate = (user: UserCreate) => {
    messageApi.success(`${user.name} 사용자를 추가하였습니다.`);
    setCreateUser(false);
  };

  const handleCreate = () => setCreateUser(true);

  return (
    <div>
      {contextHolder}

      <div className="w-full text-right">
        <Button
          className="mb-4 w-[120px]"
          type="primary"
          size="large"
          onClick={handleCreate}
        >
          추가
        </Button>
      </div>

      {createUser && (
        <UserCreateModal
          onClose={() => setCreateUser(false)}
          onSuccessAfter={onSuccessAfterCreate}
        />
      )}
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
