import React from 'react';
import { useTheme } from 'styled-components';

import MarkdownRoot, { MarkdownRootStyledOptions } from './MarkdownRoot';

type MarkdownStyledOptions = MarkdownRootStyledOptions;

interface MarkdownProps extends MarkdownStyledOptions {
  className?: string,
  children?: React.ReactNode,
}

const Markdown: React.FC<MarkdownProps> = (props) => {
  const {
    className: mix,
    children,
  } = props;

  const theme = useTheme();

  return (
    <MarkdownRoot
      data-semantics={Markdown.name}
      className={mix}
      // TODO: Описать тип для темы
      // @ts-ignore
      theme={theme.type}
    >
      {children}
    </MarkdownRoot>
  );
};

export default Markdown;
