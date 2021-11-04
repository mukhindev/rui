import React from 'react';
import { useTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';

import CodeBlock from './CodeBlock';
import Heading from '@/components/ui/Heading';

interface MarkdownProps {
  children: string,
}

const Markdown: React.FC<MarkdownProps> = (props) => {
  const { children: content } = props;

  const theme = useTheme();

  return (
    // TODO: Описать тип для темы
    <div
      data-semantics={Markdown.name}
      className={`markdown markdown__${theme.type}`}
    >
      <ReactMarkdown
        components={{
          code: CodeBlock as CodeComponent,
          h1: ({ children }) => <Heading h1>{children}</Heading>,
          h2: ({ children }) => <Heading h2>{children}</Heading>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
