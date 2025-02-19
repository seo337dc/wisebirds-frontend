import { styled } from "styled-components";
import { Colors } from "@/util/constant";
import type { ModelInvestment } from "@/model/investment";

type TProps = {
  investment: ModelInvestment;
};
const InvestCard = ({ investment }: TProps) => {
  const buyPrice = Number(investment.buy_price || 0);
  const amount = Number(investment.amount || 0);

  const profitRate = ((amount - buyPrice) / buyPrice) * 100;

  return (
    <Wrap>
      <h2 className="text-lg font-bold">ㅎㅎㅎ</h2>
      <div className="mt-2 text-gray-600">
        <p>
          매수가 <span className="font-semibold">${buyPrice}</span>
        </p>
        <p>
          현재가 <span className="font-semibold">${amount}</span>
        </p>
        <RateText $isRed={profitRate < 0}>
          수익률 {profitRate.toFixed(1)}%
        </RateText>
      </div>
    </Wrap>
  );
};

export default InvestCard;

const Wrap = styled.div`
  max-width: 360px;
  height: 150px;
  padding: 20px 10px;
  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

const RateText = styled.p<{ $isRed: boolean }>`
  font-weight: 700;
  color: ${({ $isRed }) => ($isRed ? Colors.Red : Colors.PalletPrimary)};
`;
