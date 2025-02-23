import styled from "styled-components";

import { Colors } from "@/util/constant";

export const StyledInput = styled.input<{ $isLine?: boolean }>`
  width: 100%;

  background-color: ${Colors.White};
  border-radius: 5px;
  font-size: 16px;
  color: #8d94a0;
  padding: 10px 12px;
  border: 1px solid
    ${({ $isLine }) => ($isLine ? Colors.Neutral3 : Colors.White)};
  outline: none;
`;

export const EyeImg = styled.img`
  position: absolute;
  z-index: 4;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea<{ $resize: string }>`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${Colors.Neutral3};
  color: #8d94a0;
  border-radius: 5px;
  outline: none;
  resize: ${({ $resize }) => $resize};
`;
