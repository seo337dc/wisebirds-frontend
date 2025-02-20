import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { styled } from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

import CreateAssetSection from "./CreateAssetSection";
import CreateSection from "./CreateSection";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";

import { useDiaryStore } from "@/store/diaryStore";
import { useAssetStore } from "@/store/assetStore";

import { DiaryApi } from "@/api/diary";
import { AssetApi } from "@/api/asset";

import type { ModelAssetsReq } from "@/model/asset";

type TProps = {
  onClose: () => void;
};
const ViewDiaryCreate = ({ onClose }: TProps) => {
  const { createDiary: diary, clearCreateDiary: clearDiary } = useDiaryStore();
  const { assets, clearAssets } = useAssetStore();

  const closeAction = () => {
    onClose();
    clearAssets();
    clearDiary();
  };

  const { mutate: addAssets, isPending: loadingAddAssets } = useMutation({
    mutationKey: ["AssetApi.addAssetsByDiary"],
    mutationFn: AssetApi.addAssetsByDiary,
    onSuccess: () => {
      alert("일지를 추가하였습니다.");
      closeAction();
    },
    onError: () => alert("일지에 종목 추가를 실패하였습니다."),
  });

  const { mutate: createDiary, isPending: loadingCreate } = useMutation({
    mutationKey: ["DiaryApi.create"],
    mutationFn: DiaryApi.create,
    onSuccess: (data) => {
      if (assets.length === 0) {
        alert("일지를 추가하였습니다.");
        closeAction();
        return;
      }
      if (data) {
        assets.forEach((asset) => {
          const paramAsset: ModelAssetsReq = {
            diary_id: data.id,
            asset_id: asset.asset_id,
            amount: asset.amount,
            buy_price: asset.buy_price,
          };
          addAssets(paramAsset);
        });
      }
    },
    onError: () => alert("일지 추가를 실패하였습니다."),
  });

  const onSubmit = () => {
    if (!diary.title) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!diary.date) {
      alert("날짜를 선택해주세요.");
      return;
    }

    if (!diary.contents) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (assets.length === 0) {
      const isOk = confirm(
        "추가된 종목이 없습니다. 그래도 일지를 추가하겠습니까?"
      );

      if (!isOk) {
        return;
      }
    }

    createDiary(diary);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {loadingCreate && <Loading text="일지 생성 중..." />}
      {loadingAddAssets && <Loading text="종목 추가 중..." />}
      <Header>
        <AiOutlineArrowLeft
          className="cursor-pointer"
          size={24}
          onClick={closeAction}
        />

        <Button width="120px" onClick={onSubmit}>
          투자 일지 추가
        </Button>
      </Header>

      <div className="flex flex-col gap-8">
        <CreateSection />

        <CreateAssetSection />
      </div>
    </div>
  );
};

export default ViewDiaryCreate;

const Header = styled.div`
  width: 100%;
  padding: 0 40px 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
