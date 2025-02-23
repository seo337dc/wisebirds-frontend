import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineDelete, AiOutlineHolder } from "react-icons/ai";

import Input from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import { Colors } from "@/util/constant";

// 드래그 가능 컴포넌트
const SortableBoard = ({ board, updateBoard, deleteBoard }: any) => {
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
      <AiOutlineHolder
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

      <AiOutlineDelete
        className="cursor-pointer"
        size={20}
        onClick={() => deleteBoard(board.id)}
      />
    </div>
  );
};

export default SortableBoard;
