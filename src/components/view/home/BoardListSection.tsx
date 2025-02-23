"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import SortableBoard from "./SortableBoard";

import { useBoardStore } from "@/store/useBoardStore";

const BoardListSection = () => {
  const { boards, updateBoard, deleteBoard, updateBoardOrder } =
    useBoardStore();

  // 드래그 종료 시 순서 업데이트
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = boards.findIndex((board) => board.id === active.id);
    const newIndex = boards.findIndex((board) => board.id === over.id);

    const newOrder = arrayMove(boards, oldIndex, newIndex);
    updateBoardOrder(newOrder); // Zustand store에 순서 반영
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <section className="max-w-4xl mx-auto p-4">
        <SortableContext items={boards.map((board) => board.id)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boards.map((board) => (
              <SortableBoard
                key={board.id}
                board={board}
                updateBoard={updateBoard}
                deleteBoard={deleteBoard}
              />
            ))}
          </div>
        </SortableContext>
      </section>
    </DndContext>
  );
};

export default BoardListSection;
