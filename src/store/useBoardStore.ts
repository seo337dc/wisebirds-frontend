import { create } from "zustand";

interface Board {
  id: string;
  title: string;
  order: number;
}

interface BoardStore {
  boards: Board[];
  addBoard: (title: string) => void;
  updateBoard: (id: string, title: string) => void;
  deleteBoard: (id: string) => void;
  updateBoardOrder: (newOrder: Board[]) => void; // 순서 업데이트
}

export const useBoardStore = create<BoardStore>((set) => ({
  boards: [],

  addBoard: (title) =>
    set((state) => {
      const newBoard = {
        id: String(Date.now()),
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

  updateBoardOrder: (newOrder) =>
    set(() => ({
      boards: newOrder.map((board, index) => ({ ...board, order: index + 1 })),
    })),
}));
