"use client";

import { useBoardStore } from "@/store/useBoardStore";

import TodoList from "./TodoListSection";
import AddTodo from "./AddTodoSection";
import HeaderSection from "./HeaderSection";

type TProps = {
  id: string;
};

const ViewBoardDetail = ({ id }: TProps) => {
  const { boards } = useBoardStore();

  const board = boards.find((b) => b.id === id);

  if (!board) return <p>존재하지 않는 보드입니다.</p>;

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <HeaderSection board={board} />
      <div className="m-6 p-6 bg-white shadow-md rounded w-full mx-auto min-h-80 mb-5">
        <AddTodo boardId={board.id} />
        <TodoList boardId={board.id} />
      </div>
    </main>
  );
};

export default ViewBoardDetail;
