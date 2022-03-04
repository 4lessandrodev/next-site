import { Title } from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Title',
  component: Title,
  decorators: [
    (Story: typeof Title) => (
      <div style={{ margin: '3em' }}>
        <Story>Hello</Story>
      </div>
    ),
  ],
};
