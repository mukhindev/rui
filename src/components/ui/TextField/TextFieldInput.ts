import styled from 'styled-components';
import { makeDoubleOutline } from '@/styled-tools/makeDoubleOutline';

const TextFieldInput = styled.input<{ isError: boolean }>`
  font: inherit;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.border};
  width: 100%;
  box-sizing: border-box;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 4px;
  outline: none;
  transition-property: color, box-shadow;
  transition-duration: 0.15s;

  &:hover {
    ${({ theme }) => makeDoubleOutline(theme.color.border)};
  }

  &:focus {
    ${({ isError, theme }) => isError
      ? makeDoubleOutline(theme.color.error)
      : makeDoubleOutline(theme.color.primary)};
  }
`;

export default TextFieldInput;
