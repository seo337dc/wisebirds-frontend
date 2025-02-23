import { Colors } from "@/util/constant";
import { styled } from "styled-components";

type TProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disable?: boolean;
  isLine?: boolean;
};

/**
 * default input 컴포넌트
 */
const Input = ({ value, placeholder, onChange, disable, isLine }: TProps) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder || "입력하세요."}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disable}
      $isLine={isLine}
    />
  );
};

export default Input;

const StyledInput = styled.input<{ $isLine?: boolean }>`
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
