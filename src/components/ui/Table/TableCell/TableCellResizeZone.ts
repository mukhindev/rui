import styled from 'styled-components';

const TableCellResizeZone = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  right: -8px;
  width: 16px;
  height: 100%;
  cursor: col-resize;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.25s;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 60%;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.color.border};
  }
`;

export default TableCellResizeZone;
