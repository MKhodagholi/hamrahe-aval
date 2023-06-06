import { useDispatch, useSelector } from "react-redux";
import UserList from "../../components/UserList/UserList";
import UserManagementPageStyled, {
  AddUserFormStyled,
  ListToolsStyled,
} from "./UserManagementPageStyled";

import addIcon from "../../assets/icons/add.svg";

import searchIcon from "../../assets/icons/search-big.svg";
import settingIcon from "../../assets/icons/settings.svg";
import filterListIcon from "../../assets/icons/filter_list.svg";
import Modal from "../../components/Modal/Modal";
import { useRef, useState } from "react";
import { addUser } from "../../store/user-slice";

const UserManagementPage = () => {
  const { users, totalUsers, addedUsers } = useSelector((state) => state.user);
  const [needModal, setNeedModal] = useState(false);

  const dispatch = useDispatch();

  const nameNewUser = useRef(null);
  const lastNameNewUser = useRef(null);
  const jobNewUser = useRef(null);

  const savedUsers = [...users, ...addedUsers];

  const addUserHandler = (e) => {
    e.preventDefault();
    const username = nameNewUser.current.value;
    const userjob = jobNewUser.current.value;
    const lastName = lastNameNewUser.current.value;

    dispatch(addUser({ name: username, job: userjob, lastName }));
    modalCloseHandler();
  };

  const jsxAddUserModal = (
    <AddUserFormStyled onSubmit={addUserHandler}>
      <div className="fields">
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input type="text" id="first-name" ref={nameNewUser} />
        </div>

        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" id="last-name" ref={lastNameNewUser} />
        </div>

        <div>
          <label htmlFor="job">Job: </label>
          <input type="text" id="job" ref={jobNewUser} />
        </div>
      </div>

      <button>Add</button>
    </AddUserFormStyled>
  );

  const addUserClickHandler = () => {
    setNeedModal(true);
  };

  const modalCloseHandler = () => {
    setNeedModal(false);
  };

  return (
    <UserManagementPageStyled>
      <Modal
        needModal={needModal}
        title={"Add New User"}
        modalContent={jsxAddUserModal}
        onClose={modalCloseHandler}
      />
      <ListToolsStyled>
        <div className="list-info">
          <div className="all-select">All ({totalUsers})</div>
          <button onClick={addUserClickHandler}>
            ADD NEW <img src={addIcon} alt="" />
          </button>
        </div>
        <div className="list-tools">
          <button disabled={true}>
            <img src={searchIcon} alt="" />
          </button>
          <button disabled={true}>
            <img src={settingIcon} alt="" />
          </button>
          <button disabled={true}>
            <img src={filterListIcon} alt="" />
          </button>
        </div>
      </ListToolsStyled>
      <UserList users={savedUsers} />
    </UserManagementPageStyled>
  );
};

export default UserManagementPage;
