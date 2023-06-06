import PaginationStyled from "./PaginationStyled";

import prevCaret from "../../assets/icons/prev-caret.svg";

const Pagination = ({ current_page, maxPage, onPrev, onNext, onPage }) => {
  const totalPageUse = 4;
  const countPrevPages =
    (current_page % totalPageUse) - 1 >= 0
      ? (current_page % totalPageUse) - 1
      : (current_page % totalPageUse) - 1 + totalPageUse;

  const prevPagesArray = [...Array(countPrevPages).keys()];

  const countNextPages = totalPageUse - 1 - countPrevPages;

  const nextPagesArray = [...Array(countNextPages).keys()];

  const pageClickHandler = (pageNumber) => {
    onPage(pageNumber);
  };

  return (
    <PaginationStyled>
      <button
        className="caret btn-prev"
        onClick={onPrev}
        disabled={current_page < 2}
      >
        <img src={prevCaret} alt="" />
      </button>
      <div className="btn-pages">
        {prevPagesArray.length > 0
          ? prevPagesArray.map((_, index) => {
              const prevButtonNumber = current_page - (countPrevPages - index);
              return (
                <button
                  key={`prev-${prevButtonNumber}`}
                  onClick={() => pageClickHandler(prevButtonNumber)}
                >
                  {prevButtonNumber}
                </button>
              );
            })
          : null}
        <button className="active">{current_page}</button>
        {nextPagesArray.length > 0
          ? nextPagesArray.map((_, index) => {
              const nextIndex = index + 1; // index of next button
              const nextButtonNumber = current_page + nextIndex;
              return (
                <button
                  key={`next-${nextButtonNumber}`}
                  onClick={() => pageClickHandler(nextButtonNumber)}
                  disabled={nextButtonNumber > maxPage}
                >
                  {nextButtonNumber}
                </button>
              );
            })
          : null}
      </div>
      <button
        className="caret btn-next"
        onClick={onNext}
        disabled={current_page === maxPage}
      >
        <img src={prevCaret} alt="" />
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
