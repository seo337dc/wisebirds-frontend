import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Todo } from "@/model/todo";

interface TodoState {
  todos: Todo[];
  addTodo: (boardId: string, text: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  deleteTodoByBoard: (boardId: string) => void;
  setTodos: (todos: Todo[]) => void;
  updateTodoOrder: (boardId: string, newOrder: Todo[]) => void;
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
      deleteTodoByBoard: (boardId) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.boardId !== boardId),
        })),
      setTodos: (todos) => set({ todos }),
      updateTodoOrder: (boardId, newOrder) =>
        set((state) => ({
          todos: state.todos
            .filter((todo) => todo.boardId !== boardId)
            .concat(newOrder),
        })),
    }),
    {
      name: "todo-storage", // localStorage 키 값
    }
  )
);
