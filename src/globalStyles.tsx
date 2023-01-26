import devices from "@utils/devices";
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
    border-radius: 0.5rem;
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



@keyframes slide {
    100% { 
      right: 0;
    }

}


@keyframes dissapear {
  0% {
    opacity: 1;
  }
  80%{
    opacity: 1
  }
  100% {
    opacity: 0;
  }
}


  .showToast{
     animation: slide 0.5s forwards, dissapear 2s forwards; 
    position: fixed;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    top: 92px;
    width: auto;
    right: 30px;
    height: 30px;
    padding: 0 20px;
    align-items: center;
    justify-items: center;
    display: flex;
    border-radius: 16px;
    z-index: 999;
  }

  .success{
    background-color: ${themeColors.green[500]};
    color: ${themeColors.gray[100]};
  }

  .error{
    background-color: ${themeColors.red[500]};
    color: ${themeColors.gray[100]};
  }

  .warning{
    background-color: ${themeColors.yellow[500]};
    color: ${themeColors.gray[100]};
  }

  .notification{
    background-color: ${themeColors.gray[500]};
    color: ${themeColors.gray[100]};
  }

  @media (max-width: ${devices.mobileL}) {
    .page-content{
    margin-left: 120px;
    }
  }
  
`;

export default GlobalStyles;
