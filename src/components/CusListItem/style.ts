import styled from 'styled-components';
import { StyledItemProps } from '@I/style';


export const StyledListItem = styled.div<StyledItemProps>`
  backgroud: #FFFFFF;
  border-bottom: ${(prop) => prop.divider ? '1px solid #4D5472' : 'none'};
  cursor: pointer;
  padding: 20px;
`;

export const StyledBadgeBlock = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledAvatarBadgeBlock = styled.div`
  widthL 100%;
`;
