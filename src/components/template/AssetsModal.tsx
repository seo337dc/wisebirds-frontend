import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import Modal from "@/components/ui/Modal";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import { AssetApi } from "@/api/asset";
import { useAssetStore } from "@/store/assetStore";
import type { TAssestCreateDiary } from "@/model/asset";

type TProps = {
  onClose: () => void;
};
const AssetModal = ({ onClose }: TProps) => {
  const { assets: nowAsessts, setAssets } = useAssetStore();

  const { data: assets = [] } = useQuery({
    queryKey: ["AssetsApi.list"],
    queryFn: AssetApi.list,
    initialData: [],
  });

  const [selectedAssets, setSelectedAssets] = useState<number[]>(
    nowAsessts.map((nowAsset) => nowAsset.asset_id)
  );

  const handleSelect = (id: number) => {
    setSelectedAssets((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    const filterAssets: TAssestCreateDiary[] = assets
      .filter((asset) => selectedAssets.includes(Number(asset.id)))
      .map((assetInfo) => ({
        ticker: assetInfo.ticker,
        name: assetInfo.name,
        id: assetInfo.id,
        amount: 0,
        asset_id: assetInfo.id,
        buy_price: assetInfo.price,
      }));
    setAssets(filterAssets);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <Text size="24px">투자 종목 선택</Text>

        <Container>
          {assets.map((item) => (
            <Item key={item.id} onClick={() => handleSelect(item.id)}>
              <input
                type="checkbox"
                checked={selectedAssets.includes(item.id)}
                onChange={() => handleSelect(item.id)}
              />
              <Text size="18px">{item.ticker}</Text>
              <Text size="16px" color="gray">
                {item.name}
              </Text>
              <Text size="16px" color="blue">
                ${Number(item.price).toLocaleString()}
              </Text>
            </Item>
          ))}
        </Container>

        <Button onClick={handleConfirm}>선택 완료</Button>
      </Wrap>
    </Modal>
  );
};

export default AssetModal;

const Wrap = styled.div`
  width: 80vw;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f8f8f8;
  }
`;
