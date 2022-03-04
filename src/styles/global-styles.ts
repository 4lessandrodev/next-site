import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../types/theme.type';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }: ThemeProvider) => theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }: ThemeProvider) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }
  p {
    margin: ${({ theme }: ThemeProvider) => theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }: ThemeProvider) => theme.spacings.medium};
    padding: ${({ theme }: ThemeProvider) => theme.spacings.medium};
  }
  a {
    color: ${({ theme }: ThemeProvider) => theme.colors.secondaryColor};
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
