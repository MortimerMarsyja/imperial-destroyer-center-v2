import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledAsc from "./Asc.styled";

interface Props {
  srokeC?: string;
  size?: number;
}

const Asc: FC<Props> = ({ size }) => {
  const { theme } = useThemeContext();
  return (
    <StyledAsc
      theme={theme}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94 94"
    >
      <title>{"asc"}</title>
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="inherit"
          strokeWidth={5}
          x={19.5}
          y={59.5}
          width={17}
          height={17}
          rx={7}
        />
        <rect
          stroke="inherit"
          strokeWidth={5}
          x={15.5}
          y={24.5}
          width={21}
          height={21}
          rx={7}
        />
        <g
          stroke="inherit"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={5}
        >
          <path d="M65.72 79V15.683M53.11 27.683l12.611-12 12.489 12" />
        </g>
      </g>
    </StyledAsc>
  );
};

export default Asc;
