import React from 'react';

import HeadingRoot, { HeadingRootStyledOptions } from './HeadingRoot';

type HeadingStyledOptions = HeadingRootStyledOptions;

interface HeadingProps extends HeadingStyledOptions {
  className?: string,
  children?: React.ReactNode,
  h1?: boolean,
  h2?: boolean,
}

const Heading: React.FC<HeadingProps> = (props) => {
  const {
    className: mix,
    children,
    h1,
    h2,
    ...other
  } = props;

  let HeadingRootComponent = HeadingRoot.H1;

  if (h1) {
    HeadingRootComponent = HeadingRoot.H1;
  }

  if (h2) {
    HeadingRootComponent = HeadingRoot.H2;
  }

  return (
    <HeadingRootComponent
      data-semantics="heading"
      className={mix}
      {...other}
    >
      {children}
    </HeadingRootComponent>
  );
};

export default Heading;
