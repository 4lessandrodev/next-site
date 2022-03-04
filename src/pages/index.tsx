import type { NextPage } from 'next';
import styled from 'styled-components';
import { theme as Theme } from '../styles/theme';

const Title = styled.h1`
  color: ${({ theme }: { theme: typeof Theme }): string => theme.colors.red};
  font-size: 50px;
`;

const Home: NextPage = () => <Title>Home Page</Title>;

export default Home;
