import styled from "styled-components";
import { Colors } from "@/util/constant";
import Icon from "./Icon";

import type { TModalProps } from "@/model/common";

interface TProps extends TModalProps {
  children?: React.ReactNode;
}

const Modal = ({ onClose, children }: TProps) => {
  return (
    <Overlay>
      <Content>
        <Icon
          className="absolute right-2 top-2 cursor-pointer"
          fileName="Icon_close_gray.png"
          alt="Icon_close_gray"
          onClick={onClose}
        />
        <div className="relative">{children && children}</div>
      </Content>
    </Overlay>
  );
};

export default Modal;

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

const Content = styled.div`
  position: relative;
  min-width: 360px;
  min-height: 160px;
  padding: 35px 30px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
  background-color: ${Colors.White};
`;
