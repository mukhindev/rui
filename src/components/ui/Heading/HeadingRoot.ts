import styled, { css } from 'styled-components';

export interface HeadingRootStyledOptions {
  noMargin?: boolean;
}

const baseHeadingStyles = css<HeadingRootStyledOptions>`
  font-weight: bold;
  margin: 0 0 ${({ noMargin }) => noMargin ? 0 : '0.5em'};
  color: ${({ theme }) => theme.color.text};
`;

const H1 = styled.h1`
  ${baseHeadingStyles};
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${baseHeadingStyles};
  font-size: 2rem;
`;

const H3 = styled.h3`
  ${baseHeadingStyles};
  font-size: 1.75rem;
`;

const H4 = styled.h4`
  ${baseHeadingStyles};
  font-size: 1.5rem;
`;

const H5 = styled.h5`
  ${baseHeadingStyles};
  font-size: 1.25rem;
`;

const H6 = styled.h6`
  ${baseHeadingStyles};
  font-size: 1rem;
`;

const HeadingRoot = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

export default HeadingRoot;
