import PaginationStyled from "./PaginationStyled";

import prevCaret from "../../assets/icons/prev-caret.svg";

const Pagination = () => {
  return (
    <PaginationStyled>
      <button className="caret btn-prev">
        <img src={prevCaret} alt="" />
      </button>
      <div className="btn-pages">
        <button>1</button>
        <button className="active">2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <button className="caret btn-next">
        <img src={prevCaret} alt="" />
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
