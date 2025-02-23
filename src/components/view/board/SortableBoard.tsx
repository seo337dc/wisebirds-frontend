import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineForm } from "react-icons/ai";
import { BsArrowsMove } from "react-icons/bs";

import Input from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import { Colors } from "@/util/constant";

import type { Board } from "@/model/board";

type TProps = {
  board: Board;
  updateBoard: (id: string, title: string) => void;
  onDetail: (boardData) => void;
};
const SortableBoard = ({ board, updateBoard, onDetail }: TProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: board.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white shadow-md p-4 rounded flex justify-between items-center"
    >
      <BsArrowsMove
        className="cursor-grab mr-4"
        color={Colors.Red}
        size={20}
        {...listeners}
        {...attributes}
      />

      <Text size="16px">{board.order}.</Text>
      <Input
        value={board.title}
        onChange={(value) => updateBoard(board.id, value)}
      />

      <AiOutlineForm
        className="cursor-pointer"
        size={20}
        onClick={() => onDetail(board)}
      />
    </div>
  );
};

export default SortableBoard;
