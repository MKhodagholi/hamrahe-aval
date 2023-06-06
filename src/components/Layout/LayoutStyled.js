import { styled } from "styled-components";

const LayoutStyled = styled.div`
  height: 100vh;
  overflow: hidden;

  .content {
    height: calc(100vh - 130px); // 70px header, 60px footer
    overflow: auto;
    overflow-x: hidden;
  }
`;

export default LayoutStyled;
