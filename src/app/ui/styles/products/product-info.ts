import styled from 'styled-components';

export const ProductInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;

  padding:10px 15px;
  width:100%;
`;

export const ProductMainInfo = styled.div`
  display:flex;

  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-size:16px;
`;

export const ProductImage = styled.div`
  width:70px;
  height:70px;

  background-color: rgba(0,22,89,.16);
`;

export const ProductAdditionalInfo = styled.div`
  display:flex;
  flex-direction:column;

  padding: 10px 0;

  font-size: 14px;

  text-align:left;
`;

export const ProductPrice = styled.div`
  padding-bottom: 10px;
`;

export const ProductCount = styled.div`

`;
