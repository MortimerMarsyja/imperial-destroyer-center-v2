import devices from "@utils/devices";
import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledSideNav = styled.div<Props>`
  background-color: ${({ theme }) =>
    theme === "dark" ? themeColors.dark : "#ffffff"};
  position: fixed;
  height: calc(100vh - 80px);
  width: auto;
  display: flex;
  max-width: 120px;
  flex-direction: column;
  align-items: center;
  top: 18px;
  left: 18px;
  border-radius: 20px;
  padding: 0 22px;
  .initial {
    display: none;
  }
  .links {
    margin-top: 2em;
    display: flex;
    width: 106px;
    flex-direction: column;
    a {
      display: flex;
      justify-content: space-around;
      color: ${({ theme }) =>
        theme === "dark" ? themeColors.light : themeColors.dark};
      text-decoration: none;
      margin-bottom: 1rem;
      &.active {
        text-decoration: underline;

        svg {
          stroke: ${({ theme }) =>
            theme === "dark" ? themeColors.red[500] : themeColors.red[500]};
          fill: ${({ theme }) =>
            theme === "dark" ? themeColors.red[500] : themeColors.red[500]};
        }
      }
    }
  }
  .logo-container {
    margin-top: 2em;
  }
  @media (max-width: ${devices.mobileL}) {
    width: 30px;
    overflow: hidden;
    .initial {
      display: block;
    }
    .route-name {
      display: none;
    }
  }
`;

export default StyledSideNav;
