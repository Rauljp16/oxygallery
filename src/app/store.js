import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/imagesApi/imagesSlice";

export const store = configureStore({
  reducer: {
    image: ImagesSlice.reducer,
  },
});
