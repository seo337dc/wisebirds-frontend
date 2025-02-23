import { AiOutlineDelete } from "react-icons/ai";
import { useTodoStore } from "@/store/useTodoStore";

type TProps = {
  boardId: string;
};
const TodoListSection = ({ boardId }: TProps) => {
  const { todos, deleteTodo } = useTodoStore();
  const boardTodos = todos.filter((todo) => todo.boardId === boardId);

  return (
    <ul className="mt-2">
      {boardTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 bg-gray-200 rounded mt-1"
        >
          <span>{todo.text}</span>
          <AiOutlineDelete
            className="cursor-pointer"
            onClick={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoListSection;
