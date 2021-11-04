import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import Row from '@/components/ui/Row';
import Button from '@/components/ui/Button';

import DemoTextField from '@/components/demos/DemoTextField';
import DemoButton from '@/components/demos/DemoButton';
import DemoTransitionWrapper from '@/components/demos/DemoTransitionWrapper';
import DemoTable from '@/components/demos/DemoTable';
import Heading from '@/components/ui/Heading';

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
          <Heading h1 noMargin>rui</Heading>
          <Button onClick={handleTheme}>
            Сменить тему
          </Button>
        </HeaderWrapper>

        <DemoTextField />
        <DemoButton />
        <DemoTransitionWrapper />
        <DemoTable />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
