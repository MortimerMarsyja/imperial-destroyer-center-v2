import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledFooter from "./Footer.styled";

interface Props {
  children: React.ReactNode;
}

const Footer: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  return <StyledFooter theme={theme}>{children}</StyledFooter>;
};

export default Footer;
