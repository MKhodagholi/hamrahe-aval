import User from "../User/User";
import UserListStyled from "./UserListStyled";

const UserList = ({ users }) => {
  return (
    <UserListStyled>
      <div className="titles">
        <div className="user-checkbox center">
          <input type="checkbox" />
        </div>
        <div className="user-image center">Image</div>
        <div className="dynamic-space">
          <div className="user-name left">
            <p>Name</p>
          </div>
          <div className="user-email left">
            <p>Email</p>
          </div>
          <div className="user-title left">
            <p>Title</p>
          </div>
          <div className="user-amount center">
            <p>Amount</p>
          </div>
          <div className="user-status  center">
            <p>Status</p>
          </div>
        </div>
        <div className="user-action center">Action</div>
      </div>
      {users?.length > 0
        ? users.map((user) => <User key={user.id} user={user} />)
        : null}
    </UserListStyled>
  );
};

export default UserList;
