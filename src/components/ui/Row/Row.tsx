import React from 'react';

import RowRoot, { RowRootStyledOptions } from './RowRoot';

type RowStyledOptions = RowRootStyledOptions;

interface RowProps extends RowStyledOptions {
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
      data-semantics="row"
      className={mix}
      {...other}
    >
      {children}
    </RowRoot>
  );
};

export default Row;
