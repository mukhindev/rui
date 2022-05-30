import styled from 'styled-components';

import { TableRow } from '@/components/ui/Table';
import TableCellResizeZone from '../TableCell/TableCellResizeZone';

export interface TableHeadRowRootStyledOptions {}

const TableHeadRowRoot = styled(TableRow)<TableHeadRowRootStyledOptions>`
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};

  &:hover ${TableCellResizeZone} {
    opacity: 1;
  }
`;

export default TableHeadRowRoot;
