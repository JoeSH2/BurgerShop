export type productType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  mainDescription: string;
  titleDoping: string;
  dopings: string[];
  dopingsPrice: string[];
  titleDoping2: string;
  dopings2: string[];
  count?: number;
};

export interface IFetchState {
  product: productType[];
  statusLoading: "pending" | "fulfilled" | "rejected";
}
