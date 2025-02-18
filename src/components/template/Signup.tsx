import Button from "../ui/Button";
import Input, { InputPassword } from "../ui/Input";
import Modal from "../ui/Modal";
import Text from "../ui/Text";

import type { TModalProps } from "@/model/common";

const Signup = ({ onClose }: TModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="min-w-[400px]">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              이메일
            </Text>
            <Input value="" onChange={() => {}} />
          </div>

          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              비밀번호
            </Text>
            <InputPassword value="" onChange={() => {}} />
          </div>

          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              비밀번호 확인
            </Text>
            <InputPassword value="" onChange={() => {}} />
          </div>
        </div>

        <Button className="mt-8">회원가입</Button>
      </div>
    </Modal>
  );
};

export default Signup;
