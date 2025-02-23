import { useState } from "react";
import * as S from "./Input.styles";

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
    <S.StyledInput
      value={value}
      placeholder={placeholder || "입력하세요."}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disable}
      $isLine={isLine}
    />
  );
};

export default Input;

export const InputPassword = ({ value, placeholder, onChange }: TProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={"w-full relative"}>
      <S.StyledInput
        type={isShow ? "text" : "password"}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
      />
      <S.EyeImg
        onClick={() => setIsShow(!isShow)}
        src="/assets/images/eye_off.png"
        alt="eye_off"
      />
    </div>
  );
};

/**
 * textarea
 */

export const InputTextarea = ({
  value,
  placeholder,
  onChange,
  rows = 10,
  resize = "none",
}: TProps & {
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
}) => {
  return (
    <S.StyledTextarea
      value={value}
      placeholder={placeholder || "내용을 입력하세요."}
      onChange={(e) => onChange && onChange(e.target.value)}
      rows={rows}
      $resize={resize}
    />
  );
};
