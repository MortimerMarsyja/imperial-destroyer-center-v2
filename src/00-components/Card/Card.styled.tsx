import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledCard = styled.div<Props>`
  background-color: ${({ theme }) =>
    theme === "dark" ? themeColors.dark : themeColors.light};
  border-radius: 0.5rem;
  width: 300px;
  height: 200px;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding-bottom: 1rem;
  margin: 1rem;
  color: ${({ theme }) =>
    theme === "dark" ? themeColors.light : themeColors.dark};
  ul {
    list-style: none;
    padding: 0;
    margin-top: 6px;
    li {
      overflow-x: hidden;
      height: 20px;
      padding: 0.1rem 0.8rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis ellipsis;
      p {
        margin: 0;
        font-size: small;
      }
    }
  }
  @media (max-width: 500px) {
    width: 200px;
  }
  @media (max-width: 365px) {
    width: 184px;
  }
`;

export default StyledCard;
