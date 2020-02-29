import { createContext, useContext } from 'react';
import productsData from './data/products.json';

export type Product = {
  id: number;
  name: string;
  price: number;
  storeAvailable: number;
}

export const products = (state: Product[] = productsData) => state;