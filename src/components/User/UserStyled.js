import { styled } from "styled-components";

const checkboxWidth = 50;
const imageWidth = 67;
const actionWidth = 115;
const dynamicSpaceWidth = `calc(100% - ${
  checkboxWidth + imageWidth + actionWidth
}px)`;

const UserStyled = styled.div`

  display: flex;
  align-items; center;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.user.border};
  color: ${({ theme }) => theme.user.text};

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
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

  .dynamic-space {
    display: flex;
    align-items: center;
    width: ${dynamicSpaceWidth};

    div {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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
    }

    @media screen and (max-width: 800px) {
        .user-name {
          width: 20%;
        }
    
        .user-email {
          width: 20%;
        }
    
        .user-title {
          width: 20%;
        }
    
        .user-amount {
          width: 10%;
        }
    
        .user-status {
          width: 10%;
    }
  }
`;

export default UserStyled;
