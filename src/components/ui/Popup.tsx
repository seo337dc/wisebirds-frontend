import { Colors } from "@/util/constant";
import styled from "styled-components";
import Button from "./Button";

type TProps = {
  title?: string;
  message?: string | React.ReactNode;
  onClose?: () => void;
};
const Popup = ({ title = "", message = "", onClose }: TProps) => {
  return (
    <Overlay>
      <Modal>
        <h2 className="text-lg font-medium">{title}</h2>
        <h3 className="text-base font-normal mb-5">{message}</h3>

        <div className="w-full flex justify-center">
          {onClose && (
            <Button
              onClick={onClose}
              width="60px"
              height="25px"
              color={Colors.White}
            >
              확인
            </Button>
          )}
        </div>
      </Modal>
    </Overlay>
  );
};

export default Popup;

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
  z-index: 9999;
`;

const Modal = styled.div`
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${Colors.White};
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
