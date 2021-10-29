import React, { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import styled from 'styled-components';
import { ThemeType } from '@/themes';

import DemoWrapper from '@/components/demos/DemoWrapper';
import TransitionWrapper from '@/components/ui/TransitionWrapper';
import TextField, { TextFieldInput } from '@/components/ui/TextField';

const EmailTextField = styled(TextField)`
  margin-bottom: 32px;

  /*
    Переопределяем стилизацию <input> в компоненте TextField
    При тёмной теме жёлтый текст
  */
  ${TextFieldInput} {
    color: ${({ theme }) => (theme.type === ThemeType.Dark ? '#ffbd1b' : '')};
  }
`;

function A() {
  const [email, setEmail] = useState('');

  const error = !isEmpty(email) && (isEmail(email) ? '' : 'Напишите в формате email');

  return (
    <DemoWrapper>
      <TransitionWrapper>
        <EmailTextField
          label="Электронная почта"
          value={email}
          error={error || ''}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </TransitionWrapper>
    </DemoWrapper>
  );
}

export default A;
