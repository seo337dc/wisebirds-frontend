import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useTodoStore } from "@/store/useTodoStore";

type TProps = {
  boardId: string;
};
const AddTodoSection = ({ boardId }: TProps) => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoStore();

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(boardId, text);
    setText("");
  };

  return (
    <div className="flex gap-2 mt-2">
      <Input
        value={text}
        onChange={(value) => setText(value)}
        placeholder="할 일을 입력하세요"
        isLine
      />
      <Button width="100px" onClick={handleAdd}>
        추가
      </Button>
    </div>
  );
};

export default AddTodoSection;
