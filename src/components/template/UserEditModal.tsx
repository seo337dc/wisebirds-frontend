"use client";

import { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

import { FormItem } from "../ui/FormItem";

import { useUpdateUser } from "@/hook/useQuery/useUser";

import type { User } from "@/model/user";

type UserEditForm = Pick<User, "email" | "name" | "id">;

type Props = {
  user: UserEditForm;
  onClose: () => void;
  onSuccessAfter: () => void;
};

const UserEditModal = ({ user, onClose, onSuccessAfter }: Props) => {
  const [form] = Form.useForm();
  const { mutate: updateUser } = useUpdateUser();

  const validateName = (_: any, value: string) => {
    if (!value) {
      return Promise.reject("이름을 입력해주세요.");
    }

    const nameRegex = /^[가-힣a-zA-Z]{1,16}$/;
    if (!nameRegex.test(value)) {
      return Promise.reject(
        "이름을 올바르게 입력하세요. (숫자, 특수문자, 공백 입력 불가)"
      );
    }

    return Promise.resolve();
  };

  const handleSave = async () => {
    try {
      const updatedUser: User = await form.validateFields();

      updateUser(
        { id: user?.id, updateUser: updatedUser },
        { onSuccess: onSuccessAfter }
      );
    } catch (error) {
      console.log("유효성 검사 실패", error);
    }
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user]);

  return (
    <Modal
      open
      title="사용자 수정"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          취소
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          저장
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <FormItem label="아이디" name="email">
          <Input disabled />
        </FormItem>

        <FormItem
          label="이름"
          name="name"
          rules={[{ validator: validateName }]}
          validateTrigger="onBlur"
        >
          <Input placeholder="이름을 입력하세요" />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default UserEditModal;
