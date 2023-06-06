import { styled } from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.footer.text};
  padding: 14px 16px;
  border-top: 2px solid ${({ theme }) => theme.footer.border};
  
  .footer-tools {
    display: flex;
    align-items: center;

    .display-number {
      margin-right: 30px;
      input {
        width: 51px;
        height: 30px;
        padding: 4px 0;
        padding-left: 5px;
        padding-right: 2px;
        margin-left: 5px;
        border: 1px solid ${({ theme }) => theme.footer.input.border};
        border-radius: 4px;
        color: ${({ theme }) => theme.footer.input.text};
        outline: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default FooterStyled;
