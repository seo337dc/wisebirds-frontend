import DatePickerInput from "@/components/ui/DatePickerInput";
import Input, { InputTextarea } from "@/components/ui/Input";
import Text from "@/components/ui/Text";
import { useDiaryStore } from "@/store/diaryStore";
import { Colors } from "@/util/constant";
import { styled } from "styled-components";

const CreateSection = () => {
  const { createDiary: diary, setCreateDiary: setDiary } = useDiaryStore();

  return (
    <Wrap>
      <div className="flex items-center gap-5">
        <Text size="20px" className="min-w-[110px]">
          투자 일지 날짜
        </Text>
        <DatePickerInput
          value={diary.date}
          onChange={(date) => setDiary({ ...diary, date })}
        />
      </div>

      <div className="flex items-center gap-4">
        <Text size="20px" className="min-w-[120px]">
          투자 일지 제목
        </Text>
        <Input
          value={diary.title}
          onChange={(title) => setDiary({ ...diary, title })}
        />
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <Text size="20px">투자 일지 내용</Text>
        <InputTextarea
          value={diary.contents}
          onChange={(contents) => setDiary({ ...diary, contents })}
        />
      </div>
    </Wrap>
  );
};

export default CreateSection;

const Wrap = styled.section`
  width: 95%;
  min-height: 100%;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
