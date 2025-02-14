import { useModalStore } from "@/store/modalStore";
import Button from "../ui/Button";
import Input, { InputPassword } from "../ui/Input";
import Modal from "../ui/Modal";
import Text from "../ui/Text";

const Login = () => {
  const { onClose } = useModalStore();

  return (
    <Modal onClose={onClose}>
      <div className="min-w-[400px]">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              아이디
            </Text>
            <Input value="" onChange={() => {}} />
          </div>

          <div className="flex justify-between">
            <Text className="w-[120px] flex items-center justify-center">
              비밀번호
            </Text>
            <InputPassword value="" onChange={() => {}} />
          </div>
        </div>

        <Button className="mt-8">로그인</Button>
      </div>
    </Modal>
  );
};

export default Login;
