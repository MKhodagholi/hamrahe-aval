import { styled } from "styled-components";

const checkboxWidth = 50;
const imageWidth = 67;
const actionWidth = 115;
const actionWidth_Tablet = 40;
const dynamicSpaceWidth = `calc(100% - ${
  checkboxWidth + imageWidth + actionWidth
}px)`;

const dynamicSpaceWidth_Tablet = `calc(100% - ${
  checkboxWidth + imageWidth + actionWidth_Tablet
}px)`;

const UserListStyled = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .titles {
    position: sticky;
    top: 0;
    display: flex;
    height: 50px;
    border-bottom: 2px solid ${({ theme }) => theme.user.borderTitles};
    font-weight: 500;
    background-color: #fff;
  }

  .user-checkbox {
    width: ${checkboxWidth}px;
  }

  .user-image {
    width: ${imageWidth}px;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }

  .user-action {
    width: ${actionWidth}px;
  }

  // @media screen and (max-width: 800px) { 
  //   .user-action {
  //     width: ${actionWidth_Tablet}px;
  //   }
  //   .dynamic-space {
  //     width: calc(100% - 157px);
  //   }
  // }

  .dynamic-space {
    display: flex;
    align-items: center;
    width: ${dynamicSpaceWidth};

    div p {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 14px 16px;
    }

    .user-name {
      width: 30%;
    }

    .user-email {
      width: 18%;
    }

    .user-title {
      width: 12%;
    }

    .user-amount {
      width: 20%;
    }

    .user-status {
      width: 15%;
      &.danger p {
        padding: 2px 10px;
        border-radius: 25px;
        color: #fff;
        background-color: ${({ theme }) => theme.user.status.danger}
      }
      &.success p {
        background-color: ${({ theme }) => theme.user.status.success}
      }
      &.warning p {
        background-color: ${({ theme }) => theme.user.status.warning}
      }
    }

    @media screen and (max-width: 800px) {
        .user-name {
          width: 27%;
        }
    
        .user-email {
          width: 27%;
        }
    
        .user-title {
          width: 26%;
        }
    
        .user-amount {
          width: 10%;
        }
    
        .user-status {
          width: 10%;
    }
  }
`;

export default UserListStyled;
