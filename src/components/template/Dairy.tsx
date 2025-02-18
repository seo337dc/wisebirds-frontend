import moment from "moment";
import { styled } from "styled-components";
import { Colors } from "@/util/constant";
import type { ModelDiary } from "@/model/diary";

type TProps = {
  diary: ModelDiary;
};
const Dairy = ({ diary }: TProps) => {
  console.log("diary", diary);
  return (
    <Wrap>
      <Date>
        {moment(diary.date || diary.created_at).format("YYYY-MM-DD hh:mm")}
      </Date>

      <Title>{diary.title}</Title>
      <Content>{diary.contents}</Content>
    </Wrap>
  );
};

export default Dairy;

const Wrap = styled.div`
  max-width: 360px;
  height: 350px;
  padding: 20px 10px;
  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;
const Date = styled.p`
  padding: 4px;
  text-align: end;
  border-bottom: 2px solid ${Colors.Neutral3};
`;

const Title = styled.p`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 800;
  border-bottom: 2px solid ${Colors.Neutral3};
`;

const Content = styled.div`
  height: 230px;
  padding: 20px 10px;

  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;
