import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Board } from "@/model/board";

interface BoardState {
  boards: Board[];
  addBoard: (title: string) => void;
  updateBoard: (id: string, title: string) => void;
  deleteBoard: (id: string) => void;
  setBoards: (boards: Board[]) => void;
  updateBoardOrder: (draggedId: string, targetId: string) => void;
}

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      boards: [],
      addBoard: (title) =>
        set((state) => {
          const newBoard = {
            id: Date.now().toString(),
            title,
            order: state.boards.length + 1,
          };
          return { boards: [...state.boards, newBoard] };
        }),
      updateBoard: (id, title) =>
        set((state) => ({
          boards: state.boards.map((board) =>
            board.id === id ? { ...board, title } : board
          ),
        })),
      deleteBoard: (id) =>
        set((state) => ({
          boards: state.boards.filter((board) => board.id !== id),
        })),
      setBoards: (boards) => set({ boards }),

      // 순서변경
      updateBoardOrder: (draggedId, targetId) =>
        set((state) => {
          const boards = [...state.boards];
          const draggedIndex = boards.findIndex((b) => b.id === draggedId);
          const targetIndex = boards.findIndex((b) => b.id === targetId);

          if (draggedIndex !== -1 && targetIndex !== -1) {
            // 순서 변경
            const [draggedItem] = boards.splice(draggedIndex, 1);
            boards.splice(targetIndex, 0, draggedItem);

            // order 재정렬
            const updatedBoards = boards.map((board, index) => ({
              ...board,
              order: index + 1,
            }));

            return { boards: updatedBoards };
          }
          return state;
        }),
    }),
    {
      name: "board-storage",
    }
  )
);
