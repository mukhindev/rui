import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { makeDoubleOutline } from '@/styled-tools/makeDoubleOutline';
import { chooseContrastingColor } from '@/styled-tools/chooseContrastingColor';

export interface ButtonRootStyledOptions {
  variant?: 'filled' | 'outline'
}

const ButtonRoot = styled.button<ButtonRootStyledOptions>`
  font: inherit;
  ${({ variant, theme }) => variant && ({
    filled: `
      color: ${chooseContrastingColor(
        [theme.color.white, theme.color.black],
        theme.color.primary,
      )};
      background-color: ${theme.color.primary};
    `,
    outline: `
      color: ${theme.color.primary};
      background-color: transparent;
      ${makeDoubleOutline({
        color: theme.color.primary,
        outsideOpacity: 0,
      })};
    `,
  })[variant]}
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
    ${({ variant, theme }) => variant && ({
      filled: `
        background-color: ${lighten(0.1, theme.color.primary)};
      `,
      outline: `
        color: ${lighten(0.1, theme.color.primary)};
        background-color: transparent;
        ${makeDoubleOutline({
          color: lighten(0.1, theme.color.primary),
          outsideOpacity: 0,
        })};
      `,
    })[variant]}
    background-color: ${({ variant, theme }) => variant === 'filled' && lighten(0.1, theme.color.primary)};
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
