import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledAsc = styled.svg<Props>`
  stroke: ${({ theme }) => theme === 'dark'?themeColors.light:themeColors.dark};
  .disabled{
    stroke: ${({ theme }) => theme === 'dark'?themeColors.gray[100]:themeColors.gray[100]};
  }
`;

export default StyledAsc;
