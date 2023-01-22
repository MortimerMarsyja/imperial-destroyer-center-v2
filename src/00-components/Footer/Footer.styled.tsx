import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledFooter = styled.footer<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  color: ${({ theme }) =>
    theme === "dark" ? themeColors.light : themeColors.dark};
  background-color: ${({ theme }) =>
    theme === "dark" ? themeColors.dark : themeColors.light};
  padding: 0 1rem;
`;

export default StyledFooter;
