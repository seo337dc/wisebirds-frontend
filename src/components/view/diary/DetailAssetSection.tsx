import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import AssetCard from "@/components/template/AssetCard";

import { AssetApi } from "@/api/asset";
import { useAuthStore } from "@/store/authStore";
import { Colors } from "@/util/constant";
import { TAssestInfo } from "@/model/asset";

type TProps = {
  diaryId: number;
};
const DetailAssetSection = ({ diaryId }: TProps) => {
  const { authInfo } = useAuthStore();
  const { data: assets, refetch } = useQuery({
    queryKey: ["AssetApi.listByDiary"],
    queryFn: () => AssetApi.listByDiary(diaryId),
    enabled: !!authInfo?.token,
    initialData: [],
  });

  const { data: assetsAll = [] } = useQuery({
    queryKey: ["AssetsApi.list"],
    queryFn: AssetApi.list,
    initialData: [],
  });

  const enrichedAssets: TAssestInfo[] = useMemo(() => {
    return assets.map((asset) => {
      // assetsAll에서 해당 asset의 asset_id와 일치하는 데이터 찾기
      const matchingAsset = assetsAll.find(
        (orign) => orign.id === asset.asset_id
      );

      return {
        ...asset,
        amount: Number(asset.amount),
        buy_price: Number(asset.buy_price),
        ticker: matchingAsset?.ticker || "N/A",
        name: matchingAsset?.name || "N/A",
        price: matchingAsset?.price || "0", // 현재가 추가 (없으면 "0")
      };
    });
  }, [assets, assetsAll]);

  console.log("enrichedAssets", enrichedAssets);

  return (
    <Wrap>
      <Title>투자한 종목들</Title>
      <Container>
        {enrichedAssets.map((asset) => (
          <AssetCard key={asset.id} assest={asset} onReset={refetch} />
        ))}
      </Container>
    </Wrap>
  );
};

export default DetailAssetSection;

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
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;
