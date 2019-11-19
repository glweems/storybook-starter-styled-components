import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Box, Text, Heading } from '../src/primitive';

export default {
  title: 'Primitive',
};

export const typography = () => (
  <Box>
    <Text>
      <Heading>{text('Heading', 'Heading')}</Heading>
      {text(
        'Label',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae aliquam sequi dolorem, corporis illum repellendus magnam dolor officiis. Eos, dignissimos velit magnam perferendis deleniti ipsum laborum nihil! Laudantium, nisi.',
        '1'
      )}
    </Text>
  </Box>
);
