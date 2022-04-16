import { createGlobalStyle } from "styled-components";
import { default_size, primary_color } from "../constants/defaults";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: Montserrat;
  src: url(fonts/Montserrat-Regular.ttf);
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Montserrat;
  src: url(fonts/Montserrat-Medium.ttf);
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: Montserrat;
  src: url(fonts/Montserrat-Bold.ttf);
  font-weight: 700;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  color: ${primary_color};
  font-size: ${default_size};
  font-family: Montserrat, sans-serif;
  overflow-y: scroll;
  box-sizing: border-box;
}

::after, ::before, * {
  box-sizing: inherit;
}

ul, li {
  padding: 0;
  margin: 0;
  text-decoration: none;
  display: block;
}

h1, h2, h3, h4, h5, p, a {
  display: block;
  color: inherit;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
`