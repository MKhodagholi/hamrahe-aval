import { styled } from "styled-components";

const UserStyled = styled.div`

  display: flex;
  align-items; center;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.user.border};
  color: ${({ theme }) => theme.user.text};
`;

export default UserStyled;
