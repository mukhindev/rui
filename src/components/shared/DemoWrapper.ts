import styled from 'styled-components';

import Wrapper from '@/components/ui/Wrapper';

const DemoWrapper = styled(Wrapper)`
  padding: 2rem;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  background-image: linear-gradient(to right, ${({ theme }) => theme.color.border} 50%, transparent 0%);
  background-position: bottom;
  background-size: 12px 1px;
  background-repeat: repeat-x;
  transition-property: color, background-color;
  transition-duration: 0.5s;
`;

export default DemoWrapper;
