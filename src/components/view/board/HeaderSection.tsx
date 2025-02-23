import { useState } from "react";
import BoardAddModal from "@/components/template/BoardAddModal";
import Button from "@/components/ui/Button";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAdd = () => setIsOpen(true);

  return (
    <section className="flex justify-between">
      {isOpen && <BoardAddModal onClose={() => setIsOpen(false)} />}
      <h1 className="text-2xl font-bold mb-4">To-Do 보드</h1>
      <Button width="100px" onClick={onClickAdd}>
        추가
      </Button>
    </section>
  );
};

export default HeaderSection;
