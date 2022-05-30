import styled, { CSSProperties } from 'styled-components';

export interface TableCellRootStyledOptions {
  flexGrow?: CSSProperties['flexGrow']
  flexShrink?: CSSProperties['flexShrink']
}

const TableCellRoot = styled.div<TableCellRootStyledOptions>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;

TableCellRoot.defaultProps = {
  flexGrow: undefined,
  flexShrink: 0,
};

export default TableCellRoot;
