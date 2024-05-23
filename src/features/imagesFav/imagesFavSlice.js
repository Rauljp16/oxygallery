import { createSlice } from "@reduxjs/toolkit";

export const ImagesFavSlice = createSlice({
  name: "imageFav",
  initialState: {
    dataFav: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.dataFav.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.dataFav = state.dataFav.filter(
        (image) => image.id !== action.payload.id
      );
    },
  },
});
