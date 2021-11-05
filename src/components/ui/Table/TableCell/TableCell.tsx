import React, {
  ReactText,
  useContext,
  useEffect,
  useState,
} from 'react';

import { TableContext, TableMapContext } from '../context';
import TableCellRoot from '@/components/ui/Table/TableCell/TableCelllRoot';

interface TableCellProps {
  className?: string,
  children: React.ReactNode | ReactText,
}

const TableCell: React.FC<TableCellProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  const [col, setCol] = useState(0);
  const [width, setWidth] = useState<'auto' | number>('auto');
  const { handleCell, columnWidths } = useContext(TableContext);

  const handleCellRef = (node: HTMLDivElement) => {
    if (node !== null) {
      const colNumber = Array.from(node.parentNode!.children).indexOf(node);
      const cellWidth = Math.ceil(node.getBoundingClientRect().width);
      setCol(colNumber + 1);
      handleCell(colNumber + 1, cellWidth);
    }
  };

  useEffect(() => {
    setWidth(columnWidths[col]);
  }, [columnWidths, col]);

  return (
    <TableCellRoot
      data-semantics="table-cell"
      className={mix}
      ref={handleCellRef}
      style={{ width }}
      {...other}
    >
      {
        typeof children === 'function'
          // @ts-ignore
          ? <TableMapContext.Consumer>{children}</TableMapContext.Consumer>
          : children
      }
    </TableCellRoot>
  );
};

export default TableCell;
