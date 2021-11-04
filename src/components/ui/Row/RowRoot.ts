import styled, { CSSProperties } from 'styled-components';
import { CSSUnit } from '@/types';
import { formatCSSUnit } from '@/utils';

export interface RowRootStyledOptions {
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  flexWrap?: CSSProperties['flexWrap']
  gap?: CSSUnit
}

const RowRoot = styled.div<RowRootStyledOptions>`
  flex-wrap: ${({ flexWrap }) => formatCSSUnit(flexWrap)};
  position: relative;
  display: flex;
  align-items: ${({ alignItems }) => formatCSSUnit(alignItems)};
  justify-content: ${({ justifyContent }) => formatCSSUnit(justifyContent)};
  gap: ${({ gap }) => formatCSSUnit(gap)};
`;

RowRoot.defaultProps = {
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1rem',
};

export default RowRoot;
