import { LineButton } from "@/components/ui/Button";

import { Colors } from "@/util/constant";
import Login from "../template/Login";
import { useModalStore } from "@/store/modalStore";
import styled from "styled-components";

const Header = () => {
  const { isOpen, onOpen } = useModalStore();

  return (
    <Wrap>
      {isOpen && <Login />}
      <LineButton onClick={onOpen}>회원가입</LineButton>
      <LineButton onClick={() => {}}>로그인</LineButton>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem /* 80px */;
  padding: 0 200px;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2em;

  background-color: ${Colors.White};

  z-index: 2;
`;
