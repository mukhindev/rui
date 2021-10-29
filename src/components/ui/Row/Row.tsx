import React from 'react';

import RowRoot, { RowRootStyledOptions } from './RowRoot';

type ButtonStyledOptions = RowRootStyledOptions;

interface RowProps extends ButtonStyledOptions {
  className?: string,
  children?: React.ReactNode,
}

const Row: React.FC<RowProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  return (
    <RowRoot
      data-semantics={Row.name}
      className={mix}
      {...other}
    >
      {children}
    </RowRoot>
  );
};

export default Row;
