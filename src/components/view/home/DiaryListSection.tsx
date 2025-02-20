import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import Dairy from "@/components/template/Dairy";
import Text from "@/components/ui/Text";
import Loading from "@/components/ui/Loading";
import ViewDiaryDetail from "../diary/ViewDiaryDetail";

import { useDiaryStore } from "@/store/diaryStore";
import { DiaryApi } from "@/api/diary";

type TProps = {
  token: string;
};
const DiaryListSection = ({ token }: TProps) => {
  const { diary: detailDiary } = useDiaryStore();

  const { data: diaries, isFetching } = useQuery({
    queryKey: ["DiaryApi.list", token],
    queryFn: () => DiaryApi.list(),
    initialData: [],
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [detailDiary]);

  if (detailDiary) {
    return <ViewDiaryDetail diary={detailDiary} />;
  }

  return (
    <Wrap>
      {isFetching && <Loading text="다이얼리 목록 불러오는 중..." />}
      <Text size="24px">투자 일지 목록</Text>
      <ListContainer>
        {diaries.map((diary) => (
          <Dairy key={diary.id} diary={diary} />
        ))}
      </ListContainer>
    </Wrap>
  );
};

export default DiaryListSection;

const Wrap = styled.section`
  padding: 0 20px;
  margin: 0 auto; /* 가운데 정렬 */
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* 최대 너비 제한 */
  justify-content: center; /* 요소 개수가 적을 때 중앙 정렬 */

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;
