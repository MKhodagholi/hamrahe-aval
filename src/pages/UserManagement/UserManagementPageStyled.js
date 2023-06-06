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
    button {
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export default UserManagementPageStyled;
