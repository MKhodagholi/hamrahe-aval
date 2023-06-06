import Pagination from "../../Pagination/Pagination";
import FooterStyled from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-info">
        <p>Showing 1 to 10 of 50 entries</p>
      </div>
      <div className="footer-tools">
        <div className="display-number">
          Display <input type="number" />
        </div>
        <div className="footer-pagination">
          <Pagination />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
