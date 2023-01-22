import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledAsc = styled.svg<Props>`
  stroke: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
`;

export default StyledAsc;
