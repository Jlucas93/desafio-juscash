import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


html {
  --color-success-light: #aae2ce;
  --color-success-base: #2cBD62;
  --color-success-dark: #3bb354;

  --color-danger-light: #F97474;
  --color-danger-base: #E31C3D;
  --color-danger-dark: #B31E22;

  --color-warning-light: #FAD980;
  --color-warning-base: #FDB81E;
  --color-warning-dark: #CA9318;

  --color-info-light: #76bbf7;
  --color-info-base: #54a2c6;
  --color-info-dark: #325676;

  --color-white: #ffffff;
  --color-black: #000000;

  --color-gray-100: #F8F9FA;
  --color-gray-200: #E9ECEF;
  --color-gray-300: #DEE2E5;
  --color-gray-400: #D1D5DA;
  --color-gray-500: #B8BEC5;
  --color-gray-600: #9D9AAD;
  --color-gray-700: #888599;
  --color-gray-800: #737185;
  --color-gray-900: #605E70;
  --color-gray-1000: #3A3847;


  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-xl2: 1.5rem;
  --font-size-xl3: 2rem;
  --font-size-xl4: 2.25rem;
  --font-size-xl5: 3rem;
  --font-size-xl6: 4.5rem;
  --font-size-xl7: 6rem;

  --spacing-px: 1px;
  --spacing-s1: 0.25rem;
  --spacing-s2: 0.50rem;
  --spacing-s3: 0.75rem;
  --spacing-s4: 1rem;
  --spacing-s5: 1.25rem;
  --spacing-s6: 1.50rem;
  --spacing-s7: 1.75rem;
  --spacing-s8: 2rem;
  --spacing-s10: 2.50rem;
  --spacing-s11: 2.75rem;
  --spacing-s12: 3rem;
  --spacing-s13: 3.25rem;
  --spacing-s14: 3.5rem;
  --spacing-s15: 3.75rem;
  --spacing-s16: 4rem;
  --spacing-s17: 5rem;
  --spacing-s18: 6rem;
  --spacing-s20: 7.2rem;
  --spacing-s21: 8rem;

  --header-height:6rem;

  --border-radius: 8px;
  --border-radius-full: 9999px;

  height: 100%;

}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto,  sans-serif;
  }
  html {
    scroll-behavior: smooth;

    @media screen and (max-width: 769px) {
    font-size: 81%;
  }
  }


  body {
    height: 100%;

    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;

    background-color: var(--color-white);
    background-attachment: fixed;
  }

  body div#root {
    height: 100%;
    width: 100%;

    background-color: var(--color-white);
    background-attachment: fixed;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  }

  input,
  select {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  a {
    background: none;
    color: inherit;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }


`;
