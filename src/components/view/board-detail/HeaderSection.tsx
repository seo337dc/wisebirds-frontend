import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import { Colors } from "@/util/constant";
import { Board } from "@/model/board";
import { useTodoStore } from "@/store/useTodoStore";
import { useBoardStore } from "@/store/useBoardStore";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
  board: Board;
};
const HeaderSection = ({ board }: Props) => {
  const router = useRouter();

  const { deleteTodoByBoard, todos } = useTodoStore();
  const { deleteBoard } = useBoardStore();

  const boardTodos = todos.filter((todo) => todo.boardId === board.id);

  const handleDel = () => {
    if (boardTodos.length > 0) {
      const isDelAll = confirm(
        "보드를 삭제하면 할일도 모두 삭제됩니다. 삭제하시겠습니까?"
      );
      if (isDelAll) {
        deleteTodoByBoard(board.id);
        deleteBoard(board.id);
      }
    } else {
      const isDelAll = confirm("보드를 삭제하시겠습니까?");
      if (isDelAll) deleteBoard(board.id);
    }
    router.push("/");
  };
  return (
    <section className="flex justify-between items-center">
      <AiOutlineArrowLeft
        className="cursor-pointer"
        size={24}
        onClick={() => router.push("/")}
      />

      <h1 className="text-2xl font-bold mb-4">{board.title}</h1>
      <Button width="100px" onClick={handleDel} bgColor={Colors.Red}>
        삭제
      </Button>
    </section>
  );
};

export default HeaderSection;
