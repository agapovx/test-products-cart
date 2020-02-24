import styled from 'styled-components';
import { boxShadow } from '../colors';

export const ProductCartWrapper = styled.div`
  display:flex;
  flex-direction: column;

  height:200px;

  margin:15px;

  padding-bottom: 20px;

  box-shadow: ${boxShadow};
`;