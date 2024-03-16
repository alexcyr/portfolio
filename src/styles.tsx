import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.color.surface1};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.text.family.title};
    font-weight: ${({ theme }) => theme.text.weight.semi_bold};
    color: ${({ theme }) => theme.color.primary1};
  }

  p {
    font-family: ${({ theme }) => theme.text.family.body};
    font-weight: ${({ theme }) => theme.text.weight.light};
    color: ${({ theme }) => theme.color.primary1};
  }
`;
