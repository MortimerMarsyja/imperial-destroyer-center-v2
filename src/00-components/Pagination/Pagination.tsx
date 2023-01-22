import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import { StyledPagination } from "./Pagination.styled";

interface Props {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
}

const Pagination: FC<Props> = ({
  currentPage,
  nextPage,
  prevPage,
  totalPages,
  nextDisabled,
  prevDisabled,
}) => {
  const { theme } = useThemeContext();
  return (
    <StyledPagination theme={theme}>
      <button disabled={prevDisabled} onClick={prevPage}>
        Prev
      </button>
      <div className="current-page">{currentPage}</div>
      <button disabled={nextDisabled} onClick={nextPage}>
        Next
      </button>
      <div className="total-pages">of {totalPages}</div>
    </StyledPagination>
  );
};

export default Pagination;
