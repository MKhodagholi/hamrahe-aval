import { styled } from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  button {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-color: transparent;
    color: ${({ theme }) => theme.pagination.text};
    border-radius: 2px;
    font-family: Poppins;
  }

  .caret {
    background-color: ${({ theme }) => theme.pagination.caret.background};
  }
  .btn-next {
    img {
      transform: rotate(180deg);
    }
    margin-right: 0;
  }

  .btn-pages {
    button.active {
      background-color: ${({ theme }) => theme.pagination.active.background};
      color: ${({ theme }) => theme.pagination.active.text};
    }
    button:not(.active):hover {
      border: 1px solid ${({ theme }) => theme.pagination.hover.border};
      color: ${({ theme }) => theme.pagination.hover.text};
    }
  }
`;

export default PaginationStyled;
