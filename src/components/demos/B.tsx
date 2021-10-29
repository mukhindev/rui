import React from 'react';

import DemoWrapper from '@/components/demos/DemoWrapper';
import Button from '@/components/ui/Button';
import Row from '@/components/ui/Row';

function B() {
  return (
    <DemoWrapper>
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

export default B;
