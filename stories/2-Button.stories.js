import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/components';

export default {
  title: 'Button',
};

export const primary = () => (
  <Button onClick={action('Button Click')}>Button</Button>
);
