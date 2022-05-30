import React, { useState } from 'react';
import { TableHeadRowContext } from '../context';

import TableHeadRowRoot from './TableHeadRowRoot';

interface TableHeadRowProps {
  className?: string,
  children: React.ReactNode,
}

const TableHeadRow: React.FC<TableHeadRowProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  const [value] = useState({
    isHeadRow: true,
  });

  return (
    <TableHeadRowRoot
      data-semantics="table-head-row"
      className={mix}
      {...other}
    >
      <TableHeadRowContext.Provider value={value}>
        {children}
      </TableHeadRowContext.Provider>
    </TableHeadRowRoot>
  );
};

export default TableHeadRow;
