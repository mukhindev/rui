import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import Row from '@/components/ui/Row';
import Button from '@/components/ui/Button';

import Heading from '@/components/ui/Heading';
import Markdown from '@/components/shared/Markdown';

import PeculiaritiesDoc from '@/components/docs/PeculiaritiesDoc';
import ButtonDoc from '@/components/docs/ButtonDoc';
import TableDoc from '@/components/docs/TableDoc';
import TextFieldDoc from '@/components/docs/TextFieldDoc';
import TransitionWrapperDoc from '@/components/docs/TransitionWrapperDoc';

const PageWrapper = styled(Wrapper)`
  height: 100%;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

const HeaderWrapper = styled(Row)`
  padding: 2rem 2rem 0;
  max-width: 1024px;
  margin: auto;
`;

const DemoWrapper = styled(Wrapper)`
  padding: 0 2rem 2rem;
  max-width: 1024px;
  margin: auto;
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

        <DemoWrapper>
          <Markdown>
            <PeculiaritiesDoc />
            <TextFieldDoc />
            <ButtonDoc />
            <TransitionWrapperDoc />
            <TableDoc />
          </Markdown>
        </DemoWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
