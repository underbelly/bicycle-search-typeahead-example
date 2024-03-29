import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

 @font-face {
    font-family: Helvetica, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    font-display: fallback;
  }


  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: 'SF Pro Display', sans-serif;
    line-height: 1;
    font-weight: 300;
    position: relative;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {

  }

  @media print {
    aside,
    #table-of-contents,
    header {
      display: none !important;
    }

    #__next {
      display: block !important;
    }

    main {
      width: 100% !important;
    }
  }
  `;
