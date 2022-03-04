// import React from 'react';

import { Title } from '../pages/index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Title',
  component: Title,
};

export const Component = () => <Title>Some Title</Title>;
