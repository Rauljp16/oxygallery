import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/imagesApi/imagesSlice";
import { searchImgSlice } from "../features/searchImg/searchImgSlice";

export const store = configureStore({
  reducer: {
    image: ImagesSlice.reducer,
    search: searchImgSlice.reducer,
  },
});
