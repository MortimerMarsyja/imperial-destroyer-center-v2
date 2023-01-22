import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledDesc from "./Desc.styled";

interface Props {
  size?: number;
}

const Desc: FC<Props> = ({ size }) => {
  const { theme } = useThemeContext();
  return (
    <StyledDesc
      theme={theme}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94 94"
    >
      <title>{"desc"}</title>
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="inherit"
          strokeWidth={5}
          x={19.5}
          y={24.5}
          width={17}
          height={17}
          rx={7}
        />
        <rect
          stroke="inherit"
          strokeWidth={5}
          x={15.5}
          y={56.5}
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
          <path d="M65.599 15.683V79M78.21 67 65.598 79 53.11 67" />
        </g>
      </g>
    </StyledDesc>
  );
};

export default Desc;
