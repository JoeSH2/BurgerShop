import { createSlice } from "@reduxjs/toolkit";

interface ICitySlice {
  city: string;
}

export const arrayCity = [
  "Москва",
  "Санкт-Петербург",
  "Нижний Новгород",
  "Казань",
  "Екатеринбург",
  "Челябинск",
];

const initialState: ICitySlice = {
  city: arrayCity[0],
};

const CitySlice = createSlice({
  name: "modalProduct",
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const { setCity } = CitySlice.actions;
export default CitySlice.reducer;
