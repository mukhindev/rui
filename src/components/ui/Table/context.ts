import { createContext } from 'react';

interface TableContextOptions {
  data: [],
  columnWidths: Record<string, number>,
  handleCell: (col: number, width: number) => void,
  updateWidth: (col: number, width: number) => void,
}

export const TableContext = createContext<TableContextOptions>({
  data: [],
  columnWidths: {},
  handleCell: () => {},
  updateWidth: () => {},
});

interface TableHeadRowContextOptions {
  isHeadRow: boolean;
}

export const TableHeadRowContext = createContext<TableHeadRowContextOptions>({
  isHeadRow: false,
});

export const TableMapContext = createContext({});
