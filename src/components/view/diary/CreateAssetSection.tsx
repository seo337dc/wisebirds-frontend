import { useState } from "react";
import { styled } from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

import Text from "@/components/ui/Text";
import Input from "@/components/ui/Input";
import AssetModal from "@/components/template/AssetsModal";

import { useAssetStore } from "@/store/assetStore";

import { Colors } from "@/util/constant";

const CreateAssetSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { assets, updateAssets } = useAssetStore();

  return (
    <Wrap>
      {isOpen && <AssetModal onClose={() => setIsOpen(false)} />}
      <div className="flex items-center gap-5">
        <Text size="20px" className="min-w-[110px]">
          투자할 종목들
        </Text>
        <AiFillPlusCircle
          className="cursor-pointer"
          size={25}
          color={Colors.PalletPrimary}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Table>
        <thead>
          <tr>
            <Th>종목 티커명</Th>
            <Th>수량</Th>
            <Th>매수 가격</Th>
          </tr>
        </thead>
        <tbody>
          {assets.length > 0 &&
            assets.map((asset) => (
              <tr key={asset.id}>
                <Td>{asset.ticker}</Td>
                <Td>
                  <Input
                    value={asset.amount.toString()}
                    onChange={(value) =>
                      updateAssets(asset.id, {
                        ...asset,
                        amount: Number(value),
                      })
                    }
                  />
                </Td>
                <Td>
                  <Input
                    value={`$${Number(asset.buy_price).toLocaleString()}`}
                    disable
                  />
                </Td>
              </tr>
            ))}

          {assets.length == 0 && (
            <tr>
              <Td colSpan={3} className="text-center">
                추가된 종목이 없습니다.
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrap>
  );
};

export default CreateAssetSection;

const Wrap = styled.section`
  width: 95%;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 1px solid ${Colors.NeutralE};
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  border-bottom: 2px solid ${Colors.Neutral3};
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${Colors.NeutralE};
`;
