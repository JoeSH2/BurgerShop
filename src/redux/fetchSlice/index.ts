import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFetchState, productType } from "./fetchSliceType";

const initialState: IFetchState = {
  product: [
    {
      id: 0,
      title: "",
      price: 0,
      imageUrl: "",
      category: "",
      description: "",
      mainDescription: "",
      titleDoping: "",
      dopings: [],
      dopingsPrice: [],
      titleDoping2: "",
      dopings2: [],
    },
  ],
  statusLoading: "pending" || "fulfilled" || "rejected",
};

export const getProduct = createAsyncThunk("fetch/getProduct", async () => {
  const { data } = await axios
    .get("https://62deeb46976ae7460be4e4b2.mockapi.io/product")
    .catch(function (error) {
      console.log(error);
      return Promise.reject(error);
    });
  return data;
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<productType[]>) {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.statusLoading = "pending";
    });
    builder.addCase(
      getProduct.fulfilled,
      (state, action: PayloadAction<productType[]>) => {
        state.product = action.payload;
        state.statusLoading = "fulfilled";
      }
    );
    builder.addCase(getProduct.rejected, (state) => {
      state.statusLoading = "rejected";
    });
  },
});

export const { addProduct } = fetchSlice.actions;
export default fetchSlice.reducer;
