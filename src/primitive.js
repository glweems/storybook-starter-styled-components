// creates a Box with default props tied to your theme
import system from '@rebass/components';
import { baseTheme } from './theme';

export const Box = system(
  {
    p: 2,
  },
  'space',
  'color'
);

Box.displayName = 'Box';

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  'space',
  'width',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing'
);

Text.displayName = 'Text';

export const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 6,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  'width',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing'
);

Heading.displayName = 'Heading';
