import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import themeDecorator from './themeDecorator';
import yourTheme from './yourTheme';


// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

addParameters({
  options: {
    theme: yourTheme,
  },
});

const WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Nunito Sans:300,700'],
  },
});
// automatically import all files ending in *.storizes.js
addDecorator(themeDecorator);
configure(require.context('../stories', true, /\.stories\.js$/), module);

