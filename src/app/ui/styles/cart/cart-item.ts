import styled from 'styled-components';
import { Button } from 'app/ui/styles/fragments/button';
import { boxShadow } from '../colors';

export const CartItemContainer = styled.div`
  display:flex;

  box-shadow: ${boxShadow};

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartItemContent = styled.div`
  display:flex;
  justify-content: space-between;

  width:100%;
`;

export const CartItemContentLeft = styled.div`
  display:flex;
  width: 40%;
`;

export const CartItemContentRight = styled.div`
  display:flex;
  flex-direction:column;

  padding:10px 15px;
`;

export const CartItemActions = styled.div`
  display:flex;
  flex-direction:column;

  margin-bottom: 20px;

  ${Button} {
    padding: 5px 25px;
  }
`;

export const CartItemCountWrapper = styled.div`
  display:flex;
  align-items: center;

  span {
    margin-right: 10px;
  }

  margin-bottom: 10px;
`;

export const CartItemTotalInfoWrapper = styled.div`
`;