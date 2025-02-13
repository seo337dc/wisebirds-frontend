import { styled } from "styled-components";

const IMG_URL = "@/assets/images";

type TProps = {
  fileName: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};
const Icon = ({
  fileName,
  alt,
  width = "24px",
  height = "24px",
  className = "",
  onClick,
}: TProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <IconImg
      className={className}
      src={`${IMG_URL}/${fileName}`}
      alt={alt}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};

export default Icon;

const IconImg = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
