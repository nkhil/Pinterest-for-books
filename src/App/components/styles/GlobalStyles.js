import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #f9fbff;
  }

  p {
    line-height: 1.8;
    font-size: 1.1rem;
    padding-bottom: 50px;
  }

  li {
    list-style-type: none;
    margin-right: 20px;
    margin-top: 20px;
  }

  img {
    border-radius: 5px;
    box-shadow: rgba(25, 4, 69, 0.1) 0px 20px 50px;
  }
`

export default GlobalStyle
