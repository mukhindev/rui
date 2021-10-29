import React from 'react';

import RowRoot, { HeadingRootStyledOptions } from './RowRoot';

type HeadingStyledOptions = HeadingRootStyledOptions;

interface HeadingProps extends HeadingStyledOptions {
  className?: string,
  children?: React.ReactNode,
}

const Row: React.FC<HeadingProps> = (props) => {
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
