import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface CodeBlockProps {
  className: string,
  inline: boolean,
  children: string[] & React.ReactNode,
}

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const {
    children,
    className,
    inline,
  } = props;

  const code = children.join('').replace(/\n$/, '');
  const language = className.replace('language-', '');

  const codeInline = (
    <code>{code}</code>
  );

  const codeBlock = (
    <SyntaxHighlighter
      language={language}
      style={{}}
      customStyle={{ backgroundColor: 'none' }}
      PreTag="div"
    >
      {code}
    </SyntaxHighlighter>
  );

  return (
    inline ? codeInline : codeBlock
  );
};

export default CodeBlock;
