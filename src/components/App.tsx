import React, { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import styled, { ThemeProvider } from 'styled-components';
import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import TextField, { TextFieldInput } from '@/components/ui/TextField';
import Button from '@/components/ui/Button';

const PageWrapper = styled(Wrapper)`
  height: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

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

function App() {
  const [theme, setTheme] = useState(ThemeType.Dark);
  const [email, setEmail] = useState('');

  const error = !isEmpty(email) && (isEmail(email) ? '' : 'Напишите в формате email');

  const handleTheme = () => {
    setTheme(theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <EmailTextField
          label="Электронная почта"
          value={email}
          error={error || ''}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <Button onClick={handleTheme}>
          Сменить тему
        </Button>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
