import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
  color?: string;
  size?: string;
  weight?: number;
  className?: string;
  lineThrough?: boolean; // ✅ 추가된 속성 (선 긋기 여부)
};

const Text = ({
  children,
  className = "",
  color,
  size = "16px",
  weight = 700,
  lineThrough = false, // ✅ 기본값 false
}: TProps) => {
  return (
    <TextContent
      className={className}
      color={color}
      size={size}
      weight={weight}
      $lineThrough={lineThrough}
    >
      {children}
    </TextContent>
  );
};

export default Text;

type TextType = Pick<TProps, "color" | "size" | "weight"> & {
  $lineThrough?: boolean;
};

const TextContent = styled.span<TextType>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color && color};
  text-decoration: ${({ $lineThrough }) =>
    $lineThrough ? "line-through" : "none"}; // ✅ 선 긋기 설정
`;
