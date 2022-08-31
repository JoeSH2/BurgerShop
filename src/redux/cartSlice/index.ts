import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartProduct, ICartSlice } from "./cartSliceType";

const initialState: ICartSlice = {
  productCart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct(state, action: PayloadAction<cartProduct>) {
      const findProduct = state.productCart.find(
        (obj) =>
          obj.title + obj.imageUrl + obj.dopings + obj.dopings2 ===
          action.payload.title +
            action.payload.imageUrl +
            action.payload.dopings +
            action.payload.dopings2
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.productCart.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.productCart.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count;
        },
        0
      );
    },
    plusCartProduct(state, action: PayloadAction<cartProduct>) {
      const countProduct = state.productCart.find(
        (obj) =>
          obj.title + obj.dopings + obj.dopings2 ===
          action.payload.title +
            action.payload.dopings +
            action.payload.dopings2
      );
      if (countProduct) {
        countProduct.count = countProduct.count + 1;
      }

      state.totalPrice = state.productCart.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count;
        },
        0
      );
    },
    minusCartProduct(state, action: PayloadAction<cartProduct>) {
      const countProduct = state.productCart.find(
        (obj) =>
          obj.title + obj.dopings + obj.dopings2 ===
          action.payload.title +
            action.payload.dopings +
            action.payload.dopings2
      );
      if (countProduct) {
        countProduct.count = countProduct.count - 1;
      }
      state.totalPrice = state.productCart.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count;
        },
        0
      );
    },
    removeCartProduct(state, action: PayloadAction<cartProduct>) {
      state.productCart = state.productCart.filter((obj) => {
        return (
          obj.title + obj.dopings + obj.dopings2 !==
          action.payload.title +
            action.payload.dopings +
            action.payload.dopings2
        );
      });
      state.totalPrice = state.productCart.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count;
        },
        0
      );
    },
  },
});

export const {
  addCartProduct,
  plusCartProduct,
  minusCartProduct,
  removeCartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
