import React, {
  ReactText,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TableContext, TableHeadRowContext, TableMapContext } from '../context';
import TableCellRoot, { TableCellRootStyledOptions } from '@/components/ui/Table/TableCell/TableCellRoot';
import TableCellResizeZone from './TableCellResizeZone';
import TableCellWrapper, { TableCellWrapperStyledOptions } from '@/components/ui/Table/TableCell/TableCellWrapper';

const MIN_WIDTH = 16;

const getColumnElements = (element: HTMLDivElement): NodeList | [] => {
  const colNumber = element.dataset.col;
  const tableElement = element?.closest('[data-semantics="table"]');
  const columnElements = tableElement?.querySelectorAll(`[data-col="${colNumber}"]`);

  if (!columnElements) {
    return [];
  }

  return columnElements;
};

type Resizer = {
  pressed: boolean,
  start: number,
  diff: number,
  cellElement: HTMLDivElement | null
  columnElements: NodeList | [],
  startWidthCell: number,
  nextCellElement: HTMLDivElement | null
  nextColumnElements: NodeList | [],
  startWidthNextCell: number,
}

type TableCellStyledOptions = TableCellRootStyledOptions & TableCellWrapperStyledOptions;

interface TableCellProps extends TableCellStyledOptions{
  className?: string,
  children: React.ReactNode | ReactText,
}

const TableCell: React.FC<TableCellProps> = (props) => {
  const {
    className: mix,
    children,
    flexGrow,
    flexShrink,
    overflow,
    whiteSpace,
  } = props;

  const [col, setCol] = useState(0);
  const [width, setWidth] = useState<'auto' | number>('auto');

  const {
    handleCell,
    updateWidth,
    columnWidths,
  } = useContext(TableContext);

  const { isHeadRow } = useContext(TableHeadRowContext);

  const refInit = useRef(true);

  const resizer = useRef<Resizer>({
    pressed: false,
    start: 0,
    diff: 0,
    cellElement: null,
    columnElements: [],
    startWidthCell: 0,
    nextCellElement: null,
    nextColumnElements: [],
    startWidthNextCell: 0,
  });

  const cellRef = useRef<HTMLDivElement | null>(null);

  const handleCellRef = (node: HTMLDivElement) => {
    if (node !== null) {
      cellRef.current = node;

      if (refInit.current) {
        const colNumber = Array.from(node.parentNode!.children).indexOf(node);
        const cellWidth = Math.ceil(node.getBoundingClientRect().width);
        setCol(colNumber + 1);
        handleCell(colNumber + 1, cellWidth);
        refInit.current = false;
      }
    }
  };

  const handleMouseDown = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (cellRef.current === null) {
      return;
    }

    const cellElement: HTMLDivElement = cellRef.current;
    const nextCellElement = cellElement.nextSibling as HTMLDivElement;

    if (!nextCellElement) {
      return;
    }

    cellElement.style.userSelect = 'none';
    nextCellElement.style.userSelect = 'none';

    const columnElements = getColumnElements(cellElement);
    const startWidthCell = cellElement.getBoundingClientRect().width;

    const nextColumnElements = getColumnElements(nextCellElement);
    const startWidthNextCell = nextCellElement.getBoundingClientRect().width;

    resizer.current = {
      pressed: true,
      start: evt.pageX,
      diff: 0,
      cellElement,
      columnElements,
      startWidthCell,
      nextCellElement,
      nextColumnElements,
      startWidthNextCell,
    };
  };

  const handleMouseMove = (evt: MouseEvent) => {
    if (!resizer.current.pressed) {
      return;
    }

    const diff = evt.pageX - resizer.current.start;
    resizer.current.diff = diff;

    const isMinCellWidth = resizer.current.startWidthCell + diff < MIN_WIDTH;
    const isMinNextCellWidth = resizer.current.startWidthNextCell - diff < MIN_WIDTH;

    // console.log('limit', resizer.current.startWidthCell, diff, resizer.current.startWidthCell);

    if (isMinCellWidth || isMinNextCellWidth) {
      return;
    }

    /* eslint-disable no-param-reassign */
    resizer.current.columnElements.forEach((element) => {
      (element as HTMLDivElement).style.width = `${resizer.current.startWidthCell + diff}px`;
    });

    resizer.current.nextColumnElements.forEach((element) => {
      (element as HTMLDivElement).style.width = `${resizer.current.startWidthNextCell - diff}px`;
    });
    /* eslint-enable no-param-reassign */
  };

  const handleMouseUp = () => {
    if (!resizer.current.pressed) {
      return;
    }

    resizer.current.pressed = false;

    resizer.current.cellElement!.style.userSelect = '';
    resizer.current.nextCellElement!.style.userSelect = '';

    updateWidth(col, resizer.current.startWidthCell + resizer.current.diff);
  };

  useEffect(() => {
    if (!isHeadRow) {
      return () => {};
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    setWidth(columnWidths[col]);
  }, [columnWidths, col]);

  return (
    <TableCellRoot
      data-semantics="table-cell"
      data-col={col}
      className={mix}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      style={{ width: flexGrow ? undefined : width }}
      ref={handleCellRef}
    >
      <TableCellWrapper
        overflow={overflow}
        whiteSpace={whiteSpace}
      >
        {
          typeof children === 'function'
            // @ts-ignore
            ? <TableMapContext.Consumer>{children}</TableMapContext.Consumer>
            : children
        }
      </TableCellWrapper>
      {isHeadRow && (
        <TableCellResizeZone onMouseDown={handleMouseDown} />
      )}
    </TableCellRoot>
  );
};

export default TableCell;
