import { styled } from "styled-components";
import moment from "moment";

import { Colors } from "@/util/constant";

import type { ModelDiary } from "@/model/diary";

type TProps = {
  diary: ModelDiary;
};

const DetailSection = ({ diary }: TProps) => {
  return (
    <Wrap>
      <Header>
        <Date>
          {moment(diary.date || diary.created_at).format("YYYY-MM-DD hh:mm")}
        </Date>
      </Header>

      <Title>{diary.title || "제목 없음"}</Title>
      <div className="min-h-[230px] py-5 px-3">{diary.contents}</div>
    </Wrap>
  );
};

export default DetailSection;

const Wrap = styled.div`
  width: 95%;
  min-height: 100%;
  margin: 0 auto;

  padding: 10px;
  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 2px solid ${Colors.Neutral3};
`;

const Date = styled.p`
  text-align: end;
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
