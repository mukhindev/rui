import { createContext } from 'react';

interface TableContextOptions {
  data: [],
  columnWidths: Record<string, number>,
  handleCell: (col: number, width: number) => void,
}

export const TableContext = createContext<TableContextOptions>({
  data: [],
  columnWidths: {},
  handleCell: () => {},
});
export const TableMapContext = createContext({});
