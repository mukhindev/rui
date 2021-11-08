import React from 'react';

import HeadingRoot, { HeadingRootStyledOptions } from './HeadingRoot';

type HeadingStyledOptions = HeadingRootStyledOptions;

interface HeadingProps extends HeadingStyledOptions {
  className?: string,
  children?: React.ReactNode,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  h6?: boolean,
}

const Heading: React.FC<HeadingProps> = (props) => {
  const {
    className: mix,
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ...other
  } = props;

  let HeadingRootComponent = HeadingRoot.H1;

  if (h1) {
    HeadingRootComponent = HeadingRoot.H1;
  }

  if (h2) {
    HeadingRootComponent = HeadingRoot.H2;
  }

  if (h3) {
    HeadingRootComponent = HeadingRoot.H3;
  }

  if (h4) {
    HeadingRootComponent = HeadingRoot.H4;
  }

  if (h5) {
    HeadingRootComponent = HeadingRoot.H5;
  }

  if (h6) {
    HeadingRootComponent = HeadingRoot.H6;
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
