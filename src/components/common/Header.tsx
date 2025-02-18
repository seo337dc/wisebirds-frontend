import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import styled from "styled-components";

import { LineButton } from "@/components/ui/Button";
import Login from "../template/Login";
import Signup from "../template/Signup";

import { useAuthStore } from "@/store/authStore";
import { Colors } from "@/util/constant";

const Header = () => {
  const router = useRouter();
  const { authInfo, clearToken } = useAuthStore();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleLogout = () => {
    clearToken();
    router.push("/");
  };

  return (
    <Wrap>
      {openLogin && <Login onClose={() => setOpenLogin(false)} />}
      {openSignup && <Signup onClose={() => setOpenSignup(false)} />}

      {authInfo ? (
        <LineButton onClick={handleLogout}>로그아웃</LineButton>
      ) : (
        <Fragment>
          <LineButton onClick={() => setOpenSignup(true)}>회원가입</LineButton>
          <LineButton onClick={() => setOpenLogin(true)}>로그인</LineButton>
        </Fragment>
      )}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem /* 80px */;
  padding: 0 100px;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2em;

  background-color: ${Colors.White};

  z-index: 2;
`;
