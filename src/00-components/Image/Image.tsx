import { FC } from "react";
import StyledImage from "./Image.styled";

interface ImageProps {
  alt: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  src: string;
  width?: number;
  height?: number;
  jpgSRC?: string;
}

const Image: FC<ImageProps> = ({
  alt,
  onError,
  src, 
  jpgSRC='',
  width = 200,
  height = 200,
}) => {
  return (
    <StyledImage width={width} height={height}>
      <object data={jpgSRC} type="image/jpeg">
        <img
          height={height}
          width={width}
          src={src}
          alt={alt}
          onError={onError}
        />
      </object>
    </StyledImage>
  );
};



export default Image;
