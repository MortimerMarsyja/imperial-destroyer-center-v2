import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

export const StyledComboSelect = styled.div`
  height: 50px;
  width: auto;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: Props) =>
    theme === "light" ? themeColors.light : themeColors.dark};
  color: ${({ theme }: Props) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  border-radius: 16px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }: Props) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  transition: all 0.2s ease-in-out;
  button {
    margin-right: 6px;
  }
`;

export default StyledComboSelect;
