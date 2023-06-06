import UserStyled from "./UserStyled";

const User = ({ user }) => {
  const {
    id,
    email,
    first_name: firstName,
    last_name: lastName,
    avatar,
  } = user;

  const userStatus = 'danger';

  return (
    <UserStyled>
      <div className="user-checkbox center">
        <input type="checkbox" />
      </div>
      <div className="user-image center">
        <img src={avatar} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="dynamic-space">
        <div className="user-name left">
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="user-email left">
          <p>{email}</p>
        </div>
        <div className="user-title left">
          <p>Project Manager</p>
        </div>
        <div className="user-amount center">
          <p>$11.70</p>
        </div>
        <div className={`user-status center ${userStatus}`}>
          <p>Danger</p>
        </div>
      </div>
      <div className="user-action center">
        <p>...</p>
      </div>
    </UserStyled>
  );
};

export default User;
