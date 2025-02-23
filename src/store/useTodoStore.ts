import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Todo } from "@/model/todo";

interface TodoState {
  todos: Todo[];
  addTodo: (boardId: string, text: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  setTodos: (todos: Todo[]) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (boardId, text) =>
        set((state) => {
          const newTodo = {
            id: Date.now().toString(),
            boardId,
            text,
            order: state.todos.length + 1,
          };
          return { todos: [...state.todos, newTodo] };
        }),
      updateTodo: (id, text) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setTodos: (todos) => set({ todos }),
    }),
    {
      name: "todo-storage", // localStorage 키 값
    }
  )
);
