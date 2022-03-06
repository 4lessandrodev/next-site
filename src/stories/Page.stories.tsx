import { ComponentMeta } from '@storybook/react';
import { Title } from '../pages/index';

type Args = { title: string };

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    title: { type: 'string' },
  },
  args: {
    title: 'Some Text',
  },
} as ComponentMeta<typeof Title>;

export const Component = ({ title }: Args) => <Title>{ title }</Title>;
