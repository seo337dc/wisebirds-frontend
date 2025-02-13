import NextImage from "next/image";
import { styled } from "styled-components";

type TProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const Image = ({ src, alt, width = "50px", height = "50px" }: TProps) => {
  return (
    <ImageContent
      src={src}
      alt={alt}
      width={160} // Next.js의 최적화를 위해 지정 (16rem)
      height={120} // 12rem
      $cusHeigh={height}
      $cusWidth={width}
    />
  );
};

export default Image;

type TypeStyle = {
  $cusWidth?: string;
  $cusHeigh?: string;
};
const ImageContent = styled(NextImage)<TypeStyle>`
  width: ${({ $cusWidth }) => $cusWidth};
  height: ${({ $cusHeigh }) => $cusHeigh};
`;
