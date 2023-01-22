import Sun from "@assets/icons/Sun";
import Moon from "@assets/icons/Moon";
import StyledNavbar from "./Navbar.styled";
import themeColors from "@utils/theme";
import { useThemeContext } from "@contexts/themeContext";
const Navbar = (): JSX.Element => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <StyledNavbar theme={theme}>
      <button onClick={toggleTheme} className="theme-toggler">
        {theme === "light" ? (
          <Sun size={18} strokeColor={themeColors.dark} />
        ) : (
          <Moon size={18} strokeColor={themeColors.light} />
        )}
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
