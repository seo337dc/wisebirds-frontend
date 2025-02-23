import { styled } from "styled-components";
import { Colors } from "@/util/constant";

type TProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  borderColor?: string;
  className?: string;
  textSize?: string;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  width = "100%",
  height = "50px",
  bgColor = Colors.PalletPrimary,
  color = Colors.White,
  borderColor,
  className = "",
  textSize = "16px",
}: TProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <ButtonWrap
      className={className}
      disabled={disabled}
      onClick={handleClick}
      width={width}
      height={height}
      $bgColor={bgColor}
      color={color}
      $borderColor={borderColor}
      $textSize={textSize}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.button<{
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
