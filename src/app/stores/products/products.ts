export type ProductsState = {
  products?: Product[];
}

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  amount: number;
}

export const products = (state, action) => {
  switch (action.type) {

    default:
      return state;
  }
}