import { DiaryApi } from "@/api/diary";
import Dairy from "@/components/template/Dairy";
import Text from "@/components/ui/Text";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

type TProps = {
  token: string;
};
const DiaryListSection = ({ token }: TProps) => {
  const { data: diaries } = useQuery({
    queryKey: ["DiaryApi.list", token],
    queryFn: () => DiaryApi.list(),
    initialData: [],
  });

  return (
    <Wrap>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 20px 0;
  width: 100%;
`;
