import styled from 'styled-components';
import { Button } from 'app/ui/styles/fragments/button';

export const Header = styled.header`
  display: flex;
  flex-direction:column;

  padding: 20px 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 16px;

  padding: 5px 0;
`;

export const HeaderActions = styled.div`
  display:flex;
  justify-content: center;

  ${Button} {
    padding: 5px 25px;

    &:first-child {
      margin-right: 20px;
    }
  }
`;
