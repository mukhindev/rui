import React from 'react';

import ButtonRoot, { ButtonRootStyledOptions } from './ButtonRoot';

type ButtonStyledOptions = ButtonRootStyledOptions;

interface ButtonProps extends ButtonStyledOptions {
  className?: string,
  children: React.ReactNode,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className: mix,
    children,
    ...other
  } = props;

  return (
    <ButtonRoot
      data-semantics="button"
      className={mix}
      {...other}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
