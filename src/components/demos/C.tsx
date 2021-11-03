import React, { useState } from 'react';
import styled from 'styled-components';

import DemoWrapper from '@/components/demos/DemoWrapper';
import Button from '@/components/ui/Button';
import TransitionWrapper from '@/components/ui/TransitionWrapper';
import Row from '@/components/ui/Row';

const shortText = 'Это короткий текст. Нажмите кнопку "Сменить текст"';

const longText = `
  А это длинный текст. И его явно больше, чем было. Контейнер c текстом резко увеличивается в высоте,
  но обёртка <TransitionWrapper> позволяет не дёргаться резко общему потоку
`;

const DemoTransitionWrapper = styled(TransitionWrapper)`
  max-width: 256px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 0.25rem;
`;

function C() {
  const [text, setText] = useState(shortText);

  const handleToggleText = () => {
    setText(text === shortText ? longText : shortText);
  };

  return (
    <DemoWrapper>
      <Row gap={1} alignItems="flex-start">
        <DemoTransitionWrapper>
          {text}
        </DemoTransitionWrapper>
        <DemoTransitionWrapper overflow="hidden" duration={1}>
          {text}
        </DemoTransitionWrapper>
        <Button onClick={handleToggleText}>Сменить текст</Button>
      </Row>
    </DemoWrapper>
  );
}

export default C;
