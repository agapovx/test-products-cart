import productsData from './data/products.json';

export type Product = {
  id: number;
  name: string;
  price: number;
  storeAvailable: number;
}

const mapState = () => {
  const productsMap: Map<number, Product> = new Map();
  for (const product of productsData) {
    productsMap.set(product.id, product);
  }
  return productsMap;
}

export const products = (state: Map<number, Product> = mapState()) => state;