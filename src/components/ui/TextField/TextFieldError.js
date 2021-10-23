import styled from 'styled-components';

const TextFieldError = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.error};
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export default TextFieldError;
