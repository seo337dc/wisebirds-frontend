import { Colors } from "@/util/constant";
import * as S from "./Button.styles";

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
    <S.ButtonWrap
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
    </S.ButtonWrap>
  );
};

export default Button;

type TPropsLinkBtn = {
  href: string;
  children: React.ReactNode;
  currentPage: boolean;
};
export const LinkButton = ({ href, children, currentPage }: TPropsLinkBtn) => {
  return (
    <S.LinkText href={href} $currentPage={currentPage}>
      {children}
    </S.LinkText>
  );
};

type TLineBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const LineButton = ({ onClick, children }: TLineBtnProps) => {
  return <S.LineBtn onClick={onClick}>{children}</S.LineBtn>;
};

type TBadgeBtnProps = {
  href: string;
  children: React.ReactNode;
};
export const BadgeButton = ({ href, children }: TBadgeBtnProps) => {
  return <S.BadgeBtn href={`${href}`}>{children}</S.BadgeBtn>;
};
