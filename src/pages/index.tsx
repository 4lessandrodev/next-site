import type { NextPage } from 'next';
import styled from 'styled-components';
import { ThemeProvider } from '../types/theme.type';

export const Title = styled.h1`
  color: ${({ theme }: ThemeProvider): string => theme.colors?.secondaryColor};
  font-size: 50px;
`;

const Home: NextPage = () => <Title>Home Page</Title>;

export default Home;
