import styled from 'styled-components';

const TextFieldLabel = styled.label<{ isError: boolean }>`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({ isError, theme }) => (isError ? theme.color.error : theme.color.text)};
`;

export default TextFieldLabel;
