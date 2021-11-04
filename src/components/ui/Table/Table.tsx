import React, { useCallback, useRef, useState } from 'react';
import { TableContext } from './context';

import TableRoot, { TableRootStyledOptions } from './TableRoot';

type TableStyledOptions = TableRootStyledOptions;

interface TableProps extends TableStyledOptions {
  className?: string,
  children?: React.ReactNode,
  data: any,
}

const Table: React.FC<TableProps> = (props) => {
  const {
    className: mix,
    children,
    data,
    ...other
  } = props;

  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const columnWidthsRef = useRef<Record<string, number>>({});

  const handleCell = useCallback((col, width) => {
    if (col === -1 || width < columnWidthsRef.current[col]) {
      return;
    }

    columnWidthsRef.current[col] = width;
    setColumnWidths(columnWidthsRef.current);
  }, []);

  return (
    <TableRoot
      data-semantics={Table.name}
      className={mix}
      {...other}
    >
      <TableContext.Provider value={{ data, handleCell, columnWidths }}>
        {children}
      </TableContext.Provider>
    </TableRoot>
  );
};

export default Table;
