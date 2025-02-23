import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Text from "@/components/ui/Text";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useBoardStore } from "@/store/useBoardStore";

type TProps = {
  onClose: () => void;
};
const BoardAddModal = ({ onClose }: TProps) => {
  const { addBoard } = useBoardStore();

  const [title, setTitle] = useState("");

  const handleTitle = (value: string) => setTitle(value);

  const onAddClick = () => {
    if (!title.trim()) return;
    addBoard(title);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="w-[350px] flex items-center gap-4">
        <Text className="w-[100px]">제목 :</Text>
        <Input value={title} onChange={handleTitle} isLine />
      </div>

      <Button onClick={onAddClick} className="mt-4" height="40px">
        추가
      </Button>
    </Modal>
  );
};

export default BoardAddModal;
