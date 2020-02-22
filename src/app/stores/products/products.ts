import { createContext, useContext } from 'react';

export type Product = {
  id: number;
  name: string;
  amount: number;
  storeAvailable: number;
}

export const ProductsContext = createContext<Product[]>([]);
export const useProductsContext = () => useContext(ProductsContext);