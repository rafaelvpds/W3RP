import { createGlobalStyle } from 'styled-components'
import { Color } from '../../theme/colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }

  body,
  html,
  input,
  select,
  button {
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color:  ${Color.cinza100};
  }
`
