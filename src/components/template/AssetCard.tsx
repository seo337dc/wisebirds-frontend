import { styled } from "styled-components";
import { Colors } from "@/util/constant";
import type { ModelAssetByDiary } from "@/model/asset";

type TProps = {
  assest: ModelAssetByDiary;
};
const AssetCard = ({ assest }: TProps) => {
  const buyPrice = Number(assest.buy_price || 0);
  const amount = Number(assest.amount || 0);

  const profitRate = ((amount - buyPrice) / buyPrice) * 100;

  return (
    <Wrap>
      <h2 className="text-lg font-bold">{assest.asset_id}</h2>
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

export default AssetCard;

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
