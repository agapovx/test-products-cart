import React, { memo } from 'react';
import { Product } from 'app/stores/products/products';

import { Amount } from 'app/ui/components/fragments/amount';

import {
  ProductInfoWrapper, ProductCount, ProductImage,
  ProductAdditionalInfo, ProductPrice, ProductName, ProductMainInfo
} from 'app/ui/styles/products/product-info';

/**
 * Render full product info
 */
export const ProductInfo = memo<{ product: Product }>(({ product }) => {
  return (
    <ProductInfoWrapper>
      <ProductMainInfo>
        <ProductName >
          {product.name}
        </ProductName>
        <ProductImage />
      </ProductMainInfo>
      <ProductAdditionalInfo >
        <ProductPrice>
          <span>Price: </span> <Amount amount={product.price} />
        </ProductPrice>
        <ProductCount>
          <span>Available in store: </span>{product.storeAvailable}
        </ProductCount>
      </ProductAdditionalInfo>
    </ProductInfoWrapper>
  );
});