import { createGlobalStyle } from 'styled-components';

const GlobalStlye = createGlobalStyle`
  @font-face {
    font-family: 'Cerebri Sans';
    font-style: normal;
    font-weight: normal;
    src: url(${require('../assets/fonts/cerebri-sans-regular.eot')});
    src: url(${require('../assets/fonts/cerebri-sans-regular.eot?#iefix')}) format('embedded-opentype'),
        url(${require('../assets/fonts/cerebri-sans-regular.woff2')}) format('woff2'),
        url(${require('../assets/fonts/cerebri-sans-regular.woff')}) format('woff'),
        url(${require('../assets/fonts/cerebri-sans-regular.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Cerebri Sans';
    font-style: normal;
    font-weight: bold;
    src: url(${require('../assets/fonts/cerebri-sans-bold.eot')});
    src: url(${require('../assets/fonts/cerebri-sans-bold.eot?#iefix')}) format('embedded-opentype'),
        url(${require('../assets/fonts/cerebri-sans-bold.woff2')}) format('woff2'),
        url(${require('../assets/fonts/cerebri-sans-bold.woff')}) format('woff'),
        url(${require('../assets/fonts/cerebri-sans-bold.ttf')}) format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: ${props => props.theme.goldLight};
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.typeface};
    font-size: 18px;
    -webkit-text-size-adjust: 100%;

    @media (max-width: ${props => props.theme.breakSmall}) {
      font-size: 16px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0 0;
  }

  h1 {
    margin-top: 2rem;
    font-size: 1.953rem;
  }

  h2 {
    margin-top: 1.6rem;
    font-size: 1.563rem;
  }

  h3 {
    margin-top: 1.28rem;
    font-size: 1.25rem;
  }

  h4,
  h5 {
    margin-top: 1.024rem;
    font-size: 1rem;
  }

  h6 {
    font-size: 0.8rem;
  }

  p {
    margin: 0.5rem 0 1rem;
    line-height: 1.5;
  }
`;

export default GlobalStlye;