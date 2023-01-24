import { FC } from "react";
import StyledImage from "./Image.styled";

interface ImageProps {
  alt: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  pngSRC: string;
  width?: number;
  height?: number;
  jpgSRC: string;
}

const Image: FC<ImageProps> = ({
  alt,
  onError,
  pngSRC,
  jpgSRC,
  width = 200,
  height = 200,
}) => {
  return (
    <StyledImage width={width} height={height}>
      <object data={jpgSRC} type="image/jpeg">
        <img
          height={height}
          width={width}
          src={pngSRC}
          alt={alt}
          onError={onError}
        />
      </object>
    </StyledImage>
  );
};

export default Image;
