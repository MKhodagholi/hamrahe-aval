import { styled } from "styled-components";

const UserStyled = styled.div`
  display: flex;
  align-items; center;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.user.border};
  color: ${({ theme }) => theme.user.text};

  .edit-icon {
    cursor: not-allowed;
    img {
      width: 18px;
      height: 18px;
      margin-left: 20px;
    }
  }
`;

export const ModalDeleteStyled = styled.div`
  button {
    width: max-content;
    padding: 10px 20px;
    border-radius: 4px;
  }

  .delete {
    background-color: ${({ theme }) => theme.error};
    color: #fff;
    margin-right: 40px;
  }

  .cancel {
    background-color: ${({ theme }) => theme.success};
  }

  .button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

export default UserStyled;
