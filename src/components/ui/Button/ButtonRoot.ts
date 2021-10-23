import styled from 'styled-components';
import { rgba, lighten, darken } from 'polished';

const createDoubleOutline = (color: string) => {
  return `
    inset 0 0 0 2px ${color},
    0 0 0 4px ${rgba(color, 0.25)}
  `;
};

const ButtonRoot = styled.button`
  font: inherit;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  box-sizing: border-box;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 4px;
  outline: none;
  transition-property: color, background-color, box-shadow, opacity;
  transition-duration: 0.15s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.color.primary)};
  }

  &:focus {
    box-shadow: ${({ theme }) => createDoubleOutline(theme.color.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.color.primary)};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

export default ButtonRoot;
