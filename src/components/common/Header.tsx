import { usePathname } from "next/navigation";
import { styled } from "styled-components";
import { Colors } from "@/util/constant";
import { LinkButton } from "@/components/ui/Button";

const Header = () => {
  const pathName = usePathname();

  return (
    <Wrap>
      <LinkButton href="/" currentPage={pathName === "/"}>
        회원가입
      </LinkButton>
      <LinkButton href="/" currentPage={pathName === "/wish"}>
        로그인
      </LinkButton>
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

const LogoText = styled.p`
  font-weight: 700;
  font-size: 24px;
`;
