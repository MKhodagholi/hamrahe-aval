import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

  // reset some values
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  // add global styles
  html {
    font-family: "Poppins";
    font-size: 14px;
    ::-webkit-scrollbar {
      width: 0;
    }
  }

`;

export default GlobalStyled;
