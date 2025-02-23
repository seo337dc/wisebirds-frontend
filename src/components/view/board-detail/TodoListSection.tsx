"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useTodoStore } from "@/store/useTodoStore";
import SortableTodo from "./SortableTodo";

type TProps = {
  boardId: string;
};
const TodoListSection = ({ boardId }: TProps) => {
  const { todos, updateTodo, deleteTodo, updateTodoOrder } = useTodoStore();
  const boardTodos = todos.filter((todo) => todo.boardId === boardId);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = boardTodos.findIndex((todo) => todo.id === active.id);
    const newIndex = boardTodos.findIndex((todo) => todo.id === over.id);

    const newOrder = arrayMove(boardTodos, oldIndex, newIndex);
    updateTodoOrder(boardId, newOrder);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={boardTodos.map((todo) => todo.id)}>
        <ul className="mt-2">
          {boardTodos.map((todo) => (
            <SortableTodo
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default TodoListSection;
