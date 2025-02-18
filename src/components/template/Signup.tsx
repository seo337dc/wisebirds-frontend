import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import Button from "../ui/Button";
import Input, { InputPassword } from "../ui/Input";
import Modal from "../ui/Modal";
import Text from "../ui/Text";

import { useLoadingStore } from "@/store/loadingStore";
import { AuthApi } from "@/api/auth";
import { REG_BAN_KR, REG_EMAIL, REG_PWD_NUM } from "@/util/constant";
import type { TModalProps } from "@/model/common";
import type { ModelSignUpReq } from "@/model/auth";

interface SignupTypes extends ModelSignUpReq {
  confirmPassword: string;
}

const Signup = ({ onClose }: TModalProps) => {
  const { onCloseLoading, onLoading } = useLoadingStore();

  const { isPending, mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: AuthApi.signUp,
    onSettled: onCloseLoading,
    onSuccess: (data) => {
      alert("회원가입을 완료하였습니다. 로그인 해주시길 바랍니다.");
      onClose();
    },
    onError: (err) => {
      alert("중복된 이메일 입니다."); // 에러처리가 너무 다름
    },
  });

  const [signupInfo, setSignupInfo] = useState<SignupTypes>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleEmail = (emailValue: string) => {
    if (!/\s/.test(emailValue) && !REG_BAN_KR.test(emailValue)) {
      setSignupInfo({ ...signupInfo, email: emailValue });
    }
  };

  const handlePwd = (pwdValue: string) => {
    if (REG_PWD_NUM.test(pwdValue)) {
      setSignupInfo({ ...signupInfo, password: pwdValue });
    }
  };

  const handleSecondPwd = (pwdValue: string) => {
    if (REG_PWD_NUM.test(pwdValue)) {
      setSignupInfo({ ...signupInfo, confirmPassword: pwdValue });
    }
  };

  const onSubmit = () => {
    const isEmailOk = REG_EMAIL.test(signupInfo.email);

    if (!isEmailOk) {
      alert("옳바른 이메일로 작성해주세요.");
      return;
    }

    if (signupInfo.confirmPassword !== signupInfo.password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const params: ModelSignUpReq = {
      email: signupInfo.email,
      password: signupInfo.password,
    };
    mutate(params);
  };

  const disalbeBtn =
    !signupInfo.email || !signupInfo.password || !signupInfo.confirmPassword;

  useEffect(() => {
    if (isPending) {
      onLoading("회원가입 중...");
    }
  }, [isPending]);
  return (
    <Modal onClose={onClose}>
      <div className="min-w-[400px]">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <Text className="w-[140px] flex items-center justify-center">
              이메일
            </Text>
            <Input
              value={signupInfo.email}
              onChange={handleEmail}
              placeholder="이메일을 입력하세요."
            />
          </div>

          <div className="flex justify-between">
            <Text className="w-[140px] flex items-center justify-center">
              비밀번호
            </Text>
            <InputPassword value={signupInfo.password} onChange={handlePwd} />
          </div>

          <div className="flex justify-between">
            <Text className="w-[140px] flex items-center justify-center">
              비밀번호 확인
            </Text>
            <InputPassword
              value={signupInfo.confirmPassword}
              onChange={handleSecondPwd}
            />
          </div>
        </div>

        <Button className="mt-8" disabled={disalbeBtn} onClick={onSubmit}>
          회원가입
        </Button>
      </div>
    </Modal>
  );
};

export default Signup;
