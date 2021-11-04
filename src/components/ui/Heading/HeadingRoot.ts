import styled, { css } from 'styled-components';

export interface HeadingRootStyledOptions {
  noMargin?: boolean;
}

const baseStyles = css<HeadingRootStyledOptions>`
  margin: 0 0 ${({ noMargin }) => noMargin ? 0 : '0.5em'};
  color: ${({ theme }) => theme.color.text};
`;

const H1 = styled.h1`
  ${baseStyles};
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${baseStyles};
  font-size: 1.75rem;
`;

const HeadingRoot = {
  H1,
  H2,
};

export default HeadingRoot;
