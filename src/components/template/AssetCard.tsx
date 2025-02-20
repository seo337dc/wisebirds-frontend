import { useMutation } from "@tanstack/react-query";
import { styled } from "styled-components";
import Button from "../ui/Button";
import { AssetApi } from "@/api/asset";
import { Colors } from "@/util/constant";
import type { ModelAssetByDiary } from "@/model/asset";
import Loading from "../ui/Loading";

type TProps = {
  assest: ModelAssetByDiary;
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
  const buyPrice = Number(assest.buy_price || 0);
  const amount = Number(assest.amount || 0);

  const profitRate = ((amount - buyPrice) / buyPrice) * 100;

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
