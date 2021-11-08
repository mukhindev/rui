import styled, { css } from 'styled-components';
import { lighten, darken, rgba } from 'polished';
import { makeDoubleOutline } from '@/styled-tools/makeDoubleOutline';
import { chooseContrastingColor } from '@/styled-tools/chooseContrastingColor';

export interface ButtonRootStyledOptions {
  variant?: 'filled' | 'outline'
}

const variants = {
  filled: css`
    color: ${({ theme }) => chooseContrastingColor(
      [theme.color.white, theme.color.black],
      theme.color.primary,
    )};
    background-color: ${({ theme }) => theme.color.primary};

    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
    }

    &:active {
      background-color: ${({ theme }) => darken(0.1, theme.color.primary)};
    }
  `,

  outline: css`
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
    ${({ theme }) => makeDoubleOutline({
      color: theme.color.primary,
      outsideOpacity: 0,
    })};

    &:hover {
      color: ${({ theme }) => lighten(0.1, theme.color.primary)};
      background-color: transparent;
      ${({ theme }) => makeDoubleOutline({
        color: lighten(0.1, theme.color.primary),
        outsideOpacity: 0,
      })};
    }

    &:active {
      background-color: ${({ theme }) => rgba(theme.color.primary, 0.1)};
    }
  `,
};

const ButtonRoot = styled.button<ButtonRootStyledOptions>`
  font: inherit;
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

  ${({ variant }) => variants[variant!]};

  &:focus {
    ${({ theme }) => makeDoubleOutline(theme.color.primary)};
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
