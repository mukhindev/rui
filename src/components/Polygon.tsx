import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes, ThemeType } from '@/themes';

import Wrapper from '@/components/ui/Wrapper';
import TableExample from './docs/examples/TableExample';

const PageWrapper = styled(Wrapper)`
  padding: 2rem;
  height: 100%;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

function App() {
  const [theme] = useState(ThemeType.Light);

  return (
    <ThemeProvider theme={themes[theme]}>
      <PageWrapper>
        <TableExample.Example1 />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
