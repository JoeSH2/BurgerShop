export type cartProduct = {
  id?: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  dopings: string;
  dopings2: string;
};

export interface ICartSlice {
  productCart: cartProduct[];
  totalPrice: number;
}
