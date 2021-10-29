import React, { useState } from 'react';

import TransitionWrapperRoot, {
  TransitionWrapperRootStyledOptions,
} from './TransitionWrapperRoot';

type ButtonStyledOptions = TransitionWrapperRootStyledOptions;

interface TransitionWrapperProps extends ButtonStyledOptions {
  className?: string
  // Минимальная высота обёртки, по-умолчанию 'auto'
  min?: number | 'auto',
  // Максимальная высота обёртки, по-умолчанию не ограничена
  max?: number,
  children?: React.ReactNode,
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = (props) => {
  const {
    className: mix,
    min = 'auto',
    max,
    children,
    duration,
  } = props;

  const [height, setHeight] = useState(min);

  const getChildrenRef = (node: HTMLDivElement) => {
    if (node !== null) {
      const childrenHeight = node.getBoundingClientRect().height;

      if (min && min > childrenHeight) {
        setHeight(min);
      } else if (max && max < childrenHeight) {
        setHeight(max);
      } else {
        setHeight(childrenHeight);
      }
    }
  };

  return (
    <TransitionWrapperRoot
      data-semantics={TransitionWrapper.name}
      className={mix}
      style={{ height }}
      duration={duration}
    >
      <div ref={getChildrenRef}>{children}</div>
    </TransitionWrapperRoot>
  );
};

export default TransitionWrapper;
