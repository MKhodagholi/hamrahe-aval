import { useSelector } from "react-redux";
import UserList from "../../components/UserList/UserList";
import UserManagementPageStyled, {
  ListToolsStyled,
} from "./UserManagementPageStyled";

import addIcon from "../../assets/icons/add.svg";

import searchIcon from "../../assets/icons/search-big.svg";
import settingIcon from "../../assets/icons/settings.svg";
import filterListIcon from "../../assets/icons/filter_list.svg";

const UserManagementPage = () => {
  const { users } = useSelector((state) => state.user);

  return (
    <UserManagementPageStyled>
      <ListToolsStyled>
        <div className="list-info">
          <div className="all-select">All (56)</div>
          <button>
            ADD NEW <img src={addIcon} alt="" />
          </button>
        </div>
        <div className="list-tools">
          <button>
            <img src={searchIcon} alt="" />
          </button>
          <button>
            <img src={settingIcon} alt="" />
          </button>
          <button>
            <img src={filterListIcon} alt="" />
          </button>
        </div>
      </ListToolsStyled>
      <UserList users={[...users, ...users, ...users]} />
    </UserManagementPageStyled>
  );
};

export default UserManagementPage;
