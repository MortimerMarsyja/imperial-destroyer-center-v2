import themeColors from "@utils/theme";
import { createGlobalStyle } from "styled-components";

interface Props {
  theme: string;
}

const GlobalStyles = createGlobalStyle<Props>`
  body {
    background-color: ${({ theme }) =>
      theme === "dark" ? themeColors.gray[900] : themeColors.gray[100]};
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family:  Helvetica, Sans-Serif;
  }
  #root{
    height: 100%;
  }

  .page-layout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
  }

  .page-content{
    width: 100%;
    height: 100%;
    margin-left: 188px;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color:${({ theme }) =>
      theme === "dark" ? themeColors.dark : themeColors.light};
    border-radius: 0.5rem;
    color: ${({ theme }) =>
      theme === "dark" ? themeColors.light : themeColors.dark};
    cursor: pointer;
    &:hover{
      background-color:${({ theme }) =>
        theme === "dark" ? themeColors.gray[800] : themeColors.gray[200]};
    }
  }

  select {
    padding: 0.5rem 1rem;
    border: none;
    background-color:${({ theme }) =>
      theme === "dark" ? themeColors.dark : themeColors.light};
    border-radius: 0.5rem;
    color: ${({ theme }) =>
      theme === "dark"
        ? themeColors.light
        : themeColors.dark};    border-radius: 0.5rem;
    cursor: pointer;
    &:hover{
      background-color:${({ theme }) =>
        theme === "dark" ? themeColors.gray[800] : themeColors.gray[200]};
    }

  }

  #toast{
    display: none;
    &.show{
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    color: red;
    font-size: 1.2rem;
    font-weight: 600;
    animation: toast 0.5s ease-in-out;
    }
  }

  @media (max-width: 540px) {
    .page-content{
    margin-left: 160px;
    }
  }

  @media (max-width: 365px) {
    .page-content{
    margin-left: 120px;
    }
  }
  
`;

export default GlobalStyles;
