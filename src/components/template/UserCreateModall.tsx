"use client";

import { Modal, Form, Input, Button } from "antd";
import { FormItem } from "../ui/FormItem";
import { useCreateUser } from "@/hook/useQuery/useUser";
import { REG_NAME, REG_PWD } from "@/util/constant";

import type { UserCreate } from "@/model/user";

type Props = {
  onClose: () => void;
  onSuccessAfter: (values: UserCreate) => void;
};

const UserCreateModal = ({ onClose, onSuccessAfter }: Props) => {
  const [form] = Form.useForm();
  const { mutate: createUser, isPending: loading } = useCreateUser();

  const handleSubmit = async () => {
    try {
      const values: UserCreate = await form.validateFields();
      console.log(values);
      createUser(values, {
        onSuccess: () => {
          form.resetFields();
          onSuccessAfter(values);
        },
      });
    } catch (error) {
      console.error("유효성 검사 실패:", error);
    }
  };

  return (
    <Modal
      open
      title="사용자 생성"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          취소
        </Button>,
        <Button
          key="create"
          type="primary"
          onClick={handleSubmit}
          loading={loading}
        >
          생성
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <FormItem
          label="아이디(이메일)"
          name="email"
          rules={[
            { required: true, message: "아이디(이메일)을 입력하세요." },
            { type: "email", message: "올바른 이메일 형식이 아닙니다." },
          ]}
        >
          <Input placeholder="이메일 입력" />
        </FormItem>

        <FormItem
          label="비밀번호"
          name="password"
          rules={[
            { required: true, message: "비밀번호를 입력하세요." },
            {
              pattern: REG_PWD,
              message: "영문, 숫자, 특수문자 조합 8~15자",
            },
          ]}
        >
          <Input.Password placeholder="비밀번호 입력" />
        </FormItem>

        {/* 비밀번호 확인 */}
        <FormItem
          label="비밀번호 확인"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "비밀번호를 입력하세요." },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="비밀번호 확인" />
        </FormItem>

        {/* 이름 */}
        <FormItem
          label="이름"
          name="name"
          rules={[
            { required: true, message: "이름을 입력하세요." },
            {
              pattern: REG_NAME,
              message:
                "이름을 올바르게 입력하세요. (숫자, 특수문자, 공백 입력 불가)",
            },
          ]}
        >
          <Input placeholder="이름 입력" />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default UserCreateModal;
