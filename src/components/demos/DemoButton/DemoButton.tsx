import React from 'react';
import frontMatter from 'front-matter';

import DemoWrapper from '@/components/shared/DemoWrapper';
import Markdown from '@/components/shared/Markdown';

import Button from '@/components/ui/Button';
import Row from '@/components/ui/Row';

import md from './DemoButton.md?raw';

const { body } = frontMatter(md);

function DemoButton() {
  return (
    <DemoWrapper>
      <Markdown>{body}</Markdown>

      <Row gap={1}>
        <Button>
          Кнопка 1
        </Button>
        <Button>
          Кнопка 2
        </Button>
        <Button>
          Кнопка 3
        </Button>
      </Row>
    </DemoWrapper>
  );
}

export default DemoButton;
