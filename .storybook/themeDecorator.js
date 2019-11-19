// themeDecorator.js
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {  GlobalStyle } from '../src/theme';
import useTheme from '../src/hooks/useTheme'
import { Button } from '../src/components'

const themeDecorator = props => {
  // state for changing modes dynamically
const [theme, toggleTheme, componentMounted] = useTheme()

if (!componentMounted){
  return <div/>
}
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {props()}
        <Button id="toggle-theme" onClick={toggleTheme}>
          {theme.colors.name} mode
        </Button>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  #toggle-theme {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default themeDecorator;
