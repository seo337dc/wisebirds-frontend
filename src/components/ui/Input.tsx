import { Colors } from "@/util/constant";
import { styled } from "styled-components";

type TProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isLine?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  bgColor?: string;
};

/**
 * 기본 Input 컴포넌트
 */
const Input = ({
  value,
  placeholder,
  onChange,
  disabled,
  isLine,
  fullWidth = true,
  error = false,
  onKeyDown,
  onBlur,
  bgColor = Colors.White,
}: TProps) => {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      <StyledInput
        value={value}
        placeholder={placeholder || "입력하세요."}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        $isLine={isLine}
        $error={error}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        $bgColor={bgColor}
      />
      {error && <ErrorText>⚠ 입력값이 올바르지 않습니다.</ErrorText>}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

const StyledInput = styled.input<{
  $isLine?: boolean;
  $error?: boolean;
  $bgColor: string;
}>`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: ${Colors.Black};
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 5px;
  border: 1px solid
    ${({ $isLine }) => ($isLine ? Colors.Neutral3 : Colors.White)};
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: ${({ $error }) =>
      $error ? Colors.Red : Colors.PalletPrimary};
    box-shadow: ${({ $error }) => ($error ? "0 0 5px red" : "0 0 5px blue")};
  }

  &:disabled {
    background-color: ${Colors.Neutral3};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: ${Colors.Red};
`;
