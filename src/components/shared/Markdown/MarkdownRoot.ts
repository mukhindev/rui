import styled, { css } from 'styled-components';

const baseHeadingStyles = css`
  margin: 1.5em 0 0.5em;
`;

const lightStyles = css`
  & pre {
    background: #f3f3f3;
    color: #000000;
  }

  & code {
    background-color: antiquewhite;
  }

  & code[class*="language-"] {
    --code-string: #A31515;
    --code-comment: #008000;
    --code-variable: #001080;
    --code-keyword: #0000FF;
    --code-number: #098658;
    --code-function: #795E26;
    --code-class: #267F99;
  }
`;

const darkStyles = css`
  & pre {
    background: #141414;
    color: #D4D4D4;
  }

  & code {
    background-color: #3b3b3b;
  }

  & code[class*="language-"] {
    --code-string: #CE9178;
    --code-comment: #6A9955;
    --code-variable: #9CDCFE;
    --code-keyword: #569CD6;
    --code-number: #B5CEA8;
    --code-function: #DCDCAA;
    --code-class: #4EC9B0;
  }
`;

export interface MarkdownRootStyledOptions {
  theme?: 'light' | 'dark';
}

const MarkdownRoot = styled.div<MarkdownRootStyledOptions>`
  line-height: 1.5;

  & h1 {
    ${baseHeadingStyles};
    font-size: 2.5rem;
  }

  & h2 {
    ${baseHeadingStyles};
    font-size: 1.75rem;
  }

  & h3 {
    ${baseHeadingStyles};
    font-size: 1.25rem;
  }

  & pre {
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    line-height: 1.3;
    padding: 16px;
    margin: 16px 0;
    overflow: auto;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 0.25rem;
  }

  & code {
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    padding: 2px 6px;
    border-radius: 0.25rem;
  }

  & code[class*="language-"] {
    padding: 0;
    font-size: 12px;
    line-height: 1.375;
    background-color: transparent;
    font-family: inherit;
  }

  ${({ theme }) => theme === 'dark' ? darkStyles : lightStyles};

  @media screen and (min-width: 678px) {
    & code[class*="language-"] {
      font-size: 14px;
    }
  }

  & .token {
    &.comment, &.prolog, &.doctype, &.cdata { color: var(--code-comment); }
    &.keyword, &.tag, &.class-name { color: var(--code-keyword); }
    &.variable, &.maybe-class-name, &.attr-name { color: var(--code-variable); }
    &.parameter { color: var(--code-variable); font-style: italic; }
    &.number { color: var(--code-number); }
    &.string, &.attr-value { color: var(--code-string); }
    &.function { color: var(--code-function); }
    &.builtin { color: var(--code-class); }
  }
`;

export default MarkdownRoot;
