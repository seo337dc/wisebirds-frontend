import { styled } from "styled-components";
import { HashLoader } from "react-spinners";
import { Colors } from "@/util/constant";

type TProps = {
  text?: string;
};
const Loading = ({ text }: TProps) => {
  return (
    <Overlay>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <HashLoader color={"#7700FF"} />
        {text && <Text>{text}</Text>}
      </div>
    </Overlay>
  );
};

export default Loading;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // 배경 흐림 처리
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${Colors.PalletLightGray};
`;
