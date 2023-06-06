import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
