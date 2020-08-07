import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import { colors } from './config/const';
export const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-color:${colors.neutralBlack};
    color: ${colors.neutralWhite}
  }

`;