import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}

const StyledImage = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export default StyledImage;
