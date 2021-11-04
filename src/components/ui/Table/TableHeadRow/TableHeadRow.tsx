import React from 'react';

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

  return (
    <TableHeadRowRoot
      data-semantics={TableHeadRow.name}
      className={mix}
      {...other}
    >
      {children}
    </TableHeadRowRoot>
  );
};

export default TableHeadRow;
