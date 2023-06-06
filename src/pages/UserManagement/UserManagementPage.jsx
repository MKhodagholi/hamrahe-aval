import { useSelector } from "react-redux";
import UserList from "../../components/UserList/UserList";
import UserManagementPageStyled from "./UserManagementPageStyled";

const UserManagementPage = () => {
  const { users } = useSelector((state) => state.user);

  return (
    <UserManagementPageStyled>
      <UserList users={users} />
    </UserManagementPageStyled>
  );
};

export default UserManagementPage;
