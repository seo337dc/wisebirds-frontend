import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AiOutlineForm, AiOutlineDelete } from "react-icons/ai";
import { BsArrowsMove } from "react-icons/bs";

import Input from "@/components/ui/Input";
import { Colors } from "@/util/constant";

import type { Todo } from "@/model/todo";
import { useState } from "react";

type TProps = {
  todo: Todo;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};
const SortableTodoItem = ({ todo, updateTodo, deleteTodo }: TProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSave = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex justify-between items-center py-2 px-4 rounded mt-1 gap-4"
    >
      <BsArrowsMove
        className="cursor-grab"
        color={Colors.Red}
        size={20}
        {...listeners}
        {...attributes}
      />

      <Input
        value={text}
        onChange={(value) => setText(value)}
        onBlur={handleSave}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        isLine
      />

      <AiOutlineDelete
        className="cursor-pointer"
        size={20}
        onClick={() => deleteTodo(todo.id)}
      />
    </li>
  );
};

export default SortableTodoItem;
