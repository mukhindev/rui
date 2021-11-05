import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import Row from '@/components/ui/Row';
import Button from '@/components/ui/Button';

import Heading from '@/components/ui/Heading';
import Markdown from '@/components/shared/Markdown';

import TextFieldStand from '@/components/docs/TextFieldStand.mdx';
import ButtonStand from '@/components/docs/ButtonStand.mdx';
import TransitionWrapperStand from '@/components/docs/TransitionWrapperStand.mdx';
import TableStand from '@/components/docs/TableStand.mdx';
import Peculiarities from '@/components/docs/Peculiarities.mdx';

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

const BodyWrapper = styled(Wrapper)`
  padding: 0 2rem 2rem;
  max-width: 1024px;
  margin: auto;
`;

function App() {
  const [theme, setTheme] = useState(ThemeType.Light);

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

        <BodyWrapper>
          <Markdown>
            <TextFieldStand />
            <ButtonStand />
            <TransitionWrapperStand />
            <TableStand />
            <Peculiarities />
          </Markdown>
        </BodyWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
