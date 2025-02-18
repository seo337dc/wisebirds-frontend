import { useState } from "react";
import styled from "styled-components";

import { LineButton } from "@/components/ui/Button";

import Login from "../template/Login";
import Signup from "../template/Signup";

import { Colors } from "@/util/constant";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <Wrap>
      {openLogin && <Login onClose={() => setOpenLogin(false)} />}
      {openSignup && <Signup onClose={() => setOpenSignup(false)} />}
      <LineButton onClick={() => setOpenSignup(true)}>회원가입</LineButton>
      <LineButton onClick={() => setOpenLogin(true)}>로그인</LineButton>
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
