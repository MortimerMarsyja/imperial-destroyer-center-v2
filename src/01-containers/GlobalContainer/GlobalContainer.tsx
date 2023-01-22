import { FC } from "react";
import { useThemeContext } from "@contexts/themeContext";
import GlobalStyles from "globalStyles";

const GlobalContainer: FC = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <GlobalStyles theme={theme} />
    </>
  );
};

export default GlobalContainer;
