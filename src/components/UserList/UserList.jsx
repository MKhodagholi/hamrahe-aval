import User from "../User/User";
import UserListStyled from "./UserListStyled";

const UserList = ({ users }) => {
  return (
    <UserListStyled>
      {users?.length > 0 ? users.map((user) => <User user={user} />) : null}
    </UserListStyled>
  );
};

export default UserList;
