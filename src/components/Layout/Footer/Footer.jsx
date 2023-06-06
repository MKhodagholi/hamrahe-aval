import { useDispatch, useSelector } from "react-redux";
import FooterStyled from "./FooterStyled";

import Pagination from "../../Pagination/Pagination";
import { userActions } from "../../../store/user-slice";
import { useState } from "react";

const Footer = () => {
  const { currentPage, totalUsers, userPerPage } = useSelector(
    (state) => state.user
  );

  const [uesrPerPageError, setUesrPerPageError] = useState(false);

  const dispatch = useDispatch();

  const maxPage = Math.ceil(totalUsers / userPerPage);

  const startIndexEntry = (currentPage - 1) * userPerPage + 1;
  const endIndexEntry =
    currentPage * userPerPage > totalUsers
      ? totalUsers
      : currentPage * userPerPage;

  const nextPageHandler = () => {
    dispatch(userActions.changeCurrentPage(currentPage + 1));
  };

  const prevPageHandler = () => {
    dispatch(userActions.changeCurrentPage(currentPage - 1));
  };

  const pageClickHandler = (pageNumber) => {
    dispatch(userActions.changeCurrentPage(pageNumber));
  };

  const changePerPage = (e) => {
    const value = e.target.value;
    if (value * currentPage > totalUsers) {
      dispatch(userActions.changeCurrentPage(1));
    }
    if (value > totalUsers || value < 1) {
      setUesrPerPageError(true);
    } else {
      setUesrPerPageError(false);
      dispatch(userActions.changeUserPerPage(value));
    }
  };

  return (
    <FooterStyled>
      <div className="footer-info">
        <p>
          Showing {startIndexEntry} to {endIndexEntry} of {totalUsers} entries
        </p>
      </div>
      <div className="footer-tools">
        <div className="display-number">
          Display{" "}
          <input
            type="number"
            value={userPerPage}
            onChange={changePerPage}
            className={uesrPerPageError ? "error" : ""}
          />
        </div>
        <div className="footer-pagination">
          <Pagination
            current_page={currentPage}
            maxPage={maxPage}
            onNext={nextPageHandler}
            onPrev={prevPageHandler}
            onPage={pageClickHandler}
          />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
