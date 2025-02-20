import { useEffect } from "react";
import { styled } from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { AiOutlineArrowLeft } from "react-icons/ai";

import DetailSection from "./DetailSection";
import DetailAssetSection from "./DetailAssetSection";
import Button from "@/components/ui/Button";

import { useDiaryStore } from "@/store/diaryStore";
import { Colors } from "@/util/constant";
import type { ModelDiary } from "@/model/diary";

import { DiaryApi } from "@/api/diary";
import Loading from "@/components/ui/Loading";

type TProps = {
  diary: ModelDiary;
  onReset: () => void;
};

const ViewDiaryDetail = ({ diary, onReset }: TProps) => {
  const { clearDiary } = useDiaryStore();

  const { mutate: onDelete, isPending } = useMutation({
    mutationKey: [""],
    mutationFn: DiaryApi.deleteDiary,
    onSuccess: () => {
      alert("삭제완료 하였습니다.");
      onReset();
      clearDiary();
    },
  });

  const handleDelete = () => {
    const isDelete = confirm("정말 삭제 하시겠습니까?");
    if (isDelete) {
      onDelete(diary.id);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {isPending && <Loading text="투자 일지 삭제 중..." />}
      <Header>
        <AiOutlineArrowLeft
          className="cursor-pointer"
          size={24}
          onClick={clearDiary}
        />

        <Button width="120px" onClick={handleDelete} bgColor={Colors.Red}>
          투자 일지 삭제
        </Button>
      </Header>

      <DetailSection diary={diary} />
      <DetailAssetSection diaryId={diary.id} />
    </div>
  );
};

export default ViewDiaryDetail;

const Header = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
