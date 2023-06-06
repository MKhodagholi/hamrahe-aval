import { styled } from "styled-components";

const UserManagementPageStyled = styled.div``;

export const ListToolsStyled = styled.div`
  position: sticky;
  top: 0;
  // z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 0 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

  .list-info {
    display: flex;
    align-items: center;

    .all-select {
      font-size: 18px;
    }

    button {
      display: flex;
      align-items: center;
      padding: 9px 15px;
      margin-left: 27px;
      background-color: ${({ theme }) => theme.tools.addBtn.background};
      color: ${({ theme }) => theme.tools.addBtn.text};
      border-radius: 20px;
    }
  }

  .list-tools {
    display: flex;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      border-radius: 50%;
      &:last-of-type {
        margin-right: 0;
      }
      padding: 10px;
      &:hover {
        background-color: ${({ theme }) => theme.tools.icons.hover.background};
      }
    }
  }
`;

export const AddUserFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 20px;
    &:focus,
    &:active {
      outline: 1px solid #888;
    }
  }
  button {
    width: max-content;
    margin: auto;
    width: 70%;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.success};
  }

  .fields {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    flex-wrap: wrap;

    gap: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default UserManagementPageStyled;
