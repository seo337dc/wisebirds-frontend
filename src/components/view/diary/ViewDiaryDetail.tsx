import { useEffect } from "react";
import { styled } from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

import DetailSection from "./DetailSection";
import DetailAssetSection from "./DetailAssetSection";
import Button from "@/components/ui/Button";

import { useDiaryStore } from "@/store/diaryStore";
import { Colors } from "@/util/constant";
import type { ModelDiary } from "@/model/diary";

type TProps = {
  diary: ModelDiary;
};

const ViewDiaryDetail = ({ diary }: TProps) => {
  const { clearDiary } = useDiaryStore();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Header>
        <AiOutlineArrowLeft
          className="cursor-pointer"
          size={24}
          onClick={clearDiary}
        />

        <Button width="120px" onClick={() => {}} bgColor={Colors.Red}>
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
