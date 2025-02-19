import DetailSection from "./DetailSection";
import InvestSection from "./InvestSection";
import type { ModelDiary } from "@/model/diary";

type TProps = {
  diary: ModelDiary;
};

const ViewDiaryDetail = ({ diary }: TProps) => {
  return (
    <div className="flex flex-col gap-4">
      <DetailSection diary={diary} />
      <InvestSection diaryId={diary.id} />
    </div>
  );
};

export default ViewDiaryDetail;
