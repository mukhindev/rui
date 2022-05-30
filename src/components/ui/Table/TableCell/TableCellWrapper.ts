import styled, { CSSProperties } from 'styled-components';

export interface TableCellWrapperStyledOptions {
  overflow?: CSSProperties['overflow']
  whiteSpace?: CSSProperties['whiteSpace']
}

const TableCellWrapper = styled.div<TableCellWrapperStyledOptions>`
  white-space: ${({ whiteSpace }) => whiteSpace};
  overflow: ${({ overflow }) => overflow};
  text-overflow: ellipsis;
`;

TableCellWrapper.defaultProps = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export default TableCellWrapper;
