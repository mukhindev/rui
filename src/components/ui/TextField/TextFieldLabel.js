import styled from 'styled-components';

const TextFieldLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({ error, theme }) => (error ? theme.color.error : theme.color.text)};
`;

export default TextFieldLabel;
