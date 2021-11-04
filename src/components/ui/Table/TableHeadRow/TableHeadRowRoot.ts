import styled from 'styled-components';

import { TableRow } from '@/components/ui/Table';

export interface TableHeadRowRootStyledOptions {}

const TableHeadRowRoot = styled(TableRow)<TableHeadRowRootStyledOptions>`
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
`;

export default TableHeadRowRoot;
