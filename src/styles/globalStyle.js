import { createGlobalStyle } from 'styled-components';
import reset from './reset';
export const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "MontserratRegular";
    src: url("../assets/fonts/Montserrat-Regular.ttf");
  }
  @font-face {
    font-family: "MontserratBold";
    src: url("../assets/fonts/Montserrat-Bold.ttf");
  }
  @font-face {
    font-family: "MontserratBlack";
    src: url("../assets/fonts/Montserrat-Black.ttf");
  }
  
  body{
    font-family: "MontserratBold";
  }

`;