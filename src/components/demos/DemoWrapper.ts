import styled from 'styled-components';

import Wrapper from '@/components/ui/Wrapper';

const DemoWrapper = styled(Wrapper)`
  padding: 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

export default DemoWrapper;
