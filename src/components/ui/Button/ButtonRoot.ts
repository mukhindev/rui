import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { makeDoubleOutline } from '@/styled-tools/makeDoubleOutline';

export interface ButtonRootStyledOptions {
  variant?: 'filled' | 'outline'
}

const ButtonRoot = styled.button<ButtonRootStyledOptions>`
  font: inherit;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  box-sizing: border-box;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  outline: none;
  transition-property: color, background-color, box-shadow, opacity;
  transition-duration: 0.15s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
  }

  &:focus {
    ${({ theme }) => makeDoubleOutline(theme.color.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.color.primary)};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

ButtonRoot.defaultProps = {
  type: 'button',
  variant: 'filled',
};

export default ButtonRoot;
