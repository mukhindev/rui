import React from 'react';

import WrapperRoot from './WrapperRoot';

interface WrapperProps {
  className?: string,
  children?: React.ReactNode,
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const {
    className: mix,
    children,
  } = props;

  return (
    <WrapperRoot
      data-semantics={Wrapper.name}
      className={mix}
    >
      {children}
    </WrapperRoot>
  );
};

export default Wrapper;
