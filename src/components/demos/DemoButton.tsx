import React from 'react';

import DemoWrapper from '@/components/shared/DemoWrapper';

import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Row from '@/components/ui/Row';

function DemoButton() {
  return (
    <DemoWrapper>
      <Heading h2>Button</Heading>

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
