import UserListStyled from "./UserListStyled";

const User = (user) => {
  const {
    id,
    email,
    firstName: first_name,
    lastName: last_name,
    avatar,
  } = user;

  return (
    <UserListStyled>
      <input type="checkbox" />
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      
    </UserListStyled>
  );
};

export default User;
