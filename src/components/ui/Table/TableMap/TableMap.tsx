import React from 'react';

import { TableContext, TableMapContext } from '@/components/ui/Table/context';

interface TableMapProps {
  className?: string,
  children?: React.ReactNode,
}

const TableMap: React.FC<TableMapProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  return (
    <div
      data-semantics="table-map"
      className={mix}
      {...other}
    >
      <TableContext.Consumer>
        {({ data }) => (
          data.map((value, index) => (
            <TableMapContext.Provider value={value} key={index}>
              {children}
            </TableMapContext.Provider>
          ))
        )}
      </TableContext.Consumer>
    </div>
  );
};

export default TableMap;
