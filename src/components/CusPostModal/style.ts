import styled from 'styled-components';
import { StyledItemTitleProps } from '@I/style';

export const StyledItemTitle = styled.div<StyledItemTitleProps>`
  background: transparent;
  color: #4D5472;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.1;
  width: 100%;
  margin: 0 0 ${(props) => props.margin ? '0.75rem' : '0'};
  padding: 0;
`;

export const StyledTagTimestampBlock = styled.div`
  margin-bottom: 10px;
`;
