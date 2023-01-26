import themeColors from "@utils/theme";
import styled from "styled-components";
import devices from "@utils/devices";
interface Props {
  theme: string;
}

const StyledBottomControlsWrapper = styled.div<Props>`
  position: fixed;
  bottom: 60px;
  left: calc(50% - 206px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 50px;
  background-color: ${({ theme }) =>
    theme === "light" ? themeColors.light : themeColors.dark};
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  box-sizing: border-box;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: ${devices.mobileL}) {
    flex-direction: column;
    left: calc(50% - 112px);
    height: auto;
    padding: 6px 0;
    &:nth-child(1) {
      margin-bottom: 20px;
      color: red !important;
    }
  }
`;

export default StyledBottomControlsWrapper;
