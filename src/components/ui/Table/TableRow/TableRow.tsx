import React from 'react';

import TableRowRoot from './TableRowRoot';

interface TableRowProps {
  className?: string,
  children: React.ReactNode,
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  return (
    <TableRowRoot
      data-semantics="table-row"
      className={mix}
      {...other}
    >
      {children}
    </TableRowRoot>
  );
};

export default TableRow;
