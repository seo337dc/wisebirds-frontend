import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

import AssetCard from "@/components/template/AssetCard";

import { AssetApi } from "@/api/asset";
import { useAuthStore } from "@/store/authStore";
import { Colors } from "@/util/constant";

type TProps = {
  diaryId: number;
};
const DetailAssetSection = ({ diaryId }: TProps) => {
  const { authInfo } = useAuthStore();
  const { data: assets } = useQuery({
    queryKey: ["AssetApi.list"],
    queryFn: () => AssetApi.listByDiary(diaryId),
    enabled: !!authInfo?.token,
    initialData: [],
  });

  return (
    <Wrap>
      <Title>투자한 종목들</Title>
      <Container>
        {assets.map((asset) => (
          <AssetCard key={asset.id} assest={asset} />
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 20px 0;
  width: 100%;
`;
