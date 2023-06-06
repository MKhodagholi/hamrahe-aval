import UserStyled from "./UserStyled";

const User = ({ user }) => {
  const {
    id,
    email,
    first_name: firstName,
    last_name: lastName,
    avatar,
  } = user;

  const userStatusArray = ["danger", "success", "warning"];

  const userTtileArray = [
    "CTO",
    "Java Engineer",
    "UI Engineer",
    "CIO",
    "VP",
    "Helpdesk",
    "Python Engineer",
    "Tech Lead",
  ];

  const userAmountArray = [11.7, 5.22, 17.84, 14.81, 6.48, 8.99];

  const nameLength = firstName.length;

  const userAmount = userAmountArray[nameLength % userAmountArray.length];

  const userTitle = userTtileArray[nameLength % userTtileArray.length];

  const userStatus = userStatusArray[nameLength % userStatusArray.length];

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
          <p>{userTitle}</p>
        </div>
        <div className="user-amount center">
          <p>${userAmount}</p>
        </div>
        <div className={`user-status center ${userStatus}`}>
          <p>{userStatus}</p>
        </div>
      </div>
      <div className="user-action center">
        <p>...</p>
      </div>
    </UserStyled>
  );
};

export default User;
