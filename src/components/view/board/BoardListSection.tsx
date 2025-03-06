"use client";

import { useRouter } from "next/navigation";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import SortableBoard from "./SortableBoard";

import { useBoardStore } from "@/store/useBoardStore";

const BoardListSection = () => {
  const router = useRouter();
  const { boards, updateBoard, updateBoardOrder } = useBoardStore();

  // 드래그 종료 시 순서 업데이트
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = boards.findIndex((board) => board.id === active.id);
    const newIndex = boards.findIndex((board) => board.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      updateBoardOrder(active.id, over.id);
    }
  };

  const handleDetail = (boardId: string) => router.push(`/detail/${boardId}`);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <section className="mx-auto p-4">
        <SortableContext items={boards.map((board) => board.id)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boards.map((board) => (
              <SortableBoard
                key={board.id}
                board={board}
                updateBoard={updateBoard}
                onDetail={() => handleDetail(board.id)}
              />
            ))}
          </div>
        </SortableContext>
      </section>
    </DndContext>
  );
};

export default BoardListSection;
