import styled from 'styled-components';

import { space } from 'styled-system';

const BaseButton = styled('button')(space);

export const Button = styled(BaseButton)`
  position: relative;
  padding: 0.5em 2em;
  color: ${({ theme }) => theme.colors.primary};
  font: 700 1rem 'Roboto Slab', sans-serif;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  background: none;
  border: none;
  box-shadow: inset 0 0 0 4px ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: color 0.25s 0.0833333333s;
  ::before,
  ::after {
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    content: '';
    pointer-events: none;
  }
  ::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }
  ::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }
  :hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  :hover::before,
  :hover::after {
    width: 100%;
    height: 100%;
    border-color: ${({ theme }) => theme.colors.whites[5]};
    transition: border-color 0s, width 0.25s, height 0.25s;
  }
  :hover::before {
    transition-delay: 0s, 0s, 0.25s;
  }
  :hover::after {
    transition-delay: 0s, 0.25s, 0s;
  }

  :focus {
    outline: 2px dashed ${({ theme }) => theme.colors.whites[3]};
  }
`;
