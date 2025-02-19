import { InvestmentApi } from "@/api/investment";
import InvestCard from "@/components/template/InvestCard";
import { useAuthStore } from "@/store/authStore";
import { Colors } from "@/util/constant";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

type TProps = {
  diaryId: number;
};
const InvestSection = ({ diaryId }: TProps) => {
  const { authInfo } = useAuthStore();
  const { data: investList } = useQuery({
    queryKey: ["InvestmentApi.list"],
    queryFn: () => InvestmentApi.list(diaryId),
    enabled: !!authInfo?.token,
    initialData: [],
  });

  console.log("investList", investList);
  return (
    <Wrap>
      <Title>투자한 종목들</Title>
      <Container>
        {investList.map((investment) => (
          <InvestCard key={investment.id} investment={investment} />
        ))}
      </Container>
    </Wrap>
  );
};

export default InvestSection;

const Wrap = styled.div`
  width: 95%;
  min-height: 200px;
  margin: 0 auto;

  padding: 10px;
  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 20px 0;
  width: 100%;
`;
