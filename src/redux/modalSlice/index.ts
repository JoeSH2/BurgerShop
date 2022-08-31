import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../fetchSlice/fetchSliceType";

interface IModalSlice {
  productModal: productType;
  modalCard: boolean;
}

const initialState: IModalSlice = {
  productModal: {
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
  modalCard: false,
};

const ModalSlice = createSlice({
  name: "modalProduct",
  initialState,
  reducers: {
    addProductModal(state, action) {
      state.productModal = action.payload;
    },
    setModalCard(state, action) {
      state.modalCard = action.payload;
    },
  },
});

export const { addProductModal, setModalCard } = ModalSlice.actions;
export default ModalSlice.reducer;
