import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 17px 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;

  .header-search {
    display: flex;
    align-items: center;
    width: 35%;
    padding: 7px 14px;
    background-color: ${({ theme }) => theme.header.search.background};
    border-radius: 20px;
    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      font-family: Poppins;
      &::placeholder {
        color: ${({ theme }) => theme.header.search.placeholder};
      }
    }
    img {
      margin-right: 10px;
    }
  }

  .header-image {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
`;

export default HeaderStyled;
