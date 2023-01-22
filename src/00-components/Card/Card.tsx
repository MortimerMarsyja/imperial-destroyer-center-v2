import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledCard from "./Card.styled";

interface Props {
  children: React.ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  return <StyledCard theme={theme}>{children}</StyledCard>;
};

export default Card;
