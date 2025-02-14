import Link from "next/link";

import { Colors } from "@/util/constant";
import styled from "styled-components";

export const ButtonWrap = styled.button<{
  width: string;
  height: string;
  color: string;
  $bgColor: string;
  $borderColor?: string;
  $textSize?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${(props) =>
    props.disabled ? Colors.NeutralE : props.$bgColor};
  border: ${({ $borderColor }) =>
    $borderColor ? `1px solid ${$borderColor}` : "none"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: ${({ $textSize }) => $textSize};
  font-weight: 400;

  transition: background-color 0.3s;
`;

export const LinkText = styled(Link)<{ $currentPage: boolean }>`
  height: 35px;
  font-weight: 500;
  font-size: 20px;

  border-bottom: 1px solid
    ${({ $currentPage }) => ($currentPage ? Colors.LinkLine : Colors.White)};
`;

export const LineBtn = styled.button`
  height: 35px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

export const BadgeBtn = styled(Link)`
  width: 83px;
  height: 35px;
  padding: 3px 15px;
  border-radius: 25px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.Neutral5};
  background: ${Colors.White};
  box-shadow: 0px 1px 8px 0px #00000026;

  display: flex;
  justify-content: center;
  align-items: center;
`;
