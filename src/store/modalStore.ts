import { create } from "zustand";

interface ModalState {
  type?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
