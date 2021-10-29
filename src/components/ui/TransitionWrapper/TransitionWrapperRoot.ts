import styled, { CSSProperties } from 'styled-components';

export interface TransitionWrapperRootStyledOptions {
  // Продолжительность анимации перехода (s), по-умолчанию 0.25
  duration?: number;
  overflow?: CSSProperties['overflow']
}

const TransitionWrapperRoot = styled.div<TransitionWrapperRootStyledOptions>`
  overflow: ${({ overflow }) => overflow};
  transition: height ${({ duration }) => duration}s;
`;

TransitionWrapperRoot.defaultProps = {
  duration: 0.25,
  overflow: 'visible',
};

export default TransitionWrapperRoot;
