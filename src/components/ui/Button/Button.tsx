import React from 'react';

import ButtonRoot from './ButtonRoot';

interface ButtonProps {
  className?: string,
  children: React.ReactNode,
  type?: 'button' | 'submit' | 'reset',
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className: mix,
    children,
    type = 'button',
    onClick,
    ...other
  } = props;

  return (
    <ButtonRoot
      data-semantics={Button.name}
      className={mix}
      type={type}
      onClick={onClick}
      {...other}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
