import styled from 'styled-components';

export interface TableCellRootStyledOptions {}

const TableCellRoot = styled.div<TableCellRootStyledOptions>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export default TableCellRoot;
