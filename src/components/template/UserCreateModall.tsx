"use client";

import { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { FormItem } from "../ui/FormItem";
import { useCheckEmailExists, useCreateUser } from "@/hook/useQuery/useUser";
import { REG_EMAIL, REG_NAME, REG_PWD } from "@/util/constant";

import type { UserCreate } from "@/model/user";

type Props = {
  onClose: () => void;
  onSuccessAfter: (values: UserCreate) => void;
};

const UserCreateModal = ({ onClose, onSuccessAfter }: Props) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);

  const { mutate: createUser, isPending: loading } = useCreateUser();
  const { refetch } = useCheckEmailExists(email);

  const handleEmailCheck = async () => {
    if (!email) {
      messageApi.error("이메일을 입력해주세요.");
      return;
    }

    await refetch().then((res) => {
      if (res.data?.result) {
        messageApi.error("이미 존재하는 이메일입니다.");
        return;
      }

      messageApi.success("사용 가능한 이메일입니다.");
      setEmailCheck(true);
    });
  };

  const handleSubmit = async () => {
    if (!emailCheck) {
      messageApi.error("이메일 중복 확인을 진행해주세요.");
      return;
    }

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

  const validateEmail = (_: any, value: string) => {
    if (!value) {
      return Promise.reject("아이디(이메일)을 입력하세요.");
    }

    if (value.length < 9 || value.length > 50 || !REG_EMAIL.test(value)) {
      return Promise.reject("올바른 이메일 주소를 입력하세요.");
    }

    return Promise.resolve();
  };

  const validatePassword = (_: any, value: string) => {
    if (!value) {
      return Promise.reject("비밀번호를 입력하세요.");
    }

    if (!REG_PWD.test(value)) {
      return Promise.reject("8~15자 영문, 숫자, 특수문자를 사용하세요.");
    }

    return Promise.resolve();
  };

  const validateConfirmPassword = ({ getFieldValue }: any) => ({
    validator(_: any, value: string) {
      if (!value) {
        return Promise.reject("비밀번호를 입력하세요.");
      }

      if (value !== getFieldValue("password")) {
        return Promise.reject("비밀번호가 일치하지 않습니다.");
      }

      return Promise.resolve();
    },
  });

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
      {contextHolder}

      <Form form={form} layout="vertical">
        <FormItem
          label="아이디(이메일)"
          name="email"
          rules={[{ validator: validateEmail }]}
        >
          <Input
            placeholder="아이디(이메일) 입력"
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailCheck) setEmailCheck(false);
              form.setFields([{ name: "email", errors: [] }]);
            }}
            addonAfter={
              <Button
                type="primary"
                size="small"
                onClick={handleEmailCheck}
                disabled={!email || email.length < 9 || email.length > 50}
              >
                중복 확인
              </Button>
            }
          />
        </FormItem>

        <FormItem
          label="비밀번호"
          name="password"
          rules={[{ validator: validatePassword }]}
        >
          <Input.Password placeholder="영문, 숫자, 특수문자 조합 8~15자" />
        </FormItem>

        <FormItem
          label="비밀번호 확인"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[validateConfirmPassword]}
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
