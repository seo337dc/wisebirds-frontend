import { useMutation } from "@tanstack/react-query";
import { styled } from "styled-components";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import { AssetApi } from "@/api/asset";
import { Colors } from "@/util/constant";
import type { TAssestInfo } from "@/model/asset";

type TProps = {
  assest: TAssestInfo;
  onReset: () => void;
};
const AssetCard = ({ assest, onReset }: TProps) => {
  const { mutate: onDelete, isPending } = useMutation({
    mutationKey: ["AssetApi.deleteAssetByDiary"],
    mutationFn: AssetApi.deleteAssetByDiary,
    onSuccess: () => {
      alert("종목을 삭제하였습니다.");
      onReset();
    },
    onError: () => alert("종목을 삭제하지 못했습니다."),
  });

  const handleDelete = () => {
    const isDel = confirm("종목을 일지에 삭제하시겠습니까?");
    if (isDel) {
      onDelete(assest.id);
    }
  };

  const buyPrice = Number(assest.buy_price || 0); // 매수가
  const currentPrice = Number(assest.price || 0); // 현재가
  const amount = Number(assest.amount || 0); // 수량

  // 총 매수 금액 & 총 현재 가치
  const totalBuyPrice = buyPrice * amount;
  const totalCurrentValue = currentPrice * amount;

  // 총 손익 (수익 금액)
  const totalProfit = totalCurrentValue - totalBuyPrice;
  return (
    <Wrap>
      {isPending && <Loading text="일지에서 종목을 삭제하는 중..." />}
      <div className="w-full flex justify-end">
        <Button
          width="80px"
          height="25px"
          bgColor={Colors.Red}
          onClick={handleDelete}
        >
          삭제
        </Button>
      </div>
      <h2 className="text-lg font-bold">{assest.asset_id}</h2>
      <div className="mt-2 text-gray-600">
        <p>
          매수가 <span className="font-semibold">${buyPrice}</span>
        </p>
        <p>
          현재가 <span className="font-semibold">${currentPrice}</span>
        </p>
        <p>
          수량 <span className="font-semibold">${amount}</span>
        </p>
        <RateText $isRed={totalProfit < 0}>
          수익률 {totalProfit.toFixed(2)}%
        </RateText>
      </div>
    </Wrap>
  );
};

export default AssetCard;

const Wrap = styled.div`
  max-width: 360px;
  height: 200px;
  padding: 20px 10px;
  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RateText = styled.p<{ $isRed: boolean }>`
  font-weight: 700;
  color: ${({ $isRed }) => ($isRed ? Colors.Red : Colors.PalletPrimary)};
`;
