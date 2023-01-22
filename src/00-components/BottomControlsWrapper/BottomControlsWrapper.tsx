import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledBottomControlsWrapper from "./BottomControlsWrapper.styled";

interface Props {
  children: React.ReactNode;
}

const BottomControlsWrapper: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <StyledBottomControlsWrapper theme={theme}>
      {children}
    </StyledBottomControlsWrapper>
  );
};

export default BottomControlsWrapper;
