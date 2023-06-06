import HeaderStyled from "./HeaderStyled";

import searchIcon from "../../../assets/icons/search.svg";
import { useSelector } from "react-redux";

const Header = () => {

  const {users} = useSelector(state => state.user);

  const user = users[0];

  return (
    <HeaderStyled>
      <h3>User List</h3>
      <div className="header-search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="search..." />
      </div>
      <div className="header-image">
        <img src={user?.avatar} alt="" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
