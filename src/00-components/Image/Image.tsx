import { FC } from "react";
import StyledImage from "./Image.styled";

interface ImageProps {
  src: string;
  alt: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  pngSRC?: string;
  width?: number;
  height?: number;
  jpgSRC?: string;
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  onError,
  pngSRC,
  jpgSRC,
  width = 200,
  height = 200,
}) => {
  return (
    <StyledImage width={width} height={height}>
      <object data={src} type="image/jpeg">
        <img
          height={height}
          width={width}
          src={pngSRC || jpgSRC}
          alt={alt}
          onError={onError}
        />
      </object>
    </StyledImage>
  );
};

export default Image;
