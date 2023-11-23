import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 auto;
    width: 1046px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;