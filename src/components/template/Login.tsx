import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import Button from "../ui/Button";
import Input, { InputPassword } from "../ui/Input";
import Modal from "../ui/Modal";
import Text from "../ui/Text";

import { AuthApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { useLoadingStore } from "@/store/loadingStore";

import { REG_EMAIL } from "@/util/constant";
import type { TApiError, TModalProps } from "@/model/common";
import type { ModelSignInReq } from "@/model/auth";

const Login = ({ onClose }: TModalProps) => {
  const { setAuthInfo } = useAuthStore();
  const { onLoading, onCloseLoading } = useLoadingStore();

  const { isPending, mutate } = useMutation({
    mutationKey: ["siginIn"],
    mutationFn: AuthApi.siginIn,
    onSettled: onCloseLoading,
    onError: (error: TApiError) => {
      alert(error.message);
    },
    onSuccess: (data) => {
      if (data) {
        setAuthInfo(data);
        onClose();
      }
    },
  });

  const [loginInfo, setLoginInfo] = useState<ModelSignInReq>({
    email: "",
    password: "",
  });

  const handleEmail = (emailValue: string) => {
    setLoginInfo({ ...loginInfo, email: emailValue });
  };

  const handlePwd = (pwdValue: string) => {
    setLoginInfo({ ...loginInfo, password: pwdValue });
  };

  const onSubmit = () => {
    const isEmailOk = REG_EMAIL.test(loginInfo.email);

    if (!isEmailOk) {
      alert("옳바른 이메일로 작성해주세요.");
      return;
    }

    mutate(loginInfo);
  };

  useEffect(() => {
    if (isPending) {
      onLoading("로그인 중입니다.");
    }
  }, [isPending]);

  return (
    <Modal onClose={onClose}>
      <div className="min-w-[400px]">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              이메일
            </Text>
            <Input value={loginInfo.email} onChange={handleEmail} />
          </div>

          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              비밀번호
            </Text>
            <InputPassword value={loginInfo.password} onChange={handlePwd} />
          </div>
        </div>

        <Button
          className="mt-8"
          disabled={!loginInfo.email || !loginInfo.password}
          onClick={onSubmit}
        >
          로그인
        </Button>
      </div>
    </Modal>
  );
};

export default Login;
