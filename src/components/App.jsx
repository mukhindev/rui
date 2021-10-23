import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import TextField, { TextFieldInput } from '@/components/ui/TextField';

const StyledWrapper = styled(Wrapper)`
  padding: 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

// Стилизируем компонент TextField, обёртка над <label>, <input> и error
const StyledTextField = styled(TextField)`
  margin-bottom: 64px;

  /*
    Переопределяем стилизацию конкретно <input>
    При тёмной теме жёлтый текст
  */
  ${TextFieldInput} {
    color: ${({ theme }) => (theme.type === 'dark' ? '#ffbd1b' : '')};
  }
`;

function App() {
  const [value, setValue] = useState('');
  const [activeTheme, setActiveTheme] = useState('dark');

  const error = value && value.length < 8 ? 'Нужно минимум 8 символов' : '';

  const handleTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themes[activeTheme]}>
      <StyledWrapper>
        <StyledTextField
          label="Текстовое поле"
          value={value}
          error={error}
          onChange={(evt) => setValue(evt.target.value)}
        />
        <button type="button" onClick={handleTheme}>
          Сменить тему
        </button>
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
