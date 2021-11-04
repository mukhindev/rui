import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import Row from '@/components/ui/Row';
import Button from '@/components/ui/Button';

import A from '@/components/demos/A';
import B from '@/components/demos/B';
import C from '@/components/demos/C';
import D from '@/components/demos/D';

const PageWrapper = styled(Wrapper)`
  height: 100%;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

const HeaderWrapper = styled(Row)`
  padding: 2rem;
`;

function App() {
  const [theme, setTheme] = useState(ThemeType.Dark);

  const handleTheme = () => {
    setTheme(theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <HeaderWrapper
          alignItems="center"
          justifyContent="space-between"
        >
          <Button onClick={handleTheme}>
            Сменить тему
          </Button>
        </HeaderWrapper>

        <A />
        <B />
        <C />
        <D />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
