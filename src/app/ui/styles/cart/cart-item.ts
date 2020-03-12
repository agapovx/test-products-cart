import styled from 'styled-components';
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
`;