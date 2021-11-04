import styled from 'styled-components';
import { rgba } from 'polished';

export interface TableRowRootStyledOptions {}

const TableRowRoot = styled.div<TableRowRootStyledOptions>`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  // transition: background-color 0.25s;
  // &:hover {
  //   background-color: ${({ theme }) => rgba(theme.color.primary, 0.2)};
  // }
`;

export default TableRowRoot;
