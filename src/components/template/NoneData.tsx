import Text from "@/components/ui/Text";
import { AiFillWarning } from "react-icons/ai";

const NoneData = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <AiFillWarning size="42px" />
      <Text size="36px">로그인을 해주세요.</Text>
    </div>
  );
};

export default NoneData;
