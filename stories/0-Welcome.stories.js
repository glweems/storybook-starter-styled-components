import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
  <Welcome p="2" color="primary" showApp={linkTo('Button')} />
);

toStorybook.story = {
  name: 'to Storybook',
};
