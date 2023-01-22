import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

export const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: fit-content;
  padding: 0 12px;
  color: ${({ theme }: Props) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  .current-page {
    margin: 0 6px;
  }
  .total-pages {
    margin-left: 6px;
  }
  button {
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: transparent;
      }
    }
  }
`;
