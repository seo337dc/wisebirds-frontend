import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Button from "@/components/ui/Button";

import { Colors } from "@/util/constant";
import { Board } from "@/model/board";

type Props = {
  board: Board;
};
const HeaderSection = ({ board }: Props) => {
  const router = useRouter();
  return (
    <section className="flex justify-between items-center">
      <AiOutlineArrowLeft
        className="cursor-pointer"
        size={24}
        onClick={() => router.push("/")}
      />

      <h1 className="text-2xl font-bold mb-4">{board.title}</h1>
      <Button width="100px" onClick={() => {}} bgColor={Colors.Red}>
        삭제
      </Button>
    </section>
  );
};

export default HeaderSection;
